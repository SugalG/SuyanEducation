"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const DESTINATIONS = [
  {
    title: "Japan",
    description: "Specialized in Japanese language, technical education, and cultural immersion programs.",
    slug: "japan",
    icon: "🇯🇵",
    image: "/destinations/japan.png"
  },
  {
    title: "Australia",
    description: "World-class universities with post-study work opportunities in sunny cities.",
    slug: "australia",
    icon: "🇦🇺",
    image: "/destinations/australia.png"
  },
  {
    title: "United States",
    description: "Ivy League to state universities with diverse programs and campus life.",
    slug: "usa",
    icon: "🇺🇸",
    image: "/destinations/usa1.png"
  },
  {
    title: "United Kingdom",
    description: "Historic universities with accelerated degrees and global recognition.",
    slug: "uk",
    icon: "🇬🇧",
    image: "/destinations/uk.png"
  },
  {
    title: "Germany",
    description: "Free tuition at public universities with strong technical and engineering programs.",
    slug: "germany",
    icon: "🇩🇪",
    image: "/destinations/germany.png"
  },
  {
    title: "Malta",
    description: "English-taught EU programs with Mediterranean lifestyle and affordable costs.",
    slug: "malta",
    icon: "🇲🇹",
    image: "/destinations/malta.png"
  },
  {
    title: "New Zealand",
    description: "Safe environment with quality education and excellent post-study work rights.",
    slug: "new-zealand",
    icon: "🇳🇿",
    image: "/destinations/newzealand.png"
  },
  {
    title: "Finland",
    description: "Top-ranked education system with innovative teaching methods and free tuition.",
    slug: "finland",
    icon: "🇫🇮",
    image: "/destinations/finland.png"
  },
  {
    title: "Spain",
    description: "Affordable EU education with rich cultural experience and Spanish language.",
    slug: "spain",
    icon: "🇪🇸",
    image: "/destinations/spain.png"
  },
  {
    title: "Italy",
    description: "World-renowned for art, design, fashion, and architecture schools.",
    slug: "italy",
    icon: "🇮🇹",
    image: "/destinations/italy.png"
  },
];

export default function DestinationsPreview() {
  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden">
      {/* Background Elements - Full width */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-950/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header Container - Centered but full width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div 
          className="text-center"
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
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Choose from 11+ global destinations with personalized pathways and{" "}
            <span className="font-semibold text-red-600">specialized expertise in Japan</span>
          </p>
        </motion.div>
      </div>

      {/* Single Line Horizontal Scrolling Cards Container - Full width */}
      <div className="relative overflow-hidden w-full">
        {/* Single scrolling row */}
        <div className="flex py-4">
          <div className="flex animate-scroll-single">
            {/* First set */}
            {DESTINATIONS.map((destination, index) => (
              <div
                key={`first-${destination.slug}-${index}`}
                className="flex-shrink-0 w-[380px] mx-4"
              >
                <DestinationCard destination={destination} />
              </div>
            ))}
            
            {/* Duplicate set for seamless scrolling */}
            {DESTINATIONS.map((destination, index) => (
              <div
                key={`second-${destination.slug}-${index}`}
                className="flex-shrink-0 w-[380px] mx-4"
              >
                <DestinationCard destination={destination} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for single line scrolling */}
      <style jsx>{`
        @keyframes scroll-single {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-380px * 11)); /* Move by exactly one set of cards */
          }
        }
        
        .animate-scroll-single {
          animation: scroll-single 60s linear infinite;
          will-change: transform;
        }
        
        /* Pause animation on hover */
        .animate-scroll-single:hover {
          animation-play-state: paused;
        }
        
        @media (max-width: 768px) {
          @keyframes scroll-single {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-320px * 11));
            }
          }
          
          .flex-shrink-0 {
            width: 320px;
          }
        }
      `}</style>
    </section>
  );
}

// Destination Card Component for better organization
function DestinationCard({ destination }) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="block bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-red-300 transition-all duration-300 h-full group hover:shadow-xl"
    >
      {/* Card Header with Image - NO DARK OVERLAY */}
      <div className="relative h-48 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          {destination.image ? (
            <Image
              src={destination.image}
              alt={destination.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="380px"
              quality={85}
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br from-gray-800 to-gray-900`} />
          )}
        </div>
        
        {/* Content Overlay */}
        <div className="relative h-full flex flex-col justify-between p-5">
          {/* Top Row - Flag */}
          <div className="flex items-center justify-end">
            <div className="text-4xl drop-shadow-lg z-20 bg-white/20 backdrop-blur-sm rounded-full p-2">
              {destination.icon}
            </div>
          </div>
          
          {/* Country Name */}
          <div className="bg-gradient-to-t from-black/40 to-transparent p-2 -mx-2 rounded">
            <h3 className="text-2xl font-bold text-white drop-shadow-lg">
              {destination.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed text-sm">
          {destination.description}
        </p>

        {/* CTA Button */}
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 text-red-700 font-semibold text-sm group/link hover:text-red-800 transition-colors">
            <span>Explore More</span>
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
          </div>
        </div>
      </div>
    </Link>
  );
}