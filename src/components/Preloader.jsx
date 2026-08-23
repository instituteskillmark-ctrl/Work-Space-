import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsFadingOut(true), 300);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 800);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 5;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Ambient Canvas Animation Engine (Cinematic Light Build-Up & Energy Pulse)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particles array
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speedY: -(Math.random() * 0.4 + 0.1),
      speedX: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.6 + 0.2
    }));

    let pulseRadius = 0;
    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.02;

      // 1. Volumetric Amber Radial Atmosphere Glow behind HA emblem
      const cx = width / 2;
      const cy = height / 2 - 40; // centered slightly above heading
      const radialGradient = ctx.createRadialGradient(cx, cy, 10, cx, cy, 320);
      radialGradient.addColorStop(0, 'rgba(229, 152, 59, 0.22)');
      radialGradient.addColorStop(0.4, 'rgba(245, 158, 11, 0.06)');
      radialGradient.addColorStop(1, 'rgba(7, 8, 10, 0)');
      ctx.fillStyle = radialGradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Cinematic Amber Energy Pulse Ring
      pulseRadius = (pulseRadius + 1.2) % 280;
      const pulseOpacity = Math.max(0, (1 - pulseRadius / 280) * 0.35);
      ctx.strokeStyle = `rgba(245, 158, 11, ${pulseOpacity})`;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(cx, cy, pulseRadius, 0, Math.PI * 2);
      ctx.stroke();

      // 3. Subtle Light Beams / Energy Lines
      ctx.strokeStyle = 'rgba(229, 152, 59, 0.08)';
      ctx.lineWidth = 0.8;
      for (let i = 0; i < 4; i++) {
        const angle = time * 0.3 + (i * Math.PI) / 2;
        const x2 = cx + Math.cos(angle) * 220;
        const y2 = cy + Math.sin(angle) * 220;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      // 4. Floating Micro-Particles
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }

        ctx.fillStyle = `rgba(245, 158, 11, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: '#07080a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease',
        opacity: isFadingOut ? 0 : 1,
        pointerEvents: isFadingOut ? 'none' : 'auto',
        transform: isFadingOut ? 'scale(1.05)' : 'scale(1)',
        filter: isFadingOut ? 'blur(8px)' : 'none',
        overflow: 'hidden'
      }}
    >
      {/* Background Cinematic Canvas (Particles, Beams & Pulse Rings) */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* Main Foreground Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Central Brand Icon with Golden Pulse Halo & Cinematic Reveal */}
        <motion.div
          initial={{ scale: 0.75, opacity: 0, boxShadow: '0 0 0px rgba(229, 152, 59, 0)' }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            boxShadow: [
              '0 0 20px rgba(229, 152, 59, 0.2), inset 0 0 10px rgba(229, 152, 59, 0.1)',
              '0 0 50px rgba(229, 152, 59, 0.5), inset 0 0 25px rgba(229, 152, 59, 0.3)',
              '0 0 35px rgba(229, 152, 59, 0.35), inset 0 0 15px rgba(229, 152, 59, 0.2)'
            ]
          }}
          transition={{ 
            duration: 1.2, 
            ease: [0.16, 1, 0.3, 1],
            boxShadow: { repeat: Infinity, repeatType: 'reverse', duration: 2 }
          }}
          style={{
            width: '72px',
            height: '72px',
            borderRadius: '12px',
            border: '1px solid var(--border-gold)',
            background: 'radial-gradient(circle, rgba(229, 152, 59, 0.25) 0%, rgba(13, 15, 20, 0.95) 75%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: '1.5rem',
            color: 'var(--accent-gold)',
            marginBottom: '24px',
            position: 'relative'
          }}
        >
          HA
          {/* Subtle Corner Highlights */}
          <span style={{ position: 'absolute', top: '-1px', left: '-1px', width: '8px', height: '8px', borderTop: '2px solid #f59e0b', borderLeft: '2px solid #f59e0b', borderRadius: '3px 0 0 0' }} />
          <span style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '8px', height: '8px', borderBottom: '2px solid #f59e0b', borderRight: '2px solid #f59e0b', borderRadius: '0 0 3px 0' }} />
        </motion.div>

        {/* Main Requested Heading with Cinematic Specular Reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: '8px',
            textAlign: 'center',
            position: 'relative'
          }}
        >
          WELCOME TO MY <span className="text-gold" style={{ textShadow: '0 0 25px rgba(229, 152, 59, 0.45)' }}>WORKSPACE</span>
        </motion.h1>

        {/* Subtitle Telemetry */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.3em' }}
          animate={{ opacity: 1, letterSpacing: '0.2em' }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            marginBottom: '32px'
          }}
        >
          HASSAN AHMAD // AI CREATIVE DEVELOPER
        </motion.p>

        {/* Loading Progress Bar Container with Light Sweep Sheen */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.7 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            width: '260px',
            height: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '2px',
            overflow: 'hidden',
            position: 'relative',
            marginBottom: '12px',
            boxShadow: '0 0 12px rgba(0, 0, 0, 0.5)'
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${Math.min(progress, 100)}%`,
              background: 'linear-gradient(90deg, #e5983b 0%, #f59e0b 50%, #fbbf24 100%)',
              boxShadow: '0 0 15px rgba(229, 152, 59, 0.9)',
              transition: 'width 0.08s linear',
              position: 'relative'
            }}
          >
            {/* Specular Light Sweep Tip */}
            <div 
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                width: '12px',
                background: 'linear-gradient(90deg, transparent 0%, #ffffff 100%)',
                opacity: 0.75
              }}
            />
          </div>
        </motion.div>

        {/* Progress Percentage Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            color: 'var(--accent-gold)',
            letterSpacing: '0.1em',
            textShadow: '0 0 10px rgba(229, 152, 59, 0.4)'
          }}
        >
          {Math.min(progress, 100)}%
        </motion.div>
      </div>
    </div>
  );
};

export default Preloader;

