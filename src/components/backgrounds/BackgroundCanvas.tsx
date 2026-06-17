'use client';

import dynamic from 'next/dynamic';

// Dynamically import the Scene component to ensure WebGL/Three.js
// is only loaded on the client side, and lazily loaded to not block initial render.
const Scene = dynamic(() => import('./Scene'), { 
  ssr: false,
});

export default function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Scene />
    </div>
  );
}
