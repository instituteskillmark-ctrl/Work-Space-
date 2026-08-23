import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';
import heroCrystalImg from '../assets/hero-crystal.jpg';

const Welcome = () => {
  return (
    <main id="main-content" className="section-wrapper" style={{ paddingTop: '50px', paddingBottom: '70px', position: 'relative', overflow: 'hidden' }}>
      <PageMeta 
        title="Welcome — Hassan Ahmad | AI Creative Developer"
        description="Welcome to the AI Creative Developer workspace of Hassan Ahmad."
      />
      <div className="main-wrapper" style={{ paddingLeft: '40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center', minHeight: '500px' }}>
          {/* Left Hero Content Block */}
          <div style={{ zIndex: 2 }}>
            <span className="eyebrow">AI CREATIVE DEVELOPER</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)', marginTop: '14px', marginBottom: '20px', lineHeight: 1.08, letterSpacing: '-0.02em', fontWeight: 800 }}>
              I BUILD DIGITAL EXPERIENCES THAT FEEL <span className="text-gold" style={{ textShadow: '0 0 30px rgba(229, 152, 59, 0.35)' }}>ALIVE.</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '36px', maxWidth: '500px', lineHeight: 1.6 }}>
              I combine AI, Design & Code to create immersive digital experiences for the future.
            </p>

            {/* Preserved Functional Action Buttons: Primary & Secondary */}
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

          {/* Right Hero Image — Uploaded Crystal Visual (Source of Truth) */}
          <div 
            style={{ 
              width: '100%', 
              height: '100%', 
              minHeight: '480px', 
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '600px',
                borderRadius: '16px',
                overflow: 'hidden'
              }}
            >
              {/* Radial gradient mask / dark edge glow for seamless blending into #07080a */}
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  background: 'radial-gradient(circle at 60% 50%, transparent 45%, rgba(7, 8, 10, 0.8) 85%, rgba(7, 8, 10, 1) 100%)',
                  zIndex: 2
                }}
              />
              <img 
                src={heroCrystalImg} 
                alt="Hassan Ahmad — AI Creative Crystal Artifact" 
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '520px',
                  objectFit: 'cover',
                  objectPosition: 'center right',
                  display: 'block',
                  borderRadius: '16px',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Scroll to Explore Widget */}
        <div style={{ position: 'absolute', right: '40px', bottom: '20px', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.15em' }}>
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

