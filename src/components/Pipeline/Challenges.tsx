import { Challenge } from '@/types';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Challenges({ challenges }: { challenges: Challenge[] }) {
  if (!challenges || challenges.length === 0) return null;

  return (
    <div className="mt-6">
      <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-orange-400">
        Common Challenges & Solutions
      </h4>
      <div className="space-y-4">
        {challenges.map((challenge, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * idx }}
            className="rounded-xl border border-white/5 bg-white/5 p-4"
          >
            <div className="mb-2 flex items-start gap-3">
              <AlertCircle size={18} className="mt-0.5 shrink-0 text-orange-400" />
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-white/50 block mb-1">Challenge</span>
                <p className="text-sm text-white/90 font-medium" dir="auto">{challenge.problem}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 border-t border-white/5 pt-2 mt-2">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-green-400" />
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-white/50 block mb-1">Solution</span>
                <p className="text-sm text-white/70" dir="auto">{challenge.solution}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
