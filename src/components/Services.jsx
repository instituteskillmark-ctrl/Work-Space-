import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';

const Services = ({ standalone = true }) => {
  const servicesData = [
    {
      id: 'service-01',
      num: '01',
      name: 'AI-Powered Website Development',
      description: 'Modern, responsive, and professional websites for businesses and brands.'
    },
    {
      id: 'service-02',
      num: '02',
      name: 'UI/UX & Website Redesign',
      description: 'Improving outdated websites with clean, modern, and user-friendly designs.'
    },
    {
      id: 'service-03',
      num: '03',
      name: 'AI Chatbot Solutions',
      description: 'Custom website chatbots for customer support and user engagement.'
    },
    {
      id: 'service-04',
      num: '04',
      name: 'AI Tools & MVP Development',
      description: 'Turning ideas into functional AI-powered tools and MVPs.'
    }
  ];

  const content = (
    <section className="section-wrapper" id="services-section">
      {standalone && (
        <PageMeta 
          title="Services — Hassan Ahmad | AI Creative Developer"
          description="Services offered by Hassan Ahmad including AI-Powered Website Development, UI/UX Redesign, AI Chatbots, and MVP Development."
        />
      )}
      <div className="main-wrapper">
        <span className="eyebrow">05 SERVICES // OFFERINGS</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', marginBottom: '40px' }}>
          WHAT I CAN <span className="text-gold" style={{ textShadow: '0 0 25px rgba(229, 152, 59, 0.25)' }}>BUILD FOR YOU</span>
        </h2>

        {/* User-Approved 4 Service Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="glossy-card" 
              id={service.id}
              data-cursor-text="SERVICE"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', letterSpacing: '0.1em' }}>
                    {service.num} // SERVICE
                  </span>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)', boxShadow: '0 0 8px var(--accent-gold)' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: '#FFF' }}>{service.name}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>{service.description}</p>
              </div>

              <div style={{ marginTop: '20px', paddingTop: '12px', borderTop: '1px solid var(--border-glass)', display: 'flex', justifyContent: 'flex-end' }}>
                <span style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: 'bold' }}>Explore →</span>
              </div>
            </div>
          ))}
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
