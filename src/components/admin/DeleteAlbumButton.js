"use client";

export default function DeleteAlbumButton({ slug }) {
  async function handleDelete() {
    if (!confirm("Delete this album and all photos?")) return;

    const res = await fetch(`/api/admin/gallery/albums/${slug}`, {
      method: "DELETE",
    });

    if (res.ok) {
      window.location.href = "/admin/gallery";
    } else {
      alert("Failed to delete album");
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="text-sm text-red-600 hover:underline"
    >
      Delete album
    </button>
  );
}
