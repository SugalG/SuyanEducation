"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { motion } from "framer-motion";

export default function UniversitiesPreview() {
  const { data = [], isLoading, isError } = useQuery({
    queryKey: ["home-universities"],
    queryFn: async () => {
      const res = await fetch("/api/universities");
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error("Failed to load universities");
      }
      return json.items;
    },
    staleTime: 10 * 60 * 1000,
  });

  if (isLoading || isError || !data.length) return null;

  const universities = data.slice(0, 14);

  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-950/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100 mb-6">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700">
              Trusted Academic Partners
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
              Partner Universities
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We collaborate with globally recognized universities to ensure
            quality education pathways for our students.
          </p>
        </motion.div>
      </div>

      {/* Scrolling Logos */}
      <div className="relative w-full overflow-hidden">
        <div className="flex py-6">
          <div className="flex animate-university-scroll">
            {universities.map((uni) => (
              <a
                key={uni.id}
                href={uni.websiteUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-[260px] mx-4 bg-white rounded-2xl border border-gray-100 p-6 flex items-center justify-center hover:shadow-lg transition group"
              >
                <img
                  src={uni.imageUrl}
                  alt={uni.name}
                  loading="lazy"
                  className="max-h-16 w-full object-contain grayscale group-hover:grayscale-0 transition duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <Link
          href="/universities"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all"
        >
          View All Universities
        </Link>
      </div>

      {/* Scroll animation */}
      <style jsx>{`
        @keyframes university-scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-university-scroll {
          animation: university-scroll 45s linear infinite;
          will-change: transform;
        }

        .animate-university-scroll:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .animate-university-scroll {
            animation-duration: 60s;
          }
        }
      `}</style>
    </section>
  );
}
