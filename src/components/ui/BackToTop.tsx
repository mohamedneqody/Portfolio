"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Derive circumference for progress ring (radius = 22)
  const radius = 22;
  const circumference = 2 * Math.PI * radius;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={scrollToTop}
          className="
            fixed bottom-8 right-8 z-50
            flex h-14 w-14 items-center justify-center
            rounded-full
            bg-[rgba(124,58,237,0.5)] backdrop-blur-md
            border border-white/10
            text-white/80 hover:text-white
            shadow-lg shadow-black/30
            cursor-pointer
            group
          "
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          {/* Circular progress ring (SVG) */}
          <svg
            className="absolute inset-0 -rotate-90"
            width="56"
            height="56"
            viewBox="0 0 56 56"
          >
            {/* Background track */}
            <circle
              cx="28"
              cy="28"
              r={radius}
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
            />
            {/* Progress arc */}
            <motion.circle
              cx="28"
              cy="28"
              r={radius}
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={circumference}
              style={{
                strokeDashoffset: smoothProgress.get()
                  ? undefined
                  : circumference,
                pathLength: smoothProgress,
              }}
              // Use pathLength from Framer Motion
            />
            <defs>
              <linearGradient
                id="progressGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#cccccc" />
              </linearGradient>
            </defs>
          </svg>

          <ArrowUp
            size={20}
            className="relative transition-transform duration-200 group-hover:-translate-y-0.5"
          />

          {/* Hover glow */}
          <div
            className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle, rgba(241,74,0,0.2) 0%, transparent 70%)",
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
