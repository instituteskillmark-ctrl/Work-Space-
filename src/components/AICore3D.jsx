import React, { useEffect, useRef } from 'react';

const AICore3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse tracking for tilt parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = (e.clientX - rect.left - width / 2) / (width / 2);
      targetMouseY = (e.clientY - rect.top - height / 2) / (height / 2);
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 3D Polyhedron Vertices (Custom Computational Faceted Crystal Core)
    const rawVertices = [
      [0, -2.1, 0],
      [1.25, -0.75, 1.25],
      [-1.25, -0.75, 1.25],
      [-1.25, -0.75, -1.25],
      [1.25, -0.75, -1.25],
      [1.85, 0, 0],
      [0, 0, 1.85],
      [-1.85, 0, 0],
      [0, 0, -1.85],
      [1.25, 0.75, 1.25],
      [-1.25, 0.75, 1.25],
      [-1.25, 0.75, -1.25],
      [1.25, 0.75, -1.25],
      [0, 2.1, 0]
    ];

    // Inner Counter-Rotating Golden Lattice
    const innerVertices = rawVertices.map(v => [v[0] * 0.52, v[1] * 0.52, v[2] * 0.52]);

    // Edges
    const edges = [
      [0, 1], [0, 2], [0, 3], [0, 4],
      [1, 5], [1, 6], [2, 6], [2, 7], [3, 7], [3, 8], [4, 8], [4, 5],
      [5, 9], [6, 9], [6, 10], [7, 10], [7, 11], [8, 11], [8, 12], [5, 12],
      [13, 9], [13, 10], [13, 11], [13, 12]
    ];

    // Floating Diamond Particles
    const particles = Array.from({ length: 50 }, () => ({
      x: (Math.random() - 0.5) * 4.5,
      y: (Math.random() - 0.5) * 4.5,
      z: (Math.random() - 0.5) * 4.5,
      size: Math.random() * 2.8 + 0.8,
      speed: Math.random() * 0.008 + 0.003
    }));

    let angleX = 0;
    let angleY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse parallax interpolation
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      angleY += 0.006;
      angleX = Math.sin(angleY * 0.4) * 0.25 + mouseY * 0.35;

      const rotY = angleY + mouseX * 0.45;
      const rotX = angleX;
      const innerRotY = -angleY * 1.5;

      const scale = Math.min(width, height) * 0.22;
      const cx = width / 2;
      const cy = height / 2;

      // Draw Volumetric Amber Radial Glow
      const radialGlow = ctx.createRadialGradient(cx, cy, 10, cx, cy, scale * 2.0);
      radialGlow.addColorStop(0, 'rgba(229, 152, 59, 0.28)');
      radialGlow.addColorStop(0.4, 'rgba(229, 152, 59, 0.08)');
      radialGlow.addColorStop(1, 'rgba(7, 8, 10, 0)');
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // 3D Projection Helper
      const project = ([x, y, z], ry = rotY, rx = rotX) => {
        let x1 = x * Math.cos(ry) + z * Math.sin(ry);
        let z1 = -x * Math.sin(ry) + z * Math.cos(ry);
        let y1 = y;

        let y2 = y1 * Math.cos(rx) - z1 * Math.sin(rx);
        let z2 = y1 * Math.sin(rx) + z1 * Math.cos(rx);

        const fov = 5;
        const perspective = fov / (fov + z2);
        return {
          px: cx + x1 * scale * perspective,
          py: cy + y2 * scale * perspective,
          pz: z2
        };
      };

      // 1. Render Inner Counter-Rotating Golden Core Lattice
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.85)';
      ctx.lineWidth = 1.4;
      edges.forEach(([i, j]) => {
        const p1 = project(innerVertices[i], innerRotY, -rotX * 0.8);
        const p2 = project(innerVertices[j], innerRotY, -rotX * 0.8);
        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.stroke();
      });

      // 2. Render Outer Translucent Crystal Faceted Edges with Specular Highlight
      edges.forEach(([i, j]) => {
        const p1 = project(rawVertices[i]);
        const p2 = project(rawVertices[j]);

        const avgZ = (p1.pz + p2.pz) / 2;
        const alpha = Math.max(0.2, Math.min(0.9, (avgZ + 2.2) / 4.4));

        ctx.strokeStyle = `rgba(229, 152, 59, ${alpha})`;
        ctx.lineWidth = avgZ > 0 ? 2.2 : 1.2;

        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.stroke();
      });

      // 3. Render Particle Atmosphere
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < -2.4) p.y = 2.4;

        const projected = project([p.x, p.y, p.z]);
        const alpha = Math.max(0.15, (projected.pz + 2.5) / 5);

        ctx.fillStyle = `rgba(245, 158, 11, ${alpha})`;
        ctx.beginPath();
        ctx.arc(projected.px, projected.py, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 4. Render Central Emitting AI Core Node
      const centerProj = project([0, 0, 0]);
      ctx.fillStyle = '#E5983B';
      ctx.shadowColor = '#F59E0B';
      ctx.shadowBlur = 24;
      ctx.beginPath();
      ctx.arc(centerProj.px, centerProj.py, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', minHeight: '440px', position: 'relative' }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
    </div>
  );
};

export default AICore3D;
