'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function GridBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Intense black fog for depth
    scene.fog = new THREE.FogExp2(0x000000, 0.08);

    const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 50);
    camera.position.set(0, 0, 5); // Center of the tunnel
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 1); // Pure black background
    
    containerRef.current.appendChild(renderer.domElement);

    // Grid config to match the "Grid Run" screenshot (white/gray lines)
    const size = 100;
    const divisions = 50; // Larger squares
    const primaryColor = 0xffffff; // White glow
    const secondaryColor = 0x444444; // Dark gray lines

    // Create a 4-sided tunnel
    const grids: THREE.GridHelper[] = [];

    // Floor
    const floor = new THREE.GridHelper(size, divisions, primaryColor, secondaryColor);
    floor.position.y = -3;
    grids.push(floor);

    // Ceiling
    const ceiling = new THREE.GridHelper(size, divisions, primaryColor, secondaryColor);
    ceiling.position.y = 3;
    grids.push(ceiling);

    // Left Wall
    const leftWall = new THREE.GridHelper(size, divisions, primaryColor, secondaryColor);
    leftWall.rotation.z = Math.PI / 2;
    leftWall.position.x = -5;
    grids.push(leftWall);

    // Right Wall
    const rightWall = new THREE.GridHelper(size, divisions, primaryColor, secondaryColor);
    rightWall.rotation.z = Math.PI / 2;
    rightWall.position.x = 5;
    grids.push(rightWall);

    // Add all to scene
    grids.forEach(g => scene.add(g));

    const clock = new THREE.Clock();

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();
      const speed = 5.0; // Fast movement like Grid Run
      
      // Infinite scrolling effect
      const offset = (elapsedTime * speed) % (size / divisions);
      
      grids.forEach(g => {
        g.position.z = offset;
      });

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      grids.forEach(g => {
        g.geometry.dispose();
        (g.material as THREE.Material).dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 h-full w-full opacity-80" 
      style={{ pointerEvents: 'none' }}
    />
  );
}
