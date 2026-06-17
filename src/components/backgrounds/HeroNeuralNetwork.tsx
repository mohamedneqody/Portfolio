'use client';

import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const MAX_CONNECTIONS = 300; // Max possible line segments

export default function HeroNeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const particleCount = 60;
  const maxDistance = 1.8;

  // Generate random positions and velocities
  const particles = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const vel: { x: number; y: number; z: number }[] = [];
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4 - 1;

      vel.push({
        x: (Math.random() - 0.5) * 0.015,
        y: (Math.random() - 0.5) * 0.015,
        z: (Math.random() - 0.5) * 0.015,
      });
    }
    return { positions: pos, velocities: vel };
  }, []);

  // Pre-allocate line buffers
  const linePositions = useMemo(() => new Float32Array(MAX_CONNECTIONS * 6), []);

  // Line material
  const lineMaterial = useMemo(() => {
    return new THREE.LineBasicMaterial({
      color: new THREE.Color('#22D3EE'),
      transparent: true,
      opacity: 0.3,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
  }, []);

  // Build geometries imperatively after mount to avoid NaN
  useEffect(() => {
    if (!pointsRef.current || !linesRef.current) return;

    // Points geometry
    const pointsGeom = new THREE.BufferGeometry();
    pointsGeom.setAttribute(
      'position',
      new THREE.BufferAttribute(particles.positions, 3)
    );
    pointsRef.current.geometry = pointsGeom;

    // Lines geometry
    const linesGeom = new THREE.BufferGeometry();
    linesGeom.setAttribute(
      'position',
      new THREE.BufferAttribute(linePositions, 3)
    );
    linesGeom.setDrawRange(0, 0); // Start with nothing drawn
    linesRef.current.geometry = linesGeom;
  }, [particles.positions, linePositions]);

  useFrame(() => {
    if (!pointsRef.current || !linesRef.current) return;

    const posAttr = pointsRef.current.geometry.attributes
      .position as THREE.BufferAttribute;
    if (!posAttr) return;
    const posArray = posAttr.array as Float32Array;

    // Update particle positions
    for (let i = 0; i < particleCount; i++) {
      posArray[i * 3] += particles.velocities[i].x;
      posArray[i * 3 + 1] += particles.velocities[i].y;
      posArray[i * 3 + 2] += particles.velocities[i].z;

      // Bounce off boundaries
      if (Math.abs(posArray[i * 3]) > 6) particles.velocities[i].x *= -1;
      if (Math.abs(posArray[i * 3 + 1]) > 4) particles.velocities[i].y *= -1;
      if (Math.abs(posArray[i * 3 + 2] + 1) > 3)
        particles.velocities[i].z *= -1;
    }
    posAttr.needsUpdate = true;

    // Pulse nodes
    const mat = pointsRef.current.material as THREE.PointsMaterial;
    mat.size = 0.04 + Math.sin(Date.now() * 0.002) * 0.02;

    // Update line connections based on distance
    let vertexIdx = 0;
    let numConnected = 0;

    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        if (numConnected >= MAX_CONNECTIONS) break;

        const dx = posArray[i * 3] - posArray[j * 3];
        const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
        const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < maxDistance * maxDistance) {
          linePositions[vertexIdx++] = posArray[i * 3];
          linePositions[vertexIdx++] = posArray[i * 3 + 1];
          linePositions[vertexIdx++] = posArray[i * 3 + 2];

          linePositions[vertexIdx++] = posArray[j * 3];
          linePositions[vertexIdx++] = posArray[j * 3 + 1];
          linePositions[vertexIdx++] = posArray[j * 3 + 2];

          numConnected++;
        }
      }
      if (numConnected >= MAX_CONNECTIONS) break;
    }

    const linesGeom = linesRef.current.geometry;
    linesGeom.setDrawRange(0, numConnected * 2);
    const linePosAttr = linesGeom.attributes
      .position as THREE.BufferAttribute;
    if (linePosAttr) linePosAttr.needsUpdate = true;

    // Scroll handling: fade out and parallax
    const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;

    // Parallax
    if (groupRef.current) {
      groupRef.current.position.y = scrollY * 0.006;
    }

    // Fade out: strong near top, totally gone by 600px
    const fade = Math.max(0, 1 - scrollY / 600);
    mat.opacity = fade * 0.7;
    lineMaterial.opacity = fade * 0.3;
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry />
        <pointsMaterial
          color="#22D3EE"
          size={0.04}
          transparent
          opacity={0.7}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <lineSegments ref={linesRef} material={lineMaterial}>
        <bufferGeometry />
      </lineSegments>
    </group>
  );
}
