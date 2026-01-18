// components/AnimatedSection.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";


export default function AnimatedSection({ 
  children, 
  animation = "fade-up", 
  delay = 0, 
  className = "",
  once = true 
}) {
  const animations = {
    "fade-up": {
      initial: { opacity: 0, y: 40 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }
    },
    "fade-down": {
      initial: { opacity: 0, y: -40 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }
    },
    "fade-left": {
      initial: { opacity: 0, x: 40 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }
    },
    "fade-right": {
      initial: { opacity: 0, x: -40 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }
    },
    "zoom-in": {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }
    },
    "slide-up": {
      initial: { opacity: 0, y: 80 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1], delay }
    },
    "slide-right": {
      initial: { opacity: 0, x: -80 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1], delay }
    }
  };

  return (
    <motion.div
      initial={animations[animation].initial}
      whileInView={animations[animation].animate}
      viewport={{ once, margin: "-50px" }}
      transition={animations[animation].transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}