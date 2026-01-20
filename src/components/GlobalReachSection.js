"use client";

import { useRef } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const EASE_PREMIUM = [0.22, 1, 0.36, 1];

export default function MessageFromCEOSection() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  /* ================= SAFE INVIEW (FIXED) ================= */
  const rawInView = useInView(ref, {
    amount: 0.15,
    once: true,
  });

  const inView = reduceMotion || rawInView;
  /* ====================================================== */

  const ceoImageAnimation = reduceMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 40, scale: 0.98 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.8, ease: EASE_PREMIUM, delay: 0.1 },
        },
      };

  const textContainerAnimation = reduceMotion
    ? {}
    : {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.12, delayChildren: 0.3 },
        },
      };

  const textItemAnimation = reduceMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      };

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 lg:py-28 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            grid grid-cols-1 gap-12
            md:grid-cols-2 md:gap-14
            lg:grid-cols-[0.9fr_1.2fr_0.9fr] lg:gap-16
            items-center
          "
        >
          {/* ================= MOBILE FLOW ================= */}
          <div className="md:hidden space-y-8">
            <motion.div
              variants={textItemAnimation}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="flex justify-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100">
                <Star className="w-4 h-4 text-red-600" />
                <span className="text-sm font-semibold tracking-wide text-gray-800">
                  Message from the Founder
                </span>
              </div>
            </motion.div>

            <motion.h2
              variants={textItemAnimation}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="text-2xl sm:text-3xl font-bold text-center mt-4"
            >
              <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                Building Global Futures with Purpose
              </span>
            </motion.h2>

            <motion.div
              variants={ceoImageAnimation}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="flex flex-col items-center"
            >
              <div className="relative w-full max-w-[360px] h-[300px]">
                <div className="relative w-full h-full rounded-[22px] overflow-hidden shadow-xl">
                  <Image
                    src="https://res.cloudinary.com/dvx9dcap6/image/upload/v1768383148/ceo1_sut1bx.jpg"
                    alt="Sunil Maharjan - Founder & CEO"
                    fill
                    priority
                    quality={85}
                    className="object-cover object-[42%_12%]"
                  />
                </div>
              </div>

              <div className="mt-4 text-center">
                <div className="font-bold text-gray-900">
                  SUNIL MAHARJAN
                </div>
                <div className="text-sm text-gray-600">
                  Founder & CEO, Suyan Education
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={textContainerAnimation}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="space-y-4 text-center"
            >
              {[
                "At Suyan Education, we believe that studying abroad is more than an academic journey — it is a transformational step toward a student's future and global perspective.",
                "Our mission has always been rooted in honest guidance, transparent processes, and personalized counseling built on real experience.",
                "From a strong foundation in Japanese education, we have grown into a global consultancy supporting students across multiple destinations.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  variants={textItemAnimation}
                  className="text-sm text-gray-700 leading-relaxed"
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              variants={textItemAnimation}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="relative -mx-4 sm:-mx-6 w-screen"
            >
              <video
                src="https://res.cloudinary.com/dvx9dcap6/video/upload/v1768546068/FLAGANIMATION2_k5xkt0.webm"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>

          {/* ================= DESKTOP FLOW (UNCHANGED) ================= */}
          <div className="hidden md:block order-1 md:order-2 space-y-8">
            <motion.div
              variants={textContainerAnimation}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              <motion.div variants={textItemAnimation} className="flex justify-start mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100">
                  <Star className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-semibold tracking-wide text-gray-800">
                    Message from the Founder
                  </span>
                </div>
              </motion.div>

              <motion.h2 variants={textItemAnimation} className="text-4xl lg:text-5xl xl:text-6xl font-bold">
                <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                  Building Global Futures with Purpose
                </span>
              </motion.h2>

              <motion.div variants={textItemAnimation} className="space-y-4 mt-6">
                {[
                  "At Suyan Education, we believe that studying abroad is more than an academic journey — it is a transformational step toward a student's future and global perspective.",
                  "Our mission has always been rooted in honest guidance, transparent processes, and personalized counseling built on real experience.",
                  "From a strong foundation in Japanese education, we have grown into a global consultancy supporting students across multiple destinations.",
                ].map((text, index) => (
                  <p key={index} className="text-lg text-gray-700 leading-relaxed">
                    {text}
                  </p>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            variants={ceoImageAnimation}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="hidden md:flex flex-col items-center order-1"
          >
            <div className="relative w-full max-w-[420px] h-[600px]">
              <div className="relative w-full h-full rounded-[22px] overflow-hidden shadow-xl">
                <Image
                  src="https://res.cloudinary.com/dvx9dcap6/image/upload/v1768383148/ceo1_sut1bx.jpg"
                  alt="Sunil Maharjan - Founder & CEO"
                  fill
                  priority
                  quality={85}
                  className="object-cover object-[42%_center]"
                />
              </div>
            </div>

            <div className="mt-6 text-center">
              <div className="font-bold text-gray-900 text-lg">
                SUNIL MAHARJAN
              </div>
              <div className="text-sm text-gray-600">
                Founder & CEO, Suyan Education
              </div>
            </div>
          </motion.div>

          <div className="hidden md:flex justify-center order-3">
            <div className="relative w-full max-w-[420px] h-[600px]">
              <div className="w-full h-full rounded-[22px] overflow-hidden shadow-xl">
                <video
                  src="https://res.cloudinary.com/dvx9dcap6/video/upload/v1768546068/FLAGANIMATION2_k5xkt0.webm"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
