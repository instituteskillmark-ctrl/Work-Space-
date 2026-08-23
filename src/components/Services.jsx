import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';

const Services = ({ standalone = true }) => {
  const [selectedService, setSelectedService] = useState(0);

  const servicesData = [
    {
      id: 'service-01',
      num: '01',
      name: 'AI-POWERED WEBSITE DEVELOPMENT',
      shortDesc: 'Modern, responsive, and professional websites for businesses and brands.',
      fullDesc: 'End-to-end development of intelligent, fast, and modern web applications leveraging cutting-edge AI integrations, component frameworks, and responsive UX architecture.',
      deliverables: ['Custom Web Architecture', 'AI Tool Integrations', 'Responsive Layout System', 'SEO & Performance Optimization']
    },
    {
      id: 'service-02',
      num: '02',
      name: 'UI/UX & WEBSITE REDESIGN',
      shortDesc: 'Improving outdated websites with clean, modern, and user-friendly designs.',
      fullDesc: 'Transforming legacy websites into high-conversion visual experiences with dark obsidian aesthetics, cinematic typography, specular lighting, and fluid micro-interactions.',
      deliverables: ['UI/UX Design Direction', 'Modern Interface Overhaul', 'Design System Systematization', 'Interactive Prototypes']
    },
    {
      id: 'service-03',
      num: '03',
      name: 'AI CHATBOT SOLUTIONS',
      shortDesc: 'Custom website chatbots for customer support and user engagement.',
      fullDesc: 'Deploying autonomous conversational AI agents and intelligent chatbot widgets tailored to handle customer support, qualify leads, and elevate site engagement.',
      deliverables: ['Custom Voice/Text Chatbots', 'LLM Prompt Architecture', 'Customer Support Automation', 'Lead Qualification Flow']
    },
    {
      id: 'service-04',
      num: '04',
      name: 'AI TOOLS & MVP DEVELOPMENT',
      shortDesc: 'Turning ideas into functional AI-powered tools and MVPs.',
      fullDesc: 'Converting napkin ideas and concepts into market-ready, functional AI tools and SaaS prototypes with rapid development velocity and production stability.',
      deliverables: ['Rapid Prototype Building', 'AI API Synthesis', 'SaaS Architecture', 'Full Product Deployment']
    }
  ];

  const currentService = servicesData[selectedService];

  const content = (
    <section className="section-wrapper" id="services-section">
      {standalone && (
        <PageMeta 
          title="Services — Hassan Ahmad | AI Creative Developer"
          description="Services offered by Hassan Ahmad including AI-Powered Website Development, UI/UX Redesign, AI Chatbots, and MVP Development."
        />
      )}
      <div className="main-wrapper">
        <span className="eyebrow">05 SERVICES // CAPABILITIES</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', marginBottom: '40px' }}>
          INTERACTIVE STUDIO <span className="text-gold" style={{ textShadow: '0 0 25px rgba(229, 152, 59, 0.3)' }}>SERVICE SELECTOR</span>
        </h2>

        {/* Interactive Studio Selector Composition */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', marginBottom: '48px', alignItems: 'stretch' }}>
          {/* Vertical Interactive Service Index */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {servicesData.map((service, index) => {
              const isSelected = selectedService === index;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(index)}
                  onMouseEnter={() => setSelectedService(index)}
                  className="glossy-card"
                  style={{
                    padding: '22px 26px',
                    cursor: 'pointer',
                    borderColor: isSelected ? 'var(--accent-gold)' : 'var(--border-specular)',
                    background: isSelected ? 'rgba(229, 152, 59, 0.14)' : 'rgba(11, 13, 18, 0.85)',
                    boxShadow: isSelected ? '0 0 30px rgba(229, 152, 59, 0.25)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                  data-cursor-text="SELECT"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 'bold' }}>
                      {service.num}
                    </span>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: isSelected ? 'var(--accent-gold)' : '#FFF' }}>
                      {service.name}
                    </span>
                  </div>
                  <span style={{ color: isSelected ? 'var(--accent-gold)' : 'var(--text-muted)', fontWeight: 'bold' }}>→</span>
                </div>
              );
            })}
          </div>

          {/* Large Dynamic Active Service Feature Showcase Panel */}
          <div className="glossy-card" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderColor: 'var(--border-gold)', background: 'rgba(15, 18, 25, 0.9)' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', letterSpacing: '0.12em' }}>
                  FEATURED OFFERING // SERVICE {currentService.num}
                </span>
                <span className="status-badge" style={{ margin: 0, padding: '4px 10px', fontSize: '0.65rem' }}>
                  STUDIO SOLUTION
                </span>
              </div>

              <h3 style={{ fontSize: '1.6rem', color: '#FFF', marginBottom: '16px' }}>
                {currentService.name}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '28px' }}>
                {currentService.fullDesc}
              </p>

              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-gold)', letterSpacing: '0.1em', marginBottom: '12px' }}>
                  KEY DELIVERABLES:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                  {currentService.deliverables.map((del, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      <span style={{ color: 'var(--accent-gold)' }}>✓</span>
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ paddingTop: '20px', borderTop: '1px solid var(--border-glass)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Link to="/contact" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.8rem' }} data-cursor-text="START">
                Inquire About Service →
              </Link>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Link to="/capabilities" className="btn-primary" id="next-section-btn" data-cursor-text="CAPABILITIES">
            Next: Capabilities →
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

export default Services;
