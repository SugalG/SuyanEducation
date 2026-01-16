"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_FALLBACK_IMAGE, HERO_VIDEO_URL } from "@/lib/media";
import RevealTest from "./RevealTest";

export default function Hero() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Lazy-load video when hero enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Play video once metadata is ready
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoadVideo) return;

    const onLoaded = () => {
      setIsLoaded(true);
      video.play().catch(() => {});
    };

    video.addEventListener("loadedmetadata", onLoaded);

    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      video.pause();
    };
  }, [shouldLoadVideo]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-black overflow-hidden"
      style={{
        paddingTop: "var(--navbar-height)",
        minHeight: "calc(100vh - var(--navbar-height))",
      }}
    >
      {/* VIDEO / FALLBACK */}
      {shouldLoadVideo ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="metadata"
          poster="/hero-bg.png"
          className={`w-full h-auto transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
      ) : (
        <img
          src={HERO_FALLBACK_IMAGE}
          alt="Hero background"
          className="w-full h-auto block"
        />
      )}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/40 pointer-events-none" />

      {/* CONTENT */}
      <RevealTest animateImmediately delay={9}>
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 py-4">
          <div className="max-w-5xl w-full text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Study Abroad with <span className="text-red-400">Trusted</span>{" "}
              Guidance
            </h1>

            <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-white/90 font-medium">
              Student Visa • Language Preparation • University Placement
            </p>
          </div>
        </div>
      </RevealTest>
    </section>
  );
}