import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';
import AICore3D from './AICore3D';

const Entry = () => {
  return (
    <main id="main-content" className="section-wrapper">
      <PageMeta 
        title="Entry — Hassan Ahmad"
        description="Entry page for Hassan Ahmad, AI Creative Developer."
      />
      <div className="main-wrapper">
        <Link to="/" className="btn-outline" style={{ minHeight: '36px', padding: '6px 14px', marginBottom: '24px', fontSize: '0.8rem' }} id="back-to-welcome-btn">
          ← Back to Welcome
        </Link>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
          <div>
            <span className="eyebrow">AI CREATIVE DEVELOPER</span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', marginTop: '10px', marginBottom: '20px' }}>
              Hassan Ahmad — <span className="text-gold">AI Creative Developer</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>
              <strong>Professional Title:</strong> AI Creative Developer
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '28px', maxWidth: '540px' }}>
              <strong>Introduction:</strong> I combine creativity, web development and AI-powered tools to turn ideas into modern interactive digital experiences.
            </p>

            <Link to="/about" className="btn-primary" id="enter-workspace-btn">
              Enter Workspace →
            </Link>
          </div>

          <div style={{ width: '100%', height: '420px' }}>
            <AICore3D />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Entry;
