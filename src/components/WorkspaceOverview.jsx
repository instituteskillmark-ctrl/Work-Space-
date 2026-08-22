import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';

const WorkspaceOverview = () => {
  const sections = [
    { title: 'About', path: '/about', description: 'Personal background and professional focus as an AI Creative Developer.' },
    { title: 'Projects', path: '/projects', description: 'Featured digital web products and applications built with AI tools.' },
    { title: 'Services', path: '/services', description: 'Core development and design services offered.' },
    { title: 'Capabilities', path: '/capabilities', description: 'Technical expertise and capabilities.' },
    { title: 'AI Lab', path: '/ai-lab', description: 'Active experiments, ideas in development, and future concepts.' },
    { title: 'Contact', path: '/contact', description: 'Contact email information.' }
  ];

  return (
    <main id="main-content">
      <PageMeta 
        title="Main Workspace Overview — Hassan Ahmad"
        description="Overview of Hassan Ahmad's AI Creative Developer workspace destinations."
        noindex={true}
      />
      <section className="section-block" id="workspace-overview-section">
        <h1>Main Workspace Overview</h1>
        <p>Explore all key sections of the workspace below:</p>
        <br />
        {sections.map((sec) => (
          <div key={sec.path} className="item-card">
            <h2>{sec.title}</h2>
            <p>{sec.description}</p>
            <Link to={sec.path} className="action-link">
              View {sec.title} Section
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
};

export default WorkspaceOverview;
