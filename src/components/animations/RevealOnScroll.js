"use client";

import { motion } from "framer-motion";

export default function RevealOnScroll({
  children,
  variants,
  className = "",
  amount = 0.6,
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,

        // 🔑 THIS IS THE FIX
        // Ensures animation triggers only when section is well inside view
        // and fully resets when it leaves
        margin: "-120px 0px -120px 0px",

        amount,
      }}
    >
      {children}
    </motion.div>
  );
}
