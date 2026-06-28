'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GitBranch, ExternalLink } from 'lucide-react';
import { projects, categories } from '@/lib/constants';
import type { Project } from '@/types';
import AnimatedText from '@/components/ui/AnimatedText';
import GlassCard from '@/components/ui/GlassCard';
import ProjectModal from '@/components/ui/ProjectModal';

gsap.registerPlugin(ScrollTrigger);

// ──────────────────────────────────────────────
// Projects Section – Filterable project grid with Case Studies
// ──────────────────────────────────────────────

function ProjectCard({
  project,
  onClick,
  isFeatured,
}: {
  project: Project;
  onClick: () => void;
  isFeatured: boolean;
}) {
  // Case Study Layout (Featured Project)
  if (isFeatured && project.caseStudy) {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        className="h-full md:col-span-2 lg:col-span-3"
      >
        <GlassCard hover={true} className="group flex h-full flex-col lg:flex-row overflow-hidden p-0 transition-all duration-500 hover:bg-[rgba(56,189,248,0.03)] border border-white/5 hover:border-[#38BDF8]/30 shadow-none hover:shadow-[0_0_40px_rgba(56,189,248,0.1)]">
          {/* Image area with Zoom & Overlay */}
          <div className="relative w-full lg:w-1/2 h-64 lg:h-auto overflow-hidden cursor-pointer" onClick={onClick}>
            {project.demoVideo ? (
              <video 
                src={project.demoVideo}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            ) : project.image ? (
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              />
            ) : (
              <motion.div
                className="h-full w-full bg-gradient-to-br from-[#7C3AED] via-[#38BDF8] to-[#050510] transition-transform duration-700 ease-out group-hover:scale-105"
              />
            )}
            
            {/* Animated Overlay */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
              <span className="translate-y-4 rounded-full border border-[#38BDF8]/50 bg-[#38BDF8]/20 px-6 py-2 text-sm font-bold text-white shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-transform duration-300 group-hover:translate-y-0">
                عرض التفاصيل
              </span>
            </div>
          </div>

          {/* Case Study Content */}
          <div className="flex flex-1 flex-col p-8 lg:p-12 text-right">
            <div className="mb-4 inline-flex items-center justify-end gap-2 text-[#38BDF8] text-xs font-bold uppercase tracking-widest">
              <span>{project.category}</span>
              <span className="h-1 w-1 rounded-full bg-[#38BDF8]" />
              <span>{project.year}</span>
            </div>
            
            <h3 className="mb-8 text-3xl lg:text-4xl font-bold text-white transition-colors duration-300 group-hover:text-[#38BDF8] cursor-pointer" onClick={onClick}>
              {project.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 flex-1">
              <div>
                <h4 className="text-white/50 text-xs lg:text-sm font-bold uppercase tracking-widest mb-2">المشكلة (Problem)</h4>
                <p className="text-white/80 leading-relaxed text-base lg:text-lg">{project.caseStudy.problem}</p>
              </div>
              <div>
                <h4 className="text-white/50 text-xs lg:text-sm font-bold uppercase tracking-widest mb-2">الحل (Solution)</h4>
                <p className="text-white/80 leading-relaxed text-base lg:text-lg">{project.caseStudy.solution}</p>
              </div>
              <div>
                <h4 className="text-white/50 text-xs lg:text-sm font-bold uppercase tracking-widest mb-2">التقنيات (Tech)</h4>
                <p className="text-white/80 leading-relaxed text-base lg:text-lg">{project.caseStudy.tech}</p>
              </div>
              <div>
                <h4 className="text-[#38BDF8]/80 text-xs lg:text-sm font-bold uppercase tracking-widest mb-2">النتيجة (Result)</h4>
                <p className="text-[#38BDF8] font-bold leading-relaxed text-lg lg:text-xl">{project.caseStudy.result}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-6 mt-auto pt-6 border-t border-white/5">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-white/70 hover:text-[#38BDF8] transition-colors">
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-white/70 hover:text-[#38BDF8] transition-colors">
                  <GitBranch size={18} /> GitHub
                </a>
              )}
            </div>
          </div>
        </GlassCard>
      </motion.div>
    );
  }

  // Standard Layout
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      className="h-full"
    >
      <div className="group h-full">
        <GlassCard hover={true} className="flex h-full flex-col overflow-hidden p-0 transition-all duration-300 hover:bg-[rgba(56,189,248,0.05)] border border-white/5 hover:border-[#38BDF8]/30">
          {/* Image area */}
          <div className="relative w-full h-56 overflow-hidden cursor-pointer" onClick={onClick}>
            {project.demoVideo ? (
              <video 
                src={project.demoVideo}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            ) : project.image ? (
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />
            ) : (
              <motion.div
                className="h-full w-full bg-gradient-to-br from-[#7C3AED] via-[#1a0a2e] to-[#22D3EE] transition-transform duration-700 ease-out group-hover:scale-110"
              />
            )}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
              <span className="translate-y-4 rounded-full border border-[#38BDF8]/50 bg-[#38BDF8]/20 px-6 py-2 text-sm font-bold text-white shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-transform duration-300 group-hover:translate-y-0">
                عرض التفاصيل
              </span>
            </div>
            <span className="absolute right-3 top-3 z-10 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[11px] font-bold text-white/90 backdrop-blur-md">
              {project.category}
            </span>
          </div>

          {/* Info */}
          <div className="flex flex-1 flex-col p-6 text-right">
            <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#38BDF8] cursor-pointer" onClick={onClick}>
              {project.title}
            </h3>
            <p className="mb-6 flex-1 leading-relaxed text-white/50 text-sm line-clamp-2">
              {project.description}
            </p>

            {/* Tags */}
            <div className="mb-6 flex flex-wrap justify-end gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold text-[#38BDF8] transition-colors duration-300 group-hover:border-[#38BDF8]/40 group-hover:bg-[#38BDF8]/10"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-4 pt-4 border-t border-white/5">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-bold text-white/60 hover:text-[#38BDF8] transition-colors">
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-bold text-white/60 hover:text-[#38BDF8] transition-colors">
                  <GitBranch size={14} /> GitHub
                </a>
              )}
            </div>
          </div>
        </GlassCard>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('الكل');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // GSAP clip-path removed for performance improvements
  }, []);

  const filtered =
    activeCategory === 'الكل'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section ref={sectionRef} id="projects" className="relative overflow-hidden bg-[#050510] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-right">
        <AnimatedText
          text="أهم المشاريع"
          as="h2"
          className="mb-4 justify-start text-4xl font-bold text-white sm:text-5xl"
        />
        <motion.p
          className="mr-0 ml-auto mb-12 max-w-xl text-right text-white/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          أعمال تقنية متقدمة تركز على حلول الأعمال الحقيقية والنتائج الملموسة.
        </motion.p>

        {/* ── Category filter tabs ─────────────── */}
        <div className="mb-12 flex flex-wrap justify-end gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="relative rounded-full px-6 py-2.5 text-sm font-bold text-white/60 transition-colors hover:text-white border border-white/5 bg-white/5"
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#38BDF8]/20 to-[#7C3AED]/20 border border-[#38BDF8]/40"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${activeCategory === cat ? 'text-white' : ''}`}>
                {cat}
              </span>
            </button>
          ))}
        </div>

        {/* ── Project grid ─────────────────────── */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
                isFeatured={index === 0 && activeCategory === 'الكل'}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
