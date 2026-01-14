"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { slugify } from "@/lib/slugify";
import AddUniversityModal from "@/components/AddUniversityModal";
import UniversitiesDropdown from "@/components/admin/UniversitiesDropdown";
import ImageUpload from "@/components/ImageUpload"; // ✅ reuse existing uploader

export default function AdminDestinations() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const emptyForm = {
    slug: "",
    country: "",
    heroImage: "", 
    description: "",
    whyPoints: "",
    education: "",
    popularFields: "",
    visaUpdates: "",
  };

  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);

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
      const url = payload.id
        ? `/api/admin/destinations/${payload.id}`
        : "/api/admin/destinations";

      const method = payload.id ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
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
      heroImage: dest.heroImage || "", // ✅ preload image
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
    if (!confirm(`Delete "${country}"? This cannot be undone.`)) return;
    deleteMutation.mutate(id);
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
    <div className="max-w-6xl mx-auto px-6 py-10 mt-24">
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

        {/* IMAGE UPLOAD */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Destination Image
          </label>

          <ImageUpload
            label="Upload Image"
            type="destinations"
            onUpload={(url) =>
              setForm((prev) => ({ ...prev, heroImage: url }))
            }
          />

          {form.heroImage && (
            <img
              src={form.heroImage}
              alt="Destination preview"
              className="mt-4 w-full max-h-56 object-cover rounded-xl border"
            />
          )}
        </div>

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
            onChange={(e) =>
              setForm({ ...form, [key]: e.target.value })
            }
          />
        ))}

        <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold">
          {editingId ? "Update Destination" : "Save Destination"}
        </button>
      </form>

      {/* LIST (unchanged) */}
      <div className="mt-12 space-y-3">
        {destinations.map((d) => (
          <div key={d.id} className="border rounded-xl bg-white">
            <div className="flex justify-between items-center p-4">
              <div>
                <p className="font-semibold">{d.country}</p>
                <p className="text-sm text-gray-500">
                  /destinations/{d.slug}
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => startEdit(d)}
                  className="text-blue-600 text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => remove(d.id, d.country)}
                  className="text-red-600 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>

            <UniversitiesDropdown
              destination={d}
              setSelectedDestination={setSelectedDestination}
            />
          </div>
        ))}
      </div>

      {selectedDestination && (
        <AddUniversityModal
          open
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
        />
      )}
    </div>
  );
}
