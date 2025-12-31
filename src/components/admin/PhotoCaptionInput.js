"use client";

export default function PhotoCaptionInput({ photoId, initialCaption }) {
  async function saveCaption(value) {
    await fetch(`/api/admin/gallery/photos/${photoId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ caption: value }),
    });
  }

  return (
    <input
      type="text"
      defaultValue={initialCaption || ""}
      placeholder="Add caption…"
      onBlur={(e) => saveCaption(e.target.value)}
      className="w-full text-sm border-t px-2 py-1 focus:outline-none"
    />
  );
}
