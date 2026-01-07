"use client";

import { useState } from "react";
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
    imageUrl: "",
    excerpt: "",
    content: "",
    coverImage: "",
    publishedAt: "",
  });

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      countryId: "",
      imageUrl: "",
      excerpt: "",
      content: "",
      coverImage: "",
      publishedAt: "",
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
  });

  // Mutation for creating a blog
  const createBlogMutation = useMutation({
    mutationFn: async (newBlog) => {
      const res = await fetch("/api/admin/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBlog),
      });
      const data = await res.json();
      if (!data.success) {
        throw new Error(data.message || "Save failed");
      }
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
      toast.success("Blog added Successfully");
      resetForm();
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBlogMutation.mutate(formData);
  };

  if (isLoading)
    return (
      <p className="text-center mt-20 text-gray-600 font-medium">
        Loading destinations...
      </p>
    );

  return (
    <div className="max-w-6xl mx-auto mt-40 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
        Create New Blog
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 space-y-6 transition-transform hover:scale-[1.01]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div className="col-span-1 md:col-span-2">
            <label className="block font-semibold mb-2 text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={(e) => {
                const title = e.target.value;
                setFormData({
                  ...formData,
                  title,
                  slug: slugify(title),
                });
              }}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              placeholder="Enter blog title"
              required
            />
          </div>

          {/* Country Dropdown */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">Country</label>
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

          {/* Image URL */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">Image URL</label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              placeholder="https://example.com/image.jpg"
              required
            />
            {formData.imageUrl && (
              <img
                src={formData.imageUrl}
                alt="Blog Preview"
                className="mt-3 w-full h-40 object-cover rounded-lg shadow-md"
              />
            )}
          </div>

          {/* Cover Image */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">Cover Image URL</label>
            <input
              type="url"
              name="coverImage"
              value={formData.coverImage}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              placeholder="Optional cover image"
            />
            {formData.coverImage && (
              <img
                src={formData.coverImage}
                alt="Cover Preview"
                className="mt-3 w-full h-40 object-cover rounded-lg shadow-md"
              />
            )}
          </div>

          {/* Published Date */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">Publish Date</label>
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
            <label className="block font-semibold mb-2 text-gray-700">Excerpt</label>
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
            <label className="block font-semibold mb-2 text-gray-700">Content</label>
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
