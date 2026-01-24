"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "./universityPlacement/AnimatedSection";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Static fallback data
const FALLBACK_DESTINATIONS = [
  {
    slug: "japan",
    country: "Japan",
    description: "World-class education with rich cultural experiences and strong employment prospects.",
    heroImage: "https://res.cloudinary.com/dvx9dcap6/image/upload/v1768487249/japan_z7x8p0.jpg"
  },
  {
    slug: "australia",
    country: "Australia",
    description: "High-quality education system with excellent post-study work opportunities.",
    heroImage: "https://res.cloudinary.com/dvx9dcap6/image/upload/v1768487249/australia_w9b4jz.jpg"
  },
  {
    slug: "canada",
    country: "Canada",
    description: "Affordable education with pathways to permanent residency and multicultural environment.",
    heroImage: "https://res.cloudinary.com/dvx9dcap6/image/upload/v1768487249/canada_rnnyzq.jpg"
  },
  {
    slug: "united-kingdom",
    country: "United Kingdom",
    description: "Prestigious universities with rich academic heritage and global recognition.",
    heroImage: "https://res.cloudinary.com/dvx9dcap6/image/upload/v1768487249/uk_hnf4c0.jpg"
  },
  {
    slug: "united-states",
    country: "United States",
    description: "Top-ranked universities with cutting-edge research and diverse programs.",
    heroImage: "https://res.cloudinary.com/dvx9dcap6/image/upload/v1768487249/usa_xzb01v.jpg"
  }
];

export default function DestinationsPreview() {
  const [destinations, setDestinations] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  const scrollerRef = useRef(null);
  const autoScrollRef = useRef(null);
  
  // Load destinations with fallback
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/destinations");
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.items?.length > 0) {
            setDestinations(data.items);
          }
        }
      } catch (err) {
        console.log("Using fallback destinations data");
        setDestinations(FALLBACK_DESTINATIONS);
      }
    }
    load();
  }, []);

  // Get visible cards based on screen size
  const getVisibleCards = useCallback(() => {
    if (typeof window === 'undefined') return 1;
    const width = window.innerWidth;
    if (width < 640) return 1;  // mobile
    if (width < 768) return 2;  // small tablet
    if (width < 1024) return 2; // tablet
    if (width < 1280) return 3; // small desktop
    return 3; // large desktop
  }, []);

  // Calculate max index
  const maxIndex = Math.max(0, destinations.length - getVisibleCards());

  // Handle scroll with CSS animations instead of RAF
  const scrollToIndex = useCallback((index) => {
    if (!scrollerRef.current || destinations.length === 0) return;
    
    // Clamp index
    const clampedIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clampedIndex);
    
    // Calculate scroll position
    const cardWidth = getVisibleCards() === 1 ? 280 : 340;
    const scrollPosition = -clampedIndex * cardWidth;
    
    scrollerRef.current.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)';
    scrollerRef.current.style.transform = `translateX(${scrollPosition}px)`;
  }, [destinations.length, maxIndex, getVisibleCards]);

  // Auto scroll effect with interval (less intensive than RAF)
  useEffect(() => {
    if (!isAutoScroll || destinations.length <= getVisibleCards()) return;
    
    autoScrollRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isAutoScroll, destinations.length, maxIndex, getVisibleCards]);

  // Handle scroll on index change
  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex, scrollToIndex]);

  // Manual navigation
  const handlePrev = useCallback(() => {
    setIsAutoScroll(false);
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
    
    // Restart auto scroll after manual interaction
    setTimeout(() => setIsAutoScroll(true), 5000);
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setIsAutoScroll(false);
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    
    // Restart auto scroll after manual interaction
    setTimeout(() => setIsAutoScroll(true), 5000);
  }, [maxIndex]);

  if (!destinations.length) return null;

  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100 mb-4">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">
                Global Education Network
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                Study Destinations
              </span>
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="zoom-in" delay={0.3}>
            <div className="flex justify-center">
              <div className="w-48 h-1.5 bg-gradient-to-r from-red-600 to-blue-800 rounded-full"></div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.4}>
            <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Choose from global destinations with{" "}
              <span className="font-semibold text-red-600">personalized study pathways</span> worldwide
            </p>
          </AnimatedSection>
        </div>

        {/* Carousel Container - Simplified */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:translate-x-0 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-gray-200 hover:border-red-500 hover:shadow-xl transition-all duration-300 group flex items-center justify-center"
            aria-label="Previous destinations"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-red-600 transition-colors" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-0 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-gray-200 hover:border-red-500 hover:shadow-xl transition-all duration-300 group flex items-center justify-center"
            aria-label="Next destinations"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-red-600 transition-colors" />
          </button>

          {/* Cards Container */}
          <div className="px-8 sm:px-12 md:px-16 lg:px-20 overflow-hidden">
            <div className="overflow-visible">
              <div 
                ref={scrollerRef}
                className="flex transition-transform duration-500 ease-out gap-4 sm:gap-6 md:gap-8"
              >
                {destinations.map((destination, index) => (
                  <div 
                    key={destination.slug}
                    className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] lg:w-[360px]"
                  >
                    <DestinationCard 
                      destination={destination}
                      index={index}
                      currentIndex={currentIndex}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          {destinations.length > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoScroll(false);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAutoScroll(true), 5000);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? 'bg-red-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to destination ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Destination Card Component - Simplified
function DestinationCard({ destination, index, currentIndex }) {
  const [isHovered, setIsHovered] = useState(false);
  const isActive = Math.floor(currentIndex) === index;

  return (
    <AnimatedSection 
      animation="fade-up" 
      delay={index * 0.05} // Faster stagger
      className="h-full"
    >
      <Link
        href={`/destinations/${destination.slug}`}
        className="block h-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-xl sm:rounded-2xl"
        prefetch={false}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`
          relative bg-white rounded-xl overflow-hidden border shadow-sm h-full
          transition-all duration-300
          ${isHovered ? 'border-red-500 shadow-lg -translate-y-1' : 'border-gray-200'}
          ${isActive ? 'ring-1 ring-red-500/20' : ''}
        `}>
          {/* Image Container */}
          <div className="relative h-48 sm:h-56 md:h-60 lg:h-64 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />
            
            {destination.heroImage ? (
              <Image
                src={destination.heroImage}
                alt={`Study in ${destination.country}`}
                fill
                className={`
                  object-cover transition-transform duration-300
                  ${isHovered ? 'scale-105' : 'scale-100'}
                `}
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 340px, 360px"
                priority={index < 2}
                loading={index < 2 ? "eager" : "lazy"}
                quality={85}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-50 to-blue-50">
                <div className="text-gray-400 text-sm">Destination Image</div>
              </div>
            )}
            
            {/* Country Name Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                {destination.country}
              </h3>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow line-clamp-3">
              {destination.description || "Explore world-class education opportunities with expert guidance"}
            </p>

            {/* CTA Section */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-red-600 font-semibold text-sm sm:text-base flex items-center gap-2 group">
                  Explore Destination
                  <svg 
                    className={`
                      w-4 h-4 transition-transform duration-300
                      ${isHovered ? 'translate-x-1' : ''}
                    `}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2.5} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
}