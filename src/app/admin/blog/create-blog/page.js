"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { slugify } from "@/lib/slugify";

export default function CreateBlog() {
  const router = useRouter();
  const queryClient = useQueryClient();
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

  useEffect(() => {
    return () => {
      // Revoke any remaining blob URLs on component unmount
      Object.values(previews).forEach((url) => {
        if (url) URL.revokeObjectURL(url);
      });
    };
  });

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      countryId: "",
      excerpt: "",
      content: "",
      publishedAt: "",
    });

    setFiles({
      image: null,
      coverImage: null,
    });
  };

  // Fetch destinations using React Query
  const { data: destinations, isLoading } = useQuery({
    queryKey: ["destinations"],
    queryFn: async () => {
      const res = await fetch("/api/admin/destinations");
      const data = await res.json();
      if (!data.success) {
        throw new Error(data.message || "Something Happened");
      }
      return data.items;
    },
    staleTime: 5 * 60 * 1000
  });

  // Mutation for creating a blog
  const createBlogMutation = useMutation({
    mutationFn: async (newBlog) => {
      const res = await fetch("/api/admin/blogs", {
        method: "POST",
        body: newBlog,
      });
      const data = await res.json();
      if (!data.success) {
        throw new Error(data.message || "Save failed");
      }
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
      if (previews.image) URL.revokeObjectURL(previews.image);
      if (previews.coverImage) URL.revokeObjectURL(previews.coverImage);

      setPreviews({ image: null, coverImage: null });
      resetForm();
      toast.success("Blog added Successfully");
    },
    onError:(data) => {
      toast.error(data.message || "Couldn't add blogs")
    }
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;
    const file = selectedFiles?.[0] ?? null;

    // Revoke old preview if it exists
    setPreviews((prev) => {
      if (prev[name]) {
        URL.revokeObjectURL(prev[name]); // revoke old blob URL
      }
      return { ...prev, [name]: null }; // reset preview first
    });

    // Update file state
    setFiles((prev) => ({ ...prev, [name]: file }));

    // If a new file is selected, create a new preview URL
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviews((prev) => ({ ...prev, [name]: url }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) fd.append(key, value);
    });

    if (files.image) fd.append("image", files.image);
    if (files.coverImage) fd.append("coverImage".files.coverImage);
    createBlogMutation.mutate(fd);
  };

  if (isLoading)
    return (
      <p className="text-center mt-20 text-gray-600 font-medium">
        Loading destinations...
      </p>
    );
  return (
    <div className="max-w-6xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-800">
        Create New Blog
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 md:p-12 space-y-8 transition-transform hover:scale-[1.01]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div className="col-span-1 md:col-span-2">
            <label className="block font-semibold mb-2 text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={(e) => {
                const title = e.target.value;
                setFormData({ ...formData, title, slug: slugify(title) });
              }}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              placeholder="Enter blog title"
              required
            />
          </div>

          {/* Country */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Country
            </label>
            <select
              name="countryId"
              value={formData.countryId}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              required
            >
              <option value="">Select a destination</option>
              {destinations.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.country}
                </option>
              ))}
            </select>
          </div>

          {/* Publish Date */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Publish Date
            </label>
            <input
              type="datetime-local"
              name="publishedAt"
              value={formData.publishedAt}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
          </div>

          {/* Excerpt */}
          <div className="col-span-1 md:col-span-2">
            <label className="block font-semibold mb-2 text-gray-700">
              Excerpt
            </label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              rows={3}
              placeholder="Short summary of the blog"
            />
          </div>

          {/* Content */}
          <div className="col-span-1 md:col-span-2">
            <label className="block font-semibold mb-2 text-gray-700">
              Content
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              rows={8}
              placeholder="Write your full blog content here..."
              required
            />
          </div>

          {/* Blog Image */}
          <div className="flex flex-col">
            <label className="block font-semibold mb-2 text-gray-700">
              Blog Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/png, image/jpeg"
              onChange={handleFileChange}
              className="border rounded-lg p-3 text-gray-700 bg-gray-100 hover:bg-gray-200 transition cursor-pointer"
              required
            />
            {previews.image && (
              <img
                src={previews.image}
                alt="Preview"
                className="mt-3 w-full md:h-40 h-60 object-cover rounded-lg shadow-md"
              />
            )}
          </div>

          {/* Cover Image */}
          <div className="flex flex-col">
            <label className="block font-semibold mb-2 text-gray-700">
              Cover Image
            </label>
            <input
              type="file"
              name="coverImage"
              accept="image/png, image/jpeg"
              onChange={handleFileChange}
              className="border rounded-lg p-3 text-gray-700 bg-gray-100 hover:bg-gray-200 transition cursor-pointer"
            />
            {previews.coverImage && (
              <img
                src={previews.coverImage}
                alt="Cover Preview"
                className="mt-3 w-full md:h-40 h-60 object-cover rounded-lg shadow-md"
              />
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button
            type="submit"
            disabled={createBlogMutation.isLoading}
            className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition shadow-md hover:shadow-lg"
          >
            {createBlogMutation.isLoading ? "Creating..." : "Create Blog"}
          </button>
        </div>
      </form>
    </div>
  );
}
