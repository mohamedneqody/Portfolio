// ──────────────────────────────────────────────
// Portfolio – GSAP Animation Presets
// ──────────────────────────────────────────────
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─── Shared Types ────────────────────────────
type GsapTarget = gsap.TweenTarget;

interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
  scrollTrigger?: ScrollTrigger.Vars;
}

const defaults: Required<Pick<AnimationConfig, 'duration' | 'delay' | 'ease'>> = {
  duration: 0.8,
  delay: 0,
  ease: 'power3.out',
};

// ─── Fade In Up ──────────────────────────────
/**
 * Fade-in from below (y offset).
 */
export function fadeInUp(target: GsapTarget, config: AnimationConfig = {}): gsap.core.Tween {
  const { duration, delay, ease, scrollTrigger } = { ...defaults, ...config };
  return gsap.fromTo(
    target,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease,
      scrollTrigger: scrollTrigger ?? {
        trigger: target as gsap.DOMTarget,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    },
  );
}

// ─── Fade In Left ────────────────────────────
/**
 * Fade-in from the left.
 */
export function fadeInLeft(target: GsapTarget, config: AnimationConfig = {}): gsap.core.Tween {
  const { duration, delay, ease, scrollTrigger } = { ...defaults, ...config };
  return gsap.fromTo(
    target,
    { opacity: 0, x: -80 },
    {
      opacity: 1,
      x: 0,
      duration,
      delay,
      ease,
      scrollTrigger: scrollTrigger ?? {
        trigger: target as gsap.DOMTarget,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    },
  );
}

// ─── Fade In Right ───────────────────────────
/**
 * Fade-in from the right.
 */
export function fadeInRight(target: GsapTarget, config: AnimationConfig = {}): gsap.core.Tween {
  const { duration, delay, ease, scrollTrigger } = { ...defaults, ...config };
  return gsap.fromTo(
    target,
    { opacity: 0, x: 80 },
    {
      opacity: 1,
      x: 0,
      duration,
      delay,
      ease,
      scrollTrigger: scrollTrigger ?? {
        trigger: target as gsap.DOMTarget,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    },
  );
}

// ─── Stagger Children ────────────────────────
/**
 * Stagger-reveal children of a container.
 */
export function staggerChildren(
  container: GsapTarget,
  childSelector: string,
  config: AnimationConfig & { stagger?: number } = {},
): gsap.core.Tween {
  const { duration, delay, ease, stagger = 0.12, scrollTrigger } = { ...defaults, ...config };
  return gsap.fromTo(
    `${container as string} ${childSelector}`,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease,
      stagger,
      scrollTrigger: scrollTrigger ?? {
        trigger: container as gsap.DOMTarget,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    },
  );
}

// ─── Scale In ────────────────────────────────
/**
 * Scale from 0 to 1 with fade.
 */
export function scaleIn(target: GsapTarget, config: AnimationConfig = {}): gsap.core.Tween {
  const { duration, delay, ease, scrollTrigger } = { ...defaults, ...config };
  return gsap.fromTo(
    target,
    { opacity: 0, scale: 0 },
    {
      opacity: 1,
      scale: 1,
      duration,
      delay,
      ease: ease ?? 'back.out(1.7)',
      scrollTrigger: scrollTrigger ?? {
        trigger: target as gsap.DOMTarget,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    },
  );
}

// ─── Slide Reveal (clip-path) ────────────────
/**
 * Reveal via animated clip-path wipe.
 */
export function slideReveal(target: GsapTarget, config: AnimationConfig = {}): gsap.core.Tween {
  const { duration, delay, ease, scrollTrigger } = { ...defaults, ...config };
  return gsap.fromTo(
    target,
    { clipPath: 'inset(0 100% 0 0)' },
    {
      clipPath: 'inset(0 0% 0 0)',
      duration: duration ?? 1,
      delay,
      ease: ease ?? 'power4.inOut',
      scrollTrigger: scrollTrigger ?? {
        trigger: target as gsap.DOMTarget,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    },
  );
}

// ─── Counter Animation ──────────────────────
/**
 * Animate a number counter from 0 to `endValue`.
 * The `onUpdate` callback receives the current value each frame.
 */
export function counterAnimation(
  endValue: number,
  onUpdate: (value: number) => void,
  config: Omit<AnimationConfig, 'scrollTrigger'> & { decimals?: number } = {},
): gsap.core.Tween {
  const { duration = 2, delay, ease = 'power2.out', decimals = 0 } = { ...defaults, ...config };
  const counter = { value: 0 };
  return gsap.to(counter, {
    value: endValue,
    duration,
    delay,
    ease,
    onUpdate: () => {
      onUpdate(Number(counter.value.toFixed(decimals)));
    },
  });
}

// ─── Parallax Scroll ─────────────────────────
/**
 * Apply a vertical parallax offset driven by scroll position.
 */
export function parallaxScroll(
  target: GsapTarget,
  config: { speed?: number; scrub?: boolean | number } = {},
): gsap.core.Tween {
  const { speed = 0.3, scrub = true } = config;
  return gsap.to(target, {
    y: () => `${speed * 100}%`,
    ease: 'none',
    scrollTrigger: {
      trigger: target as gsap.DOMTarget,
      start: 'top bottom',
      end: 'bottom top',
      scrub,
    },
  });
}

// ─── Text Reveal (character split) ──────────
/**
 * Split-text character reveal animation.
 * Wraps each character in a `<span>` and staggers them in.
 * Returns the timeline for further chaining.
 *
 * @param target – a CSS selector or DOM element whose `textContent` will be split.
 */
export function textReveal(
  target: HTMLElement,
  config: AnimationConfig & { stagger?: number } = {},
): gsap.core.Timeline {
  const { duration = 0.5, delay, ease, stagger = 0.03, scrollTrigger } = {
    ...defaults,
    ...config,
  };

  // Split text content into individual character spans
  const text = target.textContent ?? '';
  target.innerHTML = text
    .split('')
    .map((char) =>
      char === ' '
        ? '<span style="display:inline-block">&nbsp;</span>'
        : `<span style="display:inline-block; opacity:0">${char}</span>`,
    )
    .join('');

  const chars = target.querySelectorAll('span');
  const tl = gsap.timeline({
    scrollTrigger: scrollTrigger ?? {
      trigger: target,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });

  tl.fromTo(
    chars,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration, delay, ease, stagger },
  );

  return tl;
}
