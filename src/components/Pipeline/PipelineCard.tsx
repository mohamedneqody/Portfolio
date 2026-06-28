import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { PipelineStep } from '@/types';
import PipelineArchitecture from './PipelineArchitecture';
import DecisionMatrix from './DecisionMatrix';
import Challenges from './Challenges';
import TechnologyGroup from './TechnologyGroup';
import Deliverables from './Deliverables';

interface PipelineCardProps {
  step: PipelineStep;
  isActive: boolean;
  isDimmed: boolean;
  onClick: () => void;
}

export default function PipelineCard({ step, isActive, isDimmed, onClick }: PipelineCardProps) {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`relative cursor-pointer overflow-hidden rounded-2xl border transition-all duration-500 ease-in-out ${
        isActive
          ? 'border-[#7C3AED]/30 bg-[#0A0F24] shadow-[0_12px_30px_rgba(124,58,237,0.15)] z-10 scale-[1.02]'
          : 'border-white/[0.08] bg-[#0A0F24] hover:border-white/[0.15] shadow-[0_2px_8px_rgba(0,0,0,0.2)]'
      } ${isDimmed && !isActive ? 'opacity-40 scale-95 blur-[1px]' : 'opacity-100'}`}
      style={{
        boxShadow: isActive ? `0 0 40px -10px ${step.color}30` : undefined,
      }}
    >
      {/* Glow Header */}
      <div 
        className="absolute top-0 left-0 h-1 w-full"
        style={{ backgroundColor: step.color, opacity: isActive ? 1 : 0.5 }}
      />

      <div className="p-6">
        {/* Header Section */}
        <motion.div layout className="flex items-start justify-between gap-4">
          <div>
            <motion.h3 layout className="text-2xl font-bold text-white mb-2 tracking-tight">
              {step.title}
            </motion.h3>
            <motion.p layout className="text-sm font-medium text-white/50 mb-3" dir="auto">
              {step.description}
            </motion.p>
          </div>
          
          <motion.div
            animate={{ rotate: isActive ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
              isActive ? 'bg-white/10 text-white' : 'bg-transparent text-white/30'
            }`}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>

        {/* Expandable Content */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="overflow-hidden"
            >
              <div className="pt-4 pb-2">
                <PipelineArchitecture nodes={step.architecture || []} />
                <Challenges challenges={step.challenges || []} />
                <DecisionMatrix decisions={step.decisionMatrix || []} />
                <TechnologyGroup groups={step.technologies || []} />
                <Deliverables deliverables={step.deliverables || []} />

                {/* Linked Projects */}
                {step.linkedProjects && step.linkedProjects.length > 0 && (
                  <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-between bg-white/5 rounded-xl p-4 border border-white/5">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/40 block mb-1">📌 Implemented In</span>
                      <div className="flex flex-wrap gap-2">
                        {step.linkedProjects.map(proj => (
                          <span key={proj.id} className="text-sm font-medium text-white/80 flex items-center gap-1.5">
                            <span className="text-green-400">✓</span> {proj.title}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a href="#projects" className="shrink-0 rounded-lg bg-white/10 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/20">
                      View Related Projects →
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
