'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
uniform float uTime;
varying vec2 vUv;
varying vec3 vPosition;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 = v - i + dot(i, C.xxx) ;
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
  float n_ = 0.142857142857;
  vec3  ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );
  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
}

void main() {
  vUv = uv;
  vPosition = position;
  
  float noise = snoise(position * 2.0 + uTime * 0.5) * 0.08;
  vec3 newPosition = position + normal * noise;
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uOpacity;
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  // Enhanced Volumetric Glow (Fresnel)
  vec3 viewDirection = normalize(cameraPosition - vPosition);
  float fresnel = dot(normalize(vPosition), vec3(0.0, 0.0, 1.0));
  fresnel = clamp(1.0 - fresnel, 0.0, 1.0);
  
  // Power of 2.0 makes the glow spread further inward (volumetric feel)
  float glowIntensity = pow(fresnel, 2.0); 

  // Animated Gradient Surface Mixing
  // Dynamic waves based on UV and Time
  float wave1 = sin(vUv.x * 10.0 + uTime * 0.8) * 0.5 + 0.5;
  float wave2 = cos(vUv.y * 8.0 - uTime * 0.6) * 0.5 + 0.5;
  
  // Mix Primary (Purple) and Secondary (Purple)
  vec3 baseMix = mix(uColor1, uColor2, wave1);
  
  // Mix in Accent (Cyan) heavily based on the second wave and glow (Increased for 25% balance)
  vec3 colorWithAccent = mix(baseMix, uColor3, wave2 * 0.85);

  // Volumetric Edge Highlight: Pure Cyan + White at the extreme edges
  vec3 edgeColor = mix(uColor3, vec3(1.0), 0.3); // Bright Cyan-White
  vec3 finalColor = mix(colorWithAccent, edgeColor, glowIntensity * 1.8);

  // Alpha is stronger at the edges for the volumetric effect
  float alpha = (0.5 + glowIntensity * 0.8) * uOpacity;
  
  gl_FragColor = vec4(finalColor, alpha);
}
`;

export default function HeroOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color('#7C3AED') }, // Primary
      uColor2: { value: new THREE.Color('#A855F7') }, // Secondary
      uColor3: { value: new THREE.Color('#22D3EE') }, // Accent
      uOpacity: { value: 1.0 },
    }),
    []
  );

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.elapsedTime;
      
      // Slow rotation
      meshRef.current.rotation.y = t * 0.1;
      meshRef.current.rotation.z = t * 0.05;
      
      // Breathing animation (subtle scale pulse around 2.2)
      const breathe = 2.2 + Math.sin(t * 0.8) * 0.1;
      meshRef.current.scale.setScalar(breathe);
      
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = t;
      
      // Calculate scroll fade and parallax upward movement
      const scrollY = window.scrollY;
      meshRef.current.position.y = scrollY * 0.005;
      
      // Fade out after 200px, totally invisible by 800px
      const opacity = Math.max(0, 1 - (scrollY - 200) / 600);
      material.uniforms.uOpacity.value = Math.min(1, opacity);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -1.5]} scale={2.2}>
      <sphereGeometry args={[1, 64, 64]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
        blending={THREE.NormalBlending}
      />
    </mesh>
  );
}
