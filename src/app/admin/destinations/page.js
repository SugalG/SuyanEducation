"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { slugify } from "@/lib/slugify";

export default function AdminDestinations() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const emptyForm = {
    slug: "",
    country: "",
    description: "",
    whyPoints: "",
    education: "",
    popularFields: "",
    visaUpdates: "",
  };

  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  /* =======================
     FETCH DESTINATIONS
  ======================= */
  const {
    data: destinations = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["destinations"],
    queryFn: async () => {
      const res = await fetch("/api/admin/destinations");
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to load destinations");
      }

      return data.items;
    },
  });

  /* =======================
     CREATE / UPDATE
  ======================= */
  const saveMutation = useMutation({
    mutationFn: async (payload) => {
      const res = await fetch("/api/admin/destinations", {
        method: payload.id ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Save failed");
      }

      return data;
    },
    onSuccess: () => {
      toast.success(editingId ? "Destination updated" : "Destination added");
      queryClient.invalidateQueries({ queryKey: ["destinations"] });
      cancelEdit();
    },
    onError: (err) => {
      toast.error(err.message || "Something went wrong");
    },
  });

  /* =======================
     DELETE
  ======================= */
  const deleteMutation = useMutation({
    mutationFn: async ({ id }) => {
      const res = await fetch("/api/admin/destinations", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Delete failed");
      }

      return data;
    },
    onSuccess: () => {
      toast.success("Destination deleted");
      queryClient.invalidateQueries({ queryKey: ["destinations"] });
    },
    onError: (err) => {
      toast.error(err.message || "Delete failed");
    },
  });

  /* =======================
     HANDLERS
  ======================= */
  function submit(e) {
    e.preventDefault();
    saveMutation.mutate({ ...form, id: editingId });
  }

  function startEdit(dest) {
    setEditingId(dest.id);
    setForm({
      slug: dest.slug,
      country: dest.country,
      description: dest.description || "",
      whyPoints: dest.whyPoints || "",
      education: dest.education || "",
      popularFields: dest.popularFields || "",
      visaUpdates: dest.visaUpdates || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function cancelEdit() {
    setEditingId(null);
    setForm(emptyForm);
  }

  function remove(id, country) {
    const ok = confirm(`Delete "${country}"? This cannot be undone.`);
    if (!ok) return;
    deleteMutation.mutate({ id });
  }

  /* =======================
     STATES
  ======================= */
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
        <div className="h-12 w-12 rounded-full border-4 border-gray-300 border-t-red-600 animate-spin" />
      </div>
    );
  }

  if (isError) {
    toast.error(error.message || "Access denied");
    router.replace("/");
    return null;
  }

  /* =======================
     UI
  ======================= */
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 mt-10">
      <h1 className="text-3xl font-bold text-red-500 mb-8">
        Manage Study Destinations
      </h1>

      {/* FORM */}
      <form
        onSubmit={submit}
        className="bg-white border rounded-3xl p-8 space-y-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold">
          {editingId ? "Edit Destination" : "Add New Destination"}
        </h2>

        <input
          className="w-full border rounded-lg p-3"
          placeholder="Country Name"
          value={form.country}
          disabled={!!editingId}
          onChange={(e) => {
            const country = e.target.value;
            setForm({
              ...form,
              country,
              slug: slugify(country),
            });
          }}
          required
        />

        <p className="text-sm text-gray-500">
          URL: /destinations/{form.slug || "country-name"}
        </p>

        {[
          ["description", "Intro description", 3],
          ["whyPoints", "Why this country? (one per line)", 4],
          ["education", "Education system details", 5],
          ["popularFields", "Popular fields (one per line)", 4],
          ["visaUpdates", "Visa updates (one per line)", 4],
        ].map(([key, placeholder, rows]) => (
          <textarea
            key={key}
            className="w-full border rounded-lg p-3"
            rows={rows}
            placeholder={placeholder}
            value={form[key]}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          />
        ))}

        <div className="flex gap-4">
          <button
            disabled={saveMutation.isPending}
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 disabled:opacity-50"
          >
            {saveMutation.isPending
              ? "Saving..."
              : editingId
              ? "Update Destination"
              : "Save Destination"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={cancelEdit}
              className="px-6 py-3 border rounded-lg"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* LIST */}
      <div className="mt-12 space-y-3">
        {destinations.map((d) => (
          <div
            key={d.id}
            className="flex justify-between items-center border rounded-xl p-4 bg-white"
          >
            <div>
              <p className="font-semibold">{d.country}</p>
              <p className="text-sm text-gray-500">
                /destinations/{d.slug}
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => startEdit(d)}
                className="text-blue-600 text-sm font-medium"
              >
                Edit
              </button>
              <button
                onClick={() => remove(d.id, d.country)}
                className="text-red-600 text-sm font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
