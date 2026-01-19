// components/AnimatedSection.tsx
"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";


export default function AnimatedSection({ 
  children, 
  animation = "fade-up", 
  delay = 0, 
  className = "",
  once = true
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  // Use a more generous margin for initial viewport detection
  const isInView = useInView(ref, { 
    once, 
    margin: "0px 0px -100px 0px", // Only negative bottom margin
    amount: 0.1 // Trigger when at least 10% is visible
  });

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

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("animate");
      setHasAnimated(true);
    } else if (!once && !isInView) {
      controls.start("initial");
      setHasAnimated(false);
    }
  }, [isInView, controls, once, hasAnimated]);

  // Fallback: If element is in viewport on mount and hasn't animated after 500ms, trigger animation
  useEffect(() => {
    const checkIfInViewport = () => {
      if (!ref.current || hasAnimated) return;
      
      const rect = ref.current.getBoundingClientRect();
      const isVisible = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
      
      if (isVisible) {
        const timer = setTimeout(() => {
          if (!hasAnimated) {
            controls.start("animate");
            setHasAnimated(true);
          }
        }, 500); // Wait 500ms before fallback trigger
        return () => clearTimeout(timer);
      }
    };

    // Check after a short delay to allow for rendering
    const initialTimer = setTimeout(checkIfInViewport, 300);
    
    // Also check on resize and scroll
    window.addEventListener('resize', checkIfInViewport);
    window.addEventListener('scroll', checkIfInViewport);
    
    return () => {
      clearTimeout(initialTimer);
      window.removeEventListener('resize', checkIfInViewport);
      window.removeEventListener('scroll', checkIfInViewport);
    };
  }, [controls, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      variants={{
        initial: animations[animation].initial,
        animate: animations[animation].animate
      }}
      transition={animations[animation].transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}