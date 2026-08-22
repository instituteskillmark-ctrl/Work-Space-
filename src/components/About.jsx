import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';

const About = ({ standalone = true }) => {
  const stats = [
    { number: '3+', label: 'YEARS OF EXPERIENCE', sub: 'Building AI & Web Solutions' },
    { number: '20+', label: 'PROJECTS COMPLETED', sub: 'Interactive & Modern Apps' },
    { number: '10+', label: 'HAPPY CLIENTS', sub: 'Global Client Satisfaction' },
    { number: '24/7', label: 'SUPPORT & MAINTENANCE', sub: 'Continuous Operational Care' }
  ];

  const content = (
    <section className="section-wrapper" id="about-section" style={{ position: 'relative', overflow: 'hidden' }}>
      {standalone && (
        <PageMeta 
          title="About — Hassan Ahmad | AI Creative Developer"
          description="Learn about Hassan Ahmad, aspiring AI Creative Developer focused on building modern, visually engaging, and innovative digital experiences."
        />
      )}
      <div className="main-wrapper">
        <span className="eyebrow">02 ABOUT // ABOUT ME</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', marginBottom: '32px', maxWidth: '850px' }}>
          PASSIONATE ABOUT <span className="text-gold" style={{ textShadow: '0 0 25px rgba(229, 152, 59, 0.25)' }}>BUILDING THE FUTURE</span>
        </h2>

        {/* Asymmetric Composition Matching Reference */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', marginBottom: '48px', alignItems: 'stretch' }}>
          {/* Left Editorial Profile Card with Amber Halo & Location Badge */}
          <div className="glossy-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(229, 152, 59, 0.4) 0%, rgba(13, 15, 20, 0.9) 70%)',
                  border: '2px solid var(--accent-gold)',
                  boxShadow: '0 0 25px rgba(229, 152, 59, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize: '1.1rem',
                  color: '#FFF'
                }}>
                  HA
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', color: '#FFF' }}>Hassan Ahmad</h3>
                  <p style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                    AI Creative Developer
                  </p>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '24px' }}>
                I’m Hassan Ahmad, an aspiring AI Creative Developer focused on building modern, visually engaging, and innovative digital experiences. I combine creativity, web development, and AI-powered tools to turn ideas into interactive and impactful digital products.
              </p>
            </div>

            <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-specular)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <div className="status-badge" style={{ margin: 0, padding: '6px 12px', fontSize: '0.7rem' }}>
                <span>📍 BASED IN GUJRANWALA, PAKISTAN</span>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                AVAILABILITY: OPEN
              </span>
            </div>
          </div>

          {/* Right Metrics Grid Matching Reference */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="glossy-card" 
                style={{ 
                  padding: '28px 20px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'rgba(13, 15, 20, 0.85)',
                  border: '1px solid var(--border-specular)'
                }}
                data-cursor-text="STAT"
              >
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '2.5rem', color: 'var(--accent-gold)', textShadow: '0 0 20px rgba(229, 152, 59, 0.3)' }}>
                  {stat.number}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-primary)', letterSpacing: '0.1em', marginTop: '8px', fontWeight: 600 }}>
                  {stat.label}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  {stat.sub}
                </div>
              </div>
            ))}
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
