"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function MouseEffects() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.closest('.cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleClick = (e: MouseEvent) => {
      const newClick = { id: Date.now(), x: e.clientX, y: e.clientY };
      setClicks((prev) => [...prev, newClick]);
      setTimeout(() => {
        setClicks((prev) => prev.filter((click) => click.id !== newClick.id));
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      {/* Subtle Mouse Glow (Light Spotlight following cursor) */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-40 transition-opacity duration-300"
        animate={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(124, 58, 237, 0.05), transparent 40%)`,
        }}
      />

      {/* Custom Cursor Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] h-2 w-2 rounded-full bg-[#22D3EE] mix-blend-screen"
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
          scale: isHovering ? 0 : 1
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />

      {/* Custom Cursor Trailing Ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[90] h-8 w-8 rounded-full border border-[#7C3AED]/50 bg-[#7C3AED]/10 backdrop-blur-[1px]"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? "rgba(34,211,238,0.5)" : "rgba(124,58,237,0.5)",
          backgroundColor: isHovering ? "rgba(34,211,238,0.1)" : "rgba(124,58,237,0.1)"
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />

      {/* Click Ripples */}
      <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
        <AnimatePresence>
          {clicks.map((click) => (
            <motion.div
              key={click.id}
              initial={{ opacity: 0.8, scale: 0 }}
              animate={{ opacity: 0, scale: 2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                position: "absolute",
                left: click.x - 20,
                top: click.y - 20,
              }}
              className="h-10 w-10 rounded-full border-2 border-[#22D3EE]/50 bg-[#7C3AED]/20 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
            />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
