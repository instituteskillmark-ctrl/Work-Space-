import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';
import hassanPortraitImg from '../assets/hassan-portrait.jpg';

const About = ({ standalone = true }) => {
  const capabilityIndicators = [
    { title: 'React & Web Engineering', example: 'Custom state architectures and responsive component systems' },
    { title: 'Canvas Graphics & Shaders', example: 'Real-time 60fps 3D crystal geometry & volumetric light rendering' },
    { title: 'AI & LLM Integration', example: 'Connecting model APIs for context processing & smart UI workflows' },
    { title: 'Performance & Craft', example: 'Fast bundle execution, smooth transitions, and zero unnecessary bloat' }
  ];

  const content = (
    <section className="section-wrapper" id="about-section" style={{ position: 'relative', overflow: 'hidden' }}>
      {standalone && (
        <PageMeta 
          title="About — Hassan Ahmad | AI Creative Developer"
          description="Learn about Hassan Ahmad's story as an AI Creative Developer—building custom web applications, real-time interactive graphics, and AI integrations."
        />
      )}
      <div className="main-wrapper">
        <span className="eyebrow">02 ABOUT // DIGITAL IDENTITY</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', marginBottom: '40px', maxWidth: '900px' }}>
          THE STORY BEHIND THE <span className="text-gold" style={{ textShadow: '0 0 30px rgba(229, 152, 59, 0.3)' }}>CRAFT</span>
        </h2>

        {/* 3-Column Asymmetric Editorial Layout: Portrait + Story Bio + Practical Capabilities */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px', marginBottom: '48px', alignItems: 'stretch' }}>
          
          {/* Column 1: Custom Portrait Showcase Frame */}
          <div 
            className="glossy-card asymmetric-hero-card" 
            style={{ 
              padding: '20px', 
              display: 'flex', 
              flexDirection: 'column', 
              justify: 'space-between',
              border: '1px solid var(--border-gold)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent-gold)', letterSpacing: '0.12em' }}>
                CREATIVE DEVELOPER // IDENTITY
              </span>
              <span className="status-badge" style={{ margin: 0, padding: '2px 8px', fontSize: '0.6rem' }}>
                PORTRAIT
              </span>
            </div>

            {/* Portrait Image Frame */}
            <div 
              style={{ 
                position: 'relative', 
                width: '100%', 
                height: '380px', 
                borderRadius: '10px', 
                overflow: 'hidden',
                border: '1px solid var(--border-specular)',
                marginBottom: '16px'
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  zIndex: 2,
                  background: 'linear-gradient(180deg, rgba(7, 8, 10, 0.1) 0%, transparent 50%, rgba(7, 8, 10, 0.8) 100%)'
                }}
              />
              <img 
                src={hassanPortraitImg} 
                alt="Hassan Ahmad — AI Creative Developer" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block',
                  filter: 'contrast(1.05) brightness(0.98)'
                }}
              />
            </div>

            {/* Profile Label */}
            <div style={{ paddingTop: '10px', borderTop: '1px solid var(--border-specular)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <div>
                <h3 style={{ fontSize: '1.1rem', color: '#FFF', letterSpacing: '0.02em', marginBottom: '2px' }}>Hassan Ahmad</h3>
                <p style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.08em' }}>
                  AI CREATIVE DEVELOPER
                </p>
              </div>
              <div className="status-badge" style={{ margin: 0, padding: '4px 10px', fontSize: '0.62rem' }}>
                <span>GUJRANWALA</span>
              </div>
            </div>

            {/* AI Specialization & Chatbot Focus Block */}
            <div style={{ padding: '14px 16px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-specular)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent-gold)', letterSpacing: '0.12em', marginBottom: '6px' }}>
                SPECIALIZATION // CHATBOTS & AI TOOLS
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '10px' }}>
                Specialized in developing custom AI chatbots, autonomous conversational agents, and intelligent web tools tailored for business growth.
              </p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', padding: '3px 8px', borderRadius: '4px', background: 'rgba(229, 152, 59, 0.14)', border: '1px solid var(--border-gold)', color: 'var(--accent-gold)' }}>
                  AI Chatbots
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', padding: '3px 8px', borderRadius: '4px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-specular)', color: 'var(--text-muted)' }}>
                  LLM Workflows
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', padding: '3px 8px', borderRadius: '4px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-specular)', color: 'var(--text-muted)' }}>
                  AI Tools & MVPs
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Personal Story Bio */}
          <div className="glossy-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-gold)', letterSpacing: '0.15em', marginBottom: '16px' }}>
                THE ORIGIN // PHILOSOPHY
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', color: '#FFF' }}>
                Engineering Meets Aesthetic Intent
              </h3>

              <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
                <p>
                  I started out fascinated by how a few lines of code could transform a blank browser screen into an interactive interface. Early on, static websites felt rigid to me—I wanted to figure out how to make screens feel responsive, fluid, and genuinely intelligent.
                </p>
                <p>
                  That curiosity drove me into front-end engineering, canvas graphics, and AI APIs. One project I'm particularly proud of is a computational 3D workspace engine—rendering multi-layered illuminated crystal geometry at 60fps in native Canvas without heavy framework bloat.
                </p>
                <p>
                  Whether I'm wiring up LLM models to custom React components or tuning real-time visual lighting, I focus on building tools that work reliably and feel great to use.
                </p>
              </div>
            </div>

            <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-specular)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
              <div className="status-badge" style={{ margin: 0, padding: '5px 12px', fontSize: '0.65rem' }}>
                <span>📍 GUJRANWALA, PAKISTAN</span>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent-gold)', letterSpacing: '0.1em' }}>
                AVAILABLE FOR NEW PROJECTS
              </span>
            </div>
          </div>

          {/* Column 3: Practical Skill Examples Panel */}
          <div className="glossy-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-gold)', letterSpacing: '0.15em', marginBottom: '16px' }}>
                PRACTICAL CAPABILITIES // EXAMPLES
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', color: '#FFF' }}>
                Engineering in Action
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                {capabilityIndicators.map((item, idx) => (
                  <div key={idx} style={{ padding: '12px 14px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-specular)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)', boxShadow: '0 0 8px var(--accent-gold)' }} />
                      <span style={{ fontSize: '0.88rem', color: '#FFF', fontWeight: 600, fontFamily: 'var(--font-display)' }}>{item.title}</span>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', paddingLeft: '14px', lineHeight: '1.4' }}>
                      {item.example}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-glass)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                VERIFIED ARCHITECTURE
              </span>
              <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold' }}>✓</span>
            </div>
          </div>

        </div>

        {/* Action CTAs */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link to="/all" className="btn-outline" id="view-full-workspace-btn" data-cursor-text="ALL">
            View Full Workspace
          </Link>
          <Link to="/projects" className="btn-primary" id="next-section-btn" data-cursor-text="WORK">
            Next: Projects →
          </Link>
        </div>
      </div>
    </section>
  );

  if (standalone) {
    return <main id="main-content">{content}</main>;
  }

  return content;
};

export default About;

