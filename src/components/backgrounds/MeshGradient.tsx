"use client";

import { motion } from "framer-motion";

export default function MeshGradient() {
  return (
    <div className="fixed inset-0 z-[-5] overflow-hidden bg-[#0a0515]">
      
      {/* Animated Glowing Orbs - Much Brighter */}
      <motion.div
        animate={{
          x: ["-10%", "10%", "-10%"],
          y: ["-10%", "10%", "-10%"],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] h-[100%] w-[100%] mix-blend-screen opacity-70"
        style={{
          background: "radial-gradient(circle at 30% 30%, rgba(124, 58, 237, 0.4) 0%, transparent 40%)",
        }}
      />
      <motion.div
        animate={{
          x: ["10%", "-10%", "10%"],
          y: ["10%", "-10%", "10%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[20%] h-[100%] w-[100%] mix-blend-screen opacity-60"
        style={{
          background: "radial-gradient(circle at 70% 70%, rgba(34, 211, 238, 0.3) 0%, transparent 40%)",
        }}
      />

      {/* Cyberpunk Animated Grid */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      >
        <motion.div 
          animate={{ y: [0, 40] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(34, 211, 238, 0.5) 1px, transparent 1px)',
            backgroundSize: '100% 40px'
          }}
        />
      </div>

      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay pointer-events-none" />
    </div>
  );
}
