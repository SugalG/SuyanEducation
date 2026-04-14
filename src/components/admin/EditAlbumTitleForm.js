"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditAlbumTitleForm({ slug, title }) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [value, setValue] = useState(title);

  useEffect(() => {
    setValue(title);
  }, [title]);

  async function handleSubmit(event) {
    event.preventDefault();

    const nextTitle = value.trim();
    if (!nextTitle) {
      alert("Album title is required");
      return;
    }

    if (nextTitle === title.trim()) {
      setIsEditing(false);
      return;
    }

    setIsSaving(true);

    const res = await fetch(`/api/admin/gallery/albums/${slug}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: nextTitle }),
    });

    setIsSaving(false);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      alert(data.error || "Failed to update album title");
      return;
    }

    setIsEditing(false);
    router.refresh();
  }

  function handleCancel() {
    setValue(title);
    setIsEditing(false);
  }

  if (!isEditing) {
    return (
      <button
        type="button"
        onClick={() => setIsEditing(true)}
        className="mt-3 text-sm font-semibold text-blue-700 hover:text-blue-900"
      >
        Edit title
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex max-w-xl flex-col gap-3">
      <label className="text-sm font-semibold text-gray-700" htmlFor="title">
        Album title
      </label>
      <input
        id="title"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
      />
      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={isSaving}
          className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSaving ? "Saving..." : "Save title"}
        </button>
        <button
          type="button"
          onClick={handleCancel}
          disabled={isSaving}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:border-gray-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
