'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { stats } from '@/lib/constants';
import GlassCard from '@/components/ui/GlassCard';

function AnimatedCounter({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);
  const [countDone, setCountDone] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let raf: number;
    const start = performance.now();
    const duration = 2000;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setCountDone(true);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
        ease: [0.25, 0.1, 0.25, 1] as const,
      }}
    >
      {/* Glow on reveal wrapper */}
      <motion.div
        animate={
          isInView
            ? {
                boxShadow: [
                  '0 0 0px rgba(34,211,238,0)',
                  '0 0 25px rgba(34,211,238,0.35), 0 0 50px rgba(124,58,237,0.2)',
                  '0 0 0px rgba(34,211,238,0)',
                ],
              }
            : {}
        }
        transition={{
          duration: 1.2,
          delay: index * 0.2 + 0.3,
          ease: 'easeOut',
        }}
        className="rounded-xl px-2 py-4"
      >
        <motion.span
          className="block bg-gradient-to-r from-[#ffffff] to-[#cccccc] bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl"
          animate={countDone ? { scale: [1, 1.1, 1] } : { scale: 1 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          {display}
          {suffix}
        </motion.span>
        <p className="mt-2 text-sm font-medium text-white/50">{label}</p>
      </motion.div>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden bg-transparent py-16 md:py-24 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="mx-auto max-w-4xl border border-white/10 bg-black/40 backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((stat, i) => (
                <AnimatedCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  index={i}
                />
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
