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
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `url(${heroCrystalImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <PageMeta 
        title="Welcome — Hassan Ahmad | AI Creative Developer"
        description="Welcome to the AI Creative Developer workspace of Hassan Ahmad."
      />

      {/* Dark Legibility Gradient Overlay (Left Deep Dark -> Right Subtle Vignette) */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          background: 'linear-gradient(90deg, rgba(7,8,10,0.94) 0%, rgba(7,8,10,0.8) 40%, rgba(7,8,10,0.2) 75%, rgba(7,8,10,0.6) 100%)'
        }}
      />

      <div className="main-wrapper" style={{ paddingLeft: '40px', position: 'relative', zIndex: 2, width: '100%' }}>
        <div style={{ maxWidth: '640px' }}>
          {/* Left Hero Content Block */}
          <span className="eyebrow">AI CREATIVE DEVELOPER</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', marginTop: '14px', marginBottom: '20px', lineHeight: 1.08, letterSpacing: '-0.02em', fontWeight: 800 }}>
            I BUILD DIGITAL EXPERIENCES THAT FEEL <span className="text-gold" style={{ textShadow: '0 0 30px rgba(229, 152, 59, 0.4)' }}>ALIVE.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '36px', maxWidth: '520px', lineHeight: 1.6 }}>
            I combine AI, Design & Code to create immersive digital experiences for the future.
          </p>

          {/* Action Buttons: Primary & Secondary */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link 
              to="/projects" 
              className="btn-primary" 
              id="view-work-hero-btn"
              data-cursor-text="VIEW"
              style={{ padding: '12px 28px', fontSize: '0.85rem' }}
            >
              VIEW MY WORK →
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
              style={{ padding: '12px 24px', fontSize: '0.85rem' }}
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


