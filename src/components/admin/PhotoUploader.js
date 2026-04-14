"use client";

import { useRef, useState } from "react";

export default function PhotoUploader({ albumId }) {
  const fileRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0 });

  async function getUploadError(res) {
    try {
      const data = await res.json();
      return data?.error || data?.message || "Failed to upload photos";
    } catch {
      return "Failed to upload photos";
    }
  }

  async function uploadFile(file) {
    const formData = new FormData();
    formData.append("albumId", albumId);
    formData.append("images", file);

    const res = await fetch("/api/admin/gallery/photos", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error(await getUploadError(res));
    }
  }

  async function handleFiles(files) {
    const selectedFiles = Array.from(files || []);
    if (!selectedFiles.length) return;

    setUploading(true);
    setProgress({ current: 0, total: selectedFiles.length });

    let uploadedCount = 0;

    try {
      for (const [index, file] of selectedFiles.entries()) {
        setProgress({ current: index + 1, total: selectedFiles.length });
        await uploadFile(file);
        uploadedCount += 1;
      }

      location.reload();
    } catch (error) {
      console.error("Gallery photo upload failed:", error);
      const prefix =
        uploadedCount > 0
          ? `${uploadedCount} of ${selectedFiles.length} photos uploaded. `
          : "";

      alert(`${prefix}${error.message || "Failed to upload photos"}`);

      if (uploadedCount > 0) {
        location.reload();
      }
    } finally {
      setUploading(false);
      setProgress({ current: 0, total: 0 });
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-4">
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
        {uploading && progress.total > 1
          ? `Uploading ${progress.current}/${progress.total}...`
          : uploading
          ? "Uploading..."
          : "Upload Photos"}
      </button>

      <span className="text-sm text-gray-500">
        JPG, PNG • Multiple allowed
      </span>
    </div>
  );
}
