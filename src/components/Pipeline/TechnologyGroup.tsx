import { TechGroup } from '@/types';
import { motion } from 'framer-motion';

export default function TechnologyGroup({ groups }: { groups: TechGroup[] }) {
  if (!groups || groups.length === 0) return null;

  return (
    <div className="mt-6 border-t border-white/10 pt-4">
      <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#38BDF8]">
        Technologies Used
      </h4>
      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map((group, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx }}
          >
            <h5 className="mb-2 text-xs font-semibold text-white/50">{group.category}</h5>
            <ul className="space-y-1.5">
              {group.technologies.map((tech, techIdx) => (
                <li key={techIdx} className="flex items-center gap-2 text-sm text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
                  <span dir="auto">{tech}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
