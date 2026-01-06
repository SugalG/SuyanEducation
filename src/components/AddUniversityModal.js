"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function AddUniversityModal({
  open,
  onClose,
  destination,
}) {
  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    name: "",
    city: "",
    websiteUrl: "",
    imageUrl: "",
  });

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/admin/universities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          countryId: destination.id,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to create university");
      }

      return data;
    },
    onSuccess: () => {
      toast.success("University added successfully");
      queryClient.invalidateQueries({ queryKey: ["destinations"] });
      onClose();
      setForm({
        name: "",
        city: "",
        websiteUrl: "",
        imageUrl: "",
      });
    },
    onError: (err) => {
      toast.error(err.message || "Something went wrong");
    },
  });

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          Add University – {destination.country}
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            mutation.mutate();
          }}
          className="space-y-4"
        >
          <input
            required
            placeholder="University Name"
            className="w-full border rounded-lg p-3"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            placeholder="City"
            className="w-full border rounded-lg p-3"
            value={form.city}
            onChange={(e) =>
              setForm({ ...form, city: e.target.value })
            }
          />

          <input
            placeholder="Website URL"
            className="w-full border rounded-lg p-3"
            value={form.websiteUrl}
            onChange={(e) =>
              setForm({ ...form, websiteUrl: e.target.value })
            }
          />

          <input
            required
            placeholder="Image URL"
            className="w-full border rounded-lg p-3"
            value={form.imageUrl}
            onChange={(e) =>
              setForm({ ...form, imageUrl: e.target.value })
            }
          />

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 border rounded-lg"
            >
              Cancel
            </button>

            <button
              disabled={mutation.isPending}
              className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50"
            >
              {mutation.isPending ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
