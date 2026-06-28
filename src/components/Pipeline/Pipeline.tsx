'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { aiPipelineData } from '@/content/pipeline';
import PipelineCard from './PipelineCard';
import AnimatedText from '@/components/ui/AnimatedText';

export default function Pipeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="process" className="relative bg-[#050510] py-24 overflow-hidden">
      {/* Dynamic Background - Extremely faint gradient mesh to replace neural net */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-[#3B82F6] rounded-full mix-blend-screen filter blur-[150px] opacity-30 animate-pulse-slow" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-[#A855F7] rounded-full mix-blend-screen filter blur-[150px] opacity-30 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <AnimatedText
            text="AI Delivery Pipeline"
            as="h2"
            className="mb-4 text-4xl font-bold text-white sm:text-5xl justify-center"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-lg text-white/50"
          >
            How I build intelligent AI systems, from problem discovery to continuous optimization.
          </motion.p>
        </div>

        {/* Macroscopic Layers */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 hidden md:flex items-center justify-between rounded-2xl bg-white/5 border border-white/10 p-2"
        >
          {['Business Goal', 'Technical Strategy', 'Execution', 'Production'].map((layer, idx, arr) => (
            <div key={layer} className="flex items-center flex-1">
              <div className={`text-center py-2 px-4 flex-1 text-sm font-semibold tracking-wider rounded-xl transition-colors ${idx === 2 ? 'bg-white/10 text-white shadow-lg' : 'text-white/40'}`}>
                {layer}
              </div>
              {idx < arr.length - 1 && <span className="text-white/10 mx-2">➔</span>}
            </div>
          ))}
        </motion.div>

        {/* Pipeline Container */}
        <div className="relative">
          {/* Vertical Glowing Line */}
          <div className="absolute left-6 md:left-8 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent">
             <motion.div 
               className="w-full bg-[#A855F7] absolute top-0 left-0 shadow-[0_0_15px_#A855F7]"
               style={{ height: '100%', originY: 0 }}
               initial={{ scaleY: 0 }}
               whileInView={{ scaleY: 1 }}
               viewport={{ once: true, margin: '-20%' }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
             />
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {aiPipelineData.map((step, idx) => (
              <div key={step.id} className="relative pl-16 md:pl-24">
                {/* Node Dot */}
                <div className="absolute left-[21px] md:left-[29px] top-8 w-3 h-3 rounded-full bg-[#050510] border-2 border-[#A855F7] z-20 shadow-[0_0_10px_#A855F7]" />
                
                <PipelineCard
                  step={step}
                  isActive={activeIndex === idx}
                  isDimmed={activeIndex !== null && activeIndex !== idx}
                  onClick={() => handleCardClick(idx)}
                />
                
                {/* Arrow to next step (Data Flow) */}
                {idx < aiPipelineData.length - 1 && (
                  <div className="py-2 pl-4 flex items-center gap-4 text-white/30 text-xs font-medium">
                    <span>↓</span>
                    {idx === 0 ? 'Requirements' : 
                     idx === 1 ? 'Architecture Blueprint' : 
                     idx === 2 ? 'Workflow JSON' : 
                     idx === 3 ? 'Connected Agent' : 
                     idx === 4 ? 'Validated Build' : 
                     idx === 5 ? 'Production Metrics' : 'Continuous Feedback'}
                  </div>
                )}
              </div>
            ))}

            {/* Infinity End Loop */}
            <div className="relative pl-16 md:pl-24 pt-8 pb-12 flex flex-col items-center justify-center opacity-50">
              <span className="text-4xl text-white font-light mb-2">∞</span>
              <span className="text-xs uppercase tracking-widest text-white/70">Continuous Learning & Improvement</span>
            </div>

            {/* Call to Action */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center pt-8"
            >
              <a 
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-8 py-4 font-bold transition-transform hover:scale-105"
              >
                Explore Real AI Solutions ➔
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
