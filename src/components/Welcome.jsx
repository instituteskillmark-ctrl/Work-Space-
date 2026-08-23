import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';
import heroCrystalWorkspaceImg from '../assets/hero-crystal-workspace.png';

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
        paddingTop: '50px', 
        paddingBottom: '60px', 
        position: 'relative', 
        overflow: 'hidden'
      }}
    >
      <PageMeta 
        title="Welcome — Hassan Ahmad | AI Creative Developer"
        description="Welcome to the AI Creative Developer workspace of Hassan Ahmad."
      />

      {/* Hero Section Container with Right Workspace Graphic */}
      <div 
        style={{
          position: 'relative',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: `url(${heroCrystalWorkspaceImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '16px',
          overflow: 'hidden',
          marginBottom: '56px'
        }}
      >
        {/* Text Protection Overlay for Left Column */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 1,
            background: 'linear-gradient(90deg, #07080a 0%, rgba(7, 8, 10, 0.88) 40%, rgba(7, 8, 10, 0.4) 65%, transparent 85%)'
          }}
        />

        <div 
          className="main-wrapper" 
          style={{ 
            position: 'relative', 
            zIndex: 3, 
            width: '100%',
            paddingTop: '20px',
            paddingBottom: '20px'
          }}
        >
          <div style={{ maxWidth: '560px' }}>
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




