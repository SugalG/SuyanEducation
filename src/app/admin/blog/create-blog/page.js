"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

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
      return axios.post("/api/blogs", newBlog);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]); // refetch blogs list
      router.push("/blogs"); // redirect after creation
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
    return <p className="text-center mt-10">Loading destinations...</p>;

  return (
    <div className="max-w-4xl mx-auto mt-40 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Create New Blog</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-5"
      >
        {/* Title */}
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block font-medium mb-1">Slug</label>
          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            placeholder="unique-blog-slug"
            required
          />
        </div>

        {/* Country Dropdown */}
        <div>
          <label className="block font-medium mb-1">Country</label>
          <select
            name="countryId"
            value={formData.countryId}
            onChange={handleChange}
            disabled={isLoading}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
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
          <label className="block font-medium mb-1">Image URL</label>
          <input
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            placeholder="https://example.com/image.jpg"
            required
          />
        </div>

        {/* Excerpt */}
        <div>
          <label className="block font-medium mb-1">Excerpt</label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            rows={3}
            placeholder="Short summary of the blog"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block font-medium mb-1">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            rows={8}
            required
          />
        </div>

        {/* Cover Image */}
        <div>
          <label className="block font-medium mb-1">Cover Image URL</label>
          <input
            type="url"
            name="coverImage"
            value={formData.coverImage}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            placeholder="Optional cover image"
          />
        </div>

        {/* Published Date */}
        <div>
          <label className="block font-medium mb-1">Publish Date</label>
          <input
            type="datetime-local"
            name="publishedAt"
            value={formData.publishedAt}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            disabled={createBlogMutation.isLoading}
          >
            {createBlogMutation.isLoading ? "Creating..." : "Create Blog"}
          </button>
        </div>
      </form>
    </div>
  );
}
