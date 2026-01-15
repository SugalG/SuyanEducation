/* ----------------------------------
   SHARED PREMIUM REVEAL VARIANTS
   (SLOW • GRACEFUL • CINEMATIC)
----------------------------------- */

// CARD — slow lift, anchors the section
export const cardReveal = {
    hidden: { opacity: 0, y: 160 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 2.6,                     // ⏳ much slower
            ease: [0.22, 1, 0.36, 1],          // soft, luxury curve
        },
    },
};

// RIGHT — message column (slow glide)
export const revealRight = {
    hidden: { opacity: 0, x: 180 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2.4,                     // ⏳ slower glide
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.35,             // 👈 relaxed pacing
            delayChildren: 0.45,
        },
    },
};

// TEXT LINES — gentle rise, no snap
export const revealItem = {
    hidden: { opacity: 0, y: 60 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.6,                     // slower per line
            ease: [0.25, 0.8, 0.25, 1],        // natural reading motion
        },
    },
};

// IMAGE — VERY SLOW, HEAVY DROP FROM TOP
// export const revealImageFromTop = {
//   hidden: {
//     opacity: 0,
//     y: -680,                             // ⬆️ unmistakable origin
//     scale: 0.78,                         // heavy compression
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 3.8,                     // 🐢 very slow, elegant
//       ease: [0.22, 1, 0.36, 1],           // cinematic gravity
//       delay: 0.35,
//     },
//   },
// };

export const revealMediaDrop = {
    hidden: {
        opacity: 0,
        y: -600,        // far outside viewport
        scale: 0.92,
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 2.8,                 // slower, cinematic
            ease: [0.22, 1, 0.36, 1],       // natural deceleration
            delay: 0.15,
        },
    },
};

export const revealImageFromTop = {
    hidden: {
        opacity: 0,
        y: -160,        // enough to feel “from top”
        scale: 0.96,
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 1.4,               // finishes early
            ease: [0.25, 0.9, 0.3, 1],    // smooth, not floaty
        },
    },
};

// LEFT — for services cards (slow glide from left)
export const revealLeft = {
    hidden: { opacity: 0, x: -180 }, // Negative x = from left
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2.4,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.35,
            delayChildren: 0.45,
        },
    },
};

// Service card from LEFT specifically
export const serviceCardRevealFromLeft = {
    hidden: {
        opacity: 0,
        x: -100, // Comes from left
        y: 20,   // Slight vertical offset for depth
    },
    show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 1.4,
            ease: [0.22, 0.9, 0.3, 1],
        },
    },
};

// Container for staggering service cards
export const serviceCardsContainerLeft = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.18, // Slightly faster stagger
            delayChildren: 0.1,
        },
    },
};
