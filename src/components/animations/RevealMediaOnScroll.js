"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function RevealMediaOnScroll({
  children,
  variants,
  className = "",
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    margin: "-20% 0px -20% 0px", // must fully leave before reset
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
}
