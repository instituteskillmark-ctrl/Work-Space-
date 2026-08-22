import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';

const Entry = () => {
  return (
    <main id="main-content" className="section-block">
      <PageMeta 
        title="Entry — Hassan Ahmad"
        description="Entry page for Hassan Ahmad, AI Creative Developer."
      />
      <Link 
        to="/" 
        style={{ marginBottom: '15px', padding: '4px 8px', display: 'inline-block', color: '#000' }}
        id="back-to-welcome-btn"
      >
        ← Back to Welcome
      </Link>
      <h1>Hassan Ahmad — AI Creative Developer</h1>
      <p><strong>Professional Title:</strong> AI Creative Developer</p>
      <p><strong>Introduction:</strong> I combine creativity, web development and AI-powered tools to turn ideas into modern interactive digital experiences.</p>
      <br />
      <Link 
        to="/about" 
        className="primary-action"
        style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}
        id="enter-workspace-btn"
      >
        Enter Workspace
      </Link>
    </main>
  );
};

export default Entry;
