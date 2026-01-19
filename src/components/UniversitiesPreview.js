"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
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
    <section className="relative w-full mt-16 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-16">
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div 
          className="text-center max-w-4xl mx-auto px-4 mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
        
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">
              Trusted Academic Partners
            </span>
          </motion.div>
          
         
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
              Partner Universities
            </span>
          </h2>
          
         
          <div className="flex justify-center mt-4">
            <motion.div 
              className="w-48 h-1.5 bg-gradient-to-r from-red-600 to-blue-800 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 192 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              
            />
          </div>
          
          {/* Subtitle - EXACTLY like testimonials */}
          <motion.p 
            className="mt-8 text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed"
            variants={fadeInUp}
          >
            We collaborate with{" "}
            <span className="font-semibold text-red-600">globally recognized universities</span>{" "}
            to ensure quality education pathways for our students
          </motion.p>
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
                  className="max-h-16 w-full object-contain transition duration-300"

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