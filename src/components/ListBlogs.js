"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";

export default function ListBlogs() {
  const [page, setPage] = useState(1);
  const limit = 5;
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs", page],
    queryFn: async () => {
      const res = await fetch(`/api/admin/blogs?page=${page}&limit=${limit}`);
      const data = await res.json();
      if (!data.success) {
        throw new Error(data.message || "Failed to fetch blogs");
      }
      return data;
    },
    keepPreviousData: true,
    staleTime: 10 * 60 * 1000,
  });

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const res = await fetch(`/api/admin/blogs/${id}`, {
        method: "DELETE"
      });
      const data = await res.json();
      if (!res.ok || !data.success)
        throw new Error(data.message || "Delete failed");
      return data;
    },
    onSuccess: () => {
        toast.success("Blogs Deleted");
        queryClient.invalidateQueries({
          queryKey: ["blogs"],
        });
      },
      onError: (err) => {
        toast.error(err.message || "Delete failed");
      },
  });

  if (isLoading) {
    return (
      <p className="text-center mt-20 text-gray-500 font-medium">
        Loading blogs...
      </p>
    );
  }

  if (isError) {
    return (
      <p className="text-center mt-20 text-red-500 font-medium">
        Failed to load blogs
      </p>
    );
  }

  const { items, pagination } = data;

  return (
    <div className="max-w-6xl mx-auto mt-20 px-4 pb-10 mb-2 rounded-xl shadow-2xl">
      <h1 className="text-3xl font-extrabold mb-8 text-gray-800 text-center">
        Blog Management
      </h1>

      {/* Desktop Table */}
      <div className="hidden md:block bg-white rounded-xl shadow-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
            <tr>
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Country</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((blog) => (
              <tr
                key={blog.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 font-medium text-gray-800">
                  <div
                    className="max-w-[420px] truncate"
                    title={blog.title} // full title on hover
                  >
                    {blog.title}
                  </div>
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {blog.country?.country}
                </td>
                <td className="px-6 py-4 text-right space-x-3">
                  <Link
                    href={`/admin/blogs/edit/${blog.id}`}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Edit
                  </Link>
                  <button
                    className="text-red-600 hover:underline font-medium"
                    onClick={() => {
                        if (confirm(`Are you sure to delete this blog?`)){
                            deleteMutation.mutate(blog.id)
                          }
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {items.map((blog) => (
          <div key={blog.id} className="bg-white rounded-xl shadow-md p-4">
            <h2
              className="font-semibold text-gray-800 truncate"
              title={blog.title}
            >
              {blog.title}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {blog.country?.country}
            </p>

            <div className="flex gap-4 mt-4">
              <Link
                href={`/admin/blogs/edit/${blog.id}`}
                className="text-blue-600 font-medium"
              >
                Edit
              </Link>
              <button
                className="text-red-600 font-medium"
                onClick={() => {
                  if (confirm(`Are you sure to delete this blog?`)){
                    deleteMutation.mutate(blog.id)
                  }
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className={`px-4 py-2 rounded-lg border transition
            ${
              page === 1 ? "cursor-not-allowed opacity-50" : "hover:bg-gray-100"
            }
          `}
        >
          Previous
        </button>

        <span className="text-sm font-medium text-gray-600">
          Page {pagination.page} of {pagination.totalPages}
        </span>

        <button
          disabled={page === pagination.totalPages}
          onClick={() => setPage((p) => p + 1)}
          className={`px-4 py-2 rounded-lg border transition
            ${
              page === pagination.totalPages
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-gray-100"
            }
          `}
        >
          Next
        </button>
      </div>
    </div>
  );
}
