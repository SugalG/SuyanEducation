"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SuccessStoriesPreview() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetch("/api/testimonials")
      .then(async (res) => {
        if (!res.ok) {
          console.error("Failed to fetch testimonials:", res.status);
          return [];
        }

        const text = await res.text();

        if (!text) return [];

        try {
          return JSON.parse(text);
        } catch (err) {
          console.error("Invalid JSON from /api/testimonials", err);
          return [];
        }
      })
      .then((data) => {
        if (isMounted) {
          setStories(Array.isArray(data) ? data : []);
        }
      })
      .catch((err) => {
        console.error("Testimonials fetch error:", err);
        if (isMounted) setStories([]);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!stories.length) return null;

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-16">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100 mb-6">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-gray-700">
            Student Achievements
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
            Success Stories
          </span>
        </h2>

        {/* Gradient line - Consistent with other sections */}
        <div className="flex justify-center mt-4">
          <motion.div 
            className="w-48 h-1.5 bg-gradient-to-r from-red-600 to-blue-800 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 192 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </div>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-8">
          Our counseling and preparation process has helped students secure
          admissions and visas across multiple destinations, with Japan as
          our primary focus.
        </p>
      </motion.div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left - Stats & Highlights */}
        <div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="text-5xl font-bold text-red-600 mb-2">98%</div>
                <div className="text-lg font-semibold text-gray-900">Visa Success Rate</div>
                <p className="text-gray-600 mt-2">Across all destinations</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-700 mb-2">500+</div>
                <div className="text-lg font-semibold text-gray-900">Students Helped</div>
                <p className="text-gray-600 mt-2">Successful placements worldwide</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6">
              <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                High Visa Approval Rate
              </span>
              <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                7+ Years Experience
              </span>
            </div>
          </div>
        </div>

        {/* Right - Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stories.map((story) => (
            <motion.div
              key={story.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:border-red-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    {story.name}
                  </h4>
                  {story.destination && (
                    <p className="text-sm text-gray-500 mt-1">
                      Studying in {story.destination}
                    </p>
                  )}
                </div>

                <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full font-semibold">
                  Visa Approved
                </span>
              </div>

              <p className="mt-4 text-gray-600 leading-relaxed line-clamp-4">
                {story.message}
              </p>

              {story.country && (
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Destination: <span className="font-semibold text-gray-700">{story.country}</span>
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    {story.program || "Student Visa"}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all">
          Read More Success Stories
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </section>
  );
}