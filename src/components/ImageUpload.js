"use client";

import { useState } from "react";

export default function ImageUpload({ onUpload }) {
  const [uploading, setUploading] = useState(false);

  async function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setUploading(false);

    if (data.url) {
      onUpload(data.url);
    } else {
      alert("Upload failed");
    }
  }

  return (
    <div className="space-y-2">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block"
      />

      {uploading && (
        <p className="text-sm text-gray-500">Uploading...</p>
      )}
    </div>
  );
}
