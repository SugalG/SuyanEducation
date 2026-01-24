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
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(0);
  const scrollPosRef = useRef(0);
  const speedRef = useRef(0.5); // Even slower for better control
  
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

  // Get card width
  const getCardWidth = useCallback(() => {
    if (typeof window === 'undefined') return 320;
    const width = window.innerWidth;
    if (width < 640) return 280;
    if (width < 768) return 300;
    if (width < 1024) return 340;
    if (width < 1280) return 360;
    return 380;
  }, []);

  // Get gap
  const getGap = useCallback(() => {
    if (typeof window === 'undefined') return 24;
    return window.innerWidth < 640 ? 16 : 24;
  }, []);

  // CRITICAL: Seamless infinite loop animation
  const animate = useCallback((timestamp) => {
    if (!lastTimeRef.current) lastTimeRef.current = timestamp;
    
    const delta = timestamp - lastTimeRef.current;
    lastTimeRef.current = timestamp;
    
    // Cap delta to prevent large jumps
    const cappedDelta = Math.min(delta, 32); // ~30fps min
    
    if (!isPaused && scrollRef.current) {
      scrollPosRef.current -= (speedRef.current * cappedDelta) / 16;
      
      const cardWidth = getCardWidth();
      const gap = getGap();
      const totalCards = destinations.length;
      const totalWidth = totalCards * (cardWidth + gap);
      
      // SEAMLESS LOOP: When a card moves completely out of view on left,
      // we instantly reposition it to the right side
      if (scrollPosRef.current <= -totalWidth) {
        scrollPosRef.current += totalWidth;
        
        // This is the magic trick: We reposition all cards instantly
        // This happens so fast (1 frame) that it's invisible to the user
        requestAnimationFrame(() => {
          if (scrollRef.current) {
            scrollRef.current.style.transition = 'none'; // No transition for instant reposition
            scrollRef.current.style.transform = `translateX(${scrollPosRef.current}px)`;
            
            // Force reflow
            scrollRef.current.offsetHeight;
            
            // Restore transition
            requestAnimationFrame(() => {
              if (scrollRef.current) {
                scrollRef.current.style.transition = 'transform 0.1s linear';
              }
            });
          }
        });
      } else {
        // Normal smooth scrolling
        if (scrollRef.current) {
          scrollRef.current.style.transition = 'transform 0.1s linear';
          scrollRef.current.style.transform = `translateX(${scrollPosRef.current}px)`;
        }
      }
    }
    
    // Continue animation
    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused, destinations.length, getCardWidth, getGap]);

  // Start animation
  useEffect(() => {
    if (destinations.length > 0) {
      animationRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, destinations.length]);

  // Manual navigation with loop awareness
  const handleManualScroll = useCallback((direction) => {
    if (!scrollRef.current || destinations.length === 0) return;
    
    const wasPaused = isPaused;
    setIsPaused(true);
    
    const cardWidth = getCardWidth();
    const gap = getGap();
    const scrollAmount = (cardWidth + gap) * 2;
    
    const startPos = scrollPosRef.current;
    let targetPos = direction === 'left' 
      ? startPos + scrollAmount 
      : startPos - scrollAmount;
    
    // Handle loop boundaries
    const totalWidth = destinations.length * (cardWidth + gap);
    if (Math.abs(targetPos) >= totalWidth) {
      if (direction === 'right') {
        targetPos += totalWidth;
      } else {
        targetPos -= totalWidth;
      }
    }
    
    const duration = 500;
    const startTime = performance.now();
    
    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth easing
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      scrollPosRef.current = startPos + (targetPos - startPos) * easeProgress;
      
      // Handle loop during manual scroll
      const currentAbsPos = Math.abs(scrollPosRef.current);
      if (currentAbsPos >= totalWidth) {
        if (direction === 'right') {
          scrollPosRef.current += totalWidth;
        } else {
          scrollPosRef.current -= totalWidth;
        }
        
        // Instant reposition without transition
        scrollRef.current.style.transition = 'none';
        scrollRef.current.style.transform = `translateX(${scrollPosRef.current}px)`;
        scrollRef.current.offsetHeight; // Force reflow
        
        requestAnimationFrame(() => {
          if (scrollRef.current) {
            scrollRef.current.style.transition = 'transform 0.5s ease';
          }
        });
      } else {
        if (scrollRef.current) {
          scrollRef.current.style.transform = `translateX(${scrollPosRef.current}px)`;
        }
      }
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        // Resume auto-scroll
        if (!wasPaused) {
          setTimeout(() => setIsPaused(false), 1000);
        }
      }
    };
    
    requestAnimationFrame(animateScroll);
  }, [destinations.length, getCardWidth, getGap, isPaused]);

  if (!destinations.length) return null;

  const cardWidth = getCardWidth();
  const gap = getGap();

  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50/50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
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

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 300)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={() => handleManualScroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:translate-x-0 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-gray-200 hover:border-red-500 hover:shadow-xl transition-all duration-300 group flex items-center justify-center"
            aria-label="Previous destinations"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-red-600 transition-colors" />
          </button>

          <button
            onClick={() => handleManualScroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-0 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-gray-200 hover:border-red-500 hover:shadow-xl transition-all duration-300 group flex items-center justify-center"
            aria-label="Next destinations"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-red-600 transition-colors" />
          </button>

          {/* Cards Container - With duplicate for visual continuity */}
          <div className="px-8 sm:px-12 md:px-16 lg:px-20 overflow-hidden">
            <div className="overflow-visible">
              <div 
                ref={scrollRef}
                className="flex will-change-transform"
                style={{ 
                  transform: `translateX(${scrollPosRef.current}px)`,
                  gap: `${gap}px`,
                  // Make container wide enough for seamless transition
                  minWidth: `${(destinations.length * 2) * (cardWidth + gap)}px`
                }}
              >
                {/* Render enough cards to cover viewport + buffer */}
                {[...destinations, ...destinations].map((destination, index) => (
                  <div 
                    key={`${destination.slug}-${index}`}
                    className="flex-shrink-0"
                    style={{ width: `${cardWidth}px` }}
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
    <div className="h-full">
      <Link
        href={`/destinations/${destination.slug}`}
        className="block h-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-xl sm:rounded-2xl"
        prefetch={false}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <div className={`
          relative bg-white rounded-xl overflow-hidden border shadow-sm h-full
          transition-all duration-300
          ${isHovered ? 'border-red-500 shadow-lg -translate-y-1' : 'border-gray-200'}
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
                sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, (max-width: 1024px) 340px, 360px"
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
    </div>
  );
}