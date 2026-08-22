import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';
import AICore3D from './AICore3D';

const Welcome = () => {
  return (
    <main id="main-content" className="section-wrapper" style={{ paddingTop: '60px', paddingBottom: '80px', position: 'relative' }}>
      <PageMeta 
        title="Welcome — Hassan Ahmad | AI Creative Developer"
        description="Welcome to the AI Creative Developer workspace of Hassan Ahmad."
      />
      <div className="main-wrapper">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px', alignItems: 'center' }}>
          {/* Left Hero Text Block */}
          <div>
            <span className="eyebrow">AI CREATIVE DEVELOPER</span>
            <h1 style={{ fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)', marginTop: '14px', marginBottom: '20px', lineHeight: 1.08, letterSpacing: '-0.02em' }}>
              I BUILD DIGITAL EXPERIENCES THAT FEEL <span className="text-gold" style={{ textShadow: '0 0 30px rgba(229, 152, 59, 0.3)' }}>ALIVE.</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '36px', maxWidth: '520px', lineHeight: 1.6 }}>
              I combine AI, Design & Code to create immersive digital experiences for the future.
            </p>

            {/* Preserved Functional Action Buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link 
                to="/projects" 
                className="btn-primary" 
                id="view-work-hero-btn"
                data-cursor-text="VIEW"
              >
                VIEW MY WORK →
              </Link>
              <Link 
                to="/entry" 
                className="btn-primary" 
                id="proceed-to-entry-btn"
                data-cursor-text="ENTRY"
                style={{ background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)' }}
              >
                Proceed to Entry
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
              >
                DOWNLOAD CV ⤓
              </a>
            </div>
          </div>

          {/* Right 3D AI Core Artifact */}
          <div style={{ width: '100%', height: '520px', position: 'relative' }}>
            <AICore3D />
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
