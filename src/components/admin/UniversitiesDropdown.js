"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function UniversitiesDropdown({ destination }) {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);

  // Fetch universities lazily when dropdown opens
  const {
    data: universities = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["universities", destination.id],
    queryFn: async () => {
      const res = await fetch(
        `/api/admin/universities?destinationId=${destination.id}`
      );
      const response = await res.json();
      if (!response.success) {
        throw new Error(response.message || "Something Happened!!!");
      }
      return response.items;
    },
    enabled: isOpen,
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const res = await fetch(`/api/admin/universities`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (!res.ok || !data.success)
        throw new Error(data.message || "Delete failed");
      return data;
    },
    onSuccess: () => {
      toast.success("University deleted");
      queryClient.invalidateQueries({
        queryKey: ["universities", destination.id],
      });
    },
    onError: (err) => {
      toast.error(err.message || "Delete failed");
    },
  });

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between w-full text-purple-600 text-sm font-medium hover:bg-gray-100 p-2 rounded"
      >
        <span>{isOpen ? "Hide Universities" : `Show Universities (${universities.length})`}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="mt-2 border-t pt-2 space-y-2">
          {isLoading && (
            <div className="text-center py-4">
              <p className="text-gray-500">Loading universities...</p>
            </div>
          )}
          {isError && (
            <div className="text-center py-4">
              <p className="text-red-500">Error loading universities.</p>
            </div>
          )}
          {universities.map((u) => (
            <div
              key={u.id}
              className="flex justify-between items-center bg-white border rounded p-3 hover:bg-gray-50"
            >
              <div>
                <p className="font-medium">{u.name}</p>
                {u.slug && (
                  <p className="text-sm text-gray-500">{u.slug}</p>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => toast("Edit functionality here")}
                  className="text-blue-600 text-sm hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    if (confirm(`Delete ${u.name}?`)) {
                      deleteMutation.mutate(u.id);
                    }
                  }}
                  className="text-red-600 text-sm hover:underline"
                  disabled={deleteMutation.isPending}
                >
                  {deleteMutation.isPending ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          ))}
          {universities.length === 0 && !isLoading && (
            <div className="text-center py-4">
              <p className="text-gray-500">No universities found for this destination.</p>
              <button
                onClick={() => setSelectedDestination(destination)}
                className="text-green-600 text-sm font-medium mt-2 hover:underline"
              >
                Add first university
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}