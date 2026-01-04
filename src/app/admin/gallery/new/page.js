"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewAlbumPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [albumDate, setAlbumDate] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/admin/gallery/albums", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, albumDate }),
    });

    setLoading(false);

    if (res.ok) {
      const album = await res.json();
      router.push(`/admin/gallery/${album.slug}`);
    } else {
      alert("Failed to create album");
    }
  }

  return (
    <section className="max-w-2xl mx-auto px-6 pt-32 pb-20">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">
          Create Gallery Album
        </h1>
        <p className="text-gray-500 mt-2">
          Create a new photo album and upload images inside it.
        </p>
      </div>

      {/* Card */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Album Title
            </label>
            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Office Visit – Japan"
              className="
                w-full rounded-lg border border-gray-300
                px-4 py-2.5 text-sm
                focus:outline-none focus:ring-2 focus:ring-red-500
              "
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Album Date
            </label>
            <input
              type="date"
              required
              value={albumDate}
              onChange={(e) => setAlbumDate(e.target.value)}
              className="
                w-full rounded-lg border border-gray-300
                px-4 py-2.5 text-sm
                focus:outline-none focus:ring-2 focus:ring-red-500
              "
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Description <span className="text-gray-400">(optional)</span>
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Short description about this album"
              rows={3}
              className="
                w-full rounded-lg border border-gray-300
                px-4 py-2.5 text-sm
                focus:outline-none focus:ring-2 focus:ring-red-500
              "
            />
          </div>

          {/* Actions */}
          <div className="pt-4 flex items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="
                inline-flex items-center justify-center
                bg-red-600 text-white
                px-6 py-2.5 rounded-lg
                font-semibold text-sm
                hover:bg-red-700
                active:scale-[0.98]
                transition
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              {loading ? "Creating..." : "Create Album"}
            </button>

            <button
              type="button"
              onClick={() => router.push("/admin/gallery")}
              className="text-sm text-gray-500 hover:text-gray-800"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
