'use client';

import { motion, MotionValue, useTransform, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface FloatingElementProps {
  shape?: 'circle' | 'square' | 'triangle';
  size?: number;
  className?: string;
  duration?: number;
  delay?: number;
  mouseX?: MotionValue<number>;
  mouseY?: MotionValue<number>;
  depth?: number;
}

export default function FloatingElement({
  shape = 'circle',
  size = 60,
  className,
  duration = 6,
  delay = 0,
  mouseX,
  mouseY,
  depth = 0.05,
}: FloatingElementProps) {
  const [windowSize, setWindowSize] = useState({ w: 1000, h: 800 });

  useEffect(() => {
    setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    const handleResize = () => setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fallbackX = useMotionValue(0);
  const fallbackY = useMotionValue(0);

  // Parallax calculations based on mouse position
  const x = useTransform(mouseX || fallbackX, (val) => {
    if (!mouseX) return 0;
    return (val - windowSize.w / 2) * depth;
  });
  
  const y = useTransform(mouseY || fallbackY, (val) => {
    if (!mouseY) return 0;
    return (val - windowSize.h / 2) * depth;
  });

  const shapeClasses: Record<string, string> = {
    circle: 'rounded-full',
    square: 'rounded-lg rotate-45',
    triangle: '',
  };

  if (shape === 'triangle') {
    return (
      <motion.div
        className={cn('absolute pointer-events-none', className)}
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
        style={{ width: 0, height: 0, x, y }}
      >
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: `${size / 2}px solid transparent`,
            borderRight: `${size / 2}px solid transparent`,
            borderBottom: `${size}px solid rgba(255, 255, 255, 0.1)`,
          }}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn(
        'absolute pointer-events-none border border-white/10',
        shapeClasses[shape],
        className,
      )}
      style={{ width: size, height: size, x, y }}
      animate={{ y: [0, -20, 0], rotate: shape === 'square' ? [45, 90, 45] : [0, 0, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}
