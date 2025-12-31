"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewAlbumPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [albumDate, setAlbumDate] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("/api/admin/gallery/albums", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, albumDate }),
    });

    if (res.ok) {
      const album = await res.json();
      router.push(`/admin/gallery/${album.slug}`);
    } else {
      alert("Failed to create album");
    }
  }

  return (
    <section className="max-w-xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Create Album</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Album Date
          </label>
          <input
            type="date"
            required
            value={albumDate}
            onChange={(e) => setAlbumDate(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Description (optional)
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-red-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-800"
        >
          Create Album
        </button>
      </form>
    </section>
  );
}
