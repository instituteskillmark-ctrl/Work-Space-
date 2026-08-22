import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';

const Projects = ({ standalone = true }) => {
  const projectsData = [
    {
      id: 'project-01',
      name: 'Hotel Website',
      liveUrl: 'https://my-hotel23.vercel.app',
      category: 'Hotel Website'
    },
    {
      id: 'project-02',
      name: 'AI Tool',
      liveUrl: 'https://ai-tool-woad-rho.vercel.app',
      category: 'AI Tool'
    },
    {
      id: 'project-03',
      name: 'Medical Website',
      liveUrl: 'https://medical-web-568k.vercel.app',
      category: 'Medical Website'
    },
    {
      id: 'project-04',
      name: 'AI Agency Website',
      liveUrl: 'https://ai-agency-website-tau.vercel.app',
      category: 'AI Agency Website'
    }
  ];

  const content = (
    <section className="section-block" id="projects-section">
      {standalone && (
        <PageMeta 
          title="Projects — Hassan Ahmad"
          description="Explore projects built by Hassan Ahmad including Hotel Website, AI Tool, Medical Website, and AI Agency Website."
        />
      )}
      {standalone ? <h1>Projects</h1> : <h2>Projects</h2>}
      {projectsData.map((project) => (
        <div key={project.id} className="item-card" id={project.id}>
          {standalone ? <h2>{project.name}</h2> : <h3>{project.name}</h3>}
          <p><strong>Category:</strong> {project.category}</p>
          <p><strong>Live URL:</strong> <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">{project.liveUrl}</a></p>
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="action-link"
          >
            Open Live Project
          </a>
        </div>
      ))}
      <br />
      <div style={{ marginTop: '15px' }}>
        <Link 
          to="/services" 
          className="primary-action"
          id="next-section-btn"
        >
          Next: Services →
        </Link>
      </div>
    </section>
  );

  if (standalone) {
    return <main id="main-content">{content}</main>;
  }

  return content;
};

export default Projects;
