"use client";

import { useEffect, useState } from "react";
import { slugify } from "@/lib/slugify";

export default function AdminDestinations() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);

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

  async function load() {
    const res = await fetch("/api/admin/destinations");
    setItems(await res.json());
  }

  useEffect(() => {
    load();
  }, []);

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

  async function submit(e) {
    e.preventDefault();
    setLoading(true);

    const method = editingId ? "PUT" : "POST";

    await fetch("/api/admin/destinations", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        id: editingId,
      }),
    });

    setLoading(false);
    cancelEdit();
    load();
  }

  async function remove(id, country) {
    const ok = confirm(`Delete destination "${country}"? This cannot be undone.`);
    if (!ok) return;

    await fetch("/api/admin/destinations", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    load();
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 mt-10">
      <h1 className="text-3xl font-bold text-red-500 mb-8">
        Manage Study Destinations
      </h1>

      {/* FORM */}
      <form
        onSubmit={submit}
        className="bg-white border rounded-3xl p-8 space-y-8 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-gray-900">
          {editingId ? "Edit Destination" : "Add New Destination"}
        </h2>

        {/* COUNTRY */}
        <section>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Country Name
          </label>

          <input
            className="w-full border rounded-lg p-3"
            placeholder="Country Name (e.g. Japan)"
            value={form.country}
            onChange={(e) => {
              const country = e.target.value;
              setForm({
                ...form,
                country,
                slug: slugify(country),
              });
            }}
            required
            disabled={!!editingId}
          />

          <p className="text-sm text-gray-500 mt-1">
            URL:{" "}
            <span className="font-mono">
              /destinations/{form.slug || "country-name"}
            </span>
          </p>
        </section>

        {/* INTRO */}
        <textarea
          className="w-full border rounded-lg p-3"
          rows={3}
          placeholder="Intro description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        {/* WHY */}
        <textarea
          className="w-full border rounded-lg p-3"
          rows={4}
          placeholder="Why this country? (one per line)"
          value={form.whyPoints}
          onChange={(e) =>
            setForm({ ...form, whyPoints: e.target.value })
          }
        />

        {/* EDUCATION */}
        <textarea
          className="w-full border rounded-lg p-3"
          rows={5}
          placeholder="Education system details"
          value={form.education}
          onChange={(e) =>
            setForm({ ...form, education: e.target.value })
          }
        />

        {/* FIELDS */}
        <textarea
          className="w-full border rounded-lg p-3"
          rows={4}
          placeholder="Popular fields (one per line)"
          value={form.popularFields}
          onChange={(e) =>
            setForm({ ...form, popularFields: e.target.value })
          }
        />

        {/* VISA */}
        <textarea
          className="w-full border rounded-lg p-3"
          rows={4}
          placeholder="Visa updates (one per line)"
          value={form.visaUpdates}
          onChange={(e) =>
            setForm({ ...form, visaUpdates: e.target.value })
          }
        />

        {/* ACTIONS */}
        <div className="flex gap-4">
          <button
            disabled={loading}
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition disabled:opacity-50"
          >
            {loading
              ? "Saving..."
              : editingId
              ? "Update Destination"
              : "Save Destination"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={cancelEdit}
              className="px-6 py-3 rounded-lg border font-medium"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* LIST */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          Existing Destinations
        </h2>

        <div className="space-y-3">
          {items.map((d) => (
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
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Edit
                </button>

                <button
                  onClick={() => remove(d.id, d.country)}
                  className="text-sm font-medium text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
