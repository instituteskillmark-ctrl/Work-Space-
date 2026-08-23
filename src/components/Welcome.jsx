import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';
import heroDeskSetupImg from '../assets/hero-desk-setup.png';

// User-provided developer workspace setup photo
const HERO_PHOTO = heroDeskSetupImg;

const Welcome = () => {
  const techStack = [
    { name: 'React 19', tag: 'FRONTEND', desc: 'UI & State' },
    { name: 'Next.js', tag: 'FRAMEWORK', desc: 'App Architecture' },
    { name: 'Node.js', tag: 'BACKEND', desc: 'API & Runtime' },
    { name: 'TypeScript', tag: 'LANGUAGE', desc: 'Typed Architecture' },
    { name: 'OpenAI API', tag: 'AI CORE', desc: 'LLM & Agents' },
    { name: 'Python', tag: 'AI / SCRIPT', desc: 'Data & Automation' },
    { name: 'Three.js', tag: 'GRAPHICS', desc: '3D & Shaders' },
    { name: 'Tailwind CSS', tag: 'STYLING', desc: 'Design Tokens' }
  ];

  return (
    <main 
      id="main-content" 
      className="section-wrapper" 
      style={{ 
        paddingTop: '40px', 
        paddingBottom: '60px', 
        position: 'relative', 
        overflow: 'hidden'
      }}
    >
      <PageMeta 
        title="Welcome — Hassan Ahmad | AI Creative Developer"
        description="Welcome to the AI Creative Developer workspace of Hassan Ahmad."
      />

      {/* Pure Obsidian & Amber Specular Glass Shine Hero Container */}
      <div className="main-wrapper">
        <div className="hero-glass-card">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center', width: '100%', position: 'relative', zIndex: 3 }}>
            
            {/* Left Content Column (Headline, Subtitle, CTAs) */}
            <div style={{ maxWidth: '580px' }}>
              <span className="eyebrow">AI CREATIVE DEVELOPER</span>
              <h1 style={{ fontSize: 'clamp(2.1rem, 4.5vw, 3.5rem)', marginTop: '14px', marginBottom: '20px', lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: 800 }}>
                I BUILD DIGITAL EXPERIENCES THAT FEEL <span className="text-gold" style={{ textShadow: '0 0 30px rgba(229, 152, 59, 0.45)' }}>ALIVE.</span>
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '36px', maxWidth: '500px', lineHeight: 1.65 }}>
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

            {/* Right Photo Frame Column (Candid Photo of Hassan Working with Soft Amber Rim Light) */}
            <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
              <div 
                style={{ 
                  position: 'relative',
                  width: '100%',
                  maxWidth: '440px',
                  height: '380px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-gold)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 35px rgba(229, 152, 59, 0.25), inset 0 0 20px rgba(229, 152, 59, 0.15)',
                  background: 'rgba(7, 8, 10, 0.9)'
                }}
              >
                {/* Top Badge Overlay */}
                <div style={{ position: 'absolute', top: 0, inset: '0 0 auto 0', padding: '10px 14px', background: 'linear-gradient(180deg, rgba(7, 8, 10, 0.9) 0%, rgba(7, 8, 10, 0.2) 80%, transparent 100%)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 3 }}>
                  <span className="card-eyebrow" style={{ fontSize: '0.62rem', letterSpacing: '0.12em' }}>
                    DEVELOPER AT WORK
                  </span>
                  <span className="status-badge" style={{ margin: 0, padding: '2px 8px', fontSize: '0.58rem' }}>
                    BUILDING
                  </span>
                </div>

                {/* Dark Vignette Overlay for Seamless Dark Ambient Edge Blending */}
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    zIndex: 2,
                    background: 'radial-gradient(ellipse at center, transparent 40%, rgba(7, 8, 10, 0.6) 80%, rgba(7, 8, 10, 0.95) 100%), linear-gradient(180deg, rgba(7, 8, 10, 0.4) 0%, transparent 35%, transparent 65%, rgba(7, 8, 10, 0.85) 100%)'
                  }}
                />

                {/* Soft Amber Glow Rim Light along Left & Bottom Edge */}
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    zIndex: 2,
                    boxShadow: 'inset 4px 0 25px rgba(229, 152, 59, 0.35), inset 0 -4px 25px rgba(229, 152, 59, 0.3)'
                  }}
                />

                {/* Actual Photo (User provided developer desk setup) */}
                <img 
                  src={HERO_PHOTO} 
                  alt="Hassan Ahmad — Dual Monitor Workspace Setup" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                    filter: 'contrast(1.1) brightness(0.92) sepia(0.2) hue-rotate(-15deg)'
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Tech Stack Strip Section (Directly Below Hero) */}
      <div className="main-wrapper">
        <div style={{ marginBottom: '20px' }}>
          <div className="card-eyebrow" style={{ marginBottom: '8px' }}>
            TOOLS & TECHNOLOGIES I WORK WITH
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Core stack leveraged across web applications, LLM agents, and interactive experiences
          </p>
        </div>

        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
            gap: '14px' 
          }}
        >
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="glossy-card"
              style={{
                padding: '16px 18px',
                borderRadius: '10px',
                background: 'rgba(11, 13, 18, 0.8)',
                border: '1px solid var(--border-specular)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                minHeight: '90px'
              }}
              data-cursor-text="STACK"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span className="card-eyebrow" style={{ fontSize: '0.58rem', opacity: 0.85 }}>
                  {tech.tag}
                </span>
                <span style={{ color: 'var(--accent-gold)', fontSize: '0.65rem' }}>✓</span>
              </div>
              <div>
                <h4 className="card-subheading" style={{ fontSize: '0.92rem', marginBottom: '2px' }}>
                  {tech.name}
                </h4>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  {tech.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Welcome;




