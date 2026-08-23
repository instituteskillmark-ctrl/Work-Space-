import React, { useEffect, useRef } from 'react';

const AICore3D = ({ stage = 'active', isWarping = false, warpProgress = 0 }) => {
  const canvasRef = useRef(null);
  const stageRef = useRef(stage);
  const warpingRef = useRef(isWarping);
  const warpProgressRef = useRef(warpProgress);

  useEffect(() => {
    stageRef.current = stage;
  }, [stage]);

  useEffect(() => {
    warpingRef.current = isWarping;
  }, [isWarping]);

  useEffect(() => {
    warpProgressRef.current = warpProgress;
  }, [warpProgress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse tracking for tilt & parallax
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

    // Geometry: 3D Faceted Crystal Core Vertices
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

    // Inner Counter-Rotating Golden Lattice Vertices
    const innerVertices = rawVertices.map(v => [v[0] * 0.52, v[1] * 0.52, v[2] * 0.52]);

    // Edges connecting vertices
    const edges = [
      [0, 1], [0, 2], [0, 3], [0, 4],
      [1, 5], [1, 6], [2, 6], [2, 7], [3, 7], [3, 8], [4, 8], [4, 5],
      [5, 9], [6, 9], [6, 10], [7, 10], [7, 11], [8, 11], [8, 12], [5, 12],
      [13, 9], [13, 10], [13, 11], [13, 12]
    ];

    // Facets for translucent smoked glass rendering
    const faces = [
      [0, 1, 6], [0, 6, 2], [0, 2, 7], [0, 7, 3], [0, 3, 8], [0, 8, 4], [0, 4, 5], [0, 5, 1],
      [1, 5, 9], [1, 9, 6], [2, 6, 10], [2, 10, 7], [3, 7, 11], [3, 11, 8], [4, 8, 12], [4, 12, 5],
      [13, 9, 6], [13, 10, 6], [13, 10, 7], [13, 11, 7], [13, 11, 8], [13, 12, 8], [13, 12, 5], [13, 9, 5]
    ];

    // Floating & Converging Micro-Particles
    const particles = Array.from({ length: 65 }, () => ({
      x: (Math.random() - 0.5) * 5.5,
      y: (Math.random() - 0.5) * 5.5,
      z: (Math.random() - 0.5) * 5.5,
      vx: (Math.random() - 0.5) * 0.005,
      vy: Math.random() * 0.006 + 0.002,
      vz: (Math.random() - 0.5) * 0.005,
      size: Math.random() * 2.5 + 0.6,
      alpha: Math.random() * 0.6 + 0.2
    }));

    let angleX = 0;
    let angleY = 0;
    let pulseTime = 0;
    let assemblyProgress = 0; // 0 -> 1 during stage 'assembling'

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const currentStage = stageRef.current;
      const isWarpingNow = warpingRef.current;
      const currentWarpProgress = warpProgressRef.current;

      // Smooth mouse parallax interpolation
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      pulseTime += 0.025;

      if (currentStage === 'assembling') {
        assemblyProgress = Math.min(1, assemblyProgress + 0.02);
      } else if (currentStage === 'darkness') {
        assemblyProgress = 0;
      } else {
        assemblyProgress = 1;
      }

      angleY += isWarpingNow ? 0.03 : 0.007;
      angleX = Math.sin(angleY * 0.4) * 0.2 + mouseY * 0.3;

      const rotY = angleY + mouseX * 0.4;
      const rotX = angleX;
      const innerRotY = -angleY * 1.6;

      // Scale factor with warp modifier
      let baseScale = Math.min(width, height) * 0.22;
      if (isWarpingNow) {
        baseScale *= (1 + currentWarpProgress * 4.5);
      }
      const scale = baseScale * (currentStage === 'darkness' ? 0.1 : (0.3 + assemblyProgress * 0.7));

      const cx = width / 2;
      const cy = height / 2;

      // 1. Draw Volumetric Radial Amber Atmosphere
      if (currentStage !== 'darkness') {
        const glowOpacity = isWarpingNow
          ? 0.7 + Math.sin(pulseTime * 4) * 0.2
          : currentStage === 'igniting'
          ? 0.4 + Math.sin(pulseTime * 2) * 0.15
          : 0.22;

        const radialGlow = ctx.createRadialGradient(cx, cy, 5, cx, cy, scale * (isWarpingNow ? 3.5 : 2.2));
        radialGlow.addColorStop(0, `rgba(229, 152, 59, ${glowOpacity})`);
        radialGlow.addColorStop(0.35, `rgba(245, 158, 11, ${glowOpacity * 0.35})`);
        radialGlow.addColorStop(1, 'rgba(7, 8, 10, 0)');
        ctx.fillStyle = radialGlow;
        ctx.fillRect(0, 0, width, height);
      }

      // 3D Projection Engine
      const project = ([x, y, z], ry = rotY, rx = rotX) => {
        let x1 = x * Math.cos(ry) + z * Math.sin(ry);
        let z1 = -x * Math.sin(ry) + z * Math.cos(ry);
        let y1 = y;

        let y2 = y1 * Math.cos(rx) - z1 * Math.sin(rx);
        let z2 = y1 * Math.sin(rx) + z1 * Math.cos(rx);

        const fov = 4.8;
        const perspective = fov / (fov + z2);
        return {
          px: cx + x1 * scale * perspective,
          py: cy + y2 * scale * perspective,
          pz: z2
        };
      };

      if (currentStage !== 'darkness') {
        // 2. Render Smoked Glass Facets (Translucent Polyhedron Faces)
        faces.forEach((face) => {
          const p1 = project(rawVertices[face[0]]);
          const p2 = project(rawVertices[face[1]]);
          const p3 = project(rawVertices[face[2]]);

          const avgZ = (p1.pz + p2.pz + p3.pz) / 3;
          const glassAlpha = Math.max(0.04, Math.min(0.22, (avgZ + 2.5) / 12)) * assemblyProgress;

          ctx.fillStyle = `rgba(15, 18, 25, ${glassAlpha * 2.5})`;
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
          ctx.lineTo(p3.px, p3.py);
          ctx.closePath();
          ctx.fill();

          // Subtle Amber Facet Reflection Line
          if (avgZ > 0.2) {
            ctx.strokeStyle = `rgba(229, 152, 59, ${glassAlpha * 0.8})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        });

        // 3. Render Inner Counter-Rotating Golden Lattice Matrix
        ctx.strokeStyle = `rgba(245, 158, 11, ${0.8 * assemblyProgress})`;
        ctx.lineWidth = 1.3;
        edges.forEach(([i, j]) => {
          const p1 = project(innerVertices[i], innerRotY, -rotX * 0.7);
          const p2 = project(innerVertices[j], innerRotY, -rotX * 0.7);
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
          ctx.stroke();
        });

        // 4. Render Outer Specular Crystal Wireframe Edges
        edges.forEach(([i, j]) => {
          const p1 = project(rawVertices[i]);
          const p2 = project(rawVertices[j]);

          const avgZ = (p1.pz + p2.pz) / 2;
          const lineAlpha = Math.max(0.2, Math.min(0.95, (avgZ + 2.4) / 4.8)) * assemblyProgress;

          // Controlled pulse travelling along edges
          const pulseGlow = Math.sin(pulseTime * 2.5 + i) > 0.6 ? 1.4 : 1.0;
          ctx.strokeStyle = `rgba(229, 152, 59, ${Math.min(1, lineAlpha * pulseGlow)})`;
          ctx.lineWidth = avgZ > 0 ? 2.2 : 1.1;

          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
          ctx.stroke();
        });

        // 5. Render Central Pulsing Core Energy Node
        const centerProj = project([0, 0, 0]);
        const corePulseRadius = (7 + Math.sin(pulseTime * 3) * 2) * (isWarpingNow ? 3 : 1);

        ctx.save();
        ctx.fillStyle = '#E5983B';
        ctx.shadowColor = '#F59E0B';
        ctx.shadowBlur = isWarpingNow ? 45 : 24;
        ctx.beginPath();
        ctx.arc(centerProj.px, centerProj.py, Math.max(2, corePulseRadius * assemblyProgress), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 6. Render Micro-Particle Atmosphere & Converging Particles
      particles.forEach((p, idx) => {
        if (currentStage === 'assembling') {
          // Converge towards center (0,0,0)
          p.x *= 0.96;
          p.y *= 0.96;
          p.z *= 0.96;
        } else {
          // Natural drift
          p.y -= p.vy;
          p.x += Math.sin(pulseTime + idx) * 0.001;
          if (p.y < -2.8) {
            p.y = 2.8;
            p.x = (Math.random() - 0.5) * 5.5;
            p.z = (Math.random() - 0.5) * 5.5;
          }
        }

        const proj = project([p.x, p.y, p.z]);
        const alpha = Math.max(0.1, Math.min(0.8, (proj.pz + 2.8) / 5.6)) * p.alpha;

        ctx.fillStyle = `rgba(245, 158, 11, ${alpha})`;
        ctx.beginPath();
        ctx.arc(proj.px, proj.py, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 7. Light Sweep / Warp Expansion Beam Effect
      if (isWarpingNow) {
        ctx.fillStyle = `rgba(229, 152, 59, ${Math.min(0.85, currentWarpProgress * 1.2)})`;
        ctx.fillRect(0, 0, width, height);
      }

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

