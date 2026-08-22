import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';

const About = ({ standalone = true }) => {
  const content = (
    <section className="section-block" id="about-section">
      {standalone && (
        <PageMeta 
          title="About — Hassan Ahmad"
          description="Learn about Hassan Ahmad, aspiring AI Creative Developer focused on building modern, visually engaging, and innovative digital experiences."
        />
      )}
      {standalone ? <h1>About</h1> : <h2>About</h2>}
      <p><strong>Name:</strong> Hassan Ahmad</p>
      <p><strong>Professional Title:</strong> AI Creative Developer</p>
      <br />
      <h3>About Me</h3>
      <p>
        I’m Hassan Ahmad, an aspiring AI Creative Developer focused on building modern, visually engaging, and innovative digital experiences. I combine creativity, web development, and AI-powered tools to turn ideas into interactive and impactful digital products.
      </p>
      <br />
      <div style={{ marginTop: '15px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Link 
          to="/all" 
          className="primary-action"
          id="view-full-workspace-btn"
        >
          View Full Workspace
        </Link>
        <Link 
          to="/projects" 
          className="primary-action"
          id="next-section-btn"
        >
          Next: Projects →
        </Link>
      </div>
    </section>
  );

  if (standalone) {
    return <main id="main-content">{content}</main>;
  }

  return content;
};

export default About;
