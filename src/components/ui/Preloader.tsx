"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, BrainCircuit } from "lucide-react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";

    // Simulate loading progress
    const duration = 2500; // 2.5 seconds loading + 0.5s fade out
    const intervalTime = 50;
    const steps = duration / intervalTime;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      setProgress(Math.min((step / steps) * 100, 100));
      if (step >= steps) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "";
        }, 500);
      }
    }, intervalTime);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#05020a]"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            <motion.div 
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute left-[30%] top-[30%] h-[40vh] w-[40vh] rounded-full bg-[#22D3EE]/20 blur-[100px]" 
            />
            <motion.div 
              animate={{ 
                rotate: -360,
                scale: [1, 1.5, 1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute right-[30%] bottom-[30%] h-[40vh] w-[40vh] rounded-full bg-[#7C3AED]/20 blur-[100px]" 
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo/Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex items-center justify-center"
            >
              <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                <BrainCircuit size={48} className="text-[#22D3EE]" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-1 rounded-2xl border border-dashed border-[#7C3AED]/50"
                />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-2 text-2xl font-bold tracking-widest text-white uppercase"
            >
              System Initializing
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8 text-sm font-medium text-white/50"
            >
              Loading AI Engineer Portfolio...
            </motion.p>

            {/* Progress Bar */}
            <div className="w-64 max-w-[80vw]">
              <div className="mb-2 flex justify-between text-xs font-bold text-[#22D3EE]">
                <span>{Math.round(progress)}%</span>
                <span className="uppercase tracking-widest">Loading</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#22D3EE] to-[#7C3AED]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
