import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';

const Projects = ({ standalone = true }) => {
  // Hassan Ahmad's 4 Approved Projects with Distinct Case-Study Visual Compositions
  const approvedProjects = [
    {
      id: 'project-01',
      num: '01 // HOSPITALITY & HOTEL EXPERIENCE',
      title: 'Hotel Website',
      category: 'Luxury Hotel & Booking Web Application',
      description: 'Modern, interactive hotel booking experience built with high-end responsiveness and seamless reservation UX.',
      liveUrl: 'https://my-hotel23.vercel.app',
      visualStyle: 'linear-gradient(135deg, rgba(229, 152, 59, 0.25) 0%, rgba(11, 13, 18, 0.95) 100%)',
      badge: 'BROWSER PREVIEW'
    },
    {
      id: 'project-02',
      num: '02 // ARTIFICIAL INTELLIGENCE TOOL',
      title: 'AI Tool',
      category: 'AI Application & Generation Platform',
      description: 'Next-gen AI web application giving users prompt-driven workflows, smart automation, and real-time outputs.',
      liveUrl: 'https://ai-tool-woad-rho.vercel.app',
      visualStyle: 'linear-gradient(135deg, rgba(245, 158, 11, 0.22) 0%, rgba(18, 20, 28, 0.95) 100%)',
      badge: 'AI SAAS INTERFACE'
    },
    {
      id: 'project-03',
      num: '03 // HEALTHCARE PLATFORM',
      title: 'Medical Website',
      category: 'Healthcare & Patient Management Platform',
      description: 'Clean, trusted healthcare web application designed for patient engagement, medical services, and accessibility.',
      liveUrl: 'https://medical-web-568k.vercel.app',
      visualStyle: 'linear-gradient(135deg, rgba(229, 152, 59, 0.18) 0%, rgba(7, 8, 10, 0.95) 100%)',
      badge: 'MEDICAL PLATFORM'
    },
    {
      id: 'project-04',
      num: '04 // CREATIVE AGENCY STUDIO',
      title: 'AI Agency Website',
      category: 'Agency Studio & Digital Experience',
      description: 'Futuristic agency portfolio platform showcasing AI solutions, design direction, and digital transformations.',
      liveUrl: 'https://ai-agency-website-tau.vercel.app',
      visualStyle: 'linear-gradient(135deg, rgba(229, 152, 59, 0.28) 0%, rgba(15, 18, 25, 0.95) 100%)',
      badge: 'AGENCY SHOWCASE'
    }
  ];

  const content = (
    <section className="section-wrapper" id="projects-section">
      {standalone && (
        <PageMeta 
          title="Featured Projects — Hassan Ahmad | AI Creative Developer"
          description="Explore projects built by Hassan Ahmad including Hotel Website, AI Tool, Medical Website, and AI Agency Website."
        />
      )}
      <div className="main-wrapper">
        <div className="section-header-row">
          <div>
            <span className="eyebrow">04 PROJECTS // CASE STUDIES</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
              VISUAL PROJECT <span className="text-gold" style={{ textShadow: '0 0 25px rgba(229, 152, 59, 0.3)' }}>SHOWCASE</span>
            </h2>
          </div>
          <Link to="/services" className="btn-outline" style={{ fontSize: '0.8rem', padding: '8px 16px' }} data-cursor-text="SERVICES">
            Explore Services →
          </Link>
        </div>

        {/* Case-Study Showcase Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '48px' }}>
          {approvedProjects.map((project) => (
            <div 
              key={project.id} 
              className="glossy-card" 
              id={project.id}
              data-cursor-text="VIEW"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '28px' }}
            >
              <div>
                {/* Visual Case-Study Preview Frame */}
                <div style={{
                  height: '210px',
                  width: '100%',
                  borderRadius: '10px',
                  background: project.visualStyle,
                  border: '1px solid var(--border-gold)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '16px',
                  marginBottom: '24px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: 'inset 0 0 30px rgba(0, 0, 0, 0.6)'
                }}>
                  {/* Top Mockup Browser Controls */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)' }} />
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)' }} />
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)' }} />
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--accent-gold)', background: 'rgba(7, 8, 10, 0.7)', padding: '2px 8px', borderRadius: '4px' }}>
                      {project.badge}
                    </span>
                  </div>

                  {/* Center Title Display */}
                  <div style={{ textAlign: 'center' }}>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.4rem', color: '#FFF', letterSpacing: '0.04em' }}>
                      {project.title}
                    </h4>
                  </div>

                  {/* Bottom URL pill */}
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                    {project.liveUrl.replace('https://', '')}
                  </div>
                </div>

                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent-gold)', letterSpacing: '0.12em', marginBottom: '6px' }}>
                  {project.num}
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: '#FFF' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '24px' }}>
                  {project.description}
                </p>
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-specular)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary" 
                  style={{ width: '100%', padding: '12px 20px', fontSize: '0.82rem' }}
                  data-cursor-text="OPEN"
                >
                  VIEW PROJECT →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Link to="/services" className="btn-primary" id="next-section-btn" data-cursor-text="SERVICES">
            Next: Services →
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

export default Projects;
