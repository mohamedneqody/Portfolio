'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Brain, Layout, Database, Cpu, type LucideIcon } from 'lucide-react';
import { services } from '@/lib/constants';
import AnimatedText from '@/components/ui/AnimatedText';
import GlassCard from '@/components/ui/GlassCard';

const iconMap: Record<string, LucideIcon> = {
  brain: Brain,
  layout: Layout,
  database: Database,
  cpu: Cpu,
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative overflow-hidden bg-[#050510] py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-right">
        {/* Section heading */}
        <AnimatedText
          text="ماذا أبني"
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
          حلول متكاملة وأنظمة ذكية مصممة لتحويل الأفكار المعقدة إلى منتجات رقمية فائقة الأداء.
        </motion.p>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] ?? Cpu;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                custom={idx}
                className="h-full"
              >
                <GlassCard hover={true} className="group h-full flex flex-col p-8 transition-colors duration-300 hover:bg-[rgba(34,211,238,0.08)]">
                  {/* Icon with Glow */}
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgba(124,58,237,0.15)] text-[#22D3EE] shadow-[0_0_20px_rgba(124,58,237,0.2)] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="mb-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#22D3EE]">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-white/60">
                    {service.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
