'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '@/lib/constants';
import { colors, motionTokens } from '@/styles';

// ──────────────────────────────────────────────
// Hero Section – The Neural Core & Data Stream
// ──────────────────────────────────────────────

const roles = [
  { text: 'LLM Systems Developer', highlight: 'LLM' },
  { text: 'Multi-Agent Systems Architect', highlight: 'Multi-Agent' },
  { text: 'Python Backend Engineer', highlight: 'Python' },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const child = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionTokens.duration.medium, ease: motionTokens.ease.outExpo },
  },
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Rotate roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentRole = roles[roleIndex];

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-transparent"
    >
      {/* ── Visual Signature: The Neural Core ────────── */}
      {/* Kept at 15-20% visual weight so it doesn't overpower the text */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-25">
        {/* Core Node */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-32 h-32 md:w-48 md:h-48 rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors.primary} 0%, transparent 70%)`,
            boxShadow: `0 0 60px ${colors.primary}40, inset 0 0 20px ${colors.accent}40`
          }}
        >
          {/* Inner tight core */}
          <div className="absolute inset-[30%] rounded-full bg-white/20 blur-md" />
        </motion.div>
        
        {/* Orbital Rings - Represents connections */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-white/5"
          style={{ borderTopColor: colors.primarySoft }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-white/[0.03]"
          style={{ borderRightColor: colors.accent }}
        />
      </div>

      {/* ── The Data Stream (Connecting narrative line) ────────── */}
      <div className="absolute left-1/2 bottom-0 w-[1px] h-[25vh] -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-white/20 z-0">
        <motion.div 
          className="w-[3px] h-16 bg-accent absolute top-0 -left-[1px] rounded-full"
          style={{ boxShadow: `0 0 12px ${colors.accent}` }}
          animate={{ y: ['-100%', '25vh'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* ── Main content (80% Visual Weight - The Hiring Focus) ─────────────────────────── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl px-4 text-center sm:px-6"
      >
        <motion.p variants={child} className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
          مرحباً، أنا
        </motion.p>

        {/* Name - Solid, Bold, Trustworthy */}
        <motion.h1
          variants={child}
          className="mb-4 text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-7xl lg:text-8xl drop-shadow-lg"
          dir="ltr"
        >
          {siteConfig.name}
        </motion.h1>

        {/* Role - Only keyword is highlighted */}
        <motion.div variants={child} className="mb-8 flex items-center justify-center gap-2 h-10">
          <span className="inline-block text-xl font-semibold text-white/80 sm:text-2xl" dir="ltr">
            {currentRole.text.split(currentRole.highlight).map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span className="bg-gradient-to-r from-primaryLight to-accent bg-clip-text text-transparent drop-shadow-md">
                    {currentRole.highlight}
                  </span>
                )}
              </span>
            ))}
          </span>
        </motion.div>

        {/* Direct, professional sub-headline */}
        <motion.p variants={child} className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
          أبني أنظمة ذكاء اصطناعي جاهزة للإنتاج، وكلاء ذكيين (AI Agents)، وأتمتة سير العمل بأسس هندسية متينة ومعمارية قابلة للتوسع.
        </motion.p>

      </motion.div>

      {/* ── Scroll-down indicator ────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: motionTokens.duration.slow, ease: motionTokens.ease.outExpo }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
          استكشف المعمارية
        </span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={16} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
