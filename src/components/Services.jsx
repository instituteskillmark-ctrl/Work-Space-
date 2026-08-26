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
      shortDesc: 'Modern, responsive, and high-performance websites built for growth.',
      fullDesc: 'I build fast, responsive web apps from the ground up, integrating smart AI features and clean UI frameworks that make your product stand out and perform reliably.',
      deliverables: ['Custom Web Architecture', 'AI Feature Integrations', 'Responsive Layout System', 'SEO & Speed Optimization']
    },
    {
      id: 'service-02',
      num: '02',
      name: 'UI/UX & WEBSITE REDESIGN',
      shortDesc: 'Turning outdated sites into clean, high-conversion visual experiences.',
      fullDesc: 'I overhaul clunky or outdated websites into modern dark-mode visual experiences with smooth micro-animations, clear typography, and intuitive user flows.',
      deliverables: ['UI/UX Design Direction', 'Modern Interface Overhaul', 'Design System Architecture', 'Interactive Prototypes']
    },
    {
      id: 'service-03',
      num: '03',
      name: 'AI CHATBOT SOLUTIONS',
      shortDesc: 'Custom AI chatbots for support, lead capture, and engagement.',
      fullDesc: 'I design and integrate custom AI chatbots for your website—handling visitor questions, qualifying leads, and keeping users engaged 24/7.',
      deliverables: ['Custom Voice/Text Chatbots', 'LLM Prompt Architecture', 'Customer Support Automation', 'Lead Qualification Flow']
    },
    {
      id: 'service-04',
      num: '04',
      name: 'AI TOOLS & MVP DEVELOPMENT',
      shortDesc: 'Turning product ideas into working AI SaaS tools and MVPs.',
      fullDesc: 'I turn your product concepts into working AI tools and SaaS prototypes quickly, building production-ready MVPs that real users can test immediately.',
      deliverables: ['Rapid Prototype Building', 'AI Model Integration', 'SaaS Tool Architecture', 'Full Product Deployment']
    }
  ];

  const currentService = servicesData[selectedService];

  const content = (
    <section className="section-wrapper" id="services-section">
      {standalone && (
        <PageMeta 
          title="Services — Hassan Ahmad | AI Creative Developer"
          description="Explore services offered by Hassan Ahmad including AI-Powered Website Development, UI/UX Redesign, AI Chatbots, and MVP Development."
        />
      )}
      <div className="main-wrapper">
        <div className="section-divider-diagonal" style={{ marginTop: '0', marginBottom: '40px' }} />
        <span className="eyebrow">05 SERVICES // WHAT I DO</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', marginBottom: '40px' }}>
          How I Can Help <span className="text-gold" style={{ fontStyle: 'italic', textShadow: '0 0 25px var(--accent-gold-glow)' }}>Build Your Product</span>
        </h2>

        {/* Interactive Service Selector */}
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
                    borderRadius: '12px',
                    borderLeft: isSelected ? '4px solid var(--accent-gold)' : '1px solid var(--border-specular)',
                    borderColor: isSelected ? 'var(--accent-gold)' : 'var(--border-specular)',
                    background: isSelected ? 'linear-gradient(135deg, rgba(229, 152, 59, 0.16) 0%, rgba(11, 13, 18, 0.9) 100%)' : 'rgba(11, 13, 18, 0.75)',
                    boxShadow: isSelected ? '0 0 30px rgba(229, 152, 59, 0.25)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transform: isSelected ? 'translateX(6px)' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  data-cursor-text="SELECT"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span className="card-eyebrow" style={{ fontSize: '0.8rem' }}>
                      {service.num}
                    </span>
                    <span className="card-subheading" style={{ fontSize: '0.95rem', color: isSelected ? 'var(--accent-gold)' : '#FFF' }}>
                      {service.name}
                    </span>
                  </div>
                  <span style={{ color: isSelected ? 'var(--accent-gold)' : 'var(--text-muted)', fontWeight: 'bold', transform: isSelected ? 'translateX(4px)' : 'none', transition: 'transform 0.3s ease' }}>→</span>
                </div>
              );
            })}
          </div>

          {/* Large Dynamic Active Service Feature Showcase Panel */}
          <div className="glossy-card" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderColor: 'var(--border-gold)', background: 'rgba(15, 18, 25, 0.92)' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', paddingTop: '4px' }}>
                <span className="card-eyebrow">
                  FEATURED OFFERING // SERVICE {currentService.num}
                </span>
                <span className="status-badge" style={{ margin: 0, padding: '4px 12px', fontSize: '0.65rem' }}>
                  FEATURED SERVICE
                </span>
              </div>

              <h3 style={{ fontSize: '1.6rem', color: '#FFF', marginBottom: '16px' }}>
                {currentService.name}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '28px' }}>
                {currentService.fullDesc}
              </p>

              <div style={{ marginBottom: '24px' }}>
                <div className="card-eyebrow" style={{ marginBottom: '12px' }}>
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
          <Link to="/capabilities" className="btn-primary" id="next-section-btn" data-cursor-text="SKILLS">
            Next: Skills →
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
