"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export default function ListBlogs({ onEdit }) {
  const [page, setPage] = useState(1);
  const limit = 5;
  const queryClient = useQueryClient();

  /* =====================
     LIST BLOGS (LIGHT)
  ===================== */
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs", page],
    queryFn: async () => {
      const res = await fetch(`/api/admin/blogs?page=${page}&limit=${limit}`);
      const json = await res.json();
      if (!json.success) throw new Error("Failed to load blogs");
      return json;
    },
    keepPreviousData: true,
  });

  /* =====================
     DELETE BLOG
  ===================== */
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const res = await fetch(`/api/admin/blogs/${id}`, {
        method: "DELETE",
      });
      const json = await res.json();
      if (!json.success) throw new Error("Delete failed");
      return json;
    },
    onSuccess: () => {
      toast.success("Blog deleted");
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  /* =====================
     EDIT HANDLER (KEY FIX)
  ===================== */
  async function handleEdit(blogId) {
    try {
      const res = await fetch(`/api/admin/blogs/${blogId}`);
      const json = await res.json();

      if (!json.success) {
        toast.error("Failed to load blog");
        return;
      }

      onEdit(json.item); // ✅ FULL blog object
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      toast.error("Failed to load blog");
    }
  }

  if (isLoading) {
    return <p className="text-center mt-20">Loading blogs...</p>;
  }

  if (isError) {
    return <p className="text-center mt-20 text-red-500">Failed to load blogs</p>;
  }

  const { items, pagination } = data;

  return (
    <div className="max-w-6xl mx-auto mt-20 px-4 pb-10 rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold mb-8 text-center">Blog Management</h2>

      <table className="w-full bg-white rounded-xl overflow-hidden">
        <thead className="bg-gray-100 text-sm uppercase">
          <tr>
            <th className="px-6 py-4 text-left">Title</th>
            <th className="px-6 py-4 text-left">Country</th>
            <th className="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((blog) => (
            <tr key={blog.id} className="border-t hover:bg-gray-50">
              <td className="px-6 py-4 font-medium truncate">
                {blog.title}
              </td>
              <td className="px-6 py-4 text-gray-600">
                {blog.country?.country}
              </td>
              <td className="px-6 py-4 text-right space-x-4">
                <button
                  onClick={() => handleEdit(blog.id)}
                  className="text-blue-600 font-medium"
                >
                  Edit
                </button>

                <button
                  onClick={() => {
                    if (confirm("Delete this blog?")) {
                      deleteMutation.mutate(blog.id);
                    }
                  }}
                  className="text-red-600 font-medium"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-sm font-medium">
          Page {pagination.page} of {pagination.totalPages}
        </span>

        <button
          disabled={page === pagination.totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
