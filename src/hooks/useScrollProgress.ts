// ──────────────────────────────────────────────
// Portfolio – useScrollProgress Hook
// ──────────────────────────────────────────────
import { useState, useEffect } from 'react';

/**
 * Returns the page scroll progress as a value between 0 and 1.
 *
 * - `0` = at the very top of the page
 * - `1` = at the very bottom
 *
 * Uses a passive scroll listener for zero-impact on scroll performance.
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    }

    // Calculate initial value
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}
