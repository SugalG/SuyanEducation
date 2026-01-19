"use client";

import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

// Animation variants - EXACTLY like testimonials
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 } 
  }
};

export default function BlogsPreview() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["home-blogs"],
    queryFn: async () => {
      const res = await fetch("/api/blogs");
      const json = await res.json();
      if (!json.success) throw new Error("Failed to load blogs");
      return json.items.slice(0, 3);
    },
  });

  if (isLoading) return null;
  if (isError || !data?.length) return null;

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-16 mb-20">
      {/* Header - FIXED to match testimonials EXACTLY */}
      <motion.div
        className="text-center max-w-4xl mx-auto px-4 mb-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
      >
        {/* Badge - EXACTLY like testimonials */}
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-700">Latest Insights</span>
        </motion.div>

        {/* Main Heading - EXACTLY like testimonials */}
        <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
            Latest Blogs & Guides
          </span>
        </h2>

        {/* Gradient line - FIXED to match testimonials EXACTLY */}
        <div className="flex justify-center mt-4">
          <motion.div 
            className="w-48 h-1.5 bg-gradient-to-r from-red-600 to-blue-800 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 192 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            // REMOVED: viewport={{ once: true }} <- This was the issue!
          />
        </div>

        {/* Subtitle - EXACTLY like testimonials */}
        <motion.p 
          className="mt-8 text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed"
          variants={fadeInUp}
        >
          Expert insights on{" "}
          <span className="font-semibold text-red-600">admissions, visas, and studying abroad</span>
        </motion.p>
      </motion.div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link
              href={`/blog/${blog.slug}`}
              className="group bg-white rounded-3xl border-2 border-gray-100 overflow-hidden hover:border-red-300 hover:shadow-xl transition-all block h-full"
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
          </motion.div>
        ))}
      </div>

      {/* CTA with better spacing */}
      <div className="text-center mt-16 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all"
        >
          View All Blogs
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}