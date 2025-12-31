"use client";

import { useState } from "react";

export default function PhotoUploader({ albumId }) {
  const [loading, setLoading] = useState(false);

  async function handleFiles(files) {
    if (!files.length) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("albumId", albumId);

    for (const file of files) {
      formData.append("images", file);
    }

    const res = await fetch("/api/admin/gallery/photos", {
      method: "POST",
      body: formData,
    });

    setLoading(false);

    if (res.ok) {
      location.reload();
    } else {
      alert("Failed to upload images");
    }
  }

  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        Upload photos
      </label>

      <input
        type="file"
        multiple
        accept="image/*"
        disabled={loading}
        onChange={(e) => handleFiles(e.target.files)}
        className="block"
      />

      {loading && (
        <p className="text-sm text-gray-500 mt-2">Uploading…</p>
      )}
    </div>
  );
}
