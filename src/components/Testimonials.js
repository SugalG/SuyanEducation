"use client";

import { useEffect, useState, useRef } from "react";
import { GraduationCap, Star, Plane, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const slideUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } }
};

export default function Testimonials() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const ITEMS_PER_PAGE = 3;

  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => {
        setItems(Array.isArray(data) ? data : []);
        setPage(0);
      });
  }, []);

  if (!items.length) return null;

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const visibleItems = items.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-16">
      {/* Header */}
      <motion.div 
        className="text-center max-w-4xl mx-auto px-4 mb-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
      >
        {/* Badge */}
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-700">Student Voices</span>
        </motion.div>
        
        {/* Main Heading */}
        <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
            Success Stories
          </span>
        </h2>
        
        {/* Animated Underline - Made longer */}
        <div className="flex justify-center mt-4">
          <motion.div 
            className="w-48 h-1.5 bg-gradient-to-r from-red-600 to-blue-800 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 192 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </div>
        
        {/* Subtitle */}
        <motion.p 
          className="mt-8 text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed"
          variants={fadeInUp}
        >
          Real experiences from students who secured admissions with{" "}
          <span className="font-semibold text-red-600">our expert guidance</span> worldwide
        </motion.p>
      </motion.div>

      {/* Cards Grid */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {visibleItems.map((t, index) => {
              const initials = t.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2);

              return (
                <motion.div
                  key={t.id}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={slideUp}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredCard(t.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setSelectedCard(selectedCard === t.id ? null : t.id)}
                  className={`relative group cursor-pointer bg-white rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                    selectedCard === t.id 
                      ? 'border-red-500 shadow-2xl' 
                      : 'border-gray-100 hover:border-red-300'
                  }`}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-red-50 to-blue-50 opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative p-6">
                    {/* Top Section with LARGER Avatar */}
                    <div className="flex items-start gap-4 mb-6">
                      {/* LARGER Avatar Container */}
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-800 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
                        <div className="relative w-24 h-24 rounded-full overflow-hidden border-3 border-white shadow-xl">
                          {t.imageUrl ? (
                            <Image
                              src={t.imageUrl}
                              alt={t.name}
                              width={96}
                              height={96}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              priority={index === 0}
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-red-50 to-blue-50 flex items-center justify-center">
                              <span className="font-bold text-2xl text-gray-700">
                                {initials}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Name and Details */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-bold text-gray-900">{t.name}</h3>
                            {t.country && (
                              <div className="flex items-center gap-1.5 mt-1 text-xs text-gray-600">
                                <Plane className="w-3.5 h-3.5 text-red-500" />
                                <span>{t.country}</span>
                              </div>
                            )}
                          </div>
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        </div>

                        {/* Program & Year - Small */}
                        <div className="mt-2 space-y-1 text-xs text-gray-500">
                          {t.program && (
                            <div className="flex items-center gap-1">
                              <GraduationCap className="w-3.5 h-3.5" />
                              <span className="truncate">{t.program}</span>
                            </div>
                          )}
                          {t.year && (
                            <p>Class of {t.year}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* QUOTE - PROMINENT & LARGE - Main Focus */}
                    <motion.div
                      className="relative mb-4"
                      animate={{ 
                        scale: hoveredCard === t.id || selectedCard === t.id ? 1.02 : 1 
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="absolute -top-4 -left-4 text-5xl text-red-100 opacity-0 group-hover:opacity-100 transition-opacity">
                        "
                      </div>
                      <p className="text-xl font-semibold text-gray-900 leading-relaxed tracking-tight">
                        "{t.message}"
                      </p>
                      <div className="absolute -bottom-4 -right-4 text-5xl text-red-100 opacity-0 group-hover:opacity-100 transition-opacity rotate-180">
                        "
                      </div>
                    </motion.div>

                    {/* Success Journey - Animated Reveal */}
                    <AnimatePresence>
                      {(hoveredCard === t.id || selectedCard === t.id) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-gray-100">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                              <div className="w-2 h-2 bg-red-600 rounded-full" />
                              Success Journey
                            </h4>

                            <motion.div 
                              className="flex flex-wrap gap-2 mb-4"
                              variants={staggerChildren}
                              initial="hidden"
                              animate="show"
                            >
                              {[
                                "Personalized Counseling",
                                "Documentation Support",
                                "Visa Assistance",
                                "University Admission",
                                "Pre-Departure Guidance"
                              ].map((step, i) => (
                                <motion.span
                                  key={i}
                                  variants={fadeIn}
                                  className="inline-block text-xs px-3 py-1.5 bg-gradient-to-r from-red-50 to-blue-50 
                                    text-gray-700 rounded-full border border-red-100"
                                >
                                  {step}
                                </motion.span>
                              ))}
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Expand/Collapse Indicator */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <div className="text-xs text-gray-500">
                        {hoveredCard === t.id || selectedCard === t.id ? 'Click to collapse' : 'Click to expand'}
                      </div>
                      <div className={`w-2 h-2 rounded-full transition-colors ${
                        selectedCard === t.id ? 'bg-red-600' : 'bg-gray-300'
                      }`} />
                    </div>
                  </div>

                  {/* Hover/Active Indicator */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-blue-800 transition-all duration-300 ${
                    selectedCard === t.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-12">
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: page > 0 ? 1.1 : 1 }}
            whileTap={{ scale: page > 0 ? 0.95 : 1 }}
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center 
              disabled:opacity-30 disabled:cursor-not-allowed hover:border-red-500 hover:bg-red-50 
              transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </motion.button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-8 h-8 rounded-full text-sm font-medium transition-all duration-200
                  ${page === i 
                    ? 'bg-gradient-to-r from-red-600 to-blue-800 text-white' 
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: page < totalPages - 1 ? 1.1 : 1 }}
            whileTap={{ scale: page < totalPages - 1 ? 0.95 : 1 }}
            onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
            disabled={page === totalPages - 1}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center 
              disabled:opacity-30 disabled:cursor-not-allowed hover:border-red-500 hover:bg-red-50 
              transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}