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
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const cardStaggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
};

export default function ServicesPreview() {
  return (
    <motion.section
      className="max-w-7xl mx-auto px-6 mt-28"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      variants={staggerContainer}
    >
      {/* Header - Animates first */}
      <motion.div 
        className="text-center max-w-3xl mx-auto"
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-bold text-red-600">
          Our Services
        </h2>
        <motion.p 
          className="mt-5 text-lg text-gray-600"
          variants={fadeInUp}
        >
          We provide end-to-end guidance for students planning to study abroad,
          with a strong focus on Japan.
        </motion.p>
      </motion.div>

      {/* Services Grid - Animates second with staggered cards */}
      <motion.div
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={cardStaggerContainer}
      >
        {SERVICES.map((service) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.slug}
              variants={fadeInUp} // Each card fades in
              whileHover={{
                y: -10,
                rotate: -4,
                boxShadow: "0px 16px 32px rgba(0,0,0,0.12)",
                transition: { duration: 0.5, ease: "easeOut" }
              }}
              className="bg-white border border-gray-200 rounded-2xl px-7 py-9 text-center cursor-default group"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-50 text-red-700 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 ease-out">
                  <Icon className="w-8 h-8" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                {service.desc}
              </p>

              <Link
                href={`/services/${service.slug}`}
                className="inline-block mt-6 text-red-700 font-medium hover:underline"
              >
                Learn more →
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      {/* CTA Button - Animates last */}
      <motion.div
        variants={fadeInUp}
        className="mt-20 text-center"
      >
        <Link
          href="/services"
          className="inline-block bg-red-700 text-white px-10 py-4 rounded-md text-lg font-semibold hover:bg-red-800 transition"
        >
          View All Services
        </Link>
      </motion.div>
    </motion.section>
  );
}