"use client";

import { useRef, useState, useCallback, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  /** Magnetic pull strength, 0-1 range. Default 0.4 */
  strength?: number;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: string;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  strength = 0.4,
  type = "button",
  disabled = false,
  variant,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      x.set(deltaX);
      y.set(deltaY);
    },
    [strength, x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  }, [x, y]);

  const handleMouseEnter = useCallback(() => {
    if (disabled) return;
    setIsHovered(true);
  }, [disabled]);

  const sharedProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onMouseEnter: handleMouseEnter,
    className: `
      relative inline-flex items-center justify-center
      overflow-hidden rounded-xl px-8 py-3
      font-semibold text-white
      transition-shadow duration-300
      ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      ${
        isHovered && !disabled
          ? "shadow-lg shadow-[#3b82f6]/25"
          : "shadow-md shadow-black/30"
      }
      ${className}
    `,
    style: {
      x: springX,
      y: springY,
      background: "linear-gradient(135deg, #4f46e5, #3b82f6)",
    },
  };

  const innerContent = (
    <>
      {/* Hover glow overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered && !disabled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Shimmer effect */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={
          isHovered && !disabled
            ? {
                background: [
                  "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)",
                  "linear-gradient(105deg, transparent 70%, rgba(255,255,255,0.15) 90%, transparent 110%)",
                ],
              }
            : {}
        }
        transition={{ duration: 0.6 }}
      />

      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        {...(sharedProps as React.ComponentProps<typeof motion.a>)}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        whileTap={disabled ? undefined : { scale: 0.95 }}
      >
        {innerContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...(sharedProps as React.ComponentProps<typeof motion.button>)}
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileTap={disabled ? undefined : { scale: 0.95 }}
    >
      {innerContent}
    </motion.button>
  );
}
