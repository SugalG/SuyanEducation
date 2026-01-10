"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function UniversitiesPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["public-universities"],
    queryFn: async () => {
      const res = await fetch("/api/universities");
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error("Failed to load universities");
      }
      return json.items;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="h-10 w-10 border-4 border-gray-300 border-t-red-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-20 text-red-600">
        Unable to load universities.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center mb-12">
        Our Partner Universities
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
        {data.map((uni) => (
          <a
            key={uni.id}
            href={uni.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center p-4 bg-white border rounded-xl hover:shadow-md transition"
          >
            <Image
              src={uni.imageUrl}
              alt={uni.name}
              width={160}
              height={80}
              className="object-contain grayscale group-hover:grayscale-0 transition"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
