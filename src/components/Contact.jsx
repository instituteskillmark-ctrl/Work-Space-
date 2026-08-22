import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';

const Contact = ({ standalone = true }) => {
  const content = (
    <section className="section-block" id="contact-section">
      {standalone && (
        <PageMeta 
          title="Contact — Hassan Ahmad"
          description="Contact Hassan Ahmad, AI Creative Developer, via email at novaagency79@gmail.com."
        />
      )}
      {standalone ? <h1>Contact</h1> : <h2>Contact</h2>}
      <p><strong>Name:</strong> Hassan Ahmad</p>
      <p><strong>Professional Title:</strong> AI Creative Developer</p>
      <p><strong>Email:</strong> <a href="mailto:novaagency79@gmail.com">novaagency79@gmail.com</a></p>
      <br />
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <a href="mailto:novaagency79@gmail.com" className="action-link" id="email-action">
          Send Email (mailto:novaagency79@gmail.com)
        </a>
        <Link to="/all" className="primary-action" id="next-section-btn">
          Next: Main Workspace (All) →
        </Link>
      </div>
    </section>
  );

  if (standalone) {
    return <main id="main-content">{content}</main>;
  }

  return content;
};

export default Contact;
