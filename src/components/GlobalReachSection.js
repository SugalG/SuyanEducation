"use client";

import { useRef } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const EASE_PREMIUM = [0.22, 1, 0.36, 1];

export default function MessageFromCEOSection() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const inView = useInView(ref, {
    amount: 0.2,
    margin: "0px 0px -15% 0px",
    once: true,
  });

  const imageAnimation = reduceMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 40, scale: 0.96 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.7, ease: EASE_PREMIUM },
        },
      };

  const textItem = reduceMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 16 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: "easeOut" },
        },
      };

  return (
    <section ref={ref} className="relative py-16 md:py-24 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            grid grid-cols-1 gap-12
            md:grid-cols-2 md:gap-14
            lg:grid-cols-[0.9fr_1.2fr_0.9fr] lg:gap-16
            items-center
          "
        >
          {/* TEXT COLUMN (DESKTOP UNCHANGED) + MOBILE TITLE ONLY */}
          <div className="space-y-5 lg:space-y-8 order-1 md:order-2">
            {/* MOBILE: Title only (shown above image) */}
            <motion.div
              variants={textItem}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="flex justify-center md:hidden"
            >
              <div
                className="
                  inline-flex items-center gap-2
                  px-4 py-2 rounded-full
                  bg-red-50 border border-red-100
                "
              >
                <Star className="w-4 h-4 text-red-600" />
                <span className="text-sm font-semibold tracking-wide text-gray-800">
                  Message from the Founder
                </span>
              </div>
            </motion.div>

            {/* DESKTOP: Everything exactly as before (title + message) */}
            <div className="hidden md:block">
              {/* SECTION HEADING (desktop) */}
              <motion.div
                variants={textItem}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="flex justify-center md:justify-start"
              >
                <div
                  className="
                    inline-flex items-center gap-2
                    px-4 py-2 rounded-full
                    bg-red-50 border border-red-100
                  "
                >
                  <Star className="w-4 h-4 text-red-600" />
                  <span
                    className="
                      text-sm md:text-base
                      font-semibold tracking-wide text-gray-800
                    "
                  >
                    Message from the Founder
                  </span>
                </div>
              </motion.div>

              {/* MAIN HEADING (desktop) */}
              <motion.h2
                variants={textItem}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="
                  text-2xl sm:text-3xl md:text-4xl
                  lg:text-5xl xl:text-6xl
                  font-bold leading-tight text-center md:text-left
                "
              >
                <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                  Building Global Futures with Purpose
                </span>
              </motion.h2>

              <div className="space-y-4">
                {[
                  "At Suyan Education, we believe that studying abroad is more than an academic journey — it is a transformational step toward a student's future and global perspective.",
                  "Our mission has always been rooted in honest guidance, transparent processes, and personalized counseling built on real experience.",
                  "From a strong foundation in Japanese education, we have grown into a global consultancy supporting students across multiple destinations.",
                ].map((text, index) => (
                  <motion.p
                    key={index}
                    variants={textItem}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    className="
                      text-sm sm:text-base md:text-lg
                      text-gray-700 leading-relaxed
                      text-center md:text-left
                    "
                  >
                    {text}
                  </motion.p>
                ))}
              </div>

              <motion.div
                variants={textItem}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="pt-4 border-t border-gray-200 text-center md:text-left"
              >
                <div className="font-bold text-gray-900 text-base sm:text-lg">
                  SUNIL MAHARJAN
                </div>
                <div className="text-sm text-gray-600">
                  Founder & CEO, Suyan Education
                </div>
              </motion.div>
            </div>
          </div>

          {/* IMAGE — ONLY MOBILE ORDER CHANGED + HEAD CROP FIX (desktop unchanged) */}
          <motion.div
            variants={imageAnimation}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="flex justify-center order-2 md:order-1"
          >
            <div
              className="
                relative w-full max-w-[420px]
                h-[260px] sm:h-[320px] md:h-[360px] lg:h-[600px]
              "
            >
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-gray-100 shadow-xl">
                <Image
                  src="https://res.cloudinary.com/dvx9dcap6/image/upload/v1768383148/ceo1_sut1bx.jpg"
                  alt="Sunil Maharjan - Founder & CEO"
                  fill
                  priority
                  quality={85}
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="
                    object-cover
                    object-[42%_12%]
                    md:object-[42%_center]
                  "
                />
              </div>
            </div>
          </motion.div>

          {/* MOBILE: Message body comes AFTER image */}
          <div className="md:hidden order-3 space-y-5">
            <motion.h2
              variants={textItem}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="
                text-2xl sm:text-3xl
                font-bold leading-tight text-center
              "
            >
              <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                Building Global Futures with Purpose
              </span>
            </motion.h2>

            <div className="space-y-4">
              {[
                "At Suyan Education, we believe that studying abroad is more than an academic journey — it is a transformational step toward a student's future and global perspective.",
                "Our mission has always been rooted in honest guidance, transparent processes, and personalized counseling built on real experience.",
                "From a strong foundation in Japanese education, we have grown into a global consultancy supporting students across multiple destinations.",
              ].map((text, index) => (
                <motion.p
                  key={index}
                  variants={textItem}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="text-sm sm:text-base text-gray-700 leading-relaxed text-center"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            <motion.div
              variants={textItem}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="pt-4 border-t border-gray-200 text-center"
            >
              <div className="font-bold text-gray-900 text-base sm:text-lg">
                SUNIL MAHARJAN
              </div>
              <div className="text-sm text-gray-600">
                Founder & CEO, Suyan Education
              </div>
            </motion.div>
          </div>

          {/* VIDEO — UNCHANGED desktop, still last on mobile */}
          <motion.div
            variants={imageAnimation}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="flex justify-center order-4 md:order-3"
          >
            <div className="w-full max-w-[420px] aspect-[3/4]">
              <video
                src="https://res.cloudinary.com/dvx9dcap6/video/upload/v1768546068/FLAGANIMATION2_k5xkt0.webm"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
