"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, GraduationCap, Star, CheckCircle, Plane } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Testimonials() {
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        if (data.length > 0) setIndex(0);
      });
  }, []);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    if (items.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);

  if (!items.length) return null;

  const t = items[index];
  
  const initials = t.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-blue-950/5 rounded-full blur-3xl"></div>
        {/* Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 border-2 border-red-300 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 border-2 border-blue-300 rounded-full"></div>
        </div>
      </div>

      {/* Header */}
      <motion.div 
        className="text-center max-w-4xl mx-auto px-4 mb-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        {/* Badge */}
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100 mb-6"
          variants={fadeInUp}
        >
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-700">Student Testimonials</span>
        </motion.div>
        
        {/* Main Heading */}
        <motion.h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          variants={fadeInUp}
        >
          <span className="bg-gradient-to-r from-red-500 to-blue-950 bg-clip-text text-transparent">
            Success Stories
          </span>
        </motion.h2>
        
        {/* Animated Underline */}
        <div className="flex justify-center mb-6">
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-red-600 to-blue-950 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </div>
        
        {/* Subtitle */}
        <motion.p 
          className="text-lg sm:text-xl text-gray-600 leading-relaxed"
          variants={fadeInUp}
        >
          Real stories from students who transformed their dreams into reality with our guidance
        </motion.p>
      </motion.div>

      {/* Main Testimonial Card */}
      <div className="relative max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Large Quote Icon */}
            <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-blue-950 flex items-center justify-center shadow-xl z-10">
              <Quote className="w-8 h-8 text-white" />
            </div>

            {/* Testimonial Card */}
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl overflow-hidden border border-gray-200">
              {/* Gradient Header */}
              <div className="h-3 bg-gradient-to-r from-red-500 via-blue-950 to-blue-400"></div>
              
              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                  {/* Left - Student Info */}
                  <div className="lg:col-span-1">
                    <div className="relative">
                      {/* Student Avatar */}
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto lg:mx-0 relative">
                        {t.imageUrl ? (
                          <img 
                            src={t.imageUrl} 
                            alt={t.name}
                            className="w-full h-full object-cover" 
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-50 to-blue-50">
                            <span className="text-3xl font-bold bg-gradient-to-r from-red-500 to-blue-950 bg-clip-text text-transparent">
                              {initials}
                            </span>
                          </div>
                        )}
                        
                        {/* Verified Badge */}
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Student Details */}
                      <div className="mt-6 text-center lg:text-left">
                        <h3 className="text-2xl font-bold text-gray-900">{t.name}</h3>
                        
                        {t.country && (
                          <div className="flex items-center gap-2 justify-center lg:justify-start text-gray-700 mt-2">
                            <Plane className="w-4 h-4 text-red-500" />
                            <span className="font-medium">{t.country}</span>
                          </div>
                        )}

                        {t.program && (
                          <div className="flex items-center gap-2 justify-center lg:justify-start text-gray-600 mt-1">
                            <GraduationCap className="w-4 h-4 text-blue-950" />
                            <span>{t.program}</span>
                          </div>
                        )}

                        {t.year && (
                          <p className="text-sm text-gray-500 mt-2">Class of {t.year}</p>
                        )}

                        {/* Stars */}
                        <div className="flex justify-center lg:justify-start gap-1 mt-3">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        {/* Highlight */}
                        {t.highlight && (
                          <div className="mt-4">
                            <span className="inline-block px-3 py-1 bg-gradient-to-r from-red-50 to-blue-50 text-red-500 text-sm font-medium rounded-full border border-red-100">
                              ✨ {t.highlight}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right - Testimonial Quote */}
                  <div className="lg:col-span-2">
                    <div className="relative">
                      {/* Quote Content */}
                      <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed italic p-6 bg-gradient-to-br from-red-50/50 to-blue-50/50 rounded-2xl border border-gray-100">
                        "{t.message}"
                      </blockquote>

                      {/* Quote Marks */}
                      <div className="absolute -top-3 -left-3 text-5xl text-red-600/20">"</div>
                      <div className="absolute -bottom-3 -right-3 text-5xl text-blue-950/20">"</div>
                    </div>

                    
                    <div className="mt-8">
                      <h4 className="font-bold text-gray-900 mb-4">Success Journey:</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Personalized Counseling",
                          "Documentation Support",
                          "Visa Assistance",
                          "University Admission",
                          "Pre-Departure Guidance"
                        ].map((step, i) => (
                          <div 
                            key={i}
                            className="px-3 py-1.5 bg-gradient-to-r from-red-50 to-blue-50 text-gray-700 text-sm font-medium rounded-full border border-gray-200 hover:border-red-300 transition-colors flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Border */}
              <div className="h-1 bg-gradient-to-r from-red-500 to-blue-950"></div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Simple Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {items.slice(0, 5).map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === index 
                  ? "w-8 bg-gradient-to-r from-red-500 to-blue-950" 
                  : "w-2 bg-gray-300"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}