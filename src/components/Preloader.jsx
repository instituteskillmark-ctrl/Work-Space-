import React, { useEffect, useState } from 'react';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsFadingOut(true), 200);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 700);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 4;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

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
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        opacity: isFadingOut ? 0 : 1,
        pointerEvents: isFadingOut ? 'none' : 'auto',
        transform: isFadingOut ? 'scale(1.03)' : 'scale(1)'
      }}
    >
      {/* Central Brand Icon with Golden Pulse Halo */}
      <div
        style={{
          width: '72px',
          height: '72px',
          borderRadius: '12px',
          border: '1px solid var(--border-gold)',
          background: 'radial-gradient(circle, rgba(229, 152, 59, 0.2) 0%, rgba(13, 15, 20, 0.95) 75%)',
          boxShadow: '0 0 40px rgba(229, 152, 59, 0.4), inset 0 0 20px rgba(229, 152, 59, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: '1.5rem',
          color: 'var(--accent-gold)',
          marginBottom: '24px'
        }}
      >
        HA
      </div>

      {/* Main Requested Heading */}
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: 800,
          color: '#FFFFFF',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          marginBottom: '8px',
          textAlign: 'center'
        }}
      >
        WELCOME TO MY <span className="text-gold" style={{ textShadow: '0 0 20px rgba(229, 152, 59, 0.35)' }}>WORKSPACE</span>
      </h1>

      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '32px'
        }}
      >
        HASSAN AHMAD // AI CREATIVE DEVELOPER
      </p>

      {/* Loading Progress Bar Container */}
      <div
        style={{
          width: '260px',
          height: '4px',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '2px',
          overflow: 'hidden',
          position: 'relative',
          marginBottom: '12px'
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${Math.min(progress, 100)}%`,
            background: 'linear-gradient(90deg, #e5983b 0%, #f59e0b 100%)',
            boxShadow: '0 0 15px rgba(229, 152, 59, 0.8)',
            transition: 'width 0.08s linear'
          }}
        />
      </div>

      {/* Progress Percentage Counter */}
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem',
          color: 'var(--accent-gold)',
          letterSpacing: '0.1em'
        }}
      >
        {Math.min(progress, 100)}%
      </div>
    </div>
  );
};

export default Preloader;
