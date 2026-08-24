import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';
import SkillsGraph from './SkillsGraph';

const Capabilities = ({ standalone = true }) => {
  const userApprovedSkills = [
    'AI-Powered Website & Digital Solutions Creator',
    'AI Prompt Engineering',
    'AI-Assisted UI/UX & Design Direction',
    'AI Tool / SaaS Prototype Building',
    'AI Chatbot Development',
    'AI-Assisted Deployment & Debugging',
    'AI Image Generation & Creative Direction'
  ];

  const content = (
    <section className="section-wrapper" id="capabilities-section">
      {standalone && (
        <PageMeta 
          title="Capabilities & Skills — Hassan Ahmad"
          description="Technical capabilities and skills of Hassan Ahmad in AI development, prompt engineering, and UI/UX."
        />
      )}
      <div className="main-wrapper">
        <span className="eyebrow">03 SKILLS // TECHNOLOGIES</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', marginBottom: '16px' }}>
          THE TECHNOLOGIES <span className="text-gold" style={{ textShadow: '0 0 25px rgba(229, 152, 59, 0.25)' }}>I WORK WITH</span>
        </h2>

        {/* Interactive Constellation Graph */}
        <SkillsGraph />

        {/* User-Approved 7 Skills List */}
        <div style={{ marginTop: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', color: 'var(--text-secondary)' }}>
            Core Technical Capabilities
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '14px', marginBottom: '40px' }}>
            {userApprovedSkills.map((item, index) => (
              <div 
                key={index} 
                className="glossy-card" 
                style={{ padding: '18px 22px', display: 'flex', alignItems: 'center', gap: '14px', background: 'rgba(13, 15, 20, 0.75)' }}
                data-cursor-text="SKILL"
              >
                <span className="card-eyebrow" style={{ fontSize: '0.85rem' }}>
                  0{index + 1}.
                </span>
                <span className="card-subheading" style={{ fontSize: '0.92rem' }}>{item}</span>
              </div>
            ))}
          </div>
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

export default Capabilities;
