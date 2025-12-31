"use client";

import { useEffect, useState } from "react";
import ImageUpload from "@/components/ImageUpload";

export default function AdminTestimonials() {
  const [items, setItems] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [form, setForm] = useState({
    name: "",
    message: "",
    country: "",
    program: "",
    year: "",
    highlight: "",
    isFeatured: false,
  });

  async function load() {
    const res = await fetch("/api/admin/testimonials");
    setItems(await res.json());
  }

  useEffect(() => {
    load();
  }, []);

  async function submit(e) {
    e.preventDefault();

    const res = await fetch("/api/admin/testimonials", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        imageUrl,
      }),
    });

    if (res.ok) {
      setForm({
        name: "",
        message: "",
        country: "",
        program: "",
        year: "",
        highlight: "",
        isFeatured: false,
      });
      setImageUrl("");
      load();
    } else {
      alert("Failed to save testimonial");
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Success Stories</h1>

      <form onSubmit={submit} className="space-y-4 bg-white p-6 border rounded-xl">
        <ImageUpload label="Student Image" onUpload={setImageUrl} />
        {imageUrl && <img src={imageUrl} className="w-20 rounded-full" />}

        <input className="w-full border p-2 rounded" placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input className="w-full border p-2 rounded" placeholder="Country"
          value={form.country}
          onChange={e => setForm({ ...form, country: e.target.value })}
        />

        <input className="w-full border p-2 rounded" placeholder="Program"
          value={form.program}
          onChange={e => setForm({ ...form, program: e.target.value })}
        />

        <input className="w-full border p-2 rounded" placeholder="Year"
          value={form.year}
          onChange={e => setForm({ ...form, year: e.target.value })}
        />

        <input className="w-full border p-2 rounded" placeholder="Highlight"
          value={form.highlight}
          onChange={e => setForm({ ...form, highlight: e.target.value })}
        />

        <textarea className="w-full border p-2 rounded" rows={4}
          placeholder="Student message / quote"
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
        />

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={form.isFeatured}
            onChange={e => setForm({ ...form, isFeatured: e.target.checked })}
          />
          Feature on homepage
        </label>

        <button className="bg-red-700 text-white px-6 py-2 rounded">
          Save Story
        </button>
      </form>

      <div className="mt-10 space-y-3">
        {items.map(t => (
          <div key={t.id} className="border p-4 rounded flex gap-4 items-center">
            {t.imageUrl && (
              <img src={t.imageUrl} className="w-14 h-14 rounded-full object-cover" />
            )}
            <div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-gray-500">{t.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
