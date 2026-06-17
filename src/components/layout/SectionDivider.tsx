"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ──────────────────────────────────────────────
// SectionDivider – Animated gradient mesh divider
// ──────────────────────────────────────────────

export default function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null);

  // Parallax: subtle vertical shift on scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <div
      ref={ref}
      className="pointer-events-none relative h-[100px] w-full overflow-hidden select-none"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
      }}
    >
      {/* Gradient mesh blobs with breathing animation */}
      <motion.div
        className="absolute inset-0"
        style={{ y: parallaxY }}
      >
        {/* Blob 1 – Primary */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "40%",
            height: "120%",
            left: "10%",
            top: "-10%",
            background:
              "radial-gradient(ellipse at center, rgba(124,58,237,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop" as const,
            ease: "easeInOut",
          }}
        />

        {/* Blob 2 – Secondary */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "35%",
            height: "130%",
            left: "45%",
            top: "-15%",
            background:
              "radial-gradient(ellipse at center, rgba(168,85,247,0.10) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "loop" as const,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Blob 3 – Accent */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "30%",
            height: "110%",
            right: "5%",
            top: "-5%",
            background:
              "radial-gradient(ellipse at center, rgba(34,211,238,0.08) 0%, transparent 70%)",
            filter: "blur(45px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "loop" as const,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Blob 4 – Extra Glow (subtle) */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "25%",
            height: "100%",
            left: "30%",
            top: "0%",
            background:
              "radial-gradient(ellipse at center, rgba(56,189,248,0.06) 0%, transparent 70%)",
            filter: "blur(35px)",
          }}
          animate={{
            scale: [1.05, 0.95, 1.05],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            repeatType: "loop" as const,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.div>

      {/* Horizontal center gradient line */}
      <motion.div
        className="absolute top-1/2 right-0 left-0 h-px -translate-y-1/2"
        style={{
          background:
            "linear-gradient(to left, transparent 0%, rgba(34,211,238,0.4) 20%, rgba(124,58,237,0.5) 50%, rgba(34,211,238,0.4) 80%, transparent 100%)",
          y: parallaxY,
        }}
      />

      {/* Secondary thinner glow line behind */}
      <motion.div
        className="absolute top-1/2 right-0 left-0 h-[3px] -translate-y-1/2"
        style={{
          background:
            "linear-gradient(to left, transparent 5%, rgba(56,189,248,0.15) 25%, rgba(168,85,247,0.2) 50%, rgba(56,189,248,0.15) 75%, transparent 95%)",
          filter: "blur(2px)",
          y: parallaxY,
        }}
      />
    </div>
  );
}
