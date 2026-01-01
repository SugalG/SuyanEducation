"use client";

import { useEffect, useState } from "react";

export default function AdminDestinations() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    slug: "",
    country: "",
    description: "",
    whyPoints: "",
    education: "",
    popularFields: "",
    visaUpdates: "",
  });

  async function load() {
    const res = await fetch("/api/admin/destinations");
    setItems(await res.json());
  }

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/admin/destinations");
      setItems(await res.json());
    }
  
    load();
  }, []);

  async function submit(e) {
    e.preventDefault();

    await fetch("/api/admin/destinations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({
      slug: "",
      country: "",
      description: "",
      whyPoints: "",
      education: "",
      popularFields: "",
      visaUpdates: "",
    });

    load();
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Manage Destinations</h1>

      {/* FORM */}
      <form
        onSubmit={submit}
        className="space-y-4 bg-white/80 backdrop-blur p-6 rounded-2xl border"
      >
        <input
          className="w-full border p-2 rounded"
          placeholder="Slug (e.g. japan)"
          value={form.slug}
          onChange={(e) => setForm({ ...form, slug: e.target.value })}
          required
        />

        <input
          className="w-full border p-2 rounded"
          placeholder="Country Name"
          value={form.country}
          onChange={(e) => setForm({ ...form, country: e.target.value })}
          required
        />

        <textarea
          className="w-full border p-2 rounded"
          placeholder="Intro description (1–2 lines)"
          rows={2}
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <textarea
          className="w-full border p-2 rounded"
          placeholder={`Why this country? (one point per line)\nExample:\nGlobally recognized education\nAffordable tuition\nPost-study work`}
          rows={4}
          value={form.whyPoints}
          onChange={(e) =>
            setForm({ ...form, whyPoints: e.target.value })
          }
        />

        <textarea
          className="w-full border p-2 rounded"
          placeholder="Education system details"
          rows={4}
          value={form.education}
          onChange={(e) =>
            setForm({ ...form, education: e.target.value })
          }
        />

        <textarea
          className="w-full border p-2 rounded"
          placeholder={`Popular fields (one per line)\nBusiness\nIT\nEngineering`}
          rows={4}
          value={form.popularFields}
          onChange={(e) =>
            setForm({ ...form, popularFields: e.target.value })
          }
        />

        <textarea
          className="w-full border p-2 rounded"
          placeholder={`Visa & key updates (one per line)\nUpdated visa rules\nScholarships available`}
          rows={4}
          value={form.visaUpdates}
          onChange={(e) =>
            setForm({ ...form, visaUpdates: e.target.value })
          }
        />

        <button className="bg-brand-red text-red-500 px-6 py-2 rounded">
          Save Destination
        </button>
      </form>

      {/* LIST */}
      <div className="mt-10 space-y-4">
        {items.map((d) => (
          <div
            key={d.id}
            className="border p-4 rounded bg-white/70"
          >
            <p className="font-semibold">{d.country}</p>
            <p className="text-sm text-gray-500">/destinations/{d.slug}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
