"use client";

import { motion } from "framer-motion";
import React from "react";

const animations = {
  "fade-up": (delay) => ({
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay,
      },
    },
  }),

  "fade-down": (delay) => ({
    hidden: {
      opacity: 0,
      y: -40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay,
      },
    },
  }),

  "fade-left": (delay) => ({
    hidden: {
      opacity: 0,
      x: 40,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay,
      },
    },
  }),

  "fade-right": (delay) => ({
    hidden: {
      opacity: 0,
      x: -40,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay,
      },
    },
  }),

  "zoom-in": (delay) => ({
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay,
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
  // 🔒 fallback protection
  const getAnimation =
    typeof animations[animation] === "function"
      ? animations[animation]
      : animations["fade-up"];

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={animateImmediately ? "show" : undefined}
      whileInView={!animateImmediately ? "show" : undefined}
      viewport={{
        once,
        margin: "0px", // Reduced from -100px for better mobile performance
      }}
      variants={getAnimation(delay)}
    >
      {children}
    </motion.div>
  );
}