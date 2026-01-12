"use client";

import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, MapPin } from "lucide-react";

export default function BlogsPreview() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["home-blogs"],
    queryFn: async () => {
      const res = await fetch("/api/blogs");
      const json = await res.json();
      if (!json.success) throw new Error("Failed to load blogs");
      return json.items.slice(0, 3); // 👈 latest 3
    },
  });

  if (isLoading) return null;
  if (isError || !data?.length) return null;

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
              Latest Blogs & Guides
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expert insights on admissions, visas, and studying abroad
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="group bg-white rounded-3xl border-2 border-gray-100 overflow-hidden hover:border-red-300 hover:shadow-xl transition-all"
            >
              {/* Image */}
              <div className="relative h-52">
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {blog.country && (
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    {blog.country.country}
                  </div>
                )}

                <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-gray-600 line-clamp-3 mb-6">
                  {blog.excerpt}
                </p>

                <div className="inline-flex items-center gap-2 text-red-600 font-semibold">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all"
          >
            View All Blogs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
