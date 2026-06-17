'use client';

import { useMemo, useRef, useState, useCallback, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Globe,
  Database,
  GitBranch,
  Container,
  Palette,
  Terminal,
  Layout,
  Server,
  Braces,
  Laptop,
  PenTool,
  FileCode,
  Brain,
  Cpu,
  type LucideIcon,
} from 'lucide-react';
import { skills } from '@/lib/constants';
import type { Skill } from '@/types';
import AnimatedText from '@/components/ui/AnimatedText';
import GlassCard from '@/components/ui/GlassCard';
import FloatingElement from '@/components/ui/FloatingElement';

const iconMap: Record<string, LucideIcon> = {
  react: Code2,
  typescript: Braces,
  tailwindcss: Palette,
  greensock: Terminal,
  html5: Layout,
  node: Server,
  python: FileCode,
  postgresql: Database,
  graphql: Globe,
  git: GitBranch,
  docker: Container,
  figma: PenTool,
  vscode: Laptop,
  brain: Brain,
  cpu: Cpu,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

function Skill3DCard({ skill }: { skill: Skill }) {
  const Icon = iconMap[skill.icon] ?? Code2;
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -15; // rotateX
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 15;  // rotateY
    setTilt({ x, y });
  }, []);

  const handleLeave = useCallback(() => setTilt({ x: 0, y: 0 }), []);

  return (
    <motion.div
      variants={itemVariants}
      style={{ perspective: 800 }}
      className="h-full"
    >
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="h-full"
      >
        <GlassCard hover={true} className="group flex h-full flex-col items-center justify-center p-8 text-center transition-colors duration-300 hover:bg-[rgba(124,58,237,0.1)]">
          {/* Glowing Icon */}
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-[rgba(56,189,248,0.1)] text-[#38BDF8] shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] group-hover:bg-[#38BDF8]/20 group-hover:text-white">
            <Icon size={40} strokeWidth={1.5} />
          </div>

          <h4 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-[#38BDF8]">
            {skill.name}
          </h4>
          <span className="text-sm font-semibold tracking-wide text-[#38BDF8]">
            {skill.years}
          </span>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  const grouped = useMemo(() => {
    const map: Record<string, typeof skills> = {};
    for (const skill of skills) {
      (map[skill.category] ??= []).push(skill);
    }
    return Object.entries(map);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden bg-[#050510] py-16 md:py-24"
    >
      {/* Background floating elements */}
      <FloatingElement shape="circle" size={120} duration={10} className="left-[5%] top-[15%] bg-[#7C3AED]/20" />
      <FloatingElement shape="square" size={60} duration={12} delay={2} className="right-[8%] top-[60%] bg-[#A855F7]/15" />
      <FloatingElement shape="circle" size={45} duration={8} delay={4} className="left-[50%] bottom-[10%] bg-white/5" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-right">
        {/* Section heading */}
        <AnimatedText
          text="أدواتي التقنية"
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
          التقنيات الحديثة التي أعتمد عليها لبناء أنظمة أتمتة وتطبيقات ويب سريعة وقابلة للتوسع.
        </motion.p>

        {/* Categories and Skill Cards */}
        <div className="space-y-16">
          {grouped.map(([category, items], catIdx) => (
            <div key={category}>
              <motion.h3
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-8 text-2xl font-bold text-white/80"
              >
                {category}
              </motion.h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {items.map((skill) => (
                  <Skill3DCard key={skill.name} skill={skill} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
