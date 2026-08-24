import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';
import projectAipilotImg from '../assets/project-aipilot.png';
import projectHotelImg from '../assets/project-hotel.png';
import projectAitoolImg from '../assets/project-aitool.png';
import projectMedicalImg from '../assets/project-medical.png';
import projectAgencyImg from '../assets/project-agency.png';

const Projects = ({ standalone = true }) => {
  // Hassan Ahmad's Approved Projects with Real UI Preview Images & Case-Study Descriptions
  const approvedProjects = [
    {
      id: 'project-01',
      num: '01 // FLAGSHIP AI CAREER PLATFORM',
      title: 'AI Resume Pilot',
      category: 'AI Resume Analyzer & ATS Intelligence Engine',
      description: 'An AI-powered career agent platform engineered to analyze CVs and resumes in real time. It calculates ATS match scores, identifies missing keyword benchmarks, provides structural feedback, and generates tailored interview prep recommendations.',
      liveUrl: 'https://ai-pilot-pink.vercel.app',
      img: projectAipilotImg,
      badge: 'FLAGSHIP AI TOOL'
    },
    {
      id: 'project-02',
      num: '02 // HOSPITALITY & HOTEL EXPERIENCE',
      title: 'Hotel Website',
      category: 'Luxury Hotel & Booking Web Application',
      description: 'Built to eliminate booking drop-offs caused by slow form reloads. I used client-side reactive state caching for room availability so guests can filter dates and inspect prices instantly.',
      liveUrl: 'https://my-hotel23.vercel.app',
      img: projectHotelImg,
      badge: 'LUXURY HOSPITALITY'
    },
    {
      id: 'project-03',
      num: '03 // ARTIFICIAL INTELLIGENCE TOOL',
      title: 'AI Tool',
      category: 'AI Application & Generation Platform',
      description: 'Tackled user drop-off caused by API latency by engineering a real-time token streaming interface paired with a canvas telemetry status bar.',
      liveUrl: 'https://ai-tool-woad-rho.vercel.app',
      img: projectAitoolImg,
      badge: 'AI SAAS INTERFACE'
    },
    {
      id: 'project-04',
      num: '04 // HEALTHCARE PLATFORM',
      title: 'Medical Website',
      category: 'Healthcare & Patient Management Platform',
      description: 'Replaced confusing nested menus with a streamlined 3-step appointment triage wizard so patients locate specialist care quickly.',
      liveUrl: 'https://medical-web-568k.vercel.app',
      img: projectMedicalImg,
      badge: 'MEDICAL PLATFORM'
    },
    {
      id: 'project-05',
      num: '05 // CREATIVE AGENCY STUDIO',
      title: 'AI Agency Website',
      category: 'Agency Studio & Digital Experience',
      description: 'Designed an interactive case-study showcase to prove agency capabilities through live browser demonstrations rather than static screenshots.',
      liveUrl: 'https://ai-agency-website-tau.vercel.app',
      img: projectAgencyImg,
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

        {/* Case-Study Showcase Grid with Intentional Asymmetric Hierarchy */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '28px', marginBottom: '48px' }}>
          {approvedProjects.map((project, idx) => {
            const isFeatured = idx === 0;
            const isStaggered = idx === 1;
            const cardClasses = `glossy-card ${isFeatured ? 'asymmetric-grid-hero' : ''} ${isStaggered ? 'stagger-offset-card' : ''}`;

            return (
              <div 
                key={project.id} 
                className={cardClasses}
                id={project.id}
                data-cursor-text="VIEW"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: isFeatured ? 'clamp(20px, 4vw, 36px)' : 'clamp(18px, 3.5vw, 28px)' }}
              >
                <div>
                  {/* Visual Case-Study Preview Frame with Real Image Mockup */}
                  <div style={{
                    height: isFeatured ? 'clamp(180px, 28vw, 260px)' : 'clamp(160px, 24vw, 210px)',
                    width: '100%',
                    borderRadius: '10px',
                    border: '1px solid var(--border-gold)',
                    position: 'relative',
                    overflow: 'hidden',
                    marginBottom: '20px',
                    background: 'rgba(11, 13, 18, 0.95)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.65)'
                  }}>
                    <img 
                      src={project.img} 
                      alt={`${project.title} — Real Web Application Preview`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        objectPosition: 'center',
                        display: 'block',
                        filter: 'brightness(0.95) contrast(1.08)'
                      }}
                    />

                    {/* Top Mockup Browser Controls & Badge Overlay */}
                    <div style={{ position: 'absolute', top: 0, inset: '0 0 auto 0', padding: '10px 14px', background: 'linear-gradient(180deg, rgba(7, 8, 10, 0.88) 0%, rgba(7, 8, 10, 0.3) 70%, transparent 100%)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 2 }}>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'rgba(229, 152, 59, 0.8)' }} />
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--accent-gold)', background: 'rgba(7, 8, 10, 0.9)', border: '1px solid var(--border-gold)', padding: '2px 8px', borderRadius: '4px' }}>
                        {project.badge}
                      </span>
                    </div>

                    {/* Bottom URL Pill Overlay */}
                    <div style={{ position: 'absolute', bottom: '10px', left: '12px', zIndex: 2, fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--accent-gold)', background: 'rgba(7, 8, 10, 0.85)', padding: '3px 10px', borderRadius: '4px', border: '1px solid var(--border-specular)' }}>
                      {project.liveUrl.replace('https://', '')}
                    </div>
                  </div>

                  <div className="card-eyebrow" style={{ marginBottom: '8px', paddingTop: '2px' }}>
                    {project.num}
                  </div>
                  <h3 style={{ fontSize: isFeatured ? '1.5rem' : '1.3rem', marginBottom: '8px', color: '#FFF' }}>{project.title}</h3>
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
            );
          })}
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
