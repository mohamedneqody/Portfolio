import { motion } from 'framer-motion';
import { CheckSquare } from 'lucide-react';

export default function Deliverables({ deliverables }: { deliverables: string[] }) {
  if (!deliverables || deliverables.length === 0) return null;

  return (
    <div className="mt-6 border-t border-white/10 pt-4">
      <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#22C55E]">
        Deliverables
      </h4>
      <ul className="space-y-2">
        {deliverables.map((item, idx) => (
          <motion.li 
            key={idx}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * idx }}
            className="flex items-start gap-2 text-sm text-white/80"
          >
            <CheckSquare size={16} className="mt-0.5 shrink-0 text-[#22C55E]/70" />
            <span dir="auto">{item}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
