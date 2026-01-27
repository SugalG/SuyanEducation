

"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";



export default function ScrollX({ children, duration = 40 }) {
  const controls = useAnimation();

  useEffect(() => {
    const loop = async () => {
      while (true) {
        await controls.start({
          x: ["0%", "-50%"],
          transition: { duration, ease: "linear", repeat: Infinity },
        });
      }
    };
    loop();
  }, [controls, duration]);

  return (
    <motion.div
      className="motion-element overflow-hidden"
      animate={controls}
      style={{ display: "flex", willChange: "transform", transform: "translateZ(0)" }}
    >
      {children}
      {children /* duplicate for seamless looping */}
    </motion.div>
  );
}