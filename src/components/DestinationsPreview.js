"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Clock } from "lucide-react";

const DESTINATIONS = [
  {
    title: "Japan",
    description: "Specialized in Japanese language, technical education, and cultural immersion programs.",
    slug: "japan",
    stats: "250+ Students",
    duration: "1-5 Years",
    programs: ["Language Schools", "Technical Colleges", "Universities", "SSW Program"],
    icon: "🇯🇵",
    color: "from-red-500 to-red-600",
    focus: true
  },
  {
    title: "Australia",
    description: "World-class universities with post-study work opportunities in sunny cities.",
    slug: "australia",
    stats: "120+ Placements",
    duration: "2-4 Years",
    programs: ["Bachelor's", "Master's", "Vocational", "Research"],
    icon: "🇦🇺",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "United States",
    description: "Ivy League to state universities with diverse programs and campus life.",
    slug: "usa",
    stats: "80+ Admitted",
    duration: "4 Years",
    programs: ["Undergraduate", "Graduate", "STEM", "Business"],
    icon: "🇺🇸",
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "United Kingdom",
    description: "Historic universities with accelerated degrees and global recognition.",
    slug: "uk",
    stats: "60+ Success",
    duration: "3 Years",
    programs: ["Foundation", "Bachelor's", "Master's", "PhD"],
    icon: "🇬🇧",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Canada",
    description: "Quality education with excellent work opportunities and immigration pathways.",
    slug: "canada",
    stats: "40+ Visa Approvals",
    duration: "2-4 Years",
    programs: ["Colleges", "Universities", "Co-op", "PGWP"],
    icon: "🇨🇦",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    title: "Germany",
    description: "Free tuition at public universities with strong technical and engineering programs.",
    slug: "germany",
    stats: "35+ Admitted",
    duration: "3-4 Years",
    programs: ["Engineering", "Technology", "Business", "Sciences"],
    icon: "🇩🇪",
    color: "from-gray-500 to-gray-600"
  },
  {
    title: "Malta",
    description: "English-taught EU programs with Mediterranean lifestyle and affordable costs.",
    slug: "malta",
    stats: "25+ Students",
    duration: "1-3 Years",
    programs: ["English Courses", "Vocational", "Higher Education", "EU Gateway"],
    icon: "🇲🇹",
    color: "from-red-400 to-white"
  },
  {
    title: "New Zealand",
    description: "Safe environment with quality education and excellent post-study work rights.",
    slug: "new-zealand",
    stats: "30+ Placements",
    duration: "3-4 Years",
    programs: ["Universities", "Polytechnics", "Vocational", "Research"],
    icon: "🇳🇿",
    color: "from-blue-300 to-blue-400"
  },
  {
    title: "Finland",
    description: "Top-ranked education system with innovative teaching methods and free tuition.",
    slug: "finland",
    stats: "15+ Students",
    duration: "3-5 Years",
    programs: ["Technology", "Design", "Business", "Education"],
    icon: "🇫🇮",
    color: "from-blue-300 to-white"
  },
  {
    title: "Spain",
    description: "Affordable EU education with rich cultural experience and Spanish language.",
    slug: "spain",
    stats: "20+ Visa Approvals",
    duration: "4 Years",
    programs: ["Language Courses", "Universities", "Business", "Tourism"],
    icon: "🇪🇸",
    color: "from-red-400 to-yellow-400"
  },
  {
    title: "Italy",
    description: "World-renowned for art, design, fashion, and architecture schools.",
    slug: "italy",
    stats: "18+ Students",
    duration: "3 Years",
    programs: ["Art & Design", "Fashion", "Architecture", "Culinary"],
    icon: "🇮🇹",
    color: "from-green-400 to-white to-red-400"
  },
];

export default function DestinationsPreview() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-950/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <motion.div 
        className="text-center max-w-4xl mx-auto px-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100 mb-6">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-700">Global Education Network</span>
        </div>
        
        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
            Study Destinations
          </span>
        </h2>
        
        {/* Animated Underline */}
        <div className="flex justify-center mb-6">
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-red-600 to-blue-950 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </div>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Choose from 11+ global destinations with personalized pathways and{" "}
          <span className="font-semibold text-red-600">specialized expertise in Japan</span>
        </p>
      </motion.div>

      {/* Horizontal Scrolling Cards Container */}
      <div className="relative overflow-hidden">
        {/* First Row - Scroll Right */}
        <div className="flex mb-8">
          <div className="flex animate-scroll-right">
            {[...DESTINATIONS, ...DESTINATIONS].map((destination, index) => (
              <div
                key={`right-${destination.slug}-${index}`}
                className="flex-shrink-0 w-[380px] mx-4"
              >
                <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-red-300 transition-all duration-300 h-full group hover:shadow-xl">
                  {/* Card Header with Gradient */}
                  <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${destination.color}`}>
                    {/* Country Flag */}
                    <div className="absolute top-4 left-4 text-4xl">{destination.icon}</div>
                    
                    {/* Focus Badge for Japan */}
                    {destination.focus && (
                      <div className="absolute top-4 right-4">
                        <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            <span className="text-white text-sm font-semibold">Primary Focus</span>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Country Name */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                        {destination.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {destination.description}
                    </p>

                    {/* Stats and Duration */}
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-red-500" />
                        <span className="text-sm font-semibold text-gray-700">{destination.stats}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-950" />
                        <span className="text-sm text-gray-600">{destination.duration}</span>
                      </div>
                    </div>

                    {/* Programs */}
                    <div className="mb-6">
                      <div className="text-sm font-semibold text-gray-900 mb-2">Popular Programs:</div>
                      <div className="flex flex-wrap gap-2">
                        {destination.programs.slice(0, 2).map((program, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                          >
                            {program}
                          </span>
                        ))}
                        {destination.programs.length > 2 && (
                          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                            +{destination.programs.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/destinations/${destination.slug}`}
                        className="inline-flex items-center gap-2 text-red-700 font-semibold text-sm group/link"
                      >
                        <span>Explore {destination.title.split(" ")[0]}</span>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2"
                          className="group-hover/link:translate-x-1 transition-transform"
                        >
                          <path d="m9 18 6-6-6-6"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Scroll Left */}
        <div className="flex">
          <div className="flex animate-scroll-left">
            {[...DESTINATIONS.slice().reverse(), ...DESTINATIONS.slice().reverse()].map((destination, index) => (
              <div
                key={`left-${destination.slug}-${index}`}
                className="flex-shrink-0 w-[380px] mx-4"
              >
                <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-blue-300 transition-all duration-300 h-full group hover:shadow-xl">
                  {/* Card Header with Gradient */}
                  <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${destination.color}`}>
                    {/* Country Flag */}
                    <div className="absolute top-4 left-4 text-4xl">{destination.icon}</div>
                    
                    {/* Focus Badge for Japan */}
                    {destination.focus && (
                      <div className="absolute top-4 right-4">
                        <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            <span className="text-white text-sm font-semibold">Primary Focus</span>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Country Name */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                        {destination.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {destination.description}
                    </p>

                    {/* Stats and Duration */}
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-red-500" />
                        <span className="text-sm font-semibold text-gray-700">{destination.stats}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-950" />
                        <span className="text-sm text-gray-600">{destination.duration}</span>
                      </div>
                    </div>

                    {/* Programs */}
                    <div className="mb-6">
                      <div className="text-sm font-semibold text-gray-900 mb-2">Popular Programs:</div>
                      <div className="flex flex-wrap gap-2">
                        {destination.programs.slice(0, 2).map((program, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                          >
                            {program}
                          </span>
                        ))}
                        {destination.programs.length > 2 && (
                          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                            +{destination.programs.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/destinations/${destination.slug}`}
                        className="inline-flex items-center gap-2 text-blue-950 font-semibold text-sm group/link"
                      >
                        <span>Explore {destination.title.split(" ")[0]}</span>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2"
                          className="group-hover/link:translate-x-1 transition-transform"
                        >
                          <path d="m9 18 6-6-6-6"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add these styles to your global CSS or Tailwind config */}
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-380px * 11));
          }
        }
        
        @keyframes scroll-left {
          0% {
            transform: translateX(calc(-380px * 11));
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
        
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        
        /* Pause animation on hover */
        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
        
        @media (max-width: 768px) {
          @keyframes scroll-right {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-320px * 11));
            }
          }
          
          @keyframes scroll-left {
            0% {
              transform: translateX(calc(-320px * 11));
            }
            100% {
              transform: translateX(0);
            }
          }
        }
      `}</style>
    </section>
  );
}