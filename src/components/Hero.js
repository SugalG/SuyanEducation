"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_FALLBACK_IMAGE, HERO_VIDEO_URL } from "@/lib/media";

export default function Hero() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Lazy load when hero enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Play video when ready
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoadVideo) return;

    const onLoaded = () => {
      setIsLoaded(true);
      video.play().catch(() => {});
    };

    video.addEventListener("loadeddata", onLoaded);
    return () => {
      video.removeEventListener("loadeddata", onLoaded);
      video.pause();
    };
  }, [shouldLoadVideo]);

  return (
    <section
      ref={containerRef}
      className="
        relative w-full overflow-hidden bg-black
        h-[60vh]
        sm:h-[65vh]
        md:h-[70vh]
        lg:h-[80vh]
        xl:h-[85vh]
      "
    >
      {/* Background Media */}
      <div className="absolute inset-0">
        {shouldLoadVideo ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/hero-bg.png"
            className={`
              w-full h-full
              object-cover
              md:object-contain
              transition-opacity duration-700
              ${isLoaded ? "opacity-100" : "opacity-0"}
            `}
          >
            <source src={HERO_VIDEO_URL} type="video/mp4" />
          </video>
        ) : (
          <img
            src={HERO_FALLBACK_IMAGE}
            alt="Hero background"
            className="w-full h-full object-cover md:object-contain"
          />
        )}
      </div>

    
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/50" />

      
      {/* <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl text-center">
          <h1
            className="
              font-bold text-white leading-tight
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              xl:text-6xl
            "
          >
            Study Abroad with{" "}
            <span className="text-red-400">Trusted</span> Guidance
          </h1>

          <p
            className="
              mt-3
              sm:mt-4
              md:mt-5
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
              text-white/90 font-medium
            "
          >
            Student Visa • Language Preparation • University Placement
          </p>
        </div>
      </div> */}
    </section>
  );
}
