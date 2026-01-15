"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import {
  motion,
  useInView,
  useAnimationControls,
  useReducedMotion,
} from "framer-motion";

const EASE_PREMIUM = [0.22, 1, 0.36, 1];

export default function MessageFromCEOSection() {
  const ref = useRef(null);
  const controls = useAnimationControls();
  const reduceMotion = useReducedMotion();

  const inView = useInView(ref, {
    amount: 0.35,
    margin: "0px 0px -12% 0px",
  });

  useEffect(() => {
    controls.start(inView ? "show" : "hidden");
  }, [inView, controls]);

  const card = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const cardShell = reduceMotion
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 28 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: EASE_PREMIUM },
        },
      };

  const mediaInner = reduceMotion
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: -72, scale: 0.985 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.95,
            ease: EASE_PREMIUM,
          },
        },
      };

  const textCol = reduceMotion
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, x: 24 },
        show: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.6,
            ease: EASE_PREMIUM,
            staggerChildren: 0.16,
          },
        },
      };

  const textItem = reduceMotion
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      };

  return (
    <section ref={ref} className="relative py-36">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={card}
        className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={cardShell}
          className="px-10 sm:px-14 lg:px-24 py-28 bg-white/95"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-24 items-center">
            {/* MEDIA */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-[420px] h-[620px]">
                <div className="relative w-full h-full rounded-[32px] overflow-hidden border-[6px] border-white shadow-2xl bg-white">
                  <motion.div variants={mediaInner} className="absolute inset-0">
                    <Image
                      src="https://res.cloudinary.com/dvx9dcap6/image/upload/v1768383148/ceo1_sut1bx.jpg"
                      alt="Founder & Managing Director"
                      fill
                      className="object-cover object-[45%_top]"
                      priority
                    />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* TEXT */}
            <motion.div variants={textCol} className="space-y-10 max-w-xl">
              <motion.div variants={textItem}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100">
                  <Star className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-medium text-gray-700">
                    Message from the Founder
                  </span>
                </div>
              </motion.div>

              <motion.h2
                variants={textItem}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                  Building Global Futures with Purpose
                </span>
              </motion.h2>

              <motion.div variants={textItem} className="relative">
                <Quote
                  className="
                    pointer-events-none
                    absolute
                    -top-10
                    -left-8
                    w-20
                    h-20
                    text-red-100
                    opacity-70
                    -z-10
                  "
                />
                <p className="relative z-10 text-lg text-gray-700 leading-relaxed">
                  Studying abroad is not just about traveling — it is a
                  life-changing decision that shapes one’s future.
                </p>
              </motion.div>

              <motion.p variants={textItem} className="text-lg text-gray-700">
                Our journey began with Japanese education and expanded globally
                with clarity and purpose.
              </motion.p>

              <motion.div
                variants={textItem}
                className="pt-8 border-t border-gray-200"
              >
                <div className="font-bold text-gray-900 text-lg">
                  Founder & Managing Director
                </div>
                <div className="text-sm text-gray-600">
                  Suyan Education Consultancy
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
