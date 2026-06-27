"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Certificate } from "@/types";
import { ExternalLink, X, Code2, FolderGit2, ShieldCheck, CheckCircle2, LayoutTemplate } from "lucide-react";
import { useState, useMemo } from "react";
import Image from "next/image";

interface Props {
  cert: Certificate | null;
  allCerts: Certificate[];
  onClose: () => void;
  onSelectCert: (cert: Certificate) => void;
}

export function EnhancedModal({ cert, allCerts, onClose, onSelectCert }: Props) {
  const [activeTab, setActiveTab] = useState<'Overview' | 'Skills' | 'Technologies' | 'Projects' | 'Related' | 'Credential'>('Overview');

  // Compute related certificates based on simple similarity
  const relatedCerts = useMemo(() => {
    if (!cert) return [];
    
    return allCerts
      .filter(c => c.id !== cert.id) // Exclude self
      .map(c => {
        let score = 0;
        // Same provider + 2
        if (c.provider === cert.provider) score += 2;
        // Same category + 2
        if (c.category === cert.category) score += 2;
        // Shared skills + 1 each
        const sharedSkills = c.skills.filter(s => cert.skills.includes(s));
        score += sharedSkills.length;
        // Shared tech + 1 each
        const sharedTech = c.technologies.filter(t => cert.technologies.includes(t));
        score += sharedTech.length;

        return { cert: c, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(item => item.cert);
  }, [cert, allCerts]);

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
          className="relative flex w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0a0515] shadow-2xl shadow-[#22D3EE]/10 md:flex-row max-h-[90vh]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-white/20"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Sidebar Navigation */}
          <div className="flex w-full flex-col border-r border-white/10 bg-[#070310] md:w-64 md:shrink-0 flex-row md:flex-col overflow-x-auto md:overflow-visible">
            <div className="hidden md:block p-8 border-b border-white/10 text-right">
              <h3 className="font-bold text-white mb-2">تفاصيل الشهادة</h3>
              <p className="text-xs text-white/40">استكشف المهارات والمشاريع المرتبطة</p>
            </div>
            
            <div className="flex flex-row md:flex-col p-4 md:p-4 gap-2">
              {['Overview', 'Skills', 'Technologies', 'Projects', 'Related', 'Credential'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold transition-all whitespace-nowrap md:whitespace-normal justify-end ${
                    activeTab === tab 
                      ? 'bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/30 shadow-[0_0_10px_rgba(34,211,238,0.1)]' 
                      : 'text-white/50 hover:bg-white/5 hover:text-white border border-transparent'
                  }`}
                >
                  {tab === 'Related' && <LayoutTemplate size={16} />}
                  <span>{tab}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto bg-[#0f0820] flex flex-col hide-scrollbar">
            
            {/* Header */}
            <div className="border-b border-white/10 p-8 text-right bg-gradient-to-b from-white/5 to-transparent">
              <div className="mb-3 flex flex-wrap items-center justify-end gap-2">
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-white/70">
                  {cert.level}
                </span>
                <span className="rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 px-3 py-1 text-xs font-bold text-[#38BDF8]">
                  {cert.provider}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">{cert.title}</h2>
              <p className="text-white/50 text-sm">Issued {cert.completedAt} • {cert.duration}</p>
            </div>

            {/* Dynamic Tab Content */}
            <div className="flex-1 p-8 text-right">
              
              {activeTab === 'Overview' && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Image Preview inside overview */}
                    <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-black flex items-center justify-center aspect-video md:aspect-auto">
                      {cert.image && (
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-contain p-4"
                        />
                      )}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-500/50 px-4 py-2 text-xs font-bold text-emerald-400 backdrop-blur-md whitespace-nowrap">
                        <CheckCircle2 size={14} /> Completed
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <h3 className="mb-4 text-xl font-bold text-white">ماذا تعلمت؟ (Key Takeaways)</h3>
                      <ul className="space-y-4">
                        {cert.takeaways.map((item, i) => (
                          <li key={i} className="flex items-start justify-end gap-3 text-white/80">
                            <span className="leading-relaxed">{item}</span>
                            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#22D3EE]/20 text-[#22D3EE] text-xs font-bold">✓</span>
                          </li>
                        ))}
                        {cert.takeaways.length === 0 && (
                          <p className="text-white/50">لا توجد تفاصيل مضافة لهذه الشهادة حالياً.</p>
                        )}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'Skills' && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h3 className="mb-6 text-xl font-bold text-white">المهارات المكتسبة</h3>
                  <div className="flex flex-wrap justify-end gap-3">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-sm font-medium text-white/90 shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'Technologies' && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h3 className="mb-6 text-xl font-bold text-white">الأدوات والتقنيات</h3>
                  <div className="flex flex-wrap justify-end gap-3">
                    {cert.technologies.map((tech) => (
                      <span key={tech} className="flex items-center gap-2 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/30 px-4 py-2 text-sm font-bold text-[#b895ff] shadow-sm">
                        <Code2 size={16} /> {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'Projects' && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h3 className="mb-6 text-xl font-bold text-white">مشاريع مبنية بهذه الشهادة</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {cert.projects.map((proj) => (
                      <div key={proj.id} className="flex flex-col items-end gap-3 rounded-2xl bg-black/40 p-5 border border-white/5 hover:border-[#22D3EE]/30 transition-all hover:bg-white/5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-bold text-lg text-white">{proj.title}</span>
                          <FolderGit2 size={20} className="text-[#38BDF8]" />
                        </div>
                        <div className="flex gap-4 w-full justify-end mt-auto pt-4 border-t border-white/10">
                          {proj.github && (
                            <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/70 hover:text-white transition-colors">GitHub Repo</a>
                          )}
                          {proj.live && (
                            <a href={proj.live} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#22D3EE] hover:text-[#38BDF8] transition-colors">Live Demo &rarr;</a>
                          )}
                        </div>
                      </div>
                    ))}
                    {cert.projects.length === 0 && (
                      <div className="col-span-full py-12 text-center rounded-2xl border border-white/5 bg-white/5">
                        <p className="text-white/50">لم يتم ربط مشاريع محددة بعد.</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {activeTab === 'Related' && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h3 className="mb-6 text-xl font-bold text-white">شهادات ذات صلة بمجال دراستك</h3>
                  <div className="grid gap-4">
                    {relatedCerts.map((rcert) => (
                      <button 
                        key={rcert.id}
                        onClick={() => {
                          onSelectCert(rcert);
                          setActiveTab('Overview');
                        }}
                        className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-[#22D3EE]/50 hover:bg-white/10 text-right group"
                      >
                        <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-xs font-bold text-[#22D3EE]">عرض &larr;</span>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="font-bold text-white mb-1">{rcert.title}</span>
                          <div className="flex items-center gap-2 text-xs text-white/50">
                            <span>{rcert.provider}</span>
                            <span>•</span>
                            <span>{rcert.level}</span>
                          </div>
                        </div>
                      </button>
                    ))}
                    {relatedCerts.length === 0 && (
                      <p className="text-white/50 text-center py-12">لا توجد شهادات مشابهة متوفرة حالياً.</p>
                    )}
                  </div>
                </motion.div>
              )}

              {activeTab === 'Credential' && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col items-end h-full justify-center min-h-[300px]">
                  <h3 className="mb-6 text-2xl font-bold text-white">التحقق من صحة الشهادة</h3>
                  <p className="text-white/60 mb-8 max-w-md text-right leading-relaxed">
                    هذه الشهادة موثقة ورسمية. يمكنك الضغط على الزر أدناه للانتقال إلى المنصة الأصلية والتأكد من صحة بيانات الشهادة الخاصة بي.
                  </p>
                  
                  {cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-[#22D3EE] px-8 py-4 text-base font-bold text-black hover:bg-[#38BDF8] transition-all hover:scale-105 shadow-[0_0_30px_rgba(34,211,238,0.4)]"
                    >
                      <ExternalLink size={20} /> Verify Credential Official Link
                    </a>
                  ) : (
                    <div className="flex flex-col items-end gap-3 rounded-2xl bg-white/5 p-6 border border-white/10">
                      <div className="flex items-center gap-2 text-emerald-400">
                        <ShieldCheck size={24} />
                        <span className="font-bold">الشهادة موثقة محلياً</span>
                      </div>
                      <p className="text-sm text-white/50">رابط التحقق الإلكتروني غير متوفر حالياً لهذه الشهادة.</p>
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
