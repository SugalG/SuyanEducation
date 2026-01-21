// components/TimelineConnector.tsx
"use client";

import { motion } from "framer-motion";

export default function TimelineConnector() {
  return (
    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 overflow-hidden">
      {/* Animated gradient line */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-red-500 via-red-400 to-blue-700"
        initial={{ y: "-100%" }}
        animate={{ y: "100%" }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Solid background line */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-100 via-red-50 to-blue-100" />
    </div>
  );
}