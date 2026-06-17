// ──────────────────────────────────────────────
// Portfolio – useInView Hook
// ──────────────────────────────────────────────
import { useRef, useState, useEffect, useCallback, type RefObject } from 'react';

interface UseInViewOptions {
  /** Percentage of element visible before triggering (0 – 1). Default: 0.1 */
  threshold?: number;
  /** Root margin string (CSS-style). Default: '0px' */
  rootMargin?: string;
  /** If true, unobserve after the first intersection. Default: true */
  triggerOnce?: boolean;
}

/**
 * Detect whether a DOM element is visible in the viewport.
 *
 * @returns `[ref, isInView]` – attach the ref to the target element.
 *
 * @example
 * ```tsx
 * const [ref, isInView] = useInView({ threshold: 0.25 });
 * return <div ref={ref} className={isInView ? 'visible' : 'hidden'} />;
 * ```
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {},
): [RefObject<T | null>, boolean] {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      });
    },
    [triggerOnce],
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(handleIntersect, {
      threshold,
      rootMargin,
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [handleIntersect, threshold, rootMargin]);

  return [ref, isInView];
}
