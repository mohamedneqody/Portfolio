// ──────────────────────────────────────────────
// Portfolio – useMousePosition Hook
// ──────────────────────────────────────────────
import { useState, useEffect } from 'react';

export interface MousePosition {
  /** Absolute X position in pixels */
  x: number;
  /** Absolute Y position in pixels */
  y: number;
  /** X normalised to 0 – 1 across the viewport width */
  normX: number;
  /** Y normalised to 0 – 1 across the viewport height */
  normY: number;
}

/**
 * Track the current mouse (pointer) position.
 *
 * Returns both absolute pixel values and viewport-normalized (0-1) values —
 * handy for parallax offsets, cursor-follow effects, and spotlight
 * glassmorphism gradients.
 */
export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normX: 0.5,
    normY: 0.5,
  });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setPosition({
        x: e.clientX,
        y: e.clientY,
        normX: e.clientX / window.innerWidth,
        normY: e.clientY / window.innerHeight,
      });
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
}
