// src/styles/motion.ts
// Unified Motion System to ensure 60 FPS and consistent breathing rhythm

export const motionTokens = {
  duration: {
    fast: 0.18,   // 180ms - Snappy interactions (hovers, clicks)
    medium: 0.3,  // 300ms - Standard transitions (page enter, card expand)
    slow: 0.6,    // 600ms - Majestic or complex multi-step reveals
    verySlow: 1.2,// 1200ms - Background ambient shifts
  },
  ease: {
    outExpo: [0.19, 1, 0.22, 1],       // Smooth, sharp deceleration
    inOutQuart: [0.77, 0, 0.175, 1],   // Dramatic slow start and slow end
    springSnappy: { type: 'spring', stiffness: 300, damping: 20 },
    springSmooth: { type: 'spring', stiffness: 100, damping: 20 },
  }
} as const;

export const transitionFast = {
  duration: motionTokens.duration.fast,
  ease: motionTokens.ease.outExpo
};

export const transitionMedium = {
  duration: motionTokens.duration.medium,
  ease: motionTokens.ease.outExpo
};

export const transitionSlow = {
  duration: motionTokens.duration.slow,
  ease: motionTokens.ease.inOutQuart
};
