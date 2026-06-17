'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function VantaBackground() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Poll for VANTA to be available from the global scripts loaded in layout.tsx
    const checkVanta = setInterval(() => {
      if (typeof window !== 'undefined' && (window as any).VANTA && (window as any).VANTA.BIRDS && !vantaEffect && myRef.current) {
        clearInterval(checkVanta);
        try {
          const effect = (window as any).VANTA.BIRDS({
            el: myRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x07192f,
            color1: 0xff0000,
            color2: 0xd1ff,
            colorMode: "variance",
            birdSize: 1.00,
            wingSpan: 30.00,
            speedLimit: 5.00,
            separation: 20.00,
            alignment: 20.00,
            cohesion: 20.00,
            quantity: 5.00
          });
          setVantaEffect(effect);
        } catch (e) {
          console.error("Vanta load error", e);
        }
      }
    }, 100);

    // Timeout to stop polling after 10 seconds to avoid infinite loops if CDN fails
    const timeout = setTimeout(() => clearInterval(checkVanta), 10000);

    return () => {
      clearInterval(checkVanta);
      clearTimeout(timeout);
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div 
      ref={myRef} 
      className="absolute inset-0 -z-20 h-full w-full" 
      style={{ minHeight: '100vh', backgroundColor: '#07192f' }}
    />
  );
}
