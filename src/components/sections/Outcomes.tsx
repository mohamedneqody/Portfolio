'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { outcomes } from '@/lib/constants';
import AnimatedText from '@/components/ui/AnimatedText';
import GlassCard from '@/components/ui/GlassCard';
import FloatingElement from '@/components/ui/FloatingElement';

export default function Outcomes() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="outcomes"
      className="relative overflow-hidden bg-[#050510] py-16 md:py-24"
    >
      <FloatingElement shape="circle" size={150} duration={15} className="right-[-5%] top-[10%] bg-[#38BDF8]/10" />
      <FloatingElement shape="square" size={80} duration={20} className="left-[10%] bottom-[20%] bg-[#7C3AED]/10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-right relative z-10">
        <AnimatedText
          text="أبرز النتائج"
          as="h2"
          className="mb-4 justify-start text-4xl font-bold text-white sm:text-5xl"
        />
        <motion.p
          className="mr-0 ml-auto mb-16 max-w-xl text-right text-white/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          أؤمن بالأرقام أكثر من الكلمات. إليك بعض النتائج القابلة للقياس من مشاريعي السابقة.
        </motion.p>

        <div className="grid gap-6 md:grid-cols-3">
          {outcomes.map((outcome, idx) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <GlassCard hover={true} className="group relative flex h-full flex-col p-8 transition-colors duration-300 hover:bg-[rgba(56,189,248,0.05)] border border-white/5 hover:border-[#38BDF8]/30">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgba(56,189,248,0.1)] text-[#38BDF8] shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-transform duration-300 group-hover:scale-110">
                  <TrendingUp size={32} strokeWidth={2} />
                </div>
                
                <h3 className="text-5xl font-extrabold text-white mb-2 tracking-tighter">
                  {outcome.metric}
                </h3>
                
                <h4 className="font-bold text-xl text-[#38BDF8] mb-4">
                  {outcome.title}
                </h4>
                
                <p className="text-white/60 leading-relaxed font-medium">
                  {outcome.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
