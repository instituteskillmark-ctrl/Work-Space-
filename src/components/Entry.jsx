import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageMeta from './PageMeta';
import AICore3D from './AICore3D';

const Entry = () => {
  const navigate = useNavigate();
  const [isWarping, setIsWarping] = useState(false);
  const [warpProgress, setWarpProgress] = useState(0);
  const warpTimerRef = useRef(null);

  const handleEnterWorkspace = (e) => {
    e.preventDefault();
    if (isWarping) return;

    setIsWarping(true);
    let progress = 0;

    warpTimerRef.current = setInterval(() => {
      progress += 0.08;
      setWarpProgress(Math.min(1, progress));
      if (progress >= 1) {
        clearInterval(warpTimerRef.current);
        navigate('/about');
      }
    }, 40);
  };

  return (
    <main id="main-content" className="section-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
      <PageMeta 
        title="Entry — Hassan Ahmad"
        description="Entry page for Hassan Ahmad, AI Creative Developer."
      />

      {/* Warp Transition Overlay */}
      {isWarping && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            pointerEvents: 'none',
            background: `radial-gradient(circle at 50% 50%, rgba(245, 158, 11, ${warpProgress * 0.95}) 0%, rgba(7, 8, 10, ${warpProgress * 0.8}) 80%)`,
            backdropFilter: `blur(${warpProgress * 20}px)`,
            transition: 'opacity 0.1s linear'
          }}
        />
      )}

      <div className="main-wrapper" style={{ position: 'relative', zIndex: 10 }}>
        <Link to="/" className="btn-outline" style={{ minHeight: '36px', padding: '6px 14px', marginBottom: '24px', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center' }} id="back-to-welcome-btn">
          ← Back to Welcome
        </Link>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
          <div>
            <span className="eyebrow">AI CREATIVE DEVELOPER</span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', marginTop: '10px', marginBottom: '20px' }}>
              Hassan Ahmad — <span className="text-gold">AI Creative Developer</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>
              <strong>Professional Title:</strong> AI Creative Developer
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '28px', maxWidth: '540px' }}>
              <strong>Introduction:</strong> I combine creativity, web development and AI-powered tools to turn ideas into modern interactive digital experiences.
            </p>

            <button 
              onClick={handleEnterWorkspace} 
              className="btn-primary" 
              id="enter-workspace-btn"
              style={{ cursor: 'pointer' }}
            >
              Enter Workspace →
            </button>
          </div>

          <div style={{ width: '100%', height: '420px' }}>
            <AICore3D stage="active" isWarping={isWarping} warpProgress={warpProgress} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Entry;

