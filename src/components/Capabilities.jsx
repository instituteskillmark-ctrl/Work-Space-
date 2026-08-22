import React from 'react';
import PageMeta from './PageMeta';

const Capabilities = ({ standalone = true }) => {
  const capabilitiesList = [
    'AI-Powered Website & Digital Solutions Creator',
    'AI Prompt Engineering',
    'AI-Assisted UI/UX & Design Direction',
    'AI Tool / SaaS Prototype Building',
    'AI Chatbot Development',
    'AI-Assisted Deployment & Debugging',
    'AI Image Generation & Creative Direction'
  ];

  const content = (
    <section className="section-block" id="capabilities-section">
      {standalone && (
        <PageMeta 
          title="Capabilities — Hassan Ahmad"
          description="Technical capabilities and skills of Hassan Ahmad in AI development, prompt engineering, and UI/UX."
        />
      )}
      {standalone ? <h1>Capabilities</h1> : <h2>Capabilities</h2>}
      <ol className="plain-list">
        {capabilitiesList.map((item, index) => (
          <li key={index}>
            <strong>{item}</strong>
          </li>
        ))}
      </ol>
    </section>
  );

  if (standalone) {
    return <main id="main-content">{content}</main>;
  }

  return content;
};

export default Capabilities;
