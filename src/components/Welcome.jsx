import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';
import heroCrystalImg from '../assets/hero-crystal.jpg';

const Welcome = () => {
  return (
    <main 
      id="main-content" 
      className="section-wrapper" 
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
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <PageMeta 
        title="Welcome — Hassan Ahmad | AI Creative Developer"
        description="Welcome to the AI Creative Developer workspace of Hassan Ahmad."
      />

      {/* Text Protection Overlay for Left Column */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          background: 'linear-gradient(90deg, #07080a 0%, rgba(7, 8, 10, 0.85) 35%, rgba(7, 8, 10, 0.3) 55%, transparent 75%)'
        }}
      />

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
      </div>
    </main>
  );
};

export default Welcome;




