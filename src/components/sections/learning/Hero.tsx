"use client";

import { motion } from "framer-motion";
import { Award, Code2, Database, ExternalLink, Globe, Layout, Smartphone } from "lucide-react";

export function Hero() {
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

          <p className="mx-auto mb-10 max-w-3xl text-lg text-white/60 md:text-xl leading-relaxed">
            I don't collect certificates. I use structured learning to solve real engineering problems and build production-ready AI systems.
          </p>

          <p className="mx-auto mb-16 max-w-2xl text-sm font-semibold text-[#38BDF8]">
            56 verified certifications. Every one of them has been translated into practical skills and real AI engineering experience.
          </p>

          {/* Stats Grid */}
          <div className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
            <StatCard label="Verified Certificates" value="56" />
            <StatCard label="Production Projects" value="60+" />
            <StatCard label="Technologies" value="35" />
            <StatCard label="Learning Platforms" value="8" />
          </div>

          {/* Core Stack */}
          <div className="mx-auto mb-20 max-w-4xl">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white/40">Core Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Python', 'FastAPI', 'LangChain', 'Docker', 'n8n', 'OpenAI', 'Gemini', 'PostgreSQL', 'Redis', 'Next.js'].map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* What I Can Build */}
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-md md:p-12 text-right">
            <h3 className="mb-8 text-2xl font-bold text-white">ماذا أستطيع أن أبني؟ (What I Can Build)</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-4">
              {[
                "AI Agents", "RAG Systems", "OCR Pipelines", "Multi-Agent Systems",
                "Telegram Bots", "Workflow Automation", "MCP Servers", "LLM Applications"
              ].map((skill) => (
                <div key={skill} className="flex items-center justify-end gap-3 text-white/80">
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
