"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Certificate } from "@/types";
import { ExternalLink, X, Code2, FolderGit2, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface Props {
  cert: Certificate | null;
  onClose: () => void;
}

export function EnhancedModal({ cert, onClose }: Props) {
  const [activeTab, setActiveTab] = useState<'Overview' | 'Skills' | 'Technologies' | 'Projects' | 'Credential'>('Overview');

  if (!cert) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative flex w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0a0515] shadow-2xl shadow-[#22D3EE]/10 md:flex-row max-h-[90vh]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-white/20"
          >
            <X size={20} />
          </button>

          {/* Left Side: Image (Hidden on small screens, shown on md+) */}
          <div className="relative hidden w-1/2 bg-black md:block">
            {cert.image && (
              <img
                src={cert.image}
                alt={cert.title}
                className="h-full w-full object-contain p-8"
              />
            )}
            {/* Completion Effect overlay */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-500/50 px-4 py-2 text-sm font-bold text-emerald-400 backdrop-blur-md whitespace-nowrap"
            >
              <CheckCircle2 size={16} /> Completed ✓ Issued by {cert.provider} {cert.completedAt.split('-')[0]}
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="flex w-full flex-col md:w-1/2 bg-[#0f0820]">
            
            {/* Header */}
            <div className="border-b border-white/10 p-8 text-right">
              <div className="mb-2 flex items-center justify-end gap-2">
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-white/70">
                  {cert.level}
                </span>
                <span className="rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 px-3 py-1 text-xs font-bold text-[#38BDF8]">
                  {cert.provider}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white leading-tight">{cert.title}</h2>
            </div>

            {/* Tabs Navigation */}
            <div className="flex border-b border-white/10 px-4 overflow-x-auto hide-scrollbar flex-row-reverse">
              {['Overview', 'Skills', 'Technologies', 'Projects', 'Credential'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-4 py-4 text-sm font-semibold transition-colors whitespace-nowrap border-b-2 ${
                    activeTab === tab 
                      ? 'border-[#22D3EE] text-[#22D3EE]' 
                      : 'border-transparent text-white/50 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tabs Content */}
            <div className="flex-1 overflow-y-auto p-8 text-right hide-scrollbar">
              
              {activeTab === 'Overview' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  <div>
                    <h3 className="mb-4 text-lg font-bold text-white">ماذا تعلمت؟ (Key Takeaways)</h3>
                    <ul className="space-y-3">
                      {cert.takeaways.map((item, i) => (
                        <li key={i} className="flex items-start justify-end gap-3 text-white/70">
                          <span>{item}</span>
                          <span className="text-[#22D3EE]">✓</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4 rounded-xl bg-black/40 p-4 border border-white/5">
                    <div>
                      <p className="text-xs text-white/40 mb-1">المدة</p>
                      <p className="font-semibold text-white">{cert.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/40 mb-1">تاريخ الإنجاز</p>
                      <p className="font-semibold text-white">{cert.completedAt}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'Skills' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h3 className="mb-4 text-lg font-bold text-white">المهارات المكتسبة</h3>
                  <div className="flex flex-wrap justify-end gap-2">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="rounded-md bg-white/5 border border-white/10 px-3 py-1.5 text-sm font-medium text-white/80">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'Technologies' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h3 className="mb-4 text-lg font-bold text-white">الأدوات والتقنيات</h3>
                  <div className="flex flex-wrap justify-end gap-2">
                    {cert.technologies.map((tech) => (
                      <span key={tech} className="flex items-center gap-1.5 rounded-md bg-[#7C3AED]/10 border border-[#7C3AED]/30 px-3 py-1.5 text-sm font-bold text-[#b895ff]">
                        <Code2 size={14} /> {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'Projects' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h3 className="mb-4 text-lg font-bold text-white">مشاريع مبنية بهذه الشهادة</h3>
                  <div className="space-y-3">
                    {cert.projects.map((proj) => (
                      <div key={proj.id} className="flex flex-col items-end gap-2 rounded-xl bg-black/40 p-4 border border-white/5 hover:border-[#22D3EE]/30 transition-colors">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white">{proj.title}</span>
                          <FolderGit2 size={16} className="text-[#38BDF8]" />
                        </div>
                        <div className="flex gap-3">
                          {proj.github && (
                            <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-xs text-[#22D3EE] hover:underline">GitHub</a>
                          )}
                          {proj.live && (
                            <a href={proj.live} target="_blank" rel="noopener noreferrer" className="text-xs text-[#22D3EE] hover:underline">Live Demo</a>
                          )}
                        </div>
                      </div>
                    ))}
                    {cert.projects.length === 0 && (
                      <p className="text-white/50 text-sm">لم يتم ربط مشاريع محددة بعد.</p>
                    )}
                  </div>
                </motion.div>
              )}

              {activeTab === 'Credential' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-end">
                  <h3 className="mb-6 text-lg font-bold text-white">التحقق من صحة الشهادة</h3>
                  
                  {/* Mobile image fallback */}
                  {cert.image && (
                    <img src={cert.image} alt={cert.title} className="w-full rounded-lg mb-6 md:hidden" />
                  )}

                  {cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-[#22D3EE] px-8 py-3 text-sm font-bold text-black hover:bg-[#38BDF8] transition-all hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                    >
                      <ExternalLink size={18} /> Verify Credential
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 text-white/50">
                      <ShieldCheck size={20} />
                      <span>الشهادة موثقة (رابط التحقق غير متوفر حالياً)</span>
                    </div>
                  )}
                </motion.div>
              )}

            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
