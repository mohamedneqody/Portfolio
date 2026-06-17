"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface AnimationContextValue {
  isReady: boolean;
}

const AnimationContext = createContext<AnimationContextValue>({ isReady: false });

export function useAnimation() {
  return useContext(AnimationContext);
}

interface AnimationProviderProps {
  children: ReactNode;
}

export default function AnimationProvider({ children }: AnimationProviderProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Register all GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Configure ScrollTrigger defaults
    ScrollTrigger.defaults({
      toggleActions: "play none none reverse",
    });

    setIsReady(true);

    return () => {
      // Kill all ScrollTrigger instances on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <AnimationContext.Provider value={{ isReady }}>
      {children}
    </AnimationContext.Provider>
  );
}
