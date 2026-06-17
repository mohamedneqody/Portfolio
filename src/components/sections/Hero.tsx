'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '@/lib/constants';
import MagneticButton from '@/components/ui/MagneticButton';
import FloatingElement from '@/components/ui/FloatingElement';

// ──────────────────────────────────────────────
// Hero Section – Full-screen landing
// ──────────────────────────────────────────────

const roles = [
  'مهندس بيانات وذكاء اصطناعي',
  'خبير تعلم الآلة والتعلم العميق',
  'مطور نماذج لغوية كبيرة (LLMs)',
  'مطور ويب متكامل',
];

/** Staggered text fade variants */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const child = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const textRevealContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.4 },
  },
};

const textRevealChar = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', damping: 12, stiffness: 100 } as const,
  },
};

export default function Hero() {
  // ── Typing Effect ─────────────────────────────
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const typingRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const currentRole = roles[roleIndex];

  useEffect(() => {
    const speed = deleting ? 40 : 80;
    const pause = !deleting && charIndex === currentRole.length ? 2000 : speed;

    typingRef.current = setTimeout(() => {
      if (!deleting && charIndex === currentRole.length) {
        setDeleting(true);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCharIndex((prev) => prev + (deleting ? -1 : 1));
      }
    }, pause);

    return () => {
      if (typingRef.current) clearTimeout(typingRef.current);
    };
  }, [charIndex, deleting, currentRole.length, roleIndex]);

  // ── GSAP Parallax ──────────────────────────────
  useEffect(() => {
    import('gsap').then(({ default: gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          if (textRef.current && bgRef.current) {
            // Text moves up slightly faster than user scrolls
            gsap.to(textRef.current, {
              y: -150,
              ease: 'none',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
              },
            });

            // Background elements move down to create immense depth
            gsap.to(bgRef.current, {
              y: 200,
              ease: 'none',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
              },
            });
          }
        }, sectionRef);

        return () => ctx.revert();
      });
    });
  }, []);

  // ── Mouse Tracking (Motion Values for Parallax) ──
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the cursor light (Smoother interpolation as requested)
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 25, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 25, mass: 0.5 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    },
    [mouseX, mouseY]
  );

  const nameWords = siteConfig.name.split(" ");

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-transparent"
    >
      {/* ── Background parallax wrapper ────────── */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        {/* ── Moving Blurred Gradient Blobs ────────── */}
        <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[100px] animate-[blob_20s_ease-in-out_infinite]" />
        <div className="absolute -right-1/4 bottom-1/3 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[90px] animate-[blob_25s_ease-in-out_infinite_reverse]" />
        <div className="absolute left-1/3 top-2/3 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[80px] animate-[blob_18s_ease-in-out_infinite_2s]" />
      </div>

      {/* ── Cinematic Subtle Light Rays (God Rays) ────────── */}
      <div className="pointer-events-none absolute -top-[20%] left-1/2 z-0 h-[100%] w-[150%] -translate-x-1/2 opacity-15 mix-blend-screen">
        <div 
          className="absolute inset-0 animate-[spin_60s_linear_infinite]"
          style={{
            background: 'conic-gradient(from 0deg at 50% 10%, transparent 40%, rgba(34, 211, 238, 0.4) 45%, rgba(124, 58, 237, 0.2) 50%, rgba(34, 211, 238, 0.4) 55%, transparent 60%)'
          }}
        />
      </div>

      {/* ── Mouse-following Spotlight ────────── */}
      <motion.div
        className="pointer-events-none absolute z-[1] h-[600px] w-[600px] rounded-full blur-[100px]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, rgba(124,58,237,0.06) 50%, transparent 70%)',
        }}
      />

      {/* ── Floating Light Streaks ────────── */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <div className="absolute -left-20 top-[20%] h-[1px] w-[300px] rotate-[30deg] bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-[streak_12s_linear_infinite]" />
        <div className="absolute -right-10 top-[40%] h-[1px] w-[250px] rotate-[-20deg] bg-gradient-to-r from-transparent via-primary/25 to-transparent animate-[streak_15s_linear_infinite_3s]" />
        <div className="absolute left-[30%] bottom-[15%] h-[1px] w-[200px] rotate-[15deg] bg-gradient-to-r from-transparent via-secondary/20 to-transparent animate-[streak_18s_linear_infinite_6s]" />
      </div>

      {/* ── Floating decorative elements with Parallax ─────────── */}
      <FloatingElement shape="circle" size={80} duration={7} className="left-[10%] top-[20%] bg-primary/10" mouseX={mouseX} mouseY={mouseY} depth={0.03} />
      <FloatingElement shape="square" size={50} duration={8} delay={1} className="right-[15%] top-[30%] bg-secondary/10" mouseX={mouseX} mouseY={mouseY} depth={0.05} />
      <FloatingElement shape="circle" size={40} duration={6} delay={2} className="bottom-[25%] left-[20%] bg-accent/10" mouseX={mouseX} mouseY={mouseY} depth={-0.02} />
      <FloatingElement shape="triangle" size={55} duration={9} delay={0.5} className="bottom-[35%] right-[10%]" mouseX={mouseX} mouseY={mouseY} depth={-0.04} />

      </div>

      {/* ── Main content ─────────────────────────── */}
      <motion.div
        ref={textRef}
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl px-4 text-center sm:px-6"
      >
        <motion.p variants={child} className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-highlight/60">
          مرحباً، أنا
        </motion.p>

        {/* ── Halo Glow behind Name ────────── */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-[200px] w-[600px] rounded-full bg-primary/30 blur-[100px] sm:h-[250px] sm:w-[800px]" />
          </div>
          <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-[120px] w-[400px] rounded-full bg-accent/20 blur-[80px] sm:h-[150px] sm:w-[500px]" />
          </div>

          {/* ── Premium Character Reveal & Animated Gradient Text ────────── */}
          <motion.h1
            variants={textRevealContainer}
            initial="hidden"
            animate="visible"
            className="mb-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-5xl font-extrabold leading-tight tracking-tight sm:text-7xl lg:text-8xl"
            dir="ltr"
          >
            {nameWords.map((word, index) => (
              <span key={index} className="inline-block whitespace-nowrap">
                {word.split("").map((char, charIdx) => (
                  <motion.span
                    key={charIdx}
                    variants={textRevealChar}
                    className="inline-block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_8s_ease_infinite]"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>
        </div>

        {/* Typing role */}
        <motion.div variants={child} className="mb-8 flex flex-row-reverse items-center justify-center gap-2">
          <span className="text-xl font-light text-white/70 sm:text-2xl">أنا</span>
          <span className="inline-block text-right text-xl font-semibold text-highlight/80 sm:text-2xl" dir="rtl">
            {currentRole.slice(0, charIndex)}
            <span
              className="mr-0.5 inline-block w-[2px] animate-[blink_1s_step-end_infinite] bg-accent align-middle"
              style={{ height: '1.2em' }}
            />
          </span>
        </motion.div>

        <motion.p variants={child} className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg">
          {siteConfig.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={child} className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <MagneticButton href="#contact" strength={0.2} className="bg-[#38BDF8] hover:bg-[#0284C7] shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all">
            لنتعاون معاً
          </MagneticButton>
          <motion.a 
            href="/cv.pdf" 
            download
            className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-3.5 text-base font-bold text-white transition-all hover:bg-white/5 hover:border-[#38BDF8]/60"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            تحميل الـ CV
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ── Scroll-down indicator ────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-semibold tracking-widest text-white/40">
          تمرير لأسفل
        </span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={20} className="text-accent/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
