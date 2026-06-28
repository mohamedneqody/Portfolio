// src/styles/shadows.ts
// Elevation System replacing pure glows with multi-layered depth

export const shadows = {
  // Lowest elevation (subtle depth)
  sm: '0 2px 8px rgba(0,0,0,0.2)',
  
  // Medium elevation (cards)
  md: '0 4px 12px rgba(0,0,0,0.25), 0 8px 24px rgba(0,0,0,0.15)',
  
  // High elevation (floating objects, modals, hovered cards)
  // Combines pure shadow with a subtle colored glow
  lg: '0 2px 8px rgba(0,0,0,0.2), 0 12px 30px rgba(124,58,237,0.15), 0 0 50px rgba(124,58,237,0.08)',
  
  // Text glow for specific emphasis
  textGlowPrimary: '0 0 20px rgba(124,58,237,0.4)',
  textGlowAccent: '0 0 20px rgba(34,211,238,0.4)',
} as const;
