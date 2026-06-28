// src/styles/colors.ts
// Unified Color System for the Portfolio

export const colors = {
  // Base background (Deep Navy)
  background: '#050816',
  
  // Primary identity
  primary: '#7C3AED',   // Purple 700
  primaryLight: '#A855F7', // Purple 500
  primarySoft: '#A78BFA', // Purple 400
  
  // Secondary / Accent (AI Glow)
  accent: '#22D3EE',    // Cyan 400
  
  // Highlighting
  highlight: '#FFFFFF',
  
  // Typography
  text: {
    primary: 'rgba(255, 255, 255, 0.95)',
    secondary: 'rgba(255, 255, 255, 0.6)',
    muted: 'rgba(255, 255, 255, 0.4)',
  },
  
  // Borders
  border: {
    default: 'rgba(255, 255, 255, 0.08)',
    hover: 'rgba(124, 58, 237, 0.5)',
    subtle: 'rgba(255, 255, 255, 0.04)',
  }
} as const;
