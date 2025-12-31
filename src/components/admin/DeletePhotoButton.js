"use client";

export default function DeletePhotoButton({ photoId }) {
  async function handleDelete() {
    if (!confirm("Delete this photo?")) return;

    const res = await fetch(`/api/admin/gallery/photos/${photoId}`, {
      method: "DELETE",
    });

    if (res.ok) {
      location.reload();
    } else {
      alert("Failed to delete photo");
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
    >
      Delete
    </button>
  );
}
