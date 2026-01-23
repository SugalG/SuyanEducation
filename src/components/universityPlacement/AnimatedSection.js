"use client";

import { motion } from "framer-motion";
import React from "react";

const animations = {
  "fade-up": (delay) => ({
    hidden: {
      opacity: 0,
      transform: "translate3d(0, 40px, 0)",
    },
    show: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
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
      transform: "translate3d(0, -40px, 0)",
    },
    show: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
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
      transform: "translate3d(40px, 0, 0)",
    },
    show: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
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
      transform: "translate3d(-40px, 0, 0)",
    },
    show: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
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
      transform: "scale(0.95)",
    },
    show: {
      opacity: 1,
      transform: "scale(1)",
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
      layout={false}
      style={{
        willChange: "transform, opacity",
        backfaceVisibility: "hidden",
      }}
      initial="hidden"
      animate={animateImmediately ? "show" : undefined}
      whileInView={!animateImmediately ? "show" : undefined}
      viewport={{
        once,
        margin: "-100px",
        initialInView: true,
      }}
      variants={getAnimation(delay)}
    >
      {children}
    </motion.div>
  );
}
