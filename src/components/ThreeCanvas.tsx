import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  interactiveMode?: 'ambient' | 'wireframe' | 'refraction';
  onModeChange?: (mode: 'ambient' | 'wireframe' | 'refraction') => void;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({
  interactiveMode = 'ambient',
  onModeChange,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isSupported, setIsSupported] = useState(true);
  const [currentMode, setCurrentMode] = useState<'ambient' | 'wireframe' | 'refraction'>(interactiveMode);
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    mainGroup: THREE.Group;
    materials: THREE.Material[];
    mouseLight: THREE.PointLight;
    particlePoints: THREE.Points;
  } | null>(null);

  // Sync internal mode if prop changes
  useEffect(() => {
    setCurrentMode(interactiveMode);
  }, [interactiveMode]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setIsSupported(false);
        return;
      }
    } catch {
      setIsSupported(false);
      return;
    }

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0c);
    scene.fog = new THREE.FogExp2(0x0a0a0c, 0.035);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: true,
      alpha: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // 4. Lighting Architecture
    const ambientLight = new THREE.AmbientLight(0x181822, 1.8);
    scene.add(ambientLight);

    // Key Light (Warm Gold)
    const keyLight = new THREE.DirectionalLight(0xfde68a, 2.5);
    keyLight.position.set(6, 8, 7);
    scene.add(keyLight);

    // Fill Light (Deep Violet / Purple)
    const fillLight = new THREE.DirectionalLight(0xa855f7, 2.0);
    fillLight.position.set(-7, -4, 4);
    scene.add(fillLight);

    // Rim Light (Ice Silver / Cyber)
    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.5);
    rimLight.position.set(0, 10, -5);
    scene.add(rimLight);

    // Mouse Tracking Point Light
    const mouseLight = new THREE.PointLight(0xf59e0b, 3.5, 12, 1.2);
    mouseLight.position.set(0, 0, 3);
    scene.add(mouseLight);

    // 5. Materials List for Mode Swapping
    const materials: THREE.Material[] = [];

    // Core Physical Gold Material
    const goldMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xdfb76c,
      metalness: 0.88,
      roughness: 0.18,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
      reflectivity: 0.95,
      wireframe: currentMode === 'wireframe',
    });
    materials.push(goldMaterial);

    // Dark Obsidian Glass Material
    const obsidianGlassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x181825,
      metalness: 0.2,
      roughness: 0.08,
      transmission: 0.65,
      ior: 1.5,
      thickness: 1.2,
      transparent: true,
      opacity: 0.85,
      wireframe: currentMode === 'wireframe',
    });
    materials.push(obsidianGlassMaterial);

    // Purple Violet Metallic Material
    const purpleMetallicMaterial = new THREE.MeshStandardMaterial({
      color: 0x7c3aed,
      metalness: 0.9,
      roughness: 0.25,
      wireframe: currentMode === 'wireframe',
    });
    materials.push(purpleMetallicMaterial);

    // 6. Geometry Objects Hierarchy
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // A. Centerpiece Faceted Icosahedron
    const centerGeo = new THREE.IcosahedronGeometry(2.1, 1);
    const centerMesh = new THREE.Mesh(centerGeo, goldMaterial);
    centerMesh.position.set(2.4, 0.2, 0);
    mainGroup.add(centerMesh);

    // B. Inner Obsidian Glass Polyhedron
    const innerGeo = new THREE.OctahedronGeometry(1.3, 0);
    const innerMesh = new THREE.Mesh(innerGeo, obsidianGlassMaterial);
    innerMesh.position.set(2.4, 0.2, 0);
    mainGroup.add(innerMesh);

    // C. Orbital Torus Ring 1 (Gold/Chrome)
    const ring1Geo = new THREE.TorusGeometry(3.3, 0.04, 16, 100);
    const ring1Mesh = new THREE.Mesh(ring1Geo, goldMaterial);
    ring1Mesh.position.set(2.4, 0.2, 0);
    ring1Mesh.rotation.x = Math.PI / 3;
    mainGroup.add(ring1Mesh);

    // D. Orbital Torus Ring 2 (Purple)
    const ring2Geo = new THREE.TorusGeometry(3.8, 0.03, 16, 100);
    const ring2Mesh = new THREE.Mesh(ring2Geo, purpleMetallicMaterial);
    ring2Mesh.position.set(2.4, 0.2, 0);
    ring2Mesh.rotation.y = Math.PI / 4;
    ring2Mesh.rotation.x = -Math.PI / 6;
    mainGroup.add(ring2Mesh);

    // E. Floating Satellite Shards (Asymmetric Sculptures)
    const satelliteGeo = new THREE.DodecahedronGeometry(0.7, 0);
    const sat1 = new THREE.Mesh(satelliteGeo, obsidianGlassMaterial);
    sat1.position.set(-3.6, 2.2, -1.5);
    mainGroup.add(sat1);

    const sat2 = new THREE.Mesh(satelliteGeo, goldMaterial);
    sat2.position.set(-4.2, -2.5, -0.8);
    sat2.scale.set(0.65, 0.65, 0.65);
    mainGroup.add(sat2);

    const sat3 = new THREE.Mesh(new THREE.TetrahedronGeometry(0.9, 0), purpleMetallicMaterial);
    sat3.position.set(4.8, -2.8, -2);
    mainGroup.add(sat3);

    // 7. Swirling Micro-Particle Starfield
    const particleCount = 750;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorGold = new THREE.Color(0xf59e0b);
    const colorPurple = new THREE.Color(0xc084fc);
    const colorWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      particlePositions[i3] = (Math.random() - 0.5) * 26;
      particlePositions[i3 + 1] = (Math.random() - 0.5) * 22;
      particlePositions[i3 + 2] = (Math.random() - 0.5) * 16 - 2;

      // Color variation (70% gold, 20% purple, 10% white)
      const rand = Math.random();
      const pColor = rand > 0.3 ? colorGold : rand > 0.1 ? colorPurple : colorWhite;
      particleColors[i3] = pColor.r;
      particleColors[i3 + 1] = pColor.g;
      particleColors[i3 + 2] = pColor.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    materials.push(particleMaterial);

    const particlePoints = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particlePoints);

    sceneRef.current = {
      renderer,
      scene,
      camera,
      mainGroup,
      materials,
      mouseLight,
      particlePoints,
    };

    // 8. Mouse & Scroll Interaction State
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollY = window.scrollY;
    let targetScrollY = window.scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalized between -1 and 1
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || window.innerWidth;
      const newHeight = container.clientHeight || window.innerHeight;

      camera.aspect = newWidth / newHeight;
      // Adjust camera zoom on small screens to keep composition centered
      if (newWidth < 768) {
        camera.fov = 65;
        centerMesh.position.set(0, 0.8, 0);
        innerMesh.position.set(0, 0.8, 0);
        ring1Mesh.position.set(0, 0.8, 0);
        ring2Mesh.position.set(0, 0.8, 0);
      } else {
        camera.fov = 50;
        centerMesh.position.set(2.4, 0.2, 0);
        innerMesh.position.set(2.4, 0.2, 0);
        ring1Mesh.position.set(2.4, 0.2, 0);
        ring2Mesh.position.set(2.4, 0.2, 0);
      }
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    // Initial responsive check
    handleResize();

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // WebGL Context Safety
    const handleContextLost = (event: Event) => {
      event.preventDefault();
      console.warn('WebGL context lost, pausing render.');
    };
    const handleContextRestored = () => {
      console.info('WebGL context restored, reloading scene.');
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    renderer.domElement.addEventListener('webglcontextlost', handleContextLost, false);
    renderer.domElement.addEventListener('webglcontextrestored', handleContextRestored, false);

    // 9. Animation Loop with Smooth Interpolation
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation (Damping)
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Smooth scroll interpolation
      scrollY += (targetScrollY - scrollY) * 0.08;
      const scrollProgress = scrollY * 0.0012;

      // Update Mouse Light in 3D Space
      mouseLight.position.x = mouse.x * 6;
      mouseLight.position.y = mouse.y * 4;
      mouseLight.position.z = 2.5 + Math.sin(elapsedTime * 2) * 0.5;

      // Core Object Rotations
      centerMesh.rotation.x = elapsedTime * 0.2 + scrollProgress * 0.8;
      centerMesh.rotation.y = elapsedTime * 0.25 + scrollProgress * 1.2;

      innerMesh.rotation.x = -elapsedTime * 0.35 - scrollProgress;
      innerMesh.rotation.y = -elapsedTime * 0.4;

      ring1Mesh.rotation.z = elapsedTime * 0.15 + scrollProgress * 0.4;
      ring2Mesh.rotation.z = -elapsedTime * 0.18 - scrollProgress * 0.5;

      // Satellite Floats
      sat1.position.y = 2.2 + Math.sin(elapsedTime * 0.8) * 0.4;
      sat1.rotation.y = elapsedTime * 0.3;

      sat2.position.y = -2.5 + Math.cos(elapsedTime * 0.7) * 0.3;
      sat2.rotation.x = elapsedTime * 0.25;

      sat3.position.y = -2.8 + Math.sin(elapsedTime * 0.9) * 0.35;
      sat3.rotation.z = elapsedTime * 0.4;

      // Gentle Group Parallax from Mouse
      mainGroup.rotation.y = mouse.x * 0.45;
      mainGroup.rotation.x = -mouse.y * 0.3;
      mainGroup.position.y = -scrollProgress * 0.6;

      // Particle Field Motion
      particlePoints.rotation.y = elapsedTime * 0.03;
      particlePoints.rotation.x = elapsedTime * 0.015;

      // Camera Slight Drift & Pan
      camera.position.x = mouse.x * 0.6;
      camera.position.y = mouse.y * 0.4;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('webglcontextlost', handleContextLost);
      renderer.domElement.removeEventListener('webglcontextrestored', handleContextRestored);

      // Clean disposal
      materials.forEach((m) => m.dispose());
      centerGeo.dispose();
      innerGeo.dispose();
      ring1Geo.dispose();
      ring2Geo.dispose();
      satelliteGeo.dispose();
      particleGeometry.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Update wireframe/material modes dynamically
  useEffect(() => {
    if (!sceneRef.current) return;
    const { materials } = sceneRef.current;
    materials.forEach((mat) => {
      if (mat instanceof THREE.MeshStandardMaterial || mat instanceof THREE.MeshPhysicalMaterial) {
        mat.wireframe = currentMode === 'wireframe';
        if (currentMode === 'refraction' && mat instanceof THREE.MeshPhysicalMaterial) {
          mat.roughness = 0.04;
          mat.transmission = 0.92;
          mat.metalness = 0.1;
        } else if (currentMode === 'ambient' && mat instanceof THREE.MeshPhysicalMaterial) {
          mat.roughness = 0.18;
          mat.transmission = 0.4;
          mat.metalness = 0.88;
        }
        mat.needsUpdate = true;
      }
    });
  }, [currentMode]);

  const setMode = (mode: 'ambient' | 'wireframe' | 'refraction') => {
    setCurrentMode(mode);
    if (onModeChange) onModeChange(mode);
  };

  if (!isSupported) {
    return (
      <div className="fixed inset-0 pointer-events-none -z-10 bg-radial from-[#181824] via-[#0a0a0c] to-[#050507]" />
    );
  }

  return (
    <>
      {/* 3D Canvas Viewport */}
      <div
        ref={mountRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none -z-10 w-full h-full overflow-hidden"
      />

      {/* Discrete 3D Mode Switcher (Bottom-right HUD control with zero dead clicks) */}
      <div className="fixed bottom-6 right-6 z-30 hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-neutral-400">
        <span className="text-[10px] tracking-wider uppercase text-neutral-500 font-mono pr-1">3D Stage:</span>
        <button
          type="button"
          onClick={() => setMode('ambient')}
          className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
            currentMode === 'ambient'
              ? 'bg-amber-400 text-black shadow-sm font-semibold'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          Sculpt
        </button>
        <button
          type="button"
          onClick={() => setMode('wireframe')}
          className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
            currentMode === 'wireframe'
              ? 'bg-amber-400 text-black shadow-sm font-semibold'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          Wireframe
        </button>
        <button
          type="button"
          onClick={() => setMode('refraction')}
          className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
            currentMode === 'refraction'
              ? 'bg-amber-400 text-black shadow-sm font-semibold'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          Prism
        </button>
      </div>
    </>
  );
};
