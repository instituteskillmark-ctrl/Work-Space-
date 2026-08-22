import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';

const AILab = ({ standalone = true }) => {
  const structuralStates = [
    {
      title: 'Active Experiments',
      note: 'Currently no specific completed projects.'
    },
    {
      title: 'Ideas in Development',
      note: 'Currently no specific completed projects.'
    },
    {
      title: 'Coming Next',
      note: 'Currently no specific completed projects.'
    }
  ];

  const content = (
    <section className="section-block" id="ai-lab-section">
      {standalone && (
        <PageMeta 
          title="AI Lab — Hassan Ahmad"
          description="AI Lab experiments, ideas in development, and future projects by Hassan Ahmad."
        />
      )}
      {standalone ? <h1>AI Lab</h1> : <h2>AI Lab</h2>}
      {structuralStates.map((state, index) => (
        <div key={index} className="item-card">
          {standalone ? <h2>{state.title}</h2> : <h3>{state.title}</h3>}
          <p><em>{state.note}</em></p>
        </div>
      ))}
      <br />
      <div style={{ marginTop: '15px' }}>
        <Link 
          to="/contact" 
          className="primary-action"
          id="next-section-btn"
        >
          Next: Contact →
        </Link>
      </div>
    </section>
  );

  if (standalone) {
    return <main id="main-content">{content}</main>;
  }

  return content;
};

export default AILab;
