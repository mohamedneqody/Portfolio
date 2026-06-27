"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Certificate } from "@/types";
import { Award, Clock, FileBadge, FolderGit2, ShieldCheck, Sparkles, Star } from "lucide-react";
import React, { useRef } from "react";

export function CertificateCard({ cert, onClick }: { cert: Certificate; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });
  
  const rotateX = useMotionTemplate`${mouseYSpring}deg`;
  const rotateY = useMotionTemplate`${mouseXSpring}deg`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const rotateXValue = ((mouseY / height) - 0.5) * -10; // Max rotation 10deg
    const rotateYValue = ((mouseX / width) - 0.5) * 10;
    
    x.set(rotateYValue);
    y.set(rotateXValue);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const difficultyStars = Array(5).fill(0).map((_, i) => (
    <Star key={i} size={12} className={i < cert.difficulty ? "fill-[#22D3EE] text-[#22D3EE]" : "text-white/20"} />
  ));

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="group relative h-full cursor-pointer"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-[#22D3EE]/0 via-[#7C3AED]/0 to-[#22D3EE]/0 opacity-0 blur-md transition-all duration-500 group-hover:from-[#22D3EE]/50 group-hover:via-[#7C3AED]/50 group-hover:to-[#22D3EE]/50 group-hover:opacity-100" />
      
      <div 
        className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0515] transition-colors group-hover:border-white/20 group-hover:bg-[#0f0820]"
        style={{ transform: "translateZ(30px)" }}
      >
        {/* Top Badge */}
        {cert.badge && (
          <div className="absolute left-3 top-3 z-10 flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 text-[10px] font-black text-black shadow-lg">
            <Sparkles size={12} /> {cert.badge}
          </div>
        )}

        {cert.verifyUrl && !cert.badge && (
          <div className="absolute left-3 top-3 z-10 flex items-center gap-1 rounded-full bg-[#22D3EE]/20 px-3 py-1 text-[10px] font-bold text-[#22D3EE] backdrop-blur-md border border-[#22D3EE]/30">
            <ShieldCheck size={12} /> Verified
          </div>
        )}

        {/* Provider Icon / Name */}
        <div className="absolute right-3 top-3 z-10 rounded-full bg-black/60 px-3 py-1 text-[10px] font-bold text-white backdrop-blur-md border border-white/10">
          {cert.provider}
        </div>

        {/* Thumbnail Image */}
        <div className="relative h-40 w-full overflow-hidden bg-black">
          {cert.image ? (
            <img
              src={cert.image}
              alt={cert.title}
              className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#7C3AED]/20 to-[#22D3EE]/20">
              <Award size={40} className="text-white/20" />
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0515] to-transparent" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5 text-right">
          <h3 className="mb-2 text-lg font-bold text-white group-hover:text-[#22D3EE] transition-colors leading-snug line-clamp-2" style={{ transform: "translateZ(20px)" }}>
            {cert.title}
          </h3>
          
          <div className="mb-4 flex items-center justify-end gap-2 text-xs text-white/50">
            <span className="flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded border border-white/5">{cert.level}</span>
            <span className="flex items-center gap-0.5 bg-white/5 px-2 py-0.5 rounded border border-white/5">
              {difficultyStars}
            </span>
          </div>

          {/* Quick Stats */}
          <div className="mt-auto grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center text-xs font-medium text-white/70" style={{ transform: "translateZ(15px)" }}>
            <div className="flex flex-col items-center justify-center gap-1">
              <Clock size={14} className="text-[#38BDF8]" />
              {cert.duration}
            </div>
            <div className="flex flex-col items-center justify-center gap-1 border-x border-white/10">
              <FileBadge size={14} className="text-[#7C3AED]" />
              {cert.skills.length} Skills
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <FolderGit2 size={14} className="text-emerald-400" />
              {cert.projects.length} Projects
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
