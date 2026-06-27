"use client";

import { motion } from "framer-motion";

export default function MeshGradient() {
  return (
    <div className="fixed inset-0 z-[-5] overflow-hidden bg-[#05020a]">
      <motion.div
        animate={{
          x: ["-25%", "25%", "-25%"],
          y: ["-25%", "25%", "-25%"],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[50%] -left-[50%] h-[200%] w-[200%] opacity-30 mix-blend-screen"
        style={{
          background: "radial-gradient(circle at center, rgba(124, 58, 237, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(34, 211, 238, 0.1) 0%, transparent 30%)",
        }}
      />
      <motion.div
        animate={{
          x: ["25%", "-25%", "25%"],
          y: ["25%", "-25%", "25%"],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[50%] -left-[50%] h-[200%] w-[200%] opacity-20 mix-blend-screen"
        style={{
          background: "radial-gradient(circle at 20% 80%, rgba(34, 211, 238, 0.15) 0%, transparent 40%)",
        }}
      />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
    </div>
  );
}
