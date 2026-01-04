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
      className="
        flex-1
        bg-red-600 text-white text-xs font-semibold
        px-3 py-2 rounded-md
        hover:bg-red-700
        cursor-pointer
        transition
      "
    >
      Delete
    </button>
  );
}
