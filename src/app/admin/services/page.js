"use client";

import { useEffect, useState } from "react";
import { slugify } from "@/lib/slugify";
import ImageUpload from "@/components/ImageUpload";

export default function AdminServices() {
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const empty = {
    title: "",
    slug: "",
    summary: "",
    content: "",
    heroImage: "",
    isActive: true,
  };

  const [form, setForm] = useState(empty);

  async function load() {
    const res = await fetch("/api/admin/services");
    setItems(await res.json());
  }

  useEffect(() => {
    load();
  }, []);

  function startEdit(s) {
    setEditingId(s.id);
    setForm({
      title: s.title,
      slug: s.slug,
      summary: s.summary || "",
      content: s.content || "",
      heroImage: s.heroImage || "",
      isActive: s.isActive,
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function cancel() {
    setEditingId(null);
    setForm(empty);
  }

  async function submit(e) {
    e.preventDefault();

    const method = editingId ? "PUT" : "POST";

    await fetch("/api/admin/services", {
      method,
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        id: editingId,
      }),
    });

    cancel();
    load();
  }

  async function remove(id, title) {
    if (!confirm(`Delete service "${title}"?`)) return;

    await fetch("/api/admin/services", {
      method: "DELETE",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    load();
  }

  return (
    <div className="max-w-5xl mx-auto px-6 pt-24 pb-16">
      <h1 className="text-3xl font-bold text-red-600 mb-8">
        Test Preparation Services
      </h1>

      {/* FORM */}
      <form
        onSubmit={submit}
        className="bg-white border rounded-2xl p-8 space-y-6 mb-14"
      >
        {/* HERO IMAGE */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Hero Image
          </label>

          <ImageUpload
            key={editingId || "new-service"}
            label="Upload Hero Image"
            type="services"
            onUpload={(url) =>
              setForm((prev) => ({
                ...prev,
                heroImage: url,
              }))
            }
          />

          {form.heroImage && (
            <img
              src={form.heroImage}
              className="mt-4 rounded-xl max-h-48 w-full object-cover border"
              alt="Hero preview"
            />
          )}
        </div>

        {/* TITLE */}
        <input
          className="w-full border rounded p-3"
          placeholder="Service Title (e.g. IELTS Preparation)"
          value={form.title}
          onChange={(e) => {
            const title = e.target.value;
            setForm((prev) => ({
              ...prev,
              title,
              slug: slugify(title),
            }));
          }}
          required
        />

        <p className="text-sm text-gray-500">
          URL: /services/{form.slug || "service-name"}
        </p>

        {/* SUMMARY */}
        <textarea
          className="w-full border rounded p-3"
          rows={2}
          placeholder="Short summary"
          value={form.summary}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              summary: e.target.value,
            }))
          }
        />

        {/* CONTENT */}
        <textarea
          className="w-full border rounded p-3"
          rows={6}
          placeholder="Full content (appears below hero section)"
          value={form.content}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              content: e.target.value,
            }))
          }
        />

        {/* ACTIVE */}
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={form.isActive}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                isActive: e.target.checked,
              }))
            }
          />
          Active (visible on site)
        </label>

        {/* ACTIONS */}
        <div className="flex gap-3">
          <button className="bg-red-700 text-white px-6 py-3 rounded">
            {editingId ? "Update Service" : "Create Service"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={cancel}
              className="border px-6 py-3 rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* LIST */}
      <div className="space-y-3">
        {items.map((s) => (
          <div
            key={s.id}
            className="flex justify-between items-center border rounded p-4 bg-white"
          >
            <div>
              <p className="font-semibold">{s.title}</p>
              <p className="text-sm text-gray-500">
                {s.isActive ? "Active" : "Inactive"}
              </p>
            </div>

            <div className="flex gap-4 text-sm">
              <button
                onClick={() => startEdit(s)}
                className="text-blue-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => remove(s.id, s.title)}
                className="text-red-600 hover:underline"
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
