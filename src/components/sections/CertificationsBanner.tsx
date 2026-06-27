'use client';

import { motion } from 'framer-motion';
import { Award, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';

export default function CertificationsBanner() {
  return (
    <section id="certifications-banner" className="relative overflow-hidden bg-[#050510] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-[#7C3AED]/10 via-black/40 to-[#22D3EE]/10 backdrop-blur-xl">
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-[200px] w-[200px] rounded-full bg-[#7C3AED]/20 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-[200px] w-[200px] rounded-full bg-[#22D3EE]/20 blur-[80px]" />

            <div className="relative z-10 flex flex-col items-center gap-8 py-8 text-center md:flex-row md:justify-between md:text-right">
              {/* Content */}
              <div className="flex flex-col items-center gap-4 md:flex-row-reverse md:items-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#7C3AED]/20 text-[#22D3EE] shadow-[0_0_30px_rgba(124,58,237,0.3)]">
                  <Award size={40} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="mb-2 text-3xl font-extrabold text-white sm:text-4xl">
                    <span className="bg-gradient-to-r from-[#22D3EE] to-[#7C3AED] bg-clip-text text-transparent">200+</span>{' '}
                    شهادة احترافية
                  </h3>
                  <p className="max-w-lg text-white/50">
                    في مجالات AI, Machine Learning, LLMs, Backend, Cloud, و Automation من أفضل المنصات العالمية.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/certifications"
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] px-8 py-4 text-lg font-bold text-white shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all hover:shadow-[0_0_50px_rgba(34,211,238,0.5)] hover:scale-105"
              >
                تصفح الشهادات
                <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
              </Link>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
