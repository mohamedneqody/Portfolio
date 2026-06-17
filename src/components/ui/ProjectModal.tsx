"use client";

import { useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code } from "lucide-react";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  // Close on overlay click
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleOverlayClick}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="
              relative w-full max-w-2xl max-h-[90vh] overflow-y-auto
              rounded-2xl
              bg-[rgba(124,58,237,0.8)] backdrop-blur-xl
              border border-white/10
              shadow-2xl shadow-black/40
            "
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white/70 backdrop-blur-sm transition-colors hover:bg-black/50 hover:text-white cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close modal"
            >
              <X size={20} />
            </motion.button>

            {/* Project Image */}
            <div className="relative h-56 w-full overflow-hidden rounded-t-2xl sm:h-72">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundColor: "rgba(168,85,247,0.5)",
                }}
              />
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(124,58,237,0.9)] via-transparent to-transparent" />

              {/* Year badge */}
              <span className="absolute bottom-4 left-6 rounded-full bg-[rgba(124,58,237,0.6)] px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
                {project.year}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              {/* Category */}
              <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-[#cccccc]">
                {project.category}
              </span>

              {/* Title */}
              <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
                {project.title}
              </h2>

              {/* Long Description (fallback if no case study) */}
              {!project.caseStudy && (
                <p className="mb-6 leading-relaxed text-white/60">
                  {project.longDescription}
                </p>
              )}

              {/* Case Study Grid */}
              {project.caseStudy && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-right bg-black/20 p-6 rounded-2xl border border-white/5">
                  <div>
                    <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">المشكلة (Problem)</h4>
                    <p className="text-white/80 leading-relaxed text-sm">{project.caseStudy.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">الحل (Solution)</h4>
                    <p className="text-white/80 leading-relaxed text-sm">{project.caseStudy.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">التقنيات (Tech)</h4>
                    <p className="text-white/80 leading-relaxed text-sm">{project.caseStudy.tech}</p>
                  </div>
                  <div>
                    <h4 className="text-[#38BDF8]/80 text-xs font-bold uppercase tracking-widest mb-2">النتيجة (Result)</h4>
                    <p className="text-[#38BDF8] font-bold leading-relaxed text-base">{project.caseStudy.result}</p>
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="mb-6 flex flex-wrap justify-end gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#38BDF8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-shadow hover:shadow-lg hover:shadow-[#cccccc]/20"
                    style={{
                      background:
                        "linear-gradient(135deg, #ffffff, #cccccc)",
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    معاينة حية
                  </motion.a>
                )}
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/80 backdrop-blur-sm transition-colors hover:border-white/20 hover:text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Code size={16} />
                    الكود المصدري
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
