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
    name: "",
    city: "",
    websiteUrl: "",
    imageUrl: "",
  });

  /* =======================
     PREFILL WHEN EDITING
  ======================= */
  useEffect(() => {
    if (university) {
      setForm({
        name: university.name || "",
        city: university.city || "",
        websiteUrl: university.websiteUrl || "",
        imageUrl: university.imageUrl || "",
      });
    }
  }, [university]);

  /* =======================
     SAVE / UPDATE
  ======================= */
  const mutation = useMutation({
    mutationFn: async () => {
      if (!destination?.id) {
        throw new Error("Destination ID is missing");
      }

      if (!form.name) {
        throw new Error("University name is required");
      }

      if (!form.imageUrl) {
        throw new Error("University logo URL is required");
      }

      // Basic URL validation
      try {
        new URL(form.imageUrl);
      } catch {
        throw new Error("Please enter a valid image URL");
      }

      const res = await fetch("/api/admin/universities", {
        method: university ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...(university && { id: university.id }),
          name: form.name,
          city: form.city,
          websiteUrl: form.websiteUrl,
          imageUrl: form.imageUrl,
          countryId: destination.id,
        }),
      });

      const text = await res.text();
      let data;

      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        throw new Error("Invalid server response");
      }

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to save university");
      }

      return data;
    },

    onSuccess: () => {
      toast.success(
        university
          ? "University updated successfully"
          : "University added successfully"
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

  /* =======================
     UI
  ======================= */
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          {university ? "Edit University" : "Add University"} –{" "}
          {destination.country}
        </h2>

        <ReactFocusLock>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              mutation.mutate();
            }}
            className="space-y-4"
          >
            {/* University Name */}
            <input
              required
              placeholder="University Name"
              className="w-full border rounded-lg p-3"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            {/* City */}
            <input
              placeholder="City"
              className="w-full border rounded-lg p-3"
              value={form.city}
              onChange={(e) =>
                setForm({ ...form, city: e.target.value })
              }
            />

            {/* Website */}
            <input
              placeholder="Website URL (optional)"
              className="w-full border rounded-lg p-3"
              value={form.websiteUrl}
              onChange={(e) =>
                setForm({ ...form, websiteUrl: e.target.value })
              }
            />

            {/* University Logo URL */}
            <div>
              <label className="block text-sm font-medium mb-2">
                University Logo URL
              </label>

              <input
                required
                placeholder="https://university.edu/logo.png"
                className="w-full border rounded-lg p-3"
                value={form.imageUrl}
                onChange={(e) =>
                  setForm({ ...form, imageUrl: e.target.value })
                }
              />

              <p className="text-xs text-gray-500 mt-1">
                Use a direct image link (PNG/JPG recommended)
              </p>

              {form.imageUrl && (
                <img
                  src={form.imageUrl}
                  alt="University logo preview"
                  className="mt-3 w-24 h-24 object-contain border rounded-lg bg-white"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              )}
            </div>

            {/* Actions */}
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
