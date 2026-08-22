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

    // 3D Polyhedron Vertices (Faceted Crystal Core)
    const rawVertices = [
      // Top apex
      [0, -1.8, 0],
      // Upper ring
      [1.1, -0.6, 1.1],
      [-1.1, -0.6, 1.1],
      [-1.1, -0.6, -1.1],
      [1.1, -0.6, -1.1],
      // Middle equator
      [1.6, 0, 0],
      [0, 0, 1.6],
      [-1.6, 0, 0],
      [0, 0, -1.6],
      // Lower ring
      [1.1, 0.6, 1.1],
      [-1.1, 0.6, 1.1],
      [-1.1, 0.6, -1.1],
      [1.1, 0.6, -1.1],
      // Bottom apex
      [0, 1.8, 0]
    ];

    // Inner wireframe lattice
    const innerVertices = rawVertices.map(v => [v[0] * 0.5, v[1] * 0.5, v[2] * 0.5]);

    // Edges
    const edges = [
      [0, 1], [0, 2], [0, 3], [0, 4],
      [1, 5], [1, 6], [2, 6], [2, 7], [3, 7], [3, 8], [4, 8], [4, 5],
      [5, 9], [6, 9], [6, 10], [7, 10], [7, 11], [8, 11], [8, 12], [5, 12],
      [13, 9], [13, 10], [13, 11], [13, 12]
    ];

    // Floating particles
    const particles = Array.from({ length: 45 }, () => ({
      x: (Math.random() - 0.5) * 4,
      y: (Math.random() - 0.5) * 4,
      z: (Math.random() - 0.5) * 4,
      size: Math.random() * 2.5 + 1,
      speed: Math.random() * 0.01 + 0.005
    }));

    let angleX = 0;
    let angleY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      angleY += 0.008;
      angleX = Math.sin(angleY * 0.5) * 0.2 + mouseY * 0.3;

      const rotY = angleY + mouseX * 0.4;
      const rotX = angleX;

      const scale = Math.min(width, height) * 0.22;
      const cx = width / 2;
      const cy = height / 2;

      // Draw background ambient amber glow
      const radialGlow = ctx.createRadialGradient(cx, cy, 10, cx, cy, scale * 1.8);
      radialGlow.addColorStop(0, 'rgba(229, 152, 59, 0.22)');
      radialGlow.addColorStop(0.5, 'rgba(229, 152, 59, 0.05)');
      radialGlow.addColorStop(1, 'rgba(7, 8, 10, 0)');
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // Helper 3D Projection
      const project = ([x, y, z]) => {
        // Rotate around Y
        let x1 = x * Math.cos(rotY) + z * Math.sin(rotY);
        let z1 = -x * Math.sin(rotY) + z * Math.cos(rotY);
        let y1 = y;

        // Rotate around X
        let y2 = y1 * Math.cos(rotX) - z1 * Math.sin(rotX);
        let z2 = y1 * Math.sin(rotX) + z1 * Math.cos(rotX);

        const fov = 5;
        const perspective = fov / (fov + z2);
        return {
          px: cx + x1 * scale * perspective,
          py: cy + y2 * scale * perspective,
          pz: z2
        };
      };

      // Render inner golden core lattice
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.7)';
      ctx.lineWidth = 1.2;
      edges.forEach(([i, j]) => {
        const p1 = project(innerVertices[i]);
        const p2 = project(innerVertices[j]);
        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.stroke();
      });

      // Render outer faceted dark crystal edges
      edges.forEach(([i, j]) => {
        const p1 = project(rawVertices[i]);
        const p2 = project(rawVertices[j]);

        const avgZ = (p1.pz + p2.pz) / 2;
        const alpha = Math.max(0.15, Math.min(0.85, (avgZ + 2) / 4));

        ctx.strokeStyle = `rgba(229, 152, 59, ${alpha})`;
        ctx.lineWidth = avgZ > 0 ? 1.8 : 1.0;

        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.stroke();
      });

      // Render floating diamond particles
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < -2.2) p.y = 2.2;

        const projected = project([p.x, p.y, p.z]);
        const alpha = Math.max(0.2, (projected.pz + 2.5) / 5);

        ctx.fillStyle = `rgba(245, 158, 11, ${alpha})`;
        ctx.beginPath();
        ctx.arc(projected.px, projected.py, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render central AI Core point node
      const centerProj = project([0, 0, 0]);
      ctx.fillStyle = '#E5983B';
      ctx.shadowColor = '#F59E0B';
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.arc(centerProj.px, centerProj.py, 6, 0, Math.PI * 2);
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
    <div style={{ width: '100%', height: '100%', minHeight: '420px', position: 'relative' }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
    </div>
  );
};

export default AICore3D;
