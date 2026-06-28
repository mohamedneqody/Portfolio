"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SmoothScroll from "@/components/providers/SmoothScroll";
import AnimationProvider from "@/components/providers/AnimationProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import CustomCursor from "@/components/ui/CustomCursor";
import BackToTop from "@/components/ui/BackToTop";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import SectionDivider from "@/components/layout/SectionDivider";

import Services from "@/components/sections/Services";
// import Achievements from "@/components/sections/Achievements";
import Pipeline from "@/components/Pipeline/Pipeline";
// import Outcomes from "@/components/sections/Outcomes";
import CertificationsBanner from "@/components/sections/CertificationsBanner";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for premium feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0a0612]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Animated background blobs */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full blur-[80px]"
                style={{ background: "rgba(124, 58, 237, 0.3)" }}
                animate={{
                  scale: [1, 1.3, 1],
                  x: ["-50%", "-40%", "-50%"],
                  y: ["-50%", "-60%", "-50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 w-[200px] h-[200px] rounded-full blur-[60px]"
                style={{ background: "rgba(34, 211, 238, 0.2)" }}
                animate={{
                  scale: [1, 0.8, 1],
                  x: ["-50%", "-60%", "-50%"],
                  y: ["-50%", "-40%", "-50%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </div>

            {/* Loading content */}
            <div className="relative z-10 flex flex-col items-center gap-8">
              {/* Logo */}
              <motion.div
                className="text-3xl font-bold tracking-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ fontFamily: "var(--font-outfit), sans-serif" }}
              >
                algorithm cities
              </motion.div>

              {/* Loading bar */}
              <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #7C3AED, #22D3EE)",
                  }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                />
              </div>

              {/* Loading dots */}
              <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{ background: "#22D3EE" }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <AnimationProvider>
          <SmoothScroll>
            <CustomCursor />
            <ScrollProgress />
            <Navbar />

            <main>
              <Hero />
              <SectionDivider />
              <About />
              <SectionDivider />
              <Projects />
              <SectionDivider />
              <Pipeline />
              <SectionDivider />
              <Services />
              <SectionDivider />
              <Skills />
              <SectionDivider />
              <CertificationsBanner />
              <SectionDivider />
              <Contact />
            </main>

            <Footer />
            <BackToTop />
          </SmoothScroll>
        </AnimationProvider>
      )}
    </>
  );
}
