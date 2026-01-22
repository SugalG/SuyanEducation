"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const EASE_PREMIUM = [0.22, 1, 0.36, 1];

export default function MessageFromCEOSection() {
  const [hasAnimated, setHasAnimated] = useState(false);

  // Trigger animation immediately on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants for immediate animation
  const fadeRightVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: (delay) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: EASE_PREMIUM,
        delay: delay * 0.1,
      },
    }),
  };

  return (
    <section className="relative py-16 md:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {/* Badge */}
          <motion.div
            custom={1}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            variants={fadeRightVariants}
          >
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100">
                <Star className="w-4 h-4 text-red-600" />
                <span className="text-sm font-semibold tracking-wide text-gray-800">
                  Message from the Founder
                </span>
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            custom={2}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            variants={fadeRightVariants}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-center">
              <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                Building Global Futures with Purpose
              </span>
            </h2>
          </motion.div>

          {/* CEO Image */}
          <motion.div
            custom={3}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            variants={fadeRightVariants}
          >
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-[360px] h-[350px] rounded-[22px] overflow-hidden shadow-xl">
                <Image
                  src="https://res.cloudinary.com/dvx9dcap6/image/upload/v1768383148/ceo1_sut1bx.jpg"
                  alt="Sunil Maharjan - Founder & CEO"
                  fill
                  priority
                  quality={85}
                  className="object-cover object-[42%_12%]"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="mt-4 text-center">
                <div className="font-bold text-gray-900">SUNIL MAHARJAN</div>
                <div className="text-sm text-gray-600">
                  Founder & CEO, Suyan Education
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            custom={4}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            variants={fadeRightVariants}
          >
            <div className="space-y-4 text-center">
              {[
                "At Suyan Education, we believe that studying abroad is more than an academic journey — it is a transformational step toward a student's future and global perspective.",
                "Our mission has always been rooted in honest guidance, transparent processes, and personalized counseling built on real experience.",
                "From a strong foundation in Japanese education, we have grown into a global consultancy supporting students across multiple destinations.",
              ].map((text, i) => (
                <p key={i} className="text-sm text-gray-700 leading-relaxed">
                  {text}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Video */}
          <motion.div
            custom={5}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            variants={fadeRightVariants}
          >
            <div className="relative h-[450px] overflow-hidden rounded-[22px]">
              <video
                src="https://res.cloudinary.com/dvx9dcap6/video/upload/v1768546068/FLAGANIMATION2_k5xkt0.webm"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* Desktop & Tablet Layout (md and above) */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
            {/* Left Column - CEO Image (hidden on md, visible on lg) */}
            <motion.div
              custom={1}
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              variants={fadeRightVariants}
              className="hidden lg:block"
            >
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-full max-w-[420px] h-[500px] lg:h-[600px] rounded-[22px] overflow-hidden shadow-xl">
                  <Image
                    src="https://res.cloudinary.com/dvx9dcap6/image/upload/v1768383148/ceo1_sut1bx.jpg"
                    alt="Sunil Maharjan - Founder & CEO"
                    fill
                    priority
                    quality={85}
                    className="object-cover object-[42%_center]"
                    sizes="(min-width: 1024px) 420px, (min-width: 768px) 320px, 100vw"
                  />
                </div>
                <div className="mt-6 text-center">
                  <div className="font-bold text-gray-900 text-lg">
                    SUNIL MAHARJAN
                  </div>
                  <div className="text-sm text-gray-600">
                    Founder & CEO, Suyan Education
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Middle Column - Content (full width on md, middle on lg) */}
            <motion.div
              custom={2}
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              variants={fadeRightVariants}
              className="lg:col-span-1"
            >
              <div className="space-y-6 lg:space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100">
                  <Star className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-semibold tracking-wide text-gray-800">
                    Message from the Founder
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                    Building Global Futures with Purpose
                  </span>
                </h2>

                {/* Text Content */}
                <div className="space-y-4">
                  {[
                    "At Suyan Education, we believe that studying abroad is more than an academic journey — it is a transformational step toward a student's future and global perspective.",
                    "Our mission has always been rooted in honest guidance, transparent processes, and personalized counseling built on real experience.",
                    "From a strong foundation in Japanese education, we have grown into a global consultancy supporting students across multiple destinations.",
                  ].map((text, index) => (
                    <p
                      key={index}
                      className="text-lg text-gray-700 leading-relaxed"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column */}
            <div className="lg:block">
              {/* CEO Image - Only shown on tablet (md), hidden on desktop (lg) */}
              <motion.div
                custom={3}
                initial="hidden"
                animate={hasAnimated ? "visible" : "hidden"}
                variants={fadeRightVariants}
                className="block lg:hidden w-full mb-8"
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-full max-w-[420px] h-[350px] rounded-[22px] overflow-hidden shadow-xl">
                    <Image
                      src="https://res.cloudinary.com/dvx9dcap6/image/upload/v1768383148/ceo1_sut1bx.jpg"
                      alt="Sunil Maharjan - Founder & CEO"
                      fill
                      priority
                      quality={85}
                      className="object-cover object-[42%_center]"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <div className="font-bold text-gray-900">
                      SUNIL MAHARJAN
                    </div>
                    <div className="text-sm text-gray-600">
                      Founder & CEO, Suyan Education
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Video - Always shown on md and lg */}
              <motion.div
                custom={4}
                initial="hidden"
                animate={hasAnimated ? "visible" : "hidden"}
                variants={fadeRightVariants}
              >
                <div className="relative w-full max-w-[420px] h-[450px] md:h-[600px] rounded-[22px] overflow-hidden">
                  <video
                    src="https://res.cloudinary.com/dvx9dcap6/video/upload/v1768546068/FLAGANIMATION2_k5xkt0.webm"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
