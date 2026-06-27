"use client";

import { motion } from "framer-motion";
import { Certificate } from "@/types";
import { Award, Clock, FileBadge, FolderGit2, ShieldCheck, Sparkles, Star } from "lucide-react";
import React from "react";
import Image from "next/image";

export function CertificateCard({ cert, onClick }: { cert: Certificate; onClick: () => void }) {
  const difficultyStars = Array(5).fill(0).map((_, i) => (
    <Star key={i} size={12} className={i < cert.difficulty ? "fill-[#22D3EE] text-[#22D3EE]" : "text-white/20"} />
  ));

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="group relative h-full cursor-pointer"
    >
      {/* Glow Effect on Hover (Soft Purple/Cyan) */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#7C3AED]/0 to-[#22D3EE]/0 opacity-0 blur-xl transition-all duration-700 group-hover:from-[#7C3AED]/30 group-hover:to-[#22D3EE]/30 group-hover:opacity-100" />
      
      <div 
        className={`relative flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 transform group-hover:-translate-y-1.5 group-hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] ${
          cert.provider.toLowerCase().includes('google') || cert.provider.toLowerCase().includes('ibm')
            ? 'border-[#22D3EE]/20 bg-[#0a0515]/90 group-hover:border-[#7C3AED]/40'
            : 'border-white/5 bg-[#0a0515]/80 group-hover:border-[#7C3AED]/40 group-hover:bg-[#0a0515]'
        } backdrop-blur-md after:absolute after:inset-0 after:-translate-x-[150%] after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent group-hover:after:animate-[sweep_0.7s_ease-in-out_1]`}
      >
        {/* Top Badge */}
        {cert.badge && (
          <div className="absolute left-3 top-3 z-10 flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 text-[10px] font-black text-black shadow-lg">
            <Sparkles size={12} /> {cert.badge}
          </div>
        )}

        {cert.verifyUrl && !cert.badge && (
          <div className="absolute left-3 top-3 z-10 flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-[10px] font-bold text-white/70 backdrop-blur-md border border-white/10 group-hover:bg-[#22D3EE]/10 group-hover:text-[#22D3EE] group-hover:border-[#22D3EE]/30 transition-colors">
            <ShieldCheck size={12} /> Verified
          </div>
        )}

        {/* Provider Icon / Name */}
        <div className="absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur-md border border-white/5">
          {cert.provider.toLowerCase().includes("google") ? (
            <svg viewBox="0 0 24 24" width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          ) : cert.provider.toLowerCase().includes("ibm") ? (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#0f62fe" xmlns="http://www.w3.org/2000/svg"><path d="M0 17.5h7.2v-2H0v2zm0-4.6h7.2v-2H0v2zm0-4.5h7.2v-2H0v2zM0 3.8h7.2v-2H0v2zm11.3 13.7h-2.3v-2h2.3c1.5 0 2.4-1.2 2.4-2.7v-1.6c0-1.5-.9-2.7-2.4-2.7h-2.3v-2h2.3c2.7 0 4.6 2 4.6 4.7v1.6c0 2.7-1.9 4.7-4.6 4.7zm-2.3-9.1h3c1.5 0 2.4-1.2 2.4-2.7V4.2c0-1.5-.9-2.7-2.4-2.7h-3v2h3c.3 0 .6.3.6.7v1.6c0 .4-.3.7-.6.7h-3v2zm9 9.1h4.5v-2H18v2zm0-4.6h4.5v-2H18v2zm0-4.5h4.5v-2H18v2zM18 3.8h4.5v-2H18v2z"/></svg>
          ) : cert.provider.toLowerCase().includes("udemy") ? (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#a435f0" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.132 15.526c-1.399 1.341-3.149 2.012-5.132 2.012-1.982 0-3.732-.67-5.132-2.012-1.399-1.342-2.099-3.093-2.099-5.253V7.042h2.529v3.231c0 1.488.467 2.659 1.401 3.513.932.853 2.054 1.28 3.364 1.28 1.31 0 2.431-.427 3.364-1.28.934-.854 1.401-2.025 1.401-3.513V7.042h2.529v3.231c.002 2.16-.698 3.911-2.097 5.253z"/></svg>
          ) : cert.provider.toLowerCase().includes("coursera") ? (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#0056D2" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.8 17.5c-3.1 0-5.7-2.6-5.7-5.7s2.6-5.7 5.7-5.7c1.4 0 2.7.5 3.7 1.4l-1.4 1.6c-.6-.6-1.4-.9-2.2-.9-1.9 0-3.4 1.6-3.4 3.5s1.6 3.5 3.4 3.5c.8 0 1.6-.3 2.2-.9l1.4 1.6c-1 .9-2.3 1.5-3.7 1.5z"/></svg>
          ) : null}
          {cert.provider}
        </div>

        {/* Thumbnail Image */}
        <div className="relative h-40 w-full overflow-hidden bg-black/50">
          {cert.image ? (
            <Image
              src={cert.image}
              alt={cert.title}
              width={400}
              height={200}
              className="h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:opacity-100 group-hover:brightness-105 group-hover:contrast-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#7C3AED]/10 to-[#22D3EE]/10">
              <Award size={40} className="text-white/20" />
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0515] to-transparent" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5 text-right">
          <h3 className="mb-2 text-lg font-bold text-white group-hover:text-[#7C3AED] transition-colors leading-snug line-clamp-2">
            {cert.title}
          </h3>
          
          <div className="mb-4 flex items-center justify-end gap-2 text-xs text-white/50">
            <span className="flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded border border-white/5">{cert.level}</span>
            <span className="flex items-center gap-0.5 bg-white/5 px-2 py-0.5 rounded border border-white/5">
              {difficultyStars}
            </span>
          </div>

          {/* Quick Stats */}
          <div className="mt-auto grid grid-cols-3 gap-2 border-t border-white/5 pt-4 text-center text-xs font-medium text-white/50 group-hover:text-white/70 transition-colors">
            <div className="flex flex-col items-center justify-center gap-1">
              <Clock size={14} className="text-[#38BDF8]" />
              {cert.duration}
            </div>
            <div className="flex flex-col items-center justify-center gap-1 border-x border-white/5">
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
