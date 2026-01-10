"use client";

import { useEffect, useState } from "react";
import ImageUpload from "@/components/ImageUpload";

export default function AdminTestimonials() {
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const emptyForm = {
    name: "",
    message: "",
    country: "",
    program: "",
    year: "",
    highlight: "",
    isFeatured: false,
  };

  const [form, setForm] = useState(emptyForm);

  async function load() {
    const res = await fetch("/api/admin/testimonials");
    setItems(await res.json());
  }

  useEffect(() => {
    load();
  }, []);

  function startEdit(t) {
    setEditingId(t.id);
    setForm({
      name: t.name || "",
      message: t.message || "",
      country: t.country || "",
      program: t.program || "",
      year: t.year || "",
      highlight: t.highlight || "",
      isFeatured: t.isFeatured || false,
    });
    setImageUrl(t.imageUrl || "");
  }

  function cancelEdit() {
    setEditingId(null);
    setForm(emptyForm);
    setImageUrl("");
  }

  async function saveEdit() {
    setLoading(true);

    await fetch("/api/admin/testimonials", {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: editingId,
        ...form,
        imageUrl,
      }),
    });

    setLoading(false);
    cancelEdit();
    load();
  }

  async function remove(id, name) {
    const ok = confirm(`Delete testimonial from "${name}"?`);
    if (!ok) return;

    await fetch("/api/admin/testimonials", {
      method: "DELETE",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    load();
  }

  async function create(e) {
    e.preventDefault();
    setLoading(true);

    await fetch("/api/admin/testimonials", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, imageUrl }),
    });

    setLoading(false);
    setForm(emptyForm);
    setImageUrl("");
    load();
  }

  return (
    <div className="max-w-5xl mx-auto px-6 pt-24 pb-16">
      <h1 className="text-3xl font-bold text-red-600 mb-8">
        Success Stories
      </h1>

      {/* CREATE FORM */}
      <form
        onSubmit={create}
        className="bg-white border rounded-2xl p-8 space-y-5 mb-16"
      >
        <div>
          <label className="block text-sm font-medium mb-2">
            Student Photo
          </label>

          <div className="flex items-center gap-4">
            <ImageUpload
              label="Upload Image"
              type="testimonials"
              onUpload={setImageUrl}
            />

            {imageUrl && (
              <img
                src={imageUrl}
                className="w-16 h-16 rounded-full object-cover border"
              />
            )}
          </div>
        </div>

        <input
          className="w-full border rounded-lg p-3"
          placeholder="Student Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
        />

        <textarea
          className="w-full border rounded-lg p-3"
          rows={4}
          placeholder="Student message / quote"
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
          required
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            className="border rounded-lg p-3"
            placeholder="Country"
            value={form.country}
            onChange={(e) =>
              setForm({ ...form, country: e.target.value })
            }
          />
          <input
            className="border rounded-lg p-3"
            placeholder="Program"
            value={form.program}
            onChange={(e) =>
              setForm({ ...form, program: e.target.value })
            }
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <input
            className="border rounded-lg p-3"
            placeholder="Year"
            value={form.year}
            onChange={(e) =>
              setForm({ ...form, year: e.target.value })
            }
          />
          <input
            className="border rounded-lg p-3 col-span-2"
            placeholder="Highlight (optional)"
            value={form.highlight}
            onChange={(e) =>
              setForm({ ...form, highlight: e.target.value })
            }
          />
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={form.isFeatured}
            onChange={(e) =>
              setForm({ ...form, isFeatured: e.target.checked })
            }
          />
          Feature on homepage
        </label>

        <button
          disabled={loading}
          className="bg-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save Story"}
        </button>
      </form>

      {/* LIST + INLINE EDIT */}
      <div className="space-y-4">
        {items.map((t) => (
          <div key={t.id} className="border rounded-xl p-4 bg-white">
            {editingId === t.id ? (
              <div className="space-y-4">
                <ImageUpload
                  label="Change Image"
                  type="testimonials"
                  onUpload={setImageUrl}
                />

                {imageUrl && (
                  <img
                    src={imageUrl}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                )}

                <input
                  className="w-full border p-2 rounded"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />

                <textarea
                  className="w-full border p-2 rounded"
                  rows={3}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />

                <div className="flex gap-3">
                  <button
                    onClick={saveEdit}
                    className="bg-red-700 text-white px-4 py-2 rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="border px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  {t.imageUrl && (
                    <img
                      src={t.imageUrl}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-gray-500">
                      {t.country} {t.program && `• ${t.program}`}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 text-sm">
                  <button
                    onClick={() => startEdit(t)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => remove(t.id, t.name)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
