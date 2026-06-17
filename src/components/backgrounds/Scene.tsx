'use client';

import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerformanceMonitor } from '@react-three/drei';
import Aurora from './Aurora';
import HeroOrb from './HeroOrb';
import HeroNeuralNetwork from './HeroNeuralNetwork';

export default function Scene() {
  const [dpr, setDpr] = useState(1); // Default to 1 for performance
  const [isLowEnd, setIsLowEnd] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // Disable all 3D automatically on low-performance devices or if reduced motion is preferred
  if (reduceMotion || isLowEnd) {
    return null;
  }

  return (
    <Canvas
      dpr={dpr}
      gl={{ antialias: false, powerPreference: 'high-performance', alpha: true }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <PerformanceMonitor 
        onIncline={() => setDpr(2)} 
        onDecline={() => setDpr(1)} 
        onFallback={() => setIsLowEnd(true)}
      />
      <Suspense fallback={null}>
        {/* Layer 1: Global Aurora Background */}
        <Aurora />
        {/* Layer 2: Hero Neural Network (fades on scroll) */}
        <HeroNeuralNetwork />
        {/* Layer 3: Hero 3D Orb (fades on scroll, primary visual focus) */}
        <HeroOrb />
      </Suspense>
    </Canvas>
  );
}
