import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';
import heroCrystalImg from '../assets/hero-crystal.jpg';

const Welcome = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setTilt({ x, y });
  };

  return (
    <main 
      id="main-content" 
      className="section-wrapper" 
      onMouseMove={handleMouseMove}
      style={{ 
        paddingTop: '60px', 
        paddingBottom: '80px', 
        position: 'relative', 
        overflow: 'hidden',
        minHeight: 'calc(100vh - 70px)',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `url(${heroCrystalImg})`,
        backgroundSize: 'cover',
        backgroundPosition: '70% center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <PageMeta 
        title="Welcome — Hassan Ahmad | AI Creative Developer"
        description="Welcome to the AI Creative Developer workspace of Hassan Ahmad."
      />

      {/* Smooth Multi-Stop Environmental Overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          background: 'radial-gradient(ellipse at 70% 50%, rgba(7, 8, 10, 0.12) 0%, rgba(7, 8, 10, 0.55) 45%, rgba(7, 8, 10, 0.92) 80%, #07080a 100%), linear-gradient(90deg, #07080a 0%, rgba(7, 8, 10, 0.88) 35%, transparent 68%)'
        }}
      />

      {/* Interactive 3D Holographic Volumetric Crystal Overlay Engine */}
      <div
        style={{
          position: 'absolute',
          right: '8%',
          top: '50%',
          transform: `translateY(-50%) perspective(1000px) rotateY(${tilt.x * 18}deg) rotateX(${-tilt.y * 18}deg)`,
          transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'none',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '420px',
          height: '420px'
        }}
      >
        {/* Glowing Specular Volumetric Halo & 3D Lighting Ring */}
        <div 
          style={{
            position: 'absolute',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(229, 152, 59, 0.38) 0%, rgba(229, 152, 59, 0.08) 55%, transparent 75%)',
            filter: 'blur(30px)',
            boxShadow: '0 0 100px rgba(229, 152, 59, 0.45)',
            transform: `translateZ(-50px) scale(${1 + Math.abs(tilt.x) * 0.1})`
          }}
        />

        {/* 3D Floating Shards Orbit Ring */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '1.5px dashed rgba(229, 152, 59, 0.35)',
            transform: `rotateX(65deg) rotateZ(${tilt.x * 35}deg)`,
            boxShadow: '0 0 25px rgba(229, 152, 59, 0.25), inset 0 0 25px rgba(229, 152, 59, 0.15)'
          }}
        />

        {/* Floating Specular Crystal Core Emblem */}
        <div
          style={{
            width: '250px',
            height: '250px',
            borderRadius: '24px',
            border: '1.5px solid rgba(229, 152, 59, 0.6)',
            background: 'linear-gradient(135deg, rgba(229, 152, 59, 0.15) 0%, rgba(7, 8, 10, 0.85) 100%)',
            backdropFilter: 'blur(14px)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(229, 152, 59, 0.35), inset 0 0 25px rgba(229, 152, 59, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: `translateZ(60px) rotateX(${tilt.y * 12}deg)`,
            position: 'relative'
          }}
        >
          <div style={{ textAlign: 'center', pointerEvents: 'auto' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent-gold)', letterSpacing: '0.2em', marginBottom: '8px' }}>
              3D CRYSTAL CORE // REALTIME
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.6rem', color: '#FFF', letterSpacing: '0.08em', textShadow: '0 0 25px var(--accent-gold)' }}>
              HA // AI CORE
            </div>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--accent-gold)', margin: '10px auto 0 auto', boxShadow: '0 0 12px var(--accent-gold)' }} />
          </div>
        </div>
      </div>

      <div 
        className="main-wrapper" 
        style={{ 
          position: 'relative', 
          zIndex: 3, 
          width: '100%' 
        }}
      >
        <div style={{ maxWidth: '540px' }}>
          {/* Left Content Column (Headline, Subtitle, CTAs) */}
          <span className="eyebrow">AI CREATIVE DEVELOPER</span>
          <h1 style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)', marginTop: '14px', marginBottom: '20px', lineHeight: 1.08, letterSpacing: '-0.02em', fontWeight: 800 }}>
            I BUILD DIGITAL EXPERIENCES THAT FEEL <span className="text-gold" style={{ textShadow: '0 0 30px rgba(229, 152, 59, 0.45)' }}>ALIVE.</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '36px', maxWidth: '480px', lineHeight: 1.6 }}>
            I turn complex ideas into clean web apps and smart AI tools—building stuff people actually like using.
          </p>

          {/* Functional Action Buttons: Primary & Secondary */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link 
              to="/projects" 
              className="btn-primary" 
              id="view-work-hero-btn"
              data-cursor-text="WORK"
              style={{ padding: '12px 26px', fontSize: '0.85rem' }}
            >
              VIEW MY WORK →
            </Link>
            <Link 
              to="/about" 
              className="btn-outline" 
              id="about-me-hero-btn"
              data-cursor-text="ABOUT"
              style={{ padding: '12px 22px', fontSize: '0.85rem', borderColor: 'var(--border-gold)', color: 'var(--accent-gold)' }}
            >
              ABOUT ME →
            </Link>
            <a 
              href="#download-cv" 
              className="btn-outline" 
              id="download-cv-btn"
              data-cursor-text="CV"
              onClick={(e) => {
                e.preventDefault();
                alert('Hassan Ahmad CV download started.');
              }}
              style={{ padding: '12px 20px', fontSize: '0.85rem' }}
            >
              DOWNLOAD CV ⤓
            </a>
          </div>
        </div>

        {/* Scroll to Explore Widget */}
        <div style={{ position: 'absolute', right: '40px', bottom: '-40px', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.15em' }}>
          <span>SCROLL TO EXPLORE</span>
          <span style={{ width: '12px', height: '20px', border: '1px solid var(--border-specular)', borderRadius: '10px', display: 'inline-flex', justifyContent: 'center', paddingTop: '2px' }}>
            <span style={{ width: '2px', height: '4px', backgroundColor: 'var(--accent-gold)', borderRadius: '1px' }} />
          </span>
        </div>
      </div>
    </main>
  );
};

export default Welcome;




