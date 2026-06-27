"use client";

import { motion } from "framer-motion";
import { Certificate } from "@/types";
import { useMemo } from "react";

export function Hero({ certificates }: { certificates: Certificate[] }) {
  // Dynamically calculate what can be built based on certificates
  const dynamicBuildSkills = useMemo(() => {
    const builds = new Set<string>();
    
    // Simple logic mapping skills/categories to capabilities
    certificates.forEach(cert => {
      const text = (cert.title + " " + cert.category + " " + cert.skills.join(" ")).toLowerCase();
      
      if (text.includes("agent") || text.includes("langchain") || text.includes("crewai")) builds.add("AI Agents");
      if (text.includes("automation") || text.includes("n8n")) builds.add("Workflow Automation");
      if (text.includes("llm") || text.includes("generative")) builds.add("LLM Applications");
      if (text.includes("rag") || text.includes("retrieval")) builds.add("RAG Systems");
      if (text.includes("vision") || text.includes("ocr")) builds.add("Computer Vision Systems");
      if (text.includes("api") || text.includes("fastapi")) builds.add("AI APIs");
      if (text.includes("data") || text.includes("machine learning")) builds.add("ML Pipelines");
    });
    
    // Fallbacks if data doesn't trigger enough matches
    if (builds.size < 4) {
      ["AI Agents", "OCR Systems", "Multi-Agent Workflows", "LLM Applications", "RAG Systems", "Automation Pipelines"].forEach(b => builds.add(b));
    }
    
    return Array.from(builds).slice(0, 8); // Max 8
  }, [certificates]);

  return (
    <section className="relative overflow-hidden border-b border-white/5 py-24">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22D3EE]/5 opacity-50 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Top Banner */}
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 px-4 py-1.5 text-xs font-bold tracking-wider text-[#22D3EE]">
              Knowledge → Practice → Production
            </span>
          </div>

          <h1 className="mb-6 bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-5xl font-black text-transparent md:text-7xl">
            Learning Journey
          </h1>
          
          <div className="mx-auto mb-10 max-w-3xl text-lg text-white/60 md:text-xl leading-relaxed">
            <p className="mb-2">From continuous learning to production-ready AI systems.</p>
          </div>

          <div className="mx-auto mb-10 flex flex-col items-center gap-2 text-sm font-semibold text-[#38BDF8]">
            <p>56 verified certifications.</p>
            <p>60+ real-world AI projects.</p>
            <p>Every certificate contributed to practical engineering experience.</p>
          </div>

          <div className="mb-16 flex justify-center">
            <a href="#certificates-grid" className="rounded-full bg-white text-black px-8 py-3 font-bold hover:bg-gray-200 transition-colors">
              Explore My Journey
            </a>
          </div>

          {/* Stats Grid */}
          <div className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
            <StatCard label="Verified Certificates" value="56" />
            <StatCard label="Production Projects" value="60+" />
            <StatCard label="Technologies" value="35" />
            <StatCard label="Learning Platforms" value="8" />
          </div>

          {/* Core Stack */}
          <div className="mx-auto mb-16 max-w-4xl">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white/40">Core Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Python', 'FastAPI', 'LangChain', 'Docker', 'n8n', 'OpenAI', 'Gemini', 'PostgreSQL', 'Redis', 'Next.js'].map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Engineering Focus */}
          <div className="mx-auto mb-20 max-w-4xl border-t border-white/5 pt-16">
            <h3 className="mb-8 text-2xl font-bold text-white">Engineering Focus</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "AI Engineering", "LLM Applications", "Workflow Automation",
                "Machine Learning", "Production Systems", "Developer Tools"
              ].map((focus) => (
                <div key={focus} className="flex items-center gap-2 rounded-lg border border-[#7C3AED]/20 bg-[#7C3AED]/5 px-5 py-3 text-[#b895ff]">
                  <div className="h-2 w-2 rounded-full bg-[#7C3AED]" />
                  <span className="font-bold">{focus}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Principles */}
          <div className="mx-auto mb-20 max-w-4xl border-t border-white/5 pt-16">
            <h3 className="mb-8 text-sm font-bold uppercase tracking-widest text-white/40">Learning Principles</h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { title: 'Learn', desc: 'Structured foundations' },
                { title: 'Practice', desc: 'Hands-on execution' },
                { title: 'Build', desc: 'Real-world projects' },
                { title: 'Deploy', desc: 'Production systems' }
              ].map((principle, i) => (
                <div key={principle.title} className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/5 p-6 text-center">
                  <div className="mb-3 text-2xl font-black text-[#22D3EE]">{`0${i + 1}`}</div>
                  <div className="mb-1 font-bold text-white">{principle.title}</div>
                  <div className="text-xs text-white/50">{principle.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* What I Can Build (Dynamic) */}
          <div className="mx-auto max-w-5xl rounded-3xl border border-[#22D3EE]/20 bg-[#22D3EE]/5 p-8 backdrop-blur-md md:p-12 text-right">
            <h3 className="mb-8 text-2xl font-bold text-white">ماذا تُمكّنني هذه الشهادات من البناء؟ (What These Certificates Enable Me To Build)</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-4">
              {dynamicBuildSkills.map((skill) => (
                <div key={skill} className="flex items-center justify-end gap-3 text-white/90">
                  <span className="font-semibold text-sm md:text-base">{skill}</span>
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#22D3EE]/20 text-[#22D3EE] text-xs font-bold">
                    ✓
                  </div>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-[#22D3EE]/30">
      <div className="mb-2 text-4xl font-black text-white">{value}</div>
      <div className="text-sm font-medium text-white/50">{label}</div>
    </div>
  );
}
