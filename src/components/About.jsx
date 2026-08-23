import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';

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

        {/* Asymmetric Editorial Identity Panel */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '36px', marginBottom: '48px', alignItems: 'stretch' }}>
          {/* Main Biography & Personal Story Column */}
          <div className="glossy-card" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '12px',
                  background: 'radial-gradient(circle, rgba(229, 152, 59, 0.35) 0%, rgba(11, 13, 18, 0.95) 75%)',
                  border: '1.5px solid var(--accent-gold)',
                  boxShadow: '0 0 30px rgba(229, 152, 59, 0.35), inset 0 0 15px rgba(229, 152, 59, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize: '1.25rem',
                  color: '#FFF'
                }}>
                  HA
                </div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', color: '#FFF', letterSpacing: '0.02em' }}>Hassan Ahmad</h3>
                  <p style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', letterSpacing: '0.08em' }}>
                    AI CREATIVE DEVELOPER
                  </p>
                </div>
              </div>

              {/* Personal Story Bio */}
              <div style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.75', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p>
                  I started out fascinated by how a few lines of code could transform a blank browser screen into an interactive interface. Early on, static websites felt rigid to me—I wanted to figure out how to make screens feel responsive, fluid, and genuinely intelligent.
                </p>
                <p>
                  That curiosity drove me into front-end engineering, canvas graphics, and AI APIs. One project I'm particularly proud of is a computational 3D workspace engine—rendering multi-layered illuminated crystal geometry at 60fps in native Canvas without relying on heavy external framework bloat.
                </p>
                <p>
                  Whether I'm wiring up LLM models to custom React components or tuning real-time visual lighting, I focus on building tools that work reliably and feel great to use.
                </p>
              </div>
            </div>

            <div style={{ paddingTop: '20px', borderTop: '1px solid var(--border-specular)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <div className="status-badge" style={{ margin: 0, padding: '6px 14px', fontSize: '0.7rem' }}>
                <span>📍 BASED IN GUJRANWALA, PAKISTAN</span>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent-gold)', letterSpacing: '0.12em' }}>
                STATUS: AVAILABLE FOR NEW PROJECTS
              </span>
            </div>
          </div>

          {/* Right Column: Practical Skill Examples Panel */}
          <div className="glossy-card" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-gold)', letterSpacing: '0.15em', marginBottom: '16px' }}>
                PRACTICAL CAPABILITIES // REAL EXAMPLES
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '24px', color: '#FFF' }}>
                Engineering in Action
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
                {capabilityIndicators.map((item, idx) => (
                  <div key={idx} style={{ padding: '14px 16px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-specular)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)', boxShadow: '0 0 8px var(--accent-gold)' }} />
                      <span style={{ fontSize: '0.9rem', color: '#FFF', fontWeight: 600, fontFamily: 'var(--font-display)' }}>{item.title}</span>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', paddingLeft: '16px', lineHeight: '1.4' }}>
                      {item.example}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-glass)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                LOCATION: GUJRANWALA, PAKISTAN
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

