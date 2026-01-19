"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const premiumEase = [0.34, 1.56, 0.64, 1];
const smoothEase = [0.4, 0, 0.2, 1];

// Animation variants for header - EXACTLY like testimonials
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 } 
  }
};

export default function DestinationsPreview() {
  const [destinations, setDestinations] = useState([]);
  const [isHoveringContainer, setIsHoveringContainer] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const scrollerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastTimeRef = useRef(0);
  const scrollPosRef = useRef(0);
  const scrollSpeed = 0.5;
  const isScrollingRef = useRef(false);
  const isAutoScrollRef = useRef(true);

  // Load destinations
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/destinations");
        const data = await res.json();
        if (data.success) {
          setDestinations(data.items);
        }
      } catch (err) {
        console.error("Failed to load destinations", err);
      }
    }
    load();
  }, []);

  // Get responsive card width
  const getCardWidth = useCallback(() => {
    if (typeof window === 'undefined') return 300;
    const width = window.innerWidth;
    if (width < 640) return 260;
    if (width < 768) return 300;
    if (width < 1024) return 340;
    if (width < 1280) return 380;
    return 400;
  }, []);

  // Smooth auto-scroll
  const startAutoScroll = useCallback(() => {
    if (!scrollerRef.current || destinations.length === 0) return;
    
    const animate = (timestamp) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;
      
      if (isAutoScrollRef.current && !isScrollingRef.current) {
        scrollPosRef.current -= (scrollSpeed * delta) / 16;
        
        const cardWidth = getCardWidth();
        const totalWidth = destinations.length * cardWidth;
        
        if (Math.abs(scrollPosRef.current) >= totalWidth) {
          scrollPosRef.current = 0;
        }
        
        if (scrollerRef.current) {
          scrollerRef.current.style.transform = `translate3d(${scrollPosRef.current}px, 0, 0)`;
        }
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [destinations.length, getCardWidth]);

  // Start auto-scroll
  useEffect(() => {
    if (destinations.length > 0) {
      const cleanup = startAutoScroll();
      return cleanup;
    }
  }, [destinations.length, startAutoScroll]);

  // Handle manual scroll
  const handleManualScroll = useCallback((direction) => {
    if (!scrollerRef.current || destinations.length === 0) return;
    
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    isScrollingRef.current = true;
    
    const cardWidth = getCardWidth();
    const scrollAmount = cardWidth * 2;
    const targetPos = direction === 'left' 
      ? scrollPosRef.current + scrollAmount
      : scrollPosRef.current - scrollAmount;
    
    const startPos = scrollPosRef.current;
    const distance = targetPos - startPos;
    const duration = 800;
    let startTime = null;
    
    const animateManual = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeProgress = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      scrollPosRef.current = startPos + (distance * easeProgress);
      
      if (scrollerRef.current) {
        scrollerRef.current.style.transform = `translate3d(${scrollPosRef.current}px, 0, 0)`;
      }
      
      if (progress < 1) {
        requestAnimationFrame(animateManual);
      } else {
        setTimeout(() => {
          isScrollingRef.current = false;
          startAutoScroll();
        }, 300);
      }
    };
    
    requestAnimationFrame(animateManual);
  }, [destinations.length, getCardWidth, startAutoScroll]);

  // Handle container hover
  const handleContainerHover = useCallback((hovering) => {
    setIsHoveringContainer(hovering);
    isAutoScrollRef.current = !hovering;
  }, []);

  // Handle card hover - FIXED: No double animation
  const handleCardHover = useCallback((index) => {
    setHoveredCard(index);
  }, []);

  const handleCardLeave = useCallback(() => {
    setHoveredCard(null);
  }, []);

  if (!destinations.length) return null;

  return (
    <section
      id="destinations-preview"
      className="relative w-full mt-16 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-16"
    >
      {/* Header - COMPLETELY REWRITTEN like testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <motion.div 
          className="text-center max-w-4xl mx-auto px-4 mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          {/* Badge - EXACTLY like testimonials */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">
              Global Education Network
            </span>
          </motion.div>
          
          {/* Main Heading - EXACTLY like testimonials */}
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
              Study Destinations
            </span>
          </h2>
          
          {/* Animated Underline - EXACTLY like testimonials */}
          <div className="flex justify-center mt-4">
            <motion.div 
              className="w-48 h-1.5 bg-gradient-to-r from-red-600 to-blue-800 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 192 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>
          
          {/* Subtitle - EXACTLY like testimonials */}
          <motion.p 
            className="mt-8 text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed"
            variants={fadeInUp}
          >
            Choose from global destinations with{" "}
            <span className="font-semibold text-red-600">personalized study pathways</span> worldwide
          </motion.p>
        </motion.div>
      </div>

      {/* Main Container */}
      <div className="relative w-full px-2 sm:px-4">
        {/* Navigation Buttons */}
        <motion.button
          onClick={() => handleManualScroll('left')}
          onMouseEnter={() => handleContainerHover(true)}
          onMouseLeave={() => handleContainerHover(false)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-gray-200 hover:border-red-500 hover:shadow-xl active:scale-95 transition-all duration-300 group flex items-center justify-center ml-2 sm:ml-4"
          aria-label="Scroll left"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-red-600 transition-colors duration-200" />
        </motion.button>

        <motion.button
          onClick={() => handleManualScroll('right')}
          onMouseEnter={() => handleContainerHover(true)}
          onMouseLeave={() => handleContainerHover(false)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-gray-200 hover:border-red-500 hover:shadow-xl active:scale-95 transition-all duration-300 group flex items-center justify-center mr-2 sm:mr-4"
          aria-label="Scroll right"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-red-600 transition-colors duration-200" />
        </motion.button>

        {/* Scroller Container */}
        <div 
          className="relative w-full py-6 sm:py-8 overflow-hidden"
          onMouseEnter={() => handleContainerHover(true)}
          onMouseLeave={() => handleContainerHover(false)}
          onTouchStart={() => handleContainerHover(true)}
          onTouchEnd={() => setTimeout(() => handleContainerHover(false), 300)}
        >
          {/* Scroller */}
          <div className="flex overflow-visible">
            <div 
              ref={scrollerRef}
              className="flex will-change-transform"
              style={{ 
                transform: `translate3d(${scrollPosRef.current}px, 0, 0)`
              }}
            >
              {[...destinations, ...destinations].map((destination, index) => (
                <div
                  key={`${destination.slug}-${index}`}
                  className="flex-shrink-0 px-2 sm:px-3 md:px-4"
                  onMouseEnter={() => handleCardHover(index)}
                  onMouseLeave={handleCardLeave}
                >
                  <div className="w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] xl:w-[400px]">
                    <DestinationCard 
                      destination={destination} 
                      index={index}
                      isHovered={hoveredCard === index}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Card Component - FIXED: No double pop animation */
function DestinationCard({ destination, index, isHovered }) {
  const cardControls = useAnimation();
  
  // Handle hover animation with useAnimation hook to prevent conflicts
  useEffect(() => {
    if (isHovered) {
      cardControls.start({
        scale: 1.03,
        y: -10,
        borderColor: "#ef4444",
        boxShadow: "0 20px 40px -15px rgba(239, 68, 68, 0.15), 0 10px 20px -5px rgba(0, 0, 0, 0.08)"
      });
    } else {
      cardControls.start({
        scale: 1,
        y: 0,
        borderColor: "#e5e7eb",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
      });
    }
  }, [isHovered, cardControls]);

  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="block focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-2xl"
      prefetch={false}
    >
      <motion.div
        className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
        animate={cardControls}
        initial={false}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      >
        {/* Image Container */}
        <div className="relative h-44 sm:h-52 md:h-56 lg:h-60 xl:h-64 overflow-hidden rounded-t-xl sm:rounded-t-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />
          
          {destination.heroImage ? (
            <motion.div
              className="absolute inset-0"
              animate={{
                scale: isHovered ? 1.05 : 1
              }}
              transition={{
                duration: 0.4,
                ease: smoothEase
              }}
            >
              <Image
                src={destination.heroImage}
                alt={`Study in ${destination.country}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 340px, (max-width: 1280px) 380px, 400px"
                priority={index < 3}
                loading={index < 3 ? "eager" : "lazy"}
                quality={85}
              />
            </motion.div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-gray-400 text-sm">Destination Image</div>
            </div>
          )}
          
          {/* Country Name */}
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
            <motion.h3 
              className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
              animate={{
                y: isHovered ? -2 : 0
              }}
              transition={{
                duration: 0.3,
                ease: smoothEase
              }}
            >
              {destination.country}
            </motion.h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 md:p-6 lg:p-6">
          <motion.p 
            className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed line-clamp-3"
            animate={{
              color: isHovered ? "#1f2937" : "#4b5563"
            }}
            transition={{
              duration: 0.2,
              ease: smoothEase
            }}
          >
            {destination.description || "Explore world-class education opportunities with expert guidance"}
          </motion.p>

          {/* CTA Section */}
          <div className="mt-4 sm:mt-5 pt-3 sm:pt-4">
            <motion.div 
              className="flex items-center justify-between border-t pt-3 sm:pt-4"
              animate={{
                borderColor: isHovered ? "#fecaca" : "#f3f4f6"
              }}
              transition={{
                duration: 0.2,
                ease: smoothEase
              }}
            >
              <motion.span 
                className="text-red-600 font-semibold text-sm sm:text-base md:text-lg flex items-center gap-2"
                animate={{
                  gap: isHovered ? 8 : 4
                }}
                transition={{
                  duration: 0.2,
                  ease: smoothEase
                }}
              >
                <span className="text-xs sm:text-sm md:text-base">
                  Explore Destination
                </span>
                <motion.svg 
                  className="w-4 h-4"
                  animate={{
                    x: isHovered ? 4 : 0,
                    scale: isHovered ? 1.1 : 1
                  }}
                  transition={{
                    x: {
                      duration: 0.2,
                      ease: smoothEase
                    },
                    scale: {
                      duration: 0.2,
                      ease: smoothEase
                    }
                  }}
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
                </motion.svg>
              </motion.span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}