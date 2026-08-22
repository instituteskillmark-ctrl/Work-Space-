import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';

const Projects = ({ standalone = true }) => {
  // Compliant structural project card slots (Clean placeholders for upcoming approved project content)
  const projectSlots = [
    {
      id: 'project-slot-01',
      num: '01 // FEATURED',
      title: 'PROJECT COMING SOON',
      category: 'AI Tool / Interactive Web Application',
      status: 'In Preparation'
    },
    {
      id: 'project-slot-02',
      num: '02 // FEATURED',
      title: 'PROJECT COMING SOON',
      category: 'Digital Experience / Portfolio',
      status: 'In Preparation'
    },
    {
      id: 'project-slot-03',
      num: '03 // FEATURED',
      title: 'PROJECT COMING SOON',
      category: 'Web Platform / Solution',
      status: 'In Preparation'
    },
    {
      id: 'project-slot-04',
      num: '04 // FEATURED',
      title: 'PROJECT COMING SOON',
      category: 'Creative AI Application',
      status: 'In Preparation'
    }
  ];

  const content = (
    <section className="section-wrapper" id="projects-section">
      {standalone && (
        <PageMeta 
          title="Featured Projects — Hassan Ahmad"
          description="Explore featured digital web products and applications built by Hassan Ahmad."
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

        {/* Cinematic Project Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', marginBottom: '48px' }}>
          {projectSlots.map((slot) => (
            <div 
              key={slot.id} 
              className="glossy-card" 
              id={slot.id}
              data-cursor-text="VIEW"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                {/* Cinematic Preview Frame */}
                <div style={{
                  height: '180px',
                  width: '100%',
                  borderRadius: '8px',
                  background: 'radial-gradient(circle at 50% 50%, rgba(229, 152, 59, 0.18) 0%, rgba(13, 15, 20, 0.95) 100%)',
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
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%)'
                  }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', letterSpacing: '0.15em', fontWeight: 'bold' }}>
                    {slot.title}
                  </span>
                </div>

                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent-gold)', letterSpacing: '0.1em', marginBottom: '8px' }}>
                  {slot.num}
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: '#FFF' }}>{slot.title}</h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                  Category: {slot.category}
                </p>
              </div>

              <div style={{ paddingTop: '14px', borderTop: '1px solid var(--border-specular)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="status-badge" style={{ fontSize: '0.65rem', padding: '4px 10px' }}>
                  {slot.status}
                </span>
                <span style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: 'bold' }}>→</span>
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
