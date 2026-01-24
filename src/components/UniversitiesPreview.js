"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

export default function UniversitiesPreview() {
  const {
    data: universities = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["home-universities"],
    queryFn: async () => {
      const res = await fetch("/api/universities");
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.items?.length > 0) {
          return data.items;
        }
      }
      throw new Error("Failed to load universities");
    },
    staleTime: 10 * 60 * 1000,
  });

  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(0);
  const scrollPosRef = useRef(0);
  const speedRef = useRef(0.5);

  // Get card width - EXACT SAME
  // Get card width - SMALLER CARD SIZE
  const getCardWidth = useCallback(() => {
    if (typeof window === "undefined") return 200;
    const width = window.innerWidth;
    if (width < 640) return 160; // Mobile: 160px
    if (width < 768) return 180; // Small tablet: 180px
    if (width < 1024) return 200; // Tablet: 200px
    if (width < 1280) return 220; // Desktop: 220px
    return 240; // Large desktop: 240px
  }, []);

  // Get gap - SMALLER GAP
  const getGap = useCallback(() => {
    if (typeof window === "undefined") return 16;
    return window.innerWidth < 640 ? 12 : 16;
  }, []);

  // CRITICAL: Seamless infinite loop animation - EXACT SAME LOGIC
  const animate = useCallback(
    (timestamp) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;

      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      const cappedDelta = Math.min(delta, 32);

      if (!isPaused && scrollRef.current) {
        scrollPosRef.current -= (speedRef.current * cappedDelta) / 16;

        const cardWidth = getCardWidth();
        const gap = getGap();
        const totalCards = universities.length;
        const totalWidth = totalCards * (cardWidth + gap);

        if (scrollPosRef.current <= -totalWidth) {
          scrollPosRef.current += totalWidth;

          requestAnimationFrame(() => {
            if (scrollRef.current) {
              scrollRef.current.style.transition = "none";
              scrollRef.current.style.transform = `translateX(${scrollPosRef.current}px)`;

              scrollRef.current.offsetHeight;

              requestAnimationFrame(() => {
                if (scrollRef.current) {
                  scrollRef.current.style.transition = "transform 0.1s linear";
                }
              });
            }
          });
        } else {
          if (scrollRef.current) {
            scrollRef.current.style.transition = "transform 0.1s linear";
            scrollRef.current.style.transform = `translateX(${scrollPosRef.current}px)`;
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    },
    [isPaused, universities.length, getCardWidth, getGap]
  );

  // Start animation - EXACT SAME
  useEffect(() => {
    if (universities.length > 0) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, universities.length]);

  // Manual navigation with loop awareness - EXACT SAME
  const handleManualScroll = useCallback(
    (direction) => {
      if (!scrollRef.current || universities.length === 0) return;

      const wasPaused = isPaused;
      setIsPaused(true);

      const cardWidth = getCardWidth();
      const gap = getGap();
      const scrollAmount = (cardWidth + gap) * 2;

      const startPos = scrollPosRef.current;
      let targetPos =
        direction === "left"
          ? startPos + scrollAmount
          : startPos - scrollAmount;

      const totalWidth = universities.length * (cardWidth + gap);
      if (Math.abs(targetPos) >= totalWidth) {
        if (direction === "right") {
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

        const easeProgress = 1 - Math.pow(1 - progress, 3);

        scrollPosRef.current = startPos + (targetPos - startPos) * easeProgress;

        const currentAbsPos = Math.abs(scrollPosRef.current);
        if (currentAbsPos >= totalWidth) {
          if (direction === "right") {
            scrollPosRef.current += totalWidth;
          } else {
            scrollPosRef.current -= totalWidth;
          }

          scrollRef.current.style.transition = "none";
          scrollRef.current.style.transform = `translateX(${scrollPosRef.current}px)`;
          scrollRef.current.offsetHeight;

          requestAnimationFrame(() => {
            if (scrollRef.current) {
              scrollRef.current.style.transition = "transform 0.5s ease";
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
          if (!wasPaused) {
            setTimeout(() => setIsPaused(false), 1000);
          }
        }
      };

      requestAnimationFrame(animateScroll);
    },
    [universities.length, getCardWidth, getGap, isPaused]
  );

  // Return null for loading/error/empty states - EXACT SAME PATTERN
  if (isLoading || isError || !universities.length) return null;

  const cardWidth = getCardWidth();
  const gap = getGap();

  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50/50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Header - SIMILAR BUT FOR UNIVERSITIES */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100 mb-4">
            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">
              Trusted Academic Partners
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
              Partner Universities
            </span>
          </h2>

          <div className="flex justify-center">
            <div className="w-48 h-1.5 bg-gradient-to-r from-red-600 to-blue-800 rounded-full"></div>
          </div>

          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We collaborate with{" "}
            <span className="font-semibold text-red-600">
              globally recognized universities
            </span>{" "}
            to ensure quality education pathways for our students
          </p>
        </div>

        {/* Carousel Container - EXACT SAME */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 300)}
        >
          {/* Navigation Buttons - EXACT SAME */}
          <button
            onClick={() => handleManualScroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:translate-x-0 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-gray-200 hover:border-red-500 hover:shadow-xl transition-all duration-300 group flex items-center justify-center"
            aria-label="Previous universities"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-red-600 transition-colors" />
          </button>

          <button
            onClick={() => handleManualScroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-0 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-gray-200 hover:border-red-500 hover:shadow-xl transition-all duration-300 group flex items-center justify-center"
            aria-label="Next universities"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-red-600 transition-colors" />
          </button>

          {/* Cards Container - EXACT SAME */}
          <div className="px-8 sm:px-12 md:px-16 lg:px-20 overflow-hidden">
            <div className="overflow-visible">
              <div
                ref={scrollRef}
                className="flex will-change-transform"
                style={{
                  transform: `translateX(${scrollPosRef.current}px)`,
                  gap: `${gap}px`,
                  minWidth: `${universities.length * 2 * (cardWidth + gap)}px`,
                }}
              >
                {/* Render duplicated cards - EXACT SAME */}
                {[...universities, ...universities].map((university, index) => (
                  <div
                    key={`${university.id || university.slug}-${index}`}
                    className="flex-shrink-0"
                    style={{ width: `${cardWidth}px` }}
                  >
                    <UniversityCard
                      university={university}
                      index={index % universities.length}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA - SIMILAR BUT DIFFERENT LINK */}
        <div className="text-center mt-12">
          <Link
            href="/universities"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all"
          >
            View All Universities
          </Link>
        </div>
      </div>
    </section>
  );
}

// University Card Component - DIFFERENT DESIGN
function UniversityCard({ university, index }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = (e) => {
    if (university.websiteUrl) {
      e.preventDefault();
      e.stopPropagation();
      window.open(university.websiteUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="h-full">
      <div
        onClick={handleCardClick}
        className={`block h-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-lg sm:rounded-xl ${
          university.websiteUrl ? "cursor-pointer" : "cursor-default"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <div
          className={`
          relative bg-white rounded-lg overflow-hidden border shadow-sm h-full
          transition-all duration-300 p-4 sm:p-5 flex flex-col items-center justify-center
          ${
            isHovered
              ? "border-red-500 shadow-lg -translate-y-1"
              : "border-gray-200"
          }
        `}
        >
          {/* Logo Container - 70% of card */}
          <div className="relative w-full h-32 sm:h-36 md:h-40 flex items-center justify-center mb-3 sm:mb-4">
            {university.imageUrl ? (
              <img
                src={university.imageUrl}
                alt={university.name}
                loading="lazy"
                className={`
                  max-h-full max-w-full object-contain transition-transform duration-300
                  ${isHovered ? "scale-110" : "scale-100"}
                `}
                style={{
                  filter: isHovered ? "none" : "grayscale(0.1)",
                  opacity: isHovered ? 1 : 0.9,
                }}
              />
            ) : (
              <div className="text-gray-400 text-sm">University Logo</div>
            )}
          </div>

          {/* University Name - 30% of card */}
          <div className="w-full text-center">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-2 leading-tight">
              {university.name}
            </h3>

            {/* Location (Optional - small text) */}
            {university.location && (
              <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                {university.location}
              </p>
            )}

            {/* Hover indicator - subtle */}
            {university.websiteUrl && isHovered && (
              <div className="mt-2">
                <div className="h-0.5 w-8 mx-auto bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
