'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '@/lib/constants';
import AnimatedText from '@/components/ui/AnimatedText';
import GlassCard from '@/components/ui/GlassCard';
import FloatingElement from '@/components/ui/FloatingElement';

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative overflow-hidden bg-[#050510] py-16 md:py-24"
    >
      <FloatingElement shape="circle" size={100} duration={12} className="left-[-2%] top-[30%] bg-[#7C3AED]/10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-right relative z-10">
        <AnimatedText
          text="منهجية العمل"
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
          خطوات واضحة ومدروسة لضمان تسليم مشاريع ذات جودة استثنائية.
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8]/20 to-transparent -translate-y-1/2 z-0" />
          
          {/* Connecting Line for Mobile/Tablet */}
          <div className="block lg:hidden absolute top-0 right-12 sm:right-1/2 h-full w-[2px] bg-gradient-to-b from-transparent via-[#38BDF8]/20 to-transparent z-0" />
          
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative z-10"
            >
              <GlassCard hover={true} className="flex h-full flex-col p-8 transition-colors duration-300 hover:bg-[rgba(56,189,248,0.05)] border border-white/5 hover:border-[#38BDF8]/30">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(124,58,237,0.1)] text-[#38BDF8] shadow-[0_0_20px_rgba(124,58,237,0.2)] font-extrabold text-2xl">
                  {step.number}
                </div>
                
                <h3 className="font-bold text-xl text-white mb-3 transition-colors group-hover:text-[#38BDF8]">
                  {step.title}
                </h3>
                
                <p className="text-white/60 leading-relaxed font-medium text-sm">
                  {step.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
