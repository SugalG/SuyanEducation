"use client";

import { useRef, useState } from "react";

export default function ImageUpload({
  label = "Upload Image",
  onUpload,
  type = "general",
}) {
  const inputRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  async function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("type", type);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || !data.url) {
        console.error(data);
        alert("Image upload failed");
        return;
      }

      onUpload(data.url);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleFile}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="
          inline-flex items-center justify-center
          px-5 py-2.5
          rounded-lg
          font-medium text-sm
          border border-red-600
          text-red-600
          hover:bg-red-600 hover:text-white
          transition
          disabled:opacity-50
        "
      >
        {uploading ? "Uploading..." : label}
      </button>
    </div>
  );
}
