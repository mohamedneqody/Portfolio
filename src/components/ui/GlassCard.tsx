"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  /** Enable hover interactions (tilt, glow, scale) */
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowX, setGlowX] = useState(50);
  const [glowY, setGlowY] = useState(50);
  const [isHovered, setIsHovered] = useState(false);
  const [borderAngle, setBorderAngle] = useState(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!hover || !cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // 3D tilt: max ±10 degrees
      setRotateX(((y - centerY) / centerY) * -10);
      setRotateY(((x - centerX) / centerX) * 10);

      // Glow position as percentage
      setGlowX((x / rect.width) * 100);
      setGlowY((y / rect.height) * 100);

      // Update border rotation angle based on mouse position
      const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
      setBorderAngle(angle);
    },
    [hover]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setRotateX(0);
    setRotateY(0);
    setGlowX(50);
    setGlowY(50);
    setIsHovered(false);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={`
        relative overflow-hidden rounded-2xl
        bg-[rgba(124,58,237,0.15)] backdrop-blur-md
        border border-white/10
        ${className}
      `}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: hover ? rotateX : 0,
        rotateY: hover ? rotateY : 0,
        y: [0, -3, 0],
      }}
      whileHover={hover ? { scale: 1.02 } : undefined}
      whileTap={hover ? { scale: 0.96, rotateX: 0, rotateY: 0 } : undefined}
      transition={{
        rotateX: { type: "spring", stiffness: 300, damping: 30 },
        rotateY: { type: "spring", stiffness: 300, damping: 30 },
        scale: { duration: 0.15 },
        y: {
          duration: 4,
          repeat: Infinity,
          repeatType: "loop" as const,
          ease: [0.45, 0, 0.55, 1] as const,
        },
      }}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
        boxShadow: isHovered
          ? "0 0 30px rgba(34,211,238,0.25), 0 0 60px rgba(124,58,237,0.15)"
          : "0 0 15px rgba(34,211,238,0.08), 0 0 30px rgba(124,58,237,0.05)",
      }}
    >
      {/* Ambient pulsing glow (always visible) */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        animate={{
          boxShadow: [
            "0 0 12px rgba(34,211,238,0.06), 0 0 24px rgba(124,58,237,0.04)",
            "0 0 20px rgba(34,211,238,0.12), 0 0 40px rgba(124,58,237,0.08)",
            "0 0 12px rgba(34,211,238,0.06), 0 0 24px rgba(124,58,237,0.04)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop" as const,
          ease: "easeInOut",
        }}
      />

      {/* Dynamic glow following cursor */}
      {hover && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(34,211,238,0.15) 0%, rgba(124,58,237,0.08) 30%, transparent 60%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}

      {/* Animated conic-gradient border overlay on hover */}
      {hover && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{
            padding: "1px",
            background: `conic-gradient(from ${borderAngle}deg, #7C3AED, #A855F7, #22D3EE, #38BDF8, #7C3AED)`,
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            borderRadius: "1rem",
          }}
        />
      )}

      {/* Reflection light streak */}
      {hover && (
        <motion.div
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute h-full w-[60%]"
            style={{
              background:
                "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 55%, transparent 60%)",
              top: 0,
              left: "-60%",
            }}
            animate={
              isHovered
                ? { left: ["−60%", "160%"] }
                : { left: "-60%" }
            }
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1] as const,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        </motion.div>
      )}

      {children}
    </motion.div>
  );
}
