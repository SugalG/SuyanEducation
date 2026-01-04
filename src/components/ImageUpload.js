"use client";

import { useRef, useState } from "react";

export default function ImageUpload({
  label = "Upload Image",
  onUpload,
}) {
  const inputRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  async function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    setUploading(false);

    if (data.secure_url) {
      onUpload(data.secure_url);
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
          border
          border-red-600
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
