"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Languages,
  University,
  FileText,
  Mic,
  PlaneTakeoff,
} from "lucide-react";

const SERVICES = [
  {
    title: "Student Visa Counseling",
    desc: "Clear guidance on eligibility, process, and timelines for student visas.",
    slug: "student-visa-counseling",
    icon: GraduationCap,
  },
  {
    title: "Japanese Language Preparation",
    desc: "Structured language classes to meet university and visa requirements.",
    slug: "japanese-language-preparation",
    icon: Languages,
  },
  {
    title: "University Placement",
    desc: "Support in selecting and applying to the right universities abroad.",
    slug: "university-placement",
    icon: University,
  },
  {
    title: "Documentation Support",
    desc: "Step-by-step assistance to prepare accurate and complete documents.",
    slug: "documentation-support",
    icon: FileText,
  },
  {
    title: "Interview Preparation",
    desc: "Mock interviews and guidance to improve visa approval chances.",
    slug: "interview-preparation",
    icon: Mic,
  },
  {
    title: "Pre-Departure Guidance",
    desc: "Orientation and support before students travel abroad.",
    slug: "pre-departure-guidance",
    icon: PlaneTakeoff,
  },
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

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

export default function ServicesPreview() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32">
      {/* Header */}
      <motion.div 
        className="text-center max-w-4xl mx-auto px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
        variants={fadeInUp}
      >
        {/* Main Heading - Responsive scaling */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-red-600 leading-tight">
          Our Services
        </h2>
        
        {/* Subtitle - Responsive scaling */}
        <motion.p 
          className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-600 leading-relaxed"
          variants={fadeInUp}
        >
          We provide end-to-end guidance for students planning to study abroad,
          with a strong focus on Japan.
        </motion.p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="mt-12 sm:mt-14 md:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
        variants={staggerContainer}
      >
        {SERVICES.map((service) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.slug}
              variants={fadeInUp}
              whileHover={{
                y: -8,
                rotate: -2,
                boxShadow: "0px 16px 32px rgba(0,0,0,0.12)",
                transition: { duration: 0.5, ease: "easeOut" }
              }}
              className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl px-5 sm:px-6 lg:px-7 py-6 sm:py-8 lg:py-9 text-center cursor-default group"
            >
              {/* Icon - Responsive sizing */}
              <div className="flex justify-center mb-4 sm:mb-5 lg:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full bg-red-50 text-red-700 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 ease-out">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                </div>
              </div>

              {/* Service Title - Responsive */}
              <h3 className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-semibold text-gray-900 leading-snug">
                {service.title}
              </h3>

              {/* Service Description - Responsive */}
              <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-base xl:text-lg text-gray-600 leading-relaxed">
                {service.desc}
              </p>

              {/* Learn More Link - Responsive */}
              <Link
                href={`/services/${service.slug}`}
                className="inline-block mt-4 sm:mt-5 lg:mt-6 text-red-700 font-medium hover:underline text-sm sm:text-base lg:text-base"
              >
                Learn more →
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
        variants={fadeInUp}
        className="mt-12 sm:mt-14 md:mt-16 lg:mt-20 text-center"
      >
        <Link
          href="/services"
          className="inline-block bg-red-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg sm:rounded-md text-base sm:text-lg md:text-lg font-semibold hover:bg-red-800 transition-all duration-300 transform hover:scale-105"
        >
          View All Services
        </Link>
      </motion.div>
    </section>
  );
}