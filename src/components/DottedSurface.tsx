import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface DottedSurfaceProps {
  dark?: boolean;
}

export const DottedSurface: React.FC<DottedSurfaceProps> = ({ dark }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const SEPARATION = 130;
    const AMOUNTX = 44;
    const AMOUNTY = 28;

    const W = el.offsetWidth || window.innerWidth;
    const H = el.offsetHeight || 600;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(55, W / H, 1, 12000);
    camera.position.set(0, 280, 1100);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    const positions: number[] = [];
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions.push(
          ix * SEPARATION - (AMOUNTX * SEPARATION) / 2,
          0,
          iy * SEPARATION - (AMOUNTY * SEPARATION) / 2
        );
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));

    const dotColor = dark ? 0xaaccee : 0x0096d6;
    const mat = new THREE.PointsMaterial({
      size: 7,
      color: dotColor,
      transparent: true,
      opacity: dark ? 0.3 : 0.22,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    let count = 0;
    let rafId: number;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const pos = geo.attributes.position.array as Float32Array;
      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          pos[i * 3 + 1] =
            Math.sin((ix + count) * 0.28) * 55 +
            Math.sin((iy + count) * 0.45) * 40;
          i++;
        }
      }
      geo.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
      count += 0.06;
    };

    animate();

    const onResize = () => {
      if (!el) return;
      const nw = el.offsetWidth;
      const nh = el.offsetHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      geo.dispose();
      mat.dispose();
      renderer.dispose();
      if (el.contains(renderer.domElement)) {
        el.removeChild(renderer.domElement);
      }
    };
  }, [dark]);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    />
  );
};
