"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const COUNTRIES = [
  { name: "Japan", desc: "Language schools, colleges, and universities across Japan.", slug: "japan" },
  { name: "Australia", desc: "Universities and institutions with strong student pathways.", slug: "australia" },
  { name: "USA", desc: "Wide range of programs and globally recognized degrees.", slug: "usa" },
  { name: "Europe", desc: "Affordable education options across European countries.", slug: "europe" },
  { name: "Malta", desc: "Universities across Malta.", slug: "malta" },
];

/* Animation variants */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function UniversitiesPreview() {
  return (
    <section className="px-4 pb-6 sm:px-6 lg:px-8 mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32">
      {/* Header */}
      <motion.div 
        className="text-center max-w-4xl mx-auto px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-red-600 leading-tight">
          Universities & Destinations
        </h2>
        <motion.p 
          className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-600 leading-relaxed"
          variants={fadeInUp}
        >
          We work with reputed institutions across multiple countries, with a
          primary focus on Japan.
        </motion.p>
      </motion.div>

      {/* Carousel Container */}
      <motion.div
        className="mt-12 sm:mt-14 md:mt-16 lg:mt-20 overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
        variants={fadeInUp}
      >
        {/* Carousel */}
        <div className="flex w-max animate-scroll-x gap-4 sm:gap-6 lg:gap-8">
          {[...COUNTRIES, ...COUNTRIES].map((country, i) => (
            <div
              key={`${country.slug}-${i}`}
              className="group w-70 sm:w-[320px] md:w-85 lg:w-90 bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex-shrink-0"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 w-full overflow-hidden">
                <Image
                  src={`/destinations/${country.slug}.webp`}
                  alt={`${country.name} universities and destinations`}
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 340px, 360px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ 
                    objectPosition: 'top center' // This focuses on the upper part of the image
                  }}
                  priority={i < 2} // Prioritize loading first 2 images
                />
                
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-semibold text-gray-900">
                  {country.name}
                </h3>

                <p className="mt-2 text-sm sm:text-base lg:text-base xl:text-lg text-gray-600">
                  {country.desc}
                </p>

                <Link
                  href={`/universities/${country.slug}`}
                  className="inline-flex items-center gap-1 mt-3 sm:mt-4 text-red-600 font-medium hover:text-red-700 hover:gap-2 transition-all duration-300 group/link"
                >
                  View Universities
                  <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
        variants={fadeInUp}
        className="mt-12 sm:mt-14 md:mt-16 lg:mt-20 text-center"
      >
        <Link
          href="/universities"
          className="inline-block bg-red-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg sm:rounded-md text-base sm:text-lg md:text-lg font-semibold hover:bg-red-800 transition-all duration-300 transform hover:scale-105"
        >
          Explore All Universities
        </Link>
      </motion.div>
    </section>
  );
}