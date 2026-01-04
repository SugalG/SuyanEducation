"use client";

import { useRef, useState } from "react";

export default function PhotoUploader({ albumId }) {
  const fileRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  async function handleFiles(files) {
    if (!files.length) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("albumId", albumId);

    for (const file of files) {
      formData.append("images", file);
    }

    const res = await fetch("/api/admin/gallery/photos", {
      method: "POST",
      body: formData,
    });

    setUploading(false);

    if (res.ok) {
      location.reload();
    } else {
      alert("Failed to upload photos");
    }
  }

  return (
    <div className="flex items-center gap-4">
      {/* Hidden input */}
      <input
        ref={fileRef}
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />

      {/* REAL button */}
      <button
        type="button"
        onClick={() => fileRef.current.click()}
        disabled={uploading}
        className="
          inline-flex items-center gap-2
          px-5 py-2.5
          bg-red-600 text-white
          rounded-lg font-semibold
          hover:bg-red-700
          active:scale-[0.98]
          transition
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
      >
        {uploading ? "Uploading..." : "Upload Photos"}
      </button>

      <span className="text-sm text-gray-500">
        JPG, PNG • Multiple allowed
      </span>
    </div>
  );
}
