"use client";

import { useEffect, useRef, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { slugify } from "@/lib/slugify";

export default function CreateBlog({
  blog = null,        // 👈 pass blog here to edit
  onFinishEdit,       // 👈 callback after edit/save
}) {
  const queryClient = useQueryClient();
  const isEditMode = Boolean(blog);

  const imageRef = useRef(null);
  const coverImageRef = useRef(null);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    countryId: "",
    excerpt: "",
    content: "",
    publishedAt: "",
  });

  const [files, setFiles] = useState({
    image: null,
    coverImage: null,
  });

  const [previews, setPreviews] = useState({
    image: null,
    coverImage: null,
  });

  /* =========================
     PREFILL ON EDIT
  ========================= */
  useEffect(() => {
    if (!blog) return;

    setFormData({
      title: blog.title || "",
      slug: blog.slug || "",
      countryId: blog.countryId || "",
      excerpt: blog.excerpt || "",
      content: blog.content || "",
      publishedAt: blog.publishedAt
        ? new Date(blog.publishedAt).toISOString().slice(0, 16)
        : "",
    });

    setPreviews({
      image: blog.imageUrl || null,
      coverImage: blog.coverImage || null,
    });
  }, [blog]);

  /* =========================
     CLEANUP BLOBS
  ========================= */
  useEffect(() => {
    return () => {
      Object.values(previews).forEach((url) => {
        if (url?.startsWith("blob:")) URL.revokeObjectURL(url);
      });
    };
  }, [previews]);

  /* =========================
     FETCH DESTINATIONS
  ========================= */
  const { data: destinations = [], isLoading } = useQuery({
    queryKey: ["destinations"],
    queryFn: async () => {
      const res = await fetch("/api/admin/destinations");
      const data = await res.json();
      if (!data.success) throw new Error("Failed to load destinations");
      return data.items;
    },
  });

  /* =========================
     CREATE / UPDATE
  ========================= */
  const saveMutation = useMutation({
    mutationFn: async () => {
      if (isEditMode) {
        // UPDATE
        const res = await fetch(`/api/admin/blogs/${blog.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (!data.success) throw new Error(data.message);
        return data;
      }

      // CREATE
      const fd = new FormData();
      Object.entries(formData).forEach(([k, v]) => v && fd.append(k, v));
      if (files.image) fd.append("image", files.image);
      if (files.coverImage) fd.append("coverImage", files.coverImage);

      const res = await fetch("/api/admin/blogs", {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      return data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      toast.success(isEditMode ? "Blog updated" : "Blog created");

      if (!isEditMode) resetForm();
      onFinishEdit?.();
    },

    onError: (err) => {
      toast.error(err.message || "Save failed");
    },
  });

  /* =========================
     HANDLERS
  ========================= */
  function resetForm() {
    setFormData({
      title: "",
      slug: "",
      countryId: "",
      excerpt: "",
      content: "",
      publishedAt: "",
    });
    setFiles({ image: null, coverImage: null });
    setPreviews({ image: null, coverImage: null });
    imageRef.current && (imageRef.current.value = "");
    coverImageRef.current && (coverImageRef.current.value = "");
  }

  function handleFileChange(e) {
    const { name, files } = e.target;
    const file = files?.[0];
    if (!file) return;

    setFiles((p) => ({ ...p, [name]: file }));
    setPreviews((p) => ({ ...p, [name]: URL.createObjectURL(file) }));
  }

  /* =========================
     UI
  ========================= */
  if (isLoading) return <p className="mt-20 text-center">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto mt-20 px-6">
      <h1 className="text-3xl font-bold mb-10 text-center">
        {isEditMode ? "Edit Blog" : "Create Blog"}
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveMutation.mutate();
        }}
        className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
      >
        {/* Title */}
        <input
          value={formData.title}
          onChange={(e) =>
            setFormData({
              ...formData,
              title: e.target.value,
              slug: slugify(e.target.value),
            })
          }
          placeholder="Blog title"
          className="w-full border p-3 rounded-lg"
          required
        />

        {/* Country */}
        <select
          value={formData.countryId}
          onChange={(e) =>
            setFormData({ ...formData, countryId: e.target.value })
          }
          className="w-full border p-3 rounded-lg"
          required
        >
          <option value="">Select destination</option>
          {destinations.map((d) => (
            <option key={d.id} value={d.id}>
              {d.country}
            </option>
          ))}
        </select>

        <textarea
          value={formData.excerpt}
          onChange={(e) =>
            setFormData({ ...formData, excerpt: e.target.value })
          }
          rows={3}
          placeholder="Excerpt"
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
          rows={8}
          placeholder="Content"
          className="w-full border p-3 rounded-lg"
          required
        />

        {!isEditMode && (
          <input
            ref={imageRef}
            name="image"
            type="file"
            onChange={handleFileChange}
            required
          />
        )}

        <button
          disabled={saveMutation.isPending}
          className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold"
        >
          {saveMutation.isPending
            ? "Saving..."
            : isEditMode
            ? "Update Blog"
            : "Create Blog"}
        </button>
      </form>
    </div>
  );
}
