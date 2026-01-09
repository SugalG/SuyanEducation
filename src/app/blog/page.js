"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Search,
  ArrowRight,
  MapPin,
  Calendar,
  Clock,
  Tag,
  BookOpen,
  Globe,
  GraduationCap,
  X
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function formatDate(date) {
  return new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function PostCard({ post }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group bg-white rounded-3xl border-2 border-gray-100 overflow-hidden hover:border-red-300 hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-xs mb-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-red-50 to-blue-50 text-red-700 rounded-full font-semibold">
            <Tag className="w-3 h-3" />
            {post.category || "Guide"}
          </span>

          {post.country && (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
              <MapPin className="w-3 h-3" />
              {post.country.country}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold leading-tight mb-3 group-hover:text-red-600 transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-600 line-clamp-3 mb-6">{post.excerpt}</p>

        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(post.publishedAt || post.createdAt)}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-4 h-4" />
              5 min read
            </span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-red-700 font-semibold group/link"
          >
            <span>Read More</span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogPage() {
  const [query, setQuery] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["public-blogs"],
    queryFn: async () => {
      const res = await fetch("/api/blogs");
      const json = await res.json();
      if (!json.success) throw new Error("Failed to load blogs");
      return json.items;
    },
  });

  // Filter blogs based on search query
  const filteredBlogs = useMemo(() => {
    if (!data) return [];
    
    // If query is empty, return all blogs
    if (!query.trim()) return data;
    
    const q = query.toLowerCase().trim();
    return data.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.excerpt?.toLowerCase().includes(q) ||
        b.category?.toLowerCase().includes(q) ||
        b.country?.country?.toLowerCase().includes(q)
    );
  }, [data, query]);

  // Reset query function
  const resetSearch = () => {
    setQuery("");
  };

  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-24">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50 to-blue-50" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-red-100/30 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-100/30 to-transparent" />
        
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-red-200/20 to-pink-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-blue-200/20 to-cyan-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <motion.div 
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100 mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Study Resources</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                Blog & Guides
              </span>
            </h1>
            
            {/* Animated Underline */}
            <div className="flex justify-center mb-6">
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-red-600 to-blue-950 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </div>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
              Practical guidance on admissions, visas, costs, scholarships, and student life — curated by Suyan Education.
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 rounded-2xl blur opacity-30"></div>
                <div className="relative bg-white rounded-2xl border-2 border-gray-100 px-6 py-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search blogs and guides..."
                      className="flex-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
                    />
                    {query && (
                      <button
                        onClick={resetSearch}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                        title="Clear search"
                      >
                        <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {isLoading ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-50 to-blue-50 rounded-2xl mb-4">
              <BookOpen className="w-8 h-8 text-red-600 animate-pulse" />
            </div>
            <p className="text-gray-600">Loading blogs...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-50 to-blue-50 rounded-2xl mb-4">
              <Globe className="w-8 h-8 text-red-600" />
            </div>
            <p className="text-red-600 mb-4">Failed to load blogs</p>
            <button 
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-2xl font-semibold hover:shadow-xl transition-all"
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            {/* Results Count */}
            <div className="mb-10">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Latest Articles
                  </h2>
                  <p className="text-gray-600">
                    {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'} found
                    {query && (
                      <span className="ml-2 text-red-600">
                        for "{query}"
                      </span>
                    )}
                  </p>
                </div>
                {query && (
                  <button
                    onClick={resetSearch}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm text-red-600 font-semibold hover:text-red-700 transition-colors"
                  >
                    <X className="w-4 h-4" />
                    Clear Search
                  </button>
                )}
              </div>
            </div>

            {/* Blog Grid */}
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="show"
              variants={{
                show: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {filteredBlogs.length === 0 ? (
                <div className="col-span-full text-center py-20">
                  <GraduationCap className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {query ? `No results found for "${query}"` : "No blogs available"}
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto mb-6">
                    {query ? "Try searching with different keywords or browse all articles below." : "Check back soon for new articles and guides."}
                  </p>
                  {query && (
                    <button
                      onClick={resetSearch}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-2xl font-semibold hover:shadow-xl transition-all"
                    >
                      View All Articles
                    </button>
                  )}
                </div>
              ) : (
                filteredBlogs.map((blog) => (
                  <PostCard key={blog.id} post={blog} />
                ))
              )}
            </motion.div>

            {/* Show "View All" button when searching */}
            {query && filteredBlogs.length > 0 && (
              <div className="mt-12 text-center">
                <button
                  onClick={resetSearch}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-50 to-blue-50 border border-red-100 text-gray-700 font-semibold rounded-2xl hover:shadow-lg transition-all"
                >
                  <span>View All {data?.length || 0} Articles</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Search suggestions when no results */}
            {filteredBlogs.length === 0 && query && (
              <div className="mt-12 text-center">
                <div className="inline-flex flex-col items-center gap-4 px-8 py-6 bg-gradient-to-r from-red-50 to-blue-50 rounded-2xl border border-red-100 max-w-lg mx-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-700 font-medium">
                      Try searching for:
                    </span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["visa", "scholarship", "admission", "study abroad", "Japan", "USA"].map((term) => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="px-4 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-red-50 hover:text-red-600 transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-b from-gray-50/50 to-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-red-600 to-blue-950 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Looking for Personalized Guidance?
              </h3>
              <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
                Our expert counselors can help you with specific questions about studying abroad
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-12 py-5 bg-white text-gray-900 font-bold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Contact Us
                </Link>
                <Link
                  href="/destinations"
                  className="inline-flex items-center justify-center px-12 py-5 bg-transparent border-2 border-white text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  Explore Destinations
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}