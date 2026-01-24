// "use client";

// import { motion } from "framer-motion";
// import React from "react";

// const animations = {
//   "fade-up": (delay) => ({
//     hidden: { opacity: 0, y: 40 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay } },
//   }),
//   "fade-down": (delay) => ({
//     hidden: { opacity: 0, y: -40 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay } },
//   }),
//   "fade-left": (delay) => ({
//     hidden: { opacity: 0, x: 40 },
//     show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay } },
//   }),
//   "fade-right": (delay) => ({
//     hidden: { opacity: 0, x: -40 },
//     show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay } },
//   }),
//   "zoom-in": (delay) => ({
//     hidden: { opacity: 0, scale: 0.95 },
//     show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut", delay } },
//   }),
// };

// export default function AnimatedSection({
//   children,
//   animation = "fade-up",
//   delay = 0,
//   className = "",
//   animateImmediately = false,
//   once = true,
// }) {
//   const anim = animations[animation] || animations["fade-up"];
  
//   return (
//     <motion.div
//       className={className}
//       initial="hidden"
//       animate={animateImmediately ? "show" : undefined}
//       whileInView={!animateImmediately ? "show" : undefined}
//       viewport={{ once, margin: "-50px" }}
//       variants={anim(delay)}
//     >
//       {children}
//     </motion.div>
//   );
// }

"use client";

import { motion, useReducedMotion } from "framer-motion";
import React, { useEffect, useState } from "react";

const animations = {
  "fade-up": (delay, isMobile, shouldReduceMotion) => ({
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : (isMobile ? 20 : 40), // Smaller on mobile
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.3 : (isMobile ? 0.5 : 0.6), // Shorter on mobile
        ease: "easeOut", // Keep simple easing
        delay: shouldReduceMotion ? 0 : delay,
      },
    },
  }),

  "fade-down": (delay, isMobile, shouldReduceMotion) => ({
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : (isMobile ? -20 : -40),
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.3 : (isMobile ? 0.5 : 0.6),
        ease: "easeOut",
        delay: shouldReduceMotion ? 0 : delay,
      },
    },
  }),

  "fade-left": (delay, isMobile, shouldReduceMotion) => ({
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : (isMobile ? 20 : 40),
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0.3 : (isMobile ? 0.5 : 0.6),
        ease: "easeOut",
        delay: shouldReduceMotion ? 0 : delay,
      },
    },
  }),

  "fade-right": (delay, isMobile, shouldReduceMotion) => ({
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : (isMobile ? -20 : -40),
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0.3 : (isMobile ? 0.5 : 0.6),
        ease: "easeOut",
        delay: shouldReduceMotion ? 0 : delay,
      },
    },
  }),

  "zoom-in": (delay, isMobile, shouldReduceMotion) => ({
    hidden: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.95,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.3 : (isMobile ? 0.4 : 0.5),
        ease: "easeOut",
        delay: shouldReduceMotion ? 0 : delay,
      },
    },
  }),
};

export default function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
  animateImmediately = false,
  once = true,
}) {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile early
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    const resizeListener = () => {
      requestAnimationFrame(checkMobile); // Debounce with RAF
    };
    
    window.addEventListener('resize', resizeListener);
    return () => window.removeEventListener('resize', resizeListener);
  }, []);

  // 🔒 fallback protection
  const getAnimation =
    typeof animations[animation] === "function"
      ? animations[animation]
      : animations["fade-up"];

  return (
    <motion.div
      className={className}
      layout={false}
      style={{
        backfaceVisibility: "hidden", // Only keep this one
        transformStyle: "preserve-3d", // Helps with GPU acceleration
      }}
      initial="hidden"
      animate={animateImmediately ? "show" : undefined}
      whileInView={!animateImmediately ? "show" : undefined}
      viewport={{
        once,
        margin: isMobile ? "0px" : "-50px", // No negative margin on mobile
        amount: 0.2, // Trigger when 20% visible (better for mobile)
      }}
      variants={getAnimation(delay, isMobile, shouldReduceMotion)}
    >
      {children}
    </motion.div>
  );
}