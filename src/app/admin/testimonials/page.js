"use client";

import { useEffect, useMemo, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const emptyForm = {
  name: "",
  message: "",
  country: "",
  program: "",
  year: "",
  highlight: "",
  isFeatured: false,
};

// -------------------- API helpers --------------------
async function fetchTestimonials() {
  const res = await fetch("/api/admin/testimonials", {
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to load testimonials");
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

async function createTestimonial({ form, file }) {
  const fd = new FormData();
  fd.append("name", form.name);
  fd.append("message", form.message);
  fd.append("country", form.country || "");
  fd.append("program", form.program || "");
  fd.append("year", form.year || "");
  fd.append("highlight", form.highlight || "");
  fd.append("isFeatured", String(!!form.isFeatured));

  // IMPORTANT: backend must expect this key (change "image" if your API expects another)
  if (file) fd.append("image", file);

  const res = await fetch("/api/admin/testimonials", {
    method: "POST",
    credentials: "include",
    body: fd, // ✅ no content-type header (browser sets multipart boundary)
  });

  if (!res.ok) {
    const msg = await safeErr(res);
    throw new Error(msg || "Failed to create testimonial");
  }

  return res.json().catch(() => ({}));
}

async function updateTestimonial({ id, form }) {
  const res = await fetch("/api/admin/testimonials", {
    method: "PUT",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, ...form }),
  });

  if (!res.ok) {
    const msg = await safeErr(res);
    throw new Error(msg || "Failed to update testimonial");
  }

  return res.json().catch(() => ({}));
}

async function deleteTestimonial({ id }) {
  const res = await fetch("/api/admin/testimonials", {
    method: "DELETE",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });

  if (!res.ok) {
    const msg = await safeErr(res);
    throw new Error(msg || "Failed to delete testimonial");
  }

  return res.json().catch(() => ({}));
}

async function safeErr(res) {
  try {
    const j = await res.json();
    return j?.error || j?.message;
  } catch {
    try {
      return await res.text();
    } catch {
      return null;
    }
  }
}

// -------------------- Component --------------------
export default function AdminTestimonials() {
  const qc = useQueryClient();

  // CREATE state
  const [form, setForm] = useState(emptyForm);
  const [file, setFile] = useState(null); // ✅ real File
  const [previewUrl, setPreviewUrl] = useState(""); // ✅ blob url

  // EDIT state (no image edit)
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState(emptyForm);

  // -------- React Query: Fetch list --------
  const {
    data: items = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["admin-testimonials"],
    queryFn: fetchTestimonials,
  });

  // -------- Mutations --------
  const createMutation = useMutation({
    mutationFn: createTestimonial,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-testimonials"] });
      setForm(emptyForm);
      setFile(null);
      setPreviewUrl("");
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateTestimonial,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-testimonials"] });
      setEditingId(null);
      setEditForm(emptyForm);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTestimonial,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-testimonials"] });
    },
  });

  // -------- Blob preview lifecycle --------
  useEffect(() => {
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [file]);

  // -------- Actions --------
  function startEdit(t) {
    setEditingId(t.id);
    setEditForm({
      name: t.name || "",
      message: t.message || "",
      country: t.country || "",
      program: t.program || "",
      year: t.year || "",
      highlight: t.highlight || "",
      isFeatured: !!t.isFeatured,
    });
  }

  function cancelEdit() {
    setEditingId(null);
    setEditForm(emptyForm);
  }

  async function onCreateSubmit(e) {
    e.preventDefault();

    // If your backend requires image, enforce it:
    // if (!file) return alert("Please select an image");

    createMutation.mutate({ form, file });
  }

  function onSaveEdit() {
    updateMutation.mutate({ id: editingId, form: editForm });
  }

  function onDelete(t) {
    const ok = confirm(`Delete testimonial from "${t.name}"?`);
    if (!ok) return;
    deleteMutation.mutate({ id: t.id });
  }

  const busy =
    createMutation.isPending || updateMutation.isPending || deleteMutation.isPending;

  return (
    <div className="max-w-5xl mx-auto px-6 pt-24 pb-16">
      <div className="flex items-center justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold text-red-600">Success Stories</h1>

        {(busy || isLoading) && (
          <span className="text-sm text-gray-500">Working…</span>
        )}
      </div>

      {/* CREATE FORM */}
      <form
        onSubmit={onCreateSubmit}
        className="bg-white border rounded-2xl p-8 space-y-5 mb-16"
      >
        <div>
          <label className="block text-sm font-medium mb-2">Student Photo</label>

          <div className="flex items-center gap-4">
            <input
              type="file"
              accept="image/*"
              className="block w-full max-w-xs text-sm"
              onChange={(e) => {
                const f = e.target.files?.[0] || null;
                setFile(f);
              }}
            />

            {/* ✅ preview via blob */}
            {previewUrl && (
              <img
                src={previewUrl}
                alt="Preview"
                className="w-16 h-16 rounded-full object-cover border"
              />
            )}
          </div>

          <p className="text-xs text-gray-500 mt-2">
            Preview uses a blob URL. Final URL/path is generated by backend after upload.
          </p>
        </div>

        <input
          className="w-full border rounded-lg p-3"
          placeholder="Student Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <textarea
          className="w-full border rounded-lg p-3"
          rows={4}
          placeholder="Student message / quote"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            className="border rounded-lg p-3"
            placeholder="Country"
            value={form.country}
            onChange={(e) => setForm({ ...form, country: e.target.value })}
          />
          <input
            className="border rounded-lg p-3"
            placeholder="Program"
            value={form.program}
            onChange={(e) => setForm({ ...form, program: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            className="border rounded-lg p-3"
            placeholder="Year"
            value={form.year}
            onChange={(e) => setForm({ ...form, year: e.target.value })}
          />
          <input
            className="border rounded-lg p-3 sm:col-span-2"
            placeholder="Highlight (optional)"
            value={form.highlight}
            onChange={(e) => setForm({ ...form, highlight: e.target.value })}
          />
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={form.isFeatured}
            onChange={(e) => setForm({ ...form, isFeatured: e.target.checked })}
          />
          Feature on homepage
        </label>

        <button
          disabled={createMutation.isPending}
          className="bg-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition disabled:opacity-50"
        >
          {createMutation.isPending ? "Saving..." : "Save Story"}
        </button>

        {createMutation.isError && (
          <p className="text-sm text-red-600">
            {String(createMutation.error?.message || "Create failed")}
          </p>
        )}
      </form>

      {/* LIST + INLINE EDIT */}
      <div className="space-y-4">
        {isError && (
          <div className="bg-red-50 border border-red-200 p-4 rounded-xl text-red-700 text-sm">
            {String(error?.message || "Failed to load")}
          </div>
        )}

        {isLoading ? (
          <div className="text-sm text-gray-500">Loading testimonials…</div>
        ) : items.length === 0 ? (
          <div className="text-sm text-gray-500">No testimonials yet.</div>
        ) : (
          items.map((t) => (
            <div key={t.id} className="border rounded-xl p-4 bg-white">
              {editingId === t.id ? (
                <div className="space-y-4">
                  {/* ✅ No image edit on edit mode */}
                  <div className="text-xs text-gray-500">
                    Image cannot be edited here (by design).
                  </div>

                  <input
                    className="w-full border p-2 rounded"
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  />

                  <textarea
                    className="w-full border p-2 rounded"
                    rows={3}
                    value={editForm.message}
                    onChange={(e) =>
                      setEditForm({ ...editForm, message: e.target.value })
                    }
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      className="w-full border p-2 rounded"
                      placeholder="Country"
                      value={editForm.country}
                      onChange={(e) =>
                        setEditForm({ ...editForm, country: e.target.value })
                      }
                    />
                    <input
                      className="w-full border p-2 rounded"
                      placeholder="Program"
                      value={editForm.program}
                      onChange={(e) =>
                        setEditForm({ ...editForm, program: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      className="w-full border p-2 rounded"
                      placeholder="Year"
                      value={editForm.year}
                      onChange={(e) =>
                        setEditForm({ ...editForm, year: e.target.value })
                      }
                    />
                    <input
                      className="w-full border p-2 rounded sm:col-span-2"
                      placeholder="Highlight"
                      value={editForm.highlight}
                      onChange={(e) =>
                        setEditForm({ ...editForm, highlight: e.target.value })
                      }
                    />
                  </div>

                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={editForm.isFeatured}
                      onChange={(e) =>
                        setEditForm({ ...editForm, isFeatured: e.target.checked })
                      }
                    />
                    Feature on homepage
                  </label>

                  <div className="flex gap-3">
                    <button
                      onClick={onSaveEdit}
                      disabled={updateMutation.isPending}
                      className="bg-red-700 text-white px-4 py-2 rounded disabled:opacity-50"
                    >
                      {updateMutation.isPending ? "Saving..." : "Save"}
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="border px-4 py-2 rounded"
                    >
                      Cancel
                    </button>
                  </div>

                  {updateMutation.isError && (
                    <p className="text-sm text-red-600">
                      {String(updateMutation.error?.message || "Update failed")}
                    </p>
                  )}
                </div>
              ) : (
                <div className="flex justify-between items-center gap-4">
                  <div className="flex items-center gap-4 min-w-0">
                    {/* Existing image must come from server path/url */}
                    {t.imageUrl && (
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}/${t.imageUrl}`}
                        className="w-12 h-12 rounded-full object-cover border"
                        alt={t.name}
                      />
                    )}

                    <div className="min-w-0">
                      <p className="font-semibold truncate">{t.name}</p>
                      <p className="text-sm text-gray-500 truncate">
                        {t.country}
                        {t.program ? ` • ${t.program}` : ""}
                        {t.year ? ` • ${t.year}` : ""}
                        {t.isFeatured ? " • Featured" : ""}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 text-sm flex-shrink-0">
                    <button
                      onClick={() => startEdit(t)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(t)}
                      disabled={deleteMutation.isPending}
                      className="text-red-600 hover:underline disabled:opacity-50"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}