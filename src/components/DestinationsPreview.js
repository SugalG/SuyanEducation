"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DestinationsPreview() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/destinations");
        const data = await res.json();
        if (data.success) {
          setDestinations(data.items);
        }
      } catch (err) {
        console.error("Failed to load destinations", err);
      }
    }

    load();
  }, []);

  if (!destinations.length) return null;

  return (
    <section 
    id="destinations-preview"
    className="relative w-full py-16 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
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
              Global Education Network
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
              Study Destinations
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
            Choose from global destinations with personalized study pathways
          </p>
        </motion.div>
      </div>

      {/* Scroller */}
      <div className="relative overflow-hidden w-full">
        <div className="flex py-4">
          <div className="flex animate-scroll-single">
            {[...destinations, ...destinations].map((destination, index) => (
              <div
                key={`${destination.slug}-${index}`}
                className="flex-shrink-0 w-[380px] mx-4"
              >
                <DestinationCard destination={destination} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes scroll-single {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-380px * ${destinations.length}));
          }
        }

        .animate-scroll-single {
          animation: scroll-single 60s linear infinite;
        }

        .animate-scroll-single:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

/* ===========================
   CARD
=========================== */

function DestinationCard({ destination }) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="block bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-red-300 transition-all group hover:shadow-xl"
    >
      <div className="relative h-48 overflow-hidden">
        {destination.heroImage ? (
          <Image
            src={destination.heroImage}
            alt={destination.country}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
            sizes="380px"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
            No image
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-3">
          <h3 className="text-xl font-bold text-white">
            {destination.country}
          </h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 text-sm line-clamp-3">
          {destination.description || "Explore study opportunities"}
        </p>

        <div className="mt-4 text-red-700 font-semibold text-sm">
          Explore More →
        </div>
      </div>
    </Link>
  );
}
