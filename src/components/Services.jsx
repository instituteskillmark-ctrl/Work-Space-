import React from 'react';
import PageMeta from './PageMeta';

const Services = ({ standalone = true }) => {
  const servicesData = [
    {
      id: 'service-01',
      name: 'AI-Powered Website Development',
      description: 'Modern, responsive, and professional websites for businesses and brands.'
    },
    {
      id: 'service-02',
      name: 'UI/UX & Website Redesign',
      description: 'Improving outdated websites with clean, modern, and user-friendly designs.'
    },
    {
      id: 'service-03',
      name: 'AI Chatbot Solutions',
      description: 'Custom website chatbots for customer support and user engagement.'
    },
    {
      id: 'service-04',
      name: 'AI Tools & MVP Development',
      description: 'Turning ideas into functional AI-powered tools and MVPs.'
    }
  ];

  const content = (
    <section className="section-block" id="services-section">
      {standalone && (
        <PageMeta 
          title="Services — Hassan Ahmad"
          description="Services offered by Hassan Ahmad including AI-Powered Website Development, UI/UX Redesign, AI Chatbots, and MVP Development."
        />
      )}
      {standalone ? <h1>Services</h1> : <h2>Services</h2>}
      {servicesData.map((service) => (
        <div key={service.id} className="item-card" id={service.id}>
          {standalone ? <h2>{service.name}</h2> : <h3>{service.name}</h3>}
          <p><strong>Description:</strong> {service.description}</p>
        </div>
      ))}
    </section>
  );

  if (standalone) {
    return <main id="main-content">{content}</main>;
  }

  return content;
};

export default Services;
