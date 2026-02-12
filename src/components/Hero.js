"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_FALLBACK_IMAGE, HERO_VIDEO_URL_MP4, HERO_VIDEO_URL } from "@/lib/media";

export default function Hero() {
  const videoRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Safari requires muted + playsInline
    video.muted = true;
    video.playsInline = true;
    video.loop = true;

    // Try to autoplay immediately
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setReady(true))
        .catch(() => {
          // Fallback: force play after short timeout
          setTimeout(() => {
            video.play().catch(() => {});
            setReady(true);
          }, 100);
        });
    }
  }, []);

  return (
    <section className="relative w-full h-[70vh] overflow-hidden bg-black">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={HERO_FALLBACK_IMAGE}
        className="absolute inset-0 w-full h-full object-cover"
      >
        {/* <source src={HERO_VIDEO_URL} type="video/webm" /> */}
        <source src="/hero_video.mp4" type="video/mp4" />
      </video>

      {/* Optional fade overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-700 ${
          ready ? "opacity-0" : "opacity-100"
        }`}
      />
    </section>
  );
}