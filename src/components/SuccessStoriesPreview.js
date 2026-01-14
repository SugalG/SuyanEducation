"use client";

import { useEffect, useState } from "react";

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
    <section className="max-w-7xl mx-auto px-6 mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Student Success Stories
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our counseling and preparation process has helped students secure
            admissions and visas across multiple destinations, with Japan as
            our primary focus.
          </p>

          <div className="mt-6">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              ✔ High Visa Approval Rate
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-gray-900">
                  {story.name}
                </h4>

                <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full">
                  Visa Approved
                </span>
              </div>

              <p className="mt-2 text-sm text-gray-600">
                {story.message}
              </p>

              {story.country && (
                <p className="mt-3 text-xs text-gray-500">
                  Destination: {story.country}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
