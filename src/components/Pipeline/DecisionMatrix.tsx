import { Decision } from '@/types';
import { motion } from 'framer-motion';

export default function DecisionMatrix({ decisions }: { decisions: Decision[] }) {
  if (!decisions || decisions.length === 0) return null;

  return (
    <div className="mt-6 border-t border-white/10 pt-4">
      <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#38BDF8]">
        Key Decisions
      </h4>
      <div className="overflow-hidden rounded-xl border border-white/5 bg-black/20">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 text-white/50">
            <tr>
              <th className="px-4 py-3 font-semibold text-right" dir="rtl">القرار (Decision)</th>
              <th className="px-4 py-3 font-semibold text-right" dir="rtl">السبب (Why)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {decisions.map((decision, idx) => (
              <motion.tr 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="transition-colors hover:bg-white/5"
              >
                <td className="px-4 py-3 font-medium text-white/90 align-top text-right" dir="auto">{decision.name}</td>
                <td className="px-4 py-3 text-white/60 leading-relaxed text-right" dir="auto">{decision.why}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
