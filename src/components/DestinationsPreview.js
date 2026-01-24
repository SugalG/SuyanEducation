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
  const [isHovering, setIsHovering] = useState(false);
  const [isManualScroll, setIsManualScroll] = useState(false);
  const scrollContainerRef = useRef(null);
  const scrollAnimationRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const scrollSpeedRef = useRef(0.8); // Pixels per frame
  
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
      }
    }
    load();
  }, []);

  // Calculate responsive card width
  const getCardWidth = useCallback(() => {
    if (typeof window === 'undefined') return 320;
    const width = window.innerWidth;
    if (width < 640) return 280;
    if (width < 768) return 300;
    if (width < 1024) return 340;
    if (width < 1280) return 360;
    return 380;
  }, []);

  // Smooth continuous scroll animation (60fps)
  const startAutoScroll = useCallback(() => {
    if (!scrollContainerRef.current || destinations.length === 0 || isHovering || isManualScroll) return;
    
    const animate = (timestamp) => {
      if (!scrollAnimationRef.current.lastTime) {
        scrollAnimationRef.current.lastTime = timestamp;
      }
      
      const delta = timestamp - scrollAnimationRef.current.lastTime;
      scrollAnimationRef.current.lastTime = timestamp;
      
      // Update scroll position
      scrollPositionRef.current -= (scrollSpeedRef.current * delta) / 16;
      
      // Calculate total width (cards + duplicates for seamless loop)
      const cardWidth = getCardWidth();
      const gap = window.innerWidth < 640 ? 16 : 24;
      const totalCards = destinations.length * 3; // Triplicate for seamless loop
      const totalWidth = totalCards * (cardWidth + gap);
      
      // Reset position when scrolled through one full set
      if (Math.abs(scrollPositionRef.current) >= totalWidth / 3) {
        scrollPositionRef.current += totalWidth / 3;
      }
      
      // Apply transform
      if (scrollContainerRef.current) {
        scrollContainerRef.current.style.transform = `translate3d(${scrollPositionRef.current}px, 0, 0)`;
      }
      
      scrollAnimationRef.current.frameId = requestAnimationFrame(animate);
    };
    
    // Initialize animation object
    scrollAnimationRef.current = {
      frameId: null,
      lastTime: null
    };
    
    scrollAnimationRef.current.frameId = requestAnimationFrame(animate);
    
    return () => {
      if (scrollAnimationRef.current?.frameId) {
        cancelAnimationFrame(scrollAnimationRef.current.frameId);
      }
    };
  }, [destinations.length, getCardWidth, isHovering, isManualScroll]);

  // Start/stop auto scroll based on hover and manual scroll
  useEffect(() => {
    const cleanup = startAutoScroll();
    return cleanup;
  }, [startAutoScroll]);

  // Handle manual navigation
  const handleManualScroll = useCallback((direction) => {
    if (!scrollContainerRef.current || destinations.length === 0) return;
    
    // Stop auto scroll temporarily
    setIsManualScroll(true);
    if (scrollAnimationRef.current?.frameId) {
      cancelAnimationFrame(scrollAnimationRef.current.frameId);
    }
    
    const cardWidth = getCardWidth();
    const gap = window.innerWidth < 640 ? 16 : 24;
    const scrollAmount = (cardWidth + gap) * 2; // Scroll 2 cards at a time
    
    // Calculate target position
    const startPos = scrollPositionRef.current;
    const targetPos = direction === 'left' 
      ? startPos + scrollAmount 
      : startPos - scrollAmount;
    
    const duration = 600;
    const startTime = performance.now();
    
    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Cubic easing
      const easeProgress = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      scrollPositionRef.current = startPos + (targetPos - startPos) * easeProgress;
      
      if (scrollContainerRef.current) {
        scrollContainerRef.current.style.transform = `translate3d(${scrollPositionRef.current}px, 0, 0)`;
      }
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        // Resume auto scroll after a delay
        setTimeout(() => {
          setIsManualScroll(false);
        }, 1000);
      }
    };
    
    requestAnimationFrame(animateScroll);
  }, [destinations.length, getCardWidth]);

  // Handle container hover
  const handleContainerHover = useCallback((hovering) => {
    setIsHovering(hovering);
  }, []);

  if (!destinations.length) return null;

  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50/50">
      <div className=" px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100 mb-4">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
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

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => handleContainerHover(true)}
          onMouseLeave={() => handleContainerHover(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={() => handleManualScroll('left')}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-gray-200 hover:border-red-500 hover:shadow-xl transition-all duration-300 group flex items-center justify-center"
            aria-label="Previous destinations"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-red-600 transition-colors" />
          </button>

          <button
            onClick={() => handleManualScroll('right')}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-gray-200 hover:border-red-500 hover:shadow-xl transition-all duration-300 group flex items-center justify-center"
            aria-label="Next destinations"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-red-600 transition-colors" />
          </button>

          {/* Cards Container */}
          <div className="px-12 sm:px-16 md:px-20 lg:px-24 overflow-hidden">
            <div className="overflow-visible">
              <div 
                ref={scrollContainerRef}
                className="flex will-change-transform"
                style={{ 
                  transform: `translate3d(${scrollPositionRef.current}px, 0, 0)`,
                  gap: "1.5rem"
                }}
              >
                {/* Triplicate cards for seamless loop */}
                {[...destinations, ...destinations, ...destinations].map((destination, index) => (
                  <div 
                    key={`${destination.slug}-${index}`}
                    className="flex-shrink-0"
                  >
                    <DestinationCard 
                      destination={destination}
                      index={index % destinations.length}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Destination Card Component
function DestinationCard({ destination, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-[280px] sm:w-[300px] md:w-[340px] lg:w-[360px] xl:w-[380px] transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={`/destinations/${destination.slug}`}
        className="block focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-xl sm:rounded-2xl"
        prefetch={false}
      >
        <div className={`
          relative bg-white rounded-xl sm:rounded-2xl overflow-hidden border shadow-sm h-full
          transition-all duration-300
          ${isHovered ? 'border-red-500 shadow-lg -translate-y-2' : 'border-gray-200 shadow-sm'}
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
                  object-cover transition-transform duration-700
                  ${isHovered ? 'scale-110' : 'scale-100'}
                `}
                sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, (max-width: 1024px) 340px, (max-width: 1280px) 360px, 380px"
                priority={index < 3}
                loading={index < 3 ? "eager" : "lazy"}
                quality={85}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-50 to-blue-50">
                <div className="text-gray-400 text-sm">Destination Image</div>
              </div>
            )}
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            
            {/* Country Name */}
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className={`
                text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg
                transition-transform duration-300
                ${isHovered ? 'translate-y-0' : 'translate-y-0'}
              `}>
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
                <span className="text-red-600 font-semibold text-sm sm:text-base flex items-center gap-2">
                  Explore Destination
                  <svg 
                    className={`
                      w-4 h-4 transition-transform duration-300
                      ${isHovered ? 'translate-x-1 scale-110' : ''}
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
    </div>
  );
}