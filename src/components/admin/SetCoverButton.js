"use client";

export default function SetCoverButton({ albumId, imageUrl, isCover }) {
  async function handleSetCover() {
    if (isCover) return;

    const res = await fetch("/api/admin/gallery/albums/cover", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ albumId, imageUrl }),
    });

    if (res.ok) {
      location.reload();
    } else {
      alert("Failed to set cover");
    }
  }

  return (
    <button
      onClick={handleSetCover}
      disabled={isCover}
      className="
        flex-1
        bg-white text-gray-900 text-xs font-semibold
        px-3 py-2 rounded-md
        hover:bg-gray-100
        disabled:opacity-50
        disabled:cursor-not-allowed
        cursor-pointer
        transition
      "
    >
      {isCover ? "Cover" : "Set Cover"}
    </button>
  );
}
