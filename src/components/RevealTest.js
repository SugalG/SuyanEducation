"use client";

import { motion } from "framer-motion";

// fadeUp animation with optional delay
const getFadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

export default function RevealTest({ children, className = "", animateImmediately = false, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={animateImmediately ? "show" : undefined}
      whileInView={!animateImmediately ? "show" : undefined}
      viewport={{ once: true, margin: "0px", initialInView: true }}
      variants={getFadeUp(delay)}
    >
      {children}
    </motion.div>
  );
}
