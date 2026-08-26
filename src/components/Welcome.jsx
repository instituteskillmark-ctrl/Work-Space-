import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';
import heroDeskAmberImg from '../assets/hero-desk-amber.png';

// User-provided developer workspace setup photo (Amber Gold Theme Adjusted)
const HERO_PHOTO = heroDeskAmberImg;

const Welcome = () => {
  const techStack = [
    { name: 'Google Antigravity', tag: 'AGENTIC AI', desc: 'Agentic Engineering' },
    { name: 'ChatGPT / GPT-4o', tag: 'AI LLM', desc: 'Conversational LLMs' },
    { name: 'Claude 3.5 Sonnet', tag: 'AI REASONING', desc: 'Complex Code Logic' },
    { name: 'Midjourney & AI', tag: 'AI MEDIA', desc: 'Generative Visuals' },
    { name: 'React 19', tag: 'FRONTEND', desc: 'UI & State Systems' },
    { name: 'Next.js', tag: 'FRAMEWORK', desc: 'App Architecture' },
    { name: 'Node.js', tag: 'BACKEND', desc: 'API & Runtime' },
    { name: 'TypeScript', tag: 'LANGUAGE', desc: 'Typed Architecture' },
    { name: 'OpenAI API', tag: 'AI CORE', desc: 'LLM & Agents' },
    { name: 'Python', tag: 'AI / SCRIPT', desc: 'Data & Automation' },
    { name: 'Three.js', tag: 'GRAPHICS', desc: '3D & Shaders' },
    { name: 'Tailwind CSS', tag: 'STYLING', desc: 'Design System Tokens' }
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '32px', alignItems: 'center', width: '100%', position: 'relative', zIndex: 3 }}>
            
            {/* Left Content Column (Headline, Subtitle, CTAs) */}
            <div style={{ maxWidth: '580px', width: '100%' }}>
              <span className="eyebrow">AI CREATIVE DEVELOPER</span>
              <h1 style={{ fontSize: 'clamp(2rem, 5.5vw, 3.5rem)', marginTop: '14px', marginBottom: '20px', lineHeight: 1.25, letterSpacing: '-0.02em', fontWeight: 800, wordBreak: 'break-word' }}>
                I build digital experiences that feel <span className="text-gold">alive.</span>
              </h1>
              <p style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', color: 'var(--text-secondary)', marginBottom: '32px', maxWidth: '500px', lineHeight: 1.65 }}>
                I turn complex ideas into clean web apps and smart AI tools—building stuff people actually like using.
              </p>

              {/* Functional Action Buttons: Primary & Secondary */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                <Link 
                  to="/projects" 
                  className="btn-primary" 
                  id="view-work-hero-btn"
                  data-cursor-text="WORK"
                >
                  VIEW MY WORK →
                </Link>
                <Link 
                  to="/about" 
                  className="btn-outline" 
                  id="about-me-hero-btn"
                  data-cursor-text="ABOUT"
                >
                  ABOUT ME →
                </Link>
                <a 
                  href="/Hassan_Ahmad_Resume.pdf" 
                  download="Hassan_Ahmad_Resume.pdf"
                  className="btn-outline" 
                  id="download-cv-btn"
                  data-cursor-text="CV"
                >
                  DOWNLOAD CV ⤓
                </a>
              </div>
            </div>

            {/* Right Photo Frame Column with Floating 3D Micro-Animation */}
            <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
              <div 
                className="hero-photo-frame"
                style={{ 
                  position: 'relative',
                  width: '100%',
                  maxWidth: '440px',
                  height: '380px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-gold)',
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
                    background: 'radial-gradient(ellipse at center, transparent 45%, rgba(7, 8, 10, 0.5) 80%, rgba(7, 8, 10, 0.92) 100%), linear-gradient(180deg, rgba(7, 8, 10, 0.3) 0%, transparent 35%, transparent 65%, rgba(7, 8, 10, 0.8) 100%)'
                  }}
                />

                {/* Soft Amber Glow Rim Light along Left & Bottom Edge */}
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    zIndex: 2,
                    boxShadow: 'inset 4px 0 25px rgba(229, 152, 59, 0.4), inset 0 -4px 25px rgba(229, 152, 59, 0.35)'
                  }}
                />

                {/* Actual Photo (Warm Amber Theme Adjusted Desk Setup) */}
                <img 
                  src={HERO_PHOTO} 
                  alt="Hassan Ahmad — Amber Theme Dual Monitor Workspace Setup" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                    filter: 'contrast(1.08) brightness(0.98)'
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
                justifyContent: 'space-between',
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
