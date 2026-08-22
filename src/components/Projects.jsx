import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';

const Projects = ({ standalone = true }) => {
  // Explicitly provided & approved projects by Hassan Ahmad
  const approvedProjects = [
    {
      id: 'project-01',
      num: '01 // HOTEL WEBSITE',
      title: 'Hotel Website',
      category: 'Hotel & Hospitality Experience',
      liveUrl: 'https://my-hotel23.vercel.app'
    },
    {
      id: 'project-02',
      num: '02 // AI TOOL',
      title: 'AI Tool',
      category: 'AI Application & Tooling',
      liveUrl: 'https://ai-tool-woad-rho.vercel.app'
    },
    {
      id: 'project-03',
      num: '03 // MEDICAL PLATFORM',
      title: 'Medical Website',
      category: 'Healthcare & Medical Web Platform',
      liveUrl: 'https://medical-web-568k.vercel.app'
    },
    {
      id: 'project-04',
      num: '04 // AI AGENCY',
      title: 'AI Agency Website',
      category: 'Agency & Creative Digital Platform',
      liveUrl: 'https://ai-agency-website-tau.vercel.app'
    }
  ];

  const content = (
    <section className="section-wrapper" id="projects-section">
      {standalone && (
        <PageMeta 
          title="Featured Projects — Hassan Ahmad"
          description="Explore projects built by Hassan Ahmad including Hotel Website, AI Tool, Medical Website, and AI Agency Website."
        />
      )}
      <div className="main-wrapper">
        <div className="section-header-row">
          <div>
            <span className="eyebrow">04 PROJECTS // WORK</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
              SOME OF MY <span className="text-gold" style={{ textShadow: '0 0 25px rgba(229, 152, 59, 0.25)' }}>RECENT WORK</span>
            </h2>
          </div>
          <Link to="/services" className="btn-outline" style={{ fontSize: '0.8rem', padding: '8px 16px' }} data-cursor-text="SERVICES">
            Explore Services →
          </Link>
        </div>

        {/* Approved Projects Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', marginBottom: '48px' }}>
          {approvedProjects.map((project) => (
            <div 
              key={project.id} 
              className="glossy-card" 
              id={project.id}
              data-cursor-text="LIVE"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                {/* Cinematic Project Preview Card */}
                <div style={{
                  height: '180px',
                  width: '100%',
                  borderRadius: '8px',
                  background: 'radial-gradient(circle at 50% 50%, rgba(229, 152, 59, 0.22) 0%, rgba(13, 15, 20, 0.95) 100%)',
                  border: '1px solid var(--border-specular)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 100%)'
                  }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-gold)', letterSpacing: '0.12em', fontWeight: 'bold' }}>
                    {project.title}
                  </span>
                </div>

                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent-gold)', letterSpacing: '0.1em', marginBottom: '8px' }}>
                  {project.num}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: '#FFF' }}>{project.title}</h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                  Category: {project.category}
                </p>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '20px', wordBreak: 'break-all' }}>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'underline' }}>
                    {project.liveUrl}
                  </a>
                </p>
              </div>

              <div style={{ paddingTop: '14px', borderTop: '1px solid var(--border-specular)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary" 
                  style={{ width: '100%', padding: '10px 16px', fontSize: '0.8rem' }}
                  data-cursor-text="OPEN"
                >
                  Open Live Project ↗
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
