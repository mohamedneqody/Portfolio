// src/styles/glass.ts
// Contrast over decoration: Selective Glass System

export const glass = {
  // Heavy glass for primary floating elements (e.g., Navbar)
  heavy: 'bg-[#050816]/70 backdrop-blur-xl border border-white/10',
  
  // Standard glass for cards that need to sit above solid backgrounds
  medium: 'bg-white/[0.04] backdrop-blur-md border border-white/[0.08]',
  
  // Light glass for subtle overlays
  light: 'bg-white/[0.02] backdrop-blur-sm border border-white/[0.04]',
  
  // Solid style for contrast against glass elements
  solid: 'bg-[#0A0F24] border border-white/[0.08]',
} as const;
