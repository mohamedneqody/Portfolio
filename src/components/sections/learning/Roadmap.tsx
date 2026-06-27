"use client";

import { motion } from "framer-motion";

export function Roadmap() {
  const skills = [
    { name: "Python", value: 100 },
    { name: "LLMs & Generative AI", value: 100 },
    { name: "AI Automation", value: 100 },
    { name: "Machine Learning", value: 95 },
    { name: "Deep Learning", value: 88 },
  ];

  const evolution = [
    "Programming",
    "Data Analysis",
    "Machine Learning",
    "Deep Learning",
    "LLMs",
    "AI Agents",
    "Automation",
    "Production Systems"
  ];

  return (
    <section className="py-24 border-b border-white/5 bg-[#0a0515]">
      <div className="container mx-auto px-6">
        
        <div className="grid gap-16 lg:grid-cols-2">
          
          {/* Skill Bars */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Technical Proficiency</h2>
              <p className="text-white/50">Core areas of expertise developed through rigorous learning.</p>
            </div>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2 text-sm font-medium">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-[#38BDF8]">{skill.value}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#22D3EE]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Evolution */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Career Roadmap</h2>
              <p className="text-white/50">The evolution of my engineering journey.</p>
            </div>

            <div className="relative">
              {/* Vertical line connecting nodes */}
              <div className="absolute right-[11px] top-4 bottom-4 w-px bg-gradient-to-b from-[#22D3EE] via-[#7C3AED] to-transparent" />
              
              <div className="space-y-6">
                {evolution.map((step, index) => (
                  <motion.div 
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center justify-end gap-6 relative"
                  >
                    <span className="text-lg font-bold text-white">
                      {step}
                    </span>
                    <div className="z-10 h-6 w-6 rounded-full border-4 border-[#0a0515] bg-[#22D3EE] shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
