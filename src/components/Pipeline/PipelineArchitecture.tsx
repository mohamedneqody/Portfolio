import { ArchitectureNode } from '@/types';
import { motion } from 'framer-motion';
import { ArrowRight, Box, Brain, Database, FileJson, Layout, Network, Webhook, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  webhook: Webhook,
  brain: Brain,
  workflow: Network,
  database: Database,
  diagram: Layout,
  json: FileJson,
  box: Box
};

export default function PipelineArchitecture({ nodes }: { nodes: ArchitectureNode[] }) {
  if (!nodes || nodes.length === 0) return null;

  return (
    <div className="mt-6 border-t border-white/10 pt-4">
      <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#A855F7]">
        Architecture Flow
      </h4>
      <div className="flex flex-wrap items-center gap-2 rounded-xl bg-black/20 p-4 border border-white/5 overflow-x-auto">
        {nodes.map((node, idx) => {
          const Icon = node.icon && iconMap[node.icon] ? iconMap[node.icon] : Box;
          const isLast = idx === nodes.length - 1;

          return (
            <div key={idx} className="flex items-center gap-2 shrink-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * idx }}
                className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-1.5"
              >
                <Icon size={14} className="text-[#A855F7]" />
                <span className="text-xs font-medium text-white/90" dir="auto">{node.name}</span>
              </motion.div>
              
              {!isLast && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  transition={{ delay: 0.1 * idx + 0.1 }}
                >
                  <ArrowRight size={14} className="text-white/30" />
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
