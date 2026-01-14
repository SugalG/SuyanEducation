"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Globe,
  Award,
  CheckCircle,
  Target,
  Plane,
  Star,
  Quote,
} from "lucide-react";
import { WORLD_MAP_IMAGE } from "@/lib/media";

const DESTINATIONS = [
  {
    label: "Japan",
    coordinates: { x: 1668, y: 410 },
    delay: "0s",
    stats: "250+ Students",
    color: "from-red-500 to-red-600",
    icon: "🇯🇵",
    description: "Specialized in Japanese language & technical education",
    focus: "Primary Focus",
    slug: "japan",
  },
  {
    label: "Australia",
    coordinates: { x: 1650, y: 770 },
    delay: "0.6s",
    stats: "120+ Placements",
    color: "from-blue-500 to-blue-600",
    icon: "🇦🇺",
    description: "University pathways & vocational courses",
    focus: "Popular Choice",
    slug: "australia",
  },
  {
    label: "USA",
    coordinates: { x: 420, y: 430 },
    delay: "1.2s",
    stats: "80+ Admitted",
    color: "from-purple-500 to-purple-600",
    icon: "🇺🇸",
    description: "Undergraduate & graduate programs",
    focus: "Select Placements",
    slug: "usa",
  },
  {
    label: "UK",
    coordinates: { x: 1040, y: 320 },
    delay: "1.8s",
    stats: "60+ Success",
    color: "from-green-500 to-green-600",
    icon: "🇬🇧",
    description: "Foundation courses & degree programs",
    focus: "Growing Market",
    slug: "uk",
  },
  {
    label: "Germany",
    coordinates: { x: 1100, y: 330 },
    delay: "3.0s",
    stats: "35+ Admitted",
    color: "from-gray-500 to-gray-600",
    icon: "🇩🇪",
    description: "Technical universities & free education",
    focus: "EU Hub",
    slug: "germany",
  },
  {
    label: "Malta",
    coordinates: { x: 1080, y: 440 },
    delay: "3.6s",
    stats: "25+ Students",
    color: "from-red-400 to-white",
    icon: "🇲🇹",
    description: "English-speaking EU destination",
    focus: "EU Gateway",
    slug: "malta",
  },
  {
    label: "New Zealand",
    coordinates: { x: 1900, y: 850 },
    delay: "4.2s",
    stats: "30+ Placements",
    color: "from-blue-300 to-blue-400",
    icon: "🇳🇿",
    description: "Quality education & work rights",
    focus: "Pacific Option",
    slug: "new-zealand",
  },
  {
    label: "Finland",
    coordinates: { x: 1150, y: 270 },
    delay: "4.8s",
    stats: "15+ Students",
    color: "from-blue-300 to-white",
    icon: "🇫🇮",
    description: "Top-ranked education system",
    focus: "Nordic Excellence",
    slug: "finland",
  },
  {
    label: "Spain",
    coordinates: { x: 900, y: 410 },
    delay: "5.4s",
    stats: "20+ Visa Approvals",
    color: "from-red-400 to-yellow-400",
    icon: "🇪🇸",
    description: "Affordable EU education",
    focus: "Cultural Hub",
    slug: "spain",
  },
  {
    label: "Italy",
    coordinates: { x: 1090, y: 420 },
    delay: "6.0s",
    stats: "18+ Students",
    color: "from-green-400 to-white to-red-400",
    icon: "🇮🇹",
    description: "Art, design & fashion schools",
    focus: "Creative Studies",
    slug: "italy",
  },
];

const ORIGIN = { x: 1370, y: 470 }; // Nepal

function arcPath(from, to) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2 - 120;
  return `M ${from.x} ${from.y} Q ${mx} ${my} ${to.x} ${to.y}`;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function GlobalReachSection() {
  const [activeDestination, setActiveDestination] = useState(null);

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-blue-950/5 rounded-full blur-3xl"></div>
      </div>

      {/* CEO Message Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mb-20"
      >
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl lg:rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-xl">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100">
                <Star className="w-4 h-4 text-red-600" />
                <span className="text-sm font-medium text-gray-700">
                  Message from the CEO
                </span>
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold">
                <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                  Building Global Futures with Purpose
                </span>
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                Studying abroad is not just about traveling to another country —
                it is a life-changing decision that shapes one&apos;s academic,
                professional, and personal future.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                At Suyan Education, our journey began with a strong foundation in
                <span className="font-semibold text-red-600">
                  {" "}
                  Japanese education and language training
                </span>
                . Over time, our vision expanded to include multiple global
                destinations, enabling students to access world-class education
                across continents.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment is simple — to guide students with honesty,
                clarity, and long-term perspective, ensuring they are prepared
                not only to study abroad, but to succeed abroad.
              </p>

              <div className="pt-4">
                <div className="font-bold text-gray-900">
                  Founder &amp; Managing Director
                </div>
                <div className="text-sm text-gray-600">Suyan Education</div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-950 rounded-full blur opacity-30"></div>
                <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-red-100 to-blue-100 border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden">
                  <Quote className="w-20 h-20 text-red-500 absolute opacity-0" />
                  <img
                    src="/ceo.jpg"
                    alt="CEO - Suyan Education"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Global Reach Map Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100"
            variants={fadeInUp}
          >
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">
              Global Education Network
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold"
            variants={fadeInUp}
          >
            <span className="bg-gradient-to-r from-red-500 to-blue-950 bg-clip-text text-transparent">
              Worldwide Destinations
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            From Kathmandu to 10+ global destinations. We provide personalized
            pathways to
            <span className="font-semibold text-red-500">
              {" "}
              leading educational hubs worldwide
            </span>
            , with specialized expertise in Japan.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-200 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-red-500 to-blue-950 flex items-center justify-center shadow-lg">
                  <Plane className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Global Student Pathways
                  </h3>
                  <p className="text-sm text-gray-500">
                    Click on destinations for details
                  </p>
                </div>
              </div>
              <div className="text-lg text-blue-950 font-bold">
                {DESTINATIONS.length} Destinations
              </div>
            </div>

            <div className="relative w-full h-[600px] rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
              <div className="absolute inset-0">
                <Image
                  src={WORLD_MAP_IMAGE}
                  alt="World map showing global reach"
                  fill
                  className="object-contain"
                  priority
                  sizes="100vw"
                />
              </div>

              <svg
                viewBox="0 0 2000 1000"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() =>
                    setActiveDestination({
                      label: "Nepal",
                      stats: "Our Home Base",
                      icon: "🇳🇵",
                      description:
                        "Where dreams take flight to global education",
                      focus: "Starting Point",
                    })
                  }
                >
                  <circle
                    cx={ORIGIN.x}
                    cy={ORIGIN.y}
                    r="14"
                    fill="#ef4444"
                    className="drop-shadow-lg"
                  />
                  <circle
                    cx={ORIGIN.x}
                    cy={ORIGIN.y}
                    r="35"
                    fill="#ef4444"
                    opacity="0.2"
                    className="origin-center animate-ping"
                  />

                  <text
                    x={ORIGIN.x + 40}
                    y={ORIGIN.y - 18}
                    fill="#ef4444"
                    fontSize="26"
                    fontWeight="bold"
                    className="drop-shadow-md"
                  >
                    Nepal
                  </text>
                </g>

                {DESTINATIONS.map((dest, i) => {
                  const pathId = `route-${i}`;
                  const path = arcPath(ORIGIN, dest.coordinates);

                  return (
                    <g
                      key={dest.slug}
                      className="cursor-pointer"
                      onClick={() => setActiveDestination(dest)}
                      onMouseEnter={() => setActiveDestination(dest)}
                      onMouseLeave={() => setActiveDestination(null)}
                    >
                      <path
                        id={pathId}
                        d={path}
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="3"
                        strokeDasharray="8 12"
                        opacity="0.7"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          from="0"
                          to="20"
                          dur="1.5s"
                          repeatCount="indefinite"
                          begin={dest.delay}
                        />
                      </path>

                      <circle
                        cx={dest.coordinates.x}
                        cy={dest.coordinates.y}
                        r={
                          activeDestination?.label === dest.label ? "11" : "8"
                        }
                        fill="#3b82f6"
                        className="transition-all duration-300"
                      />

                      <text
                        x={dest.coordinates.x + 26}
                        y={dest.coordinates.y - 9}
                        fill={
                          activeDestination?.label === dest.label
                            ? "#1f2937"
                            : "#4b5563"
                        }
                        fontSize="20"
                        fontWeight="bold"
                        className="transition-all duration-300"
                      >
                        {dest.label}
                      </text>

                      {/* KEEPING THE MOVING PLANE ANIMATION */}
                      <g transform="translate(-14 -14) rotate(90) scale(2.2)">
                        <path
                          d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3-1 3 1v-1.5L12 19v-5.5l9 2.5z"
                          fill="#3b82f6"
                          className={`transition-all duration-300 ${
                            activeDestination?.label === dest.label
                              ? "fill-red-500 scale-110"
                              : ""
                          }`}
                        />
                        <animateMotion
                          dur="3s"
                          repeatCount="indefinite"
                          rotate="auto"
                          begin={dest.delay}
                        >
                          <mpath href={`#${pathId}`} />
                        </animateMotion>
                      </g>
                    </g>
                  );
                })}

                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* POPUP CARD REMOVED ONLY */}

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-gray-700 font-medium">
                    Origin (Nepal)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-gray-700 font-medium">
                    Study Destinations
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-2 bg-gradient-to-r from-red-500 to-blue-500 rounded"></div>
                  <span className="text-gray-700 font-medium">
                    Student Pathways
                  </span>
                </div>
              </div>

              <Link
                href="/destinations"
                className="text-blue-950 hover:text-red-500 transition-colors font-medium flex items-center gap-1"
              >
                View All Details →
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={fadeInUp}
        >
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-gray-900">Our Global Impact</h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Users,
                  value: "500+",
                  label: "Students Guided",
                  sublabel: "Since 2020",
                },
                {
                  icon: Award,
                  value: "10+",
                  label: "Countries",
                  sublabel: "Active Partners",
                },
                {
                  icon: Globe,
                  value: "95%",
                  label: "Success Rate",
                  sublabel: "Japan Focus",
                },
                {
                  icon: CheckCircle,
                  value: "98%",
                  label: "Satisfaction",
                  sublabel: "Student Reviews",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl border border-gray-200 hover:border-red-300 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-red-50 to-blue-50 flex items-center justify-center group-hover:from-red-100 group-hover:to-blue-100 transition-all flex-shrink-0">
                      <stat.icon className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-gray-700">
                        {stat.label}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {stat.sublabel}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Destination List - now clickable links */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-gray-900">
              All 10 Destinations:
            </h4>
            <div className="flex flex-wrap gap-2">
              {DESTINATIONS.map((dest) => (
                <Link
                  key={dest.slug}
                  href={`/destinations/${dest.slug}`}
                  onMouseEnter={() => setActiveDestination(dest)}
                  onMouseLeave={() => setActiveDestination(null)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                    activeDestination?.label === dest.label
                      ? "bg-gradient-to-r from-red-500 to-blue-950 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span>{dest.icon}</span>
                  <span>{dest.label}</span>
                  {dest.focus === "Primary Focus" && (
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 lg:mt-20 text-center"
      >
        <div className="inline-flex flex-col sm:flex-row gap-6 lg:gap-8 items-center bg-gradient-to-r from-red-50 via-white to-blue-50 rounded-2xl p-6 lg:p-8 border border-gray-200 max-w-4xl mx-auto">
          <div className="text-left">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
              Explore All Study Destinations
            </h3>
            <p className="text-gray-600 mt-1 text-sm lg:text-base">
              Detailed country guides, requirements, and success stories
            </p>
          </div>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document
                  .getElementById("destinations-preview")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="px-6 lg:px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg lg:rounded-xl font-semibold text-sm lg:text-base shadow hover:shadow-red-200 transition-all duration-300"
            >
              Browse All Destinations
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
