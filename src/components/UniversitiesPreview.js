"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

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

export default function UniversitiesPreview() {
  const { data = [], isLoading, isError } = useQuery({
    queryKey: ["home-universities"],
    queryFn: async () => {
      const res = await fetch("/api/universities");
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error("Failed to load universities");
      }
      return json.items;
    },
    staleTime: 10 * 60 * 1000,
  });

  const [universities, setUniversities] = useState([]);
  const [isHoveringContainer, setIsHoveringContainer] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [scrollPos, setScrollPos] = useState(0);
  
  const scrollerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastTimeRef = useRef(0);
  const scrollSpeed = 0.5;
  const isScrollingRef = useRef(false);
  const isAutoScrollRef = useRef(true);
  const cardWidthRef = useRef(320);
  const scrollPosRef = useRef(0);

  // Set universities from query data - duplicate for seamless loop
  useEffect(() => {
    if (data.length > 0) {
      setUniversities([...data, ...data, ...data, ...data]);
    }
  }, [data]);

  // Update card width on resize
  const updateCardWidth = useCallback(() => {
    if (typeof window === 'undefined') return 320;
    const width = window.innerWidth;
    if (width < 640) {
      cardWidthRef.current = 280;
    } else if (width < 768) {
      cardWidthRef.current = 320;
    } else if (width < 1024) {
      cardWidthRef.current = 360;
    } else if (width < 1280) {
      cardWidthRef.current = 400;
    } else {
      cardWidthRef.current = 420;
    }
  }, []);

  // Smooth auto-scroll with seamless loop
  const animateRef = useRef(null);

  // Setup animation when dependencies change
  useEffect(() => {
    const animate = (timestamp) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;
      
      if (isAutoScrollRef.current && !isScrollingRef.current) {
        scrollPosRef.current -= (scrollSpeed * delta) / 16;
        
        const cardWidth = cardWidthRef.current;
        const totalWidth = (universities.length * cardWidth) / 4;
        
        if (Math.abs(scrollPosRef.current) >= totalWidth) {
          scrollPosRef.current = 0;
        }
        
        if (scrollerRef.current) {
          scrollerRef.current.style.transform = `translate3d(${scrollPosRef.current}px, 0, 0)`;
        }
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animateRef.current = animate;
  }, [universities.length]);

  // Start auto-scroll
  useEffect(() => {
    updateCardWidth();
    const handleResize = () => {
      updateCardWidth();
    };
    
    window.addEventListener('resize', handleResize);
    
    if (universities.length > 0 && animateRef.current) {
      animationFrameRef.current = requestAnimationFrame(animateRef.current);
    }
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [universities.length, updateCardWidth]);

  // Handle manual scroll with loop
  const handleManualScroll = useCallback((direction) => {
    if (!scrollerRef.current || universities.length === 0) return;
    
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    isScrollingRef.current = true;
    isAutoScrollRef.current = false;
    
    const cardWidth = cardWidthRef.current;
    const scrollAmount = cardWidth * 3;
    let targetPos = direction === 'left' 
      ? scrollPosRef.current + scrollAmount
      : scrollPosRef.current - scrollAmount;
    
    const totalWidth = (universities.length * cardWidth) / 4;
    
    if (targetPos > 0) {
      targetPos = -totalWidth + (targetPos % totalWidth);
    }
    
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
      
      if (Math.abs(scrollPosRef.current) >= totalWidth) {
        scrollPosRef.current = scrollPosRef.current % totalWidth;
      }
      
      if (scrollerRef.current) {
        scrollerRef.current.style.transform = `translate3d(${scrollPosRef.current}px, 0, 0)`;
      }
      
      if (progress < 1) {
        requestAnimationFrame(animateManual);
      } else {
        setTimeout(() => {
          isScrollingRef.current = false;
          isAutoScrollRef.current = true;
          if (animateRef.current) {
            animationFrameRef.current = requestAnimationFrame(animateRef.current);
          }
        }, 300);
      }
    };
    
    requestAnimationFrame(animateManual);
  }, [universities.length]);

  // Handle container hover
  const handleContainerHover = useCallback((hovering) => {
    setIsHoveringContainer(hovering);
    isAutoScrollRef.current = !hovering;
  }, []);

  // Handle card hover
  const handleCardHover = useCallback((index) => {
    setHoveredCard(index);
  }, []);

  const handleCardLeave = useCallback(() => {
    setHoveredCard(null);
  }, []);

  if (isLoading || isError || !universities.length) return null;

  return (
    <section className="relative w-full mt-16 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div 
          className="text-center max-w-4xl mx-auto px-4 mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">
              Trusted Academic Partners
            </span>
          </motion.div>
          
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
              Partner Universities
            </span>
          </h2>
          
          <div className="flex justify-center mt-4">
            <motion.div 
              className="w-48 h-1.5 bg-gradient-to-r from-red-600 to-blue-800 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 192 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>
          
          <motion.p 
            className="mt-8 text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed"
            variants={fadeInUp}
          >
            We collaborate with{" "}
            <span className="font-semibold text-red-600">globally recognized universities</span>{" "}
            to ensure quality education pathways for our students
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
          {/* Gradient fade edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Scroller */}
          <div className="flex overflow-visible">
            <div 
              ref={scrollerRef}
              className="flex will-change-transform"
              style={{ 
                transition: isScrollingRef.current ? 'none' : 'transform 0.1s linear'
              }}
            >
              {universities.map((university, index) => (
                <div
                  key={`${university.id}-${index}`}
                  className="flex-shrink-0 px-2 sm:px-3 md:px-4"
                  onMouseEnter={() => handleCardHover(index)}
                  onMouseLeave={handleCardLeave}
                >
                  <div className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] xl:w-[420px]">
                    <UniversityCard 
                      university={university} 
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

      {/* CTA */}
      <div className="text-center mt-12">
        <Link
          href="/universities"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all"
        >
          View All Universities
        </Link>
      </div>
    </section>
  );
}

function UniversityCard({ university, index, isHovered }) {
  const cardControls = useAnimation();
  
  // Handle hover animation
  useEffect(() => {
    if (isHovered) {
      cardControls.start({
        scale: 1.05,
        y: -8,
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

  // Make entire card clickable to university website
  const handleCardClick = (e) => {
    if (university.websiteUrl) {
      e.preventDefault();
      e.stopPropagation();
      window.open(university.websiteUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      className={`block focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-2xl cursor-pointer ${
        university.websiteUrl ? 'hover:cursor-pointer' : 'hover:cursor-default'
      }`}
    >
      <motion.div
        className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 shadow-sm p-8 h-[300px] flex flex-col items-center justify-center" // Fixed height
        animate={cardControls}
        initial={false}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      >
        {/* Logo Container - Fixed height */}
        <div className="relative w-full h-48 flex items-center justify-center mb-4"> {/* Increased height */}
          <motion.div
            className="relative w-full h-full flex items-center justify-center p-4"
            animate={{
              scale: isHovered ? 1.1 : 1
            }}
            transition={{
              duration: 0.4,
              ease: smoothEase
            }}
          >
            <img
              src={university.imageUrl}
              alt={university.name}
              loading="lazy"
              className="max-h-full max-w-full object-contain transition duration-300"
              style={{ filter: isHovered ? 'none' : 'grayscale(0.1)' }}
            />
          </motion.div>
        </div>
        
        {/* University Name and Location - Fixed position at bottom */}
        <div className="text-center w-full mt-auto">
          <motion.h3 
            className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]"
            animate={{
              y: isHovered ? -2 : 0
            }}
            transition={{
              duration: 0.3,
              ease: smoothEase
            }}
          >
            {university.name}
          </motion.h3>
          
          {/* Location */}
          {university.location && (
            <motion.p 
              className="text-gray-600 text-sm flex items-center justify-center gap-2"
              animate={{
                opacity: isHovered ? 0.9 : 0.7
              }}
              transition={{
                duration: 0.3,
                ease: smoothEase
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{university.location}</span>
            </motion.p>
          )}
          
          {/* Click Indicator - Removed "Visit Website" text */}
          {university.websiteUrl && (
            <motion.div 
              className="mt-4 w-full flex justify-center"
              animate={{
                opacity: isHovered ? 1 : 0.7
              }}
              transition={{
                duration: 0.2,
                ease: smoothEase
              }}
            >
              <motion.div
                className="w-10 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                animate={{
                  width: isHovered ? 60 : 40
                }}
                transition={{
                  duration: 0.3,
                  ease: smoothEase
                }}
              />
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}