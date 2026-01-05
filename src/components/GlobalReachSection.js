"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Globe, Award, MapPin, CheckCircle, Target, Plane } from "lucide-react";

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
    slug: "japan"
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
    slug: "australia"
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
    slug: "usa"
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
    slug: "uk"
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
    slug: "germany"
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
    slug: "malta"
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
    slug: "new-zealand"
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
    slug: "finland"
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
    slug: "spain"
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
    slug: "italy"
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
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function GlobalReachSection() {
  const [activeDestination, setActiveDestination] = useState(null);

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-blue-950/5 rounded-full blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100"
            variants={fadeInUp}
          >
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Global Education Network</span>
          </motion.div>

          {/* Title */}
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold"
            variants={fadeInUp}
          >
            <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
              Worldwide Destinations
            </span>
          </motion.h2>

          {/* Animated Underline */}
          <motion.div 
            className="h-1 bg-gradient-to-r from-red-600 to-blue-950 rounded-full w-24"
            variants={fadeInUp}
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />

          {/* Description */}
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl"
            variants={fadeInUp}
          >
            From Kathmandu to 10+ global destinations. We provide personalized pathways to 
            <span className="font-semibold text-red-600"> leading educational hubs worldwide</span>,
            with specialized expertise in Japan.
          </motion.p>

          {/* Realistic Stats */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            variants={fadeInUp}
          >
            {[
              { icon: Users, value: "500+", label: "Students Guided", sublabel: "Since 2020" },
              { icon: Award, value: "10+", label: "Countries", sublabel: "Active Partners" },
              { icon: Globe, value: "95%", label: "Success Rate", sublabel: "Japan Focus" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-xl border border-gray-200 hover:border-red-300 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-red-50 to-blue-50 flex items-center justify-center group-hover:from-red-100 group-hover:to-blue-100 transition-all flex-shrink-0">
                    <stat.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm font-medium text-gray-700">{stat.label}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{stat.sublabel}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Destination List - ALL COUNTRIES VISIBLE */}
          <motion.div 
            className="space-y-4"
            variants={fadeInUp}
          >
            <h4 className="font-semibold text-gray-900 text-lg">All 11 Destinations:</h4>
            <div className="flex flex-wrap gap-2">
              {DESTINATIONS.map((dest, index) => (
                <button
                  key={dest.slug}
                  onClick={() => setActiveDestination(dest)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                    activeDestination?.label === dest.label
                      ? 'bg-gradient-to-r from-red-600 to-blue-950 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{dest.icon}</span>
                  <span>{dest.label}</span>
                  {dest.focus === "Primary Focus" && (
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Interactive Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Map Container */}
          <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-gray-200 shadow-xl">
            {/* Map Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-blue-950 flex items-center justify-center">
                  <Plane className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Global Student Pathways</h3>
                  <p className="text-sm text-gray-500">Click on destinations for details</p>
                </div>
              </div>
              <div className="text-sm text-blue-950 font-medium">
                {DESTINATIONS.length} Destinations
              </div>
            </div>

            {/* Map with Image */}
            <div className="relative w-full h-[400px] lg:h-[450px] rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
              {/* MAP IMAGE */}
              <div className="absolute inset-0">
                <Image
                  src="/world-map-clean.png"
                  alt="World map showing global reach"
                  fill
                  className="object-contain"
                  priority
                  quality={85}
                />
              </div>

              {/* Interactive SVG Overlay - ALL DESTINATIONS */}
              <svg
                viewBox="0 0 2000 1000"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* ORIGIN - Nepal */}
                <g 
                  className="cursor-pointer hover:opacity-80 transition-opacity" 
                  onClick={() => setActiveDestination({ 
                    label: "Nepal", 
                    stats: "Our Home Base", 
                    icon: "🇳🇵",
                    description: "Where dreams take flight to global education",
                    focus: "Starting Point"
                  })}
                >
                  <circle 
                    cx={ORIGIN.x} 
                    cy={ORIGIN.y} 
                    r="12" 
                    fill="#ef4444"
                    className="drop-shadow-lg"
                  />
                  <circle 
                    cx={ORIGIN.x} 
                    cy={ORIGIN.y} 
                    r="30" 
                    fill="#ef4444" 
                    opacity="0.2"
                    className="origin-center animate-ping"
                  />
                  
                  <text
                    x={ORIGIN.x + 35}
                    y={ORIGIN.y - 15}
                    fill="#ef4444"
                    fontSize="24"
                    fontWeight="bold"
                    className="drop-shadow-md"
                  >
                    Nepal
                  </text>
                </g>

                {/* ROUTES - Show all destinations immediately */}
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
                      {/* Animated Path */}
                      <path
                        id={pathId}
                        d={path}
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="2.5"
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

                      {/* Destination Point */}
                      <circle
                        cx={dest.coordinates.x}
                        cy={dest.coordinates.y}
                        r={activeDestination?.label === dest.label ? "9" : "7"}
                        fill="#3b82f6"
                        className="transition-all duration-300"
                      />
                      
                      {/* Destination Label */}
                      <text
                        x={dest.coordinates.x + 24}
                        y={dest.coordinates.y - 8}
                        fill={activeDestination?.label === dest.label ? "#1f2937" : "#4b5563"}
                        fontSize="18"
                        fontWeight="bold"
                        className="transition-all duration-300"
                      >
                        {dest.label}
                      </text>

                      {/* Flying Plane */}
                      <g transform="translate(-14 -14) rotate(90) scale(2)">
                        <path
                          d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3-1 3 1v-1.5L12 19v-5.5l9 2.5z"
                          fill="#3b82f6"
                          className={`transition-all duration-300 ${activeDestination?.label === dest.label ? 'fill-red-500 scale-110' : ''}`}
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

                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Active Destination Card */}
            <AnimatePresence>
              {activeDestination && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl p-5 shadow-xl"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{activeDestination.icon}</div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xl font-bold text-gray-900">{activeDestination.label}</h4>
                          <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                            activeDestination.focus === "Primary Focus" 
                              ? "bg-red-100 text-red-700" 
                              : activeDestination.focus === "Popular Choice"
                              ? "bg-blue-100 text-blue-700"
                              : activeDestination.focus === "EU Hub" || activeDestination.focus === "EU Gateway"
                              ? "bg-purple-100 text-purple-700"
                              : "bg-gray-100 text-gray-700"
                          }`}>
                            {activeDestination.focus}
                          </span>
                        </div>
                        <p className="text-gray-600 mt-1">{activeDestination.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                        {activeDestination.stats}
                      </div>
                      <div className="text-sm text-gray-500">Successful Placements</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>High Visa Success</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Target className="w-4 h-4 text-blue-500" />
                      <span>Partner Institutions</span>
                    </div>
                    {activeDestination.slug && (
                      <Link
                        href={`/destinations/${activeDestination.slug}`}
                        className="ml-auto text-sm text-blue-950 hover:text-red-600 font-medium transition-colors"
                      >
                        View Details →
                      </Link>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-gray-700">Origin (Nepal)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-gray-700">Study Destinations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-2 bg-gradient-to-r from-red-500 to-blue-500 rounded"></div>
                  <span className="text-gray-700">Student Pathways</span>
                </div>
              </div>
              
              <Link
                href="/destinations"
                className="text-blue-950 hover:text-red-600 transition-colors font-medium flex items-center gap-1"
              >
                View All Details →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

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
            <Link href="/destinations">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 lg:px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg lg:rounded-xl font-semibold text-sm lg:text-base shadow hover:shadow-red-200 transition-all duration-300"
              >
                Browse All Destinations
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 lg:px-8 py-3 bg-white text-blue-950 rounded-lg lg:rounded-xl font-semibold text-sm lg:text-base border-2 border-blue-950 hover:bg-blue-50 transition-all duration-300"
            >
              Book Free Session
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}