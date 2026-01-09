"use client";

import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import ReactFocusLock from "react-focus-lock";

export default function AddUniversityModal({
  open,
  onClose,
  destination,
  university = null,
}) {
  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    name: university?.name ?? "",
    city: university?.city ?? "",
    websiteUrl: university?.websiteUrl ?? "",
    imageUrl: university?.imageUrl ?? "",
  });

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/admin/universities", {
        method: university ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...(university && { id: university.id }),
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
      toast.success(
        university
          ? "University updated successfully"
          : "Universtity Added Successfully!!!"
      );
      queryClient.invalidateQueries({
        queryKey: ["universities", destination.id],
      });
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
        <ReactFocusLock>
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
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder="City"
              className="w-full border rounded-lg p-3"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            />

            <input
              placeholder="Website URL"
              className="w-full border rounded-lg p-3"
              value={form.websiteUrl}
              onChange={(e) => setForm({ ...form, websiteUrl: e.target.value })}
            />

            <input
              required
              placeholder="Image URL"
              className="w-full border rounded-lg p-3"
              value={form.imageUrl}
              onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
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
                {mutation.isPending
                  ? university
                    ? "Updating..."
                    : "Saving..."
                  : university
                  ? "Update"
                  : "Save"}
              </button>
            </div>
          </form>
        </ReactFocusLock>
      </div>
    </div>
  );
}
