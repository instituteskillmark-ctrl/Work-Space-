import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';

const Contact = ({ standalone = true }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const content = (
    <section className="section-wrapper" id="contact-section" style={{ position: 'relative' }}>
      {standalone && (
        <PageMeta 
          title="Contact & Start a Project — Hassan Ahmad"
          description="Contact Hassan Ahmad, AI Creative Developer, via email at novaagency79@gmail.com."
        />
      )}
      <div className="main-wrapper">
        <span className="eyebrow">06 CONTACT // LET'S WORK TOGETHER</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', marginBottom: '40px', maxWidth: '850px', lineHeight: 1.1 }}>
          YOU HAVE THE IDEA. <br />
          <span className="text-gold" style={{ textShadow: '0 0 30px rgba(229, 152, 59, 0.3)' }}>I'LL BUILD THE EXPERIENCE.</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', marginBottom: '48px' }}>
          {/* Contact Form */}
          <form className="glossy-card" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px', padding: '36px' }}>
            <h3 style={{ fontSize: '1.35rem', color: '#FFF', letterSpacing: '0.02em' }}>Start a Project</h3>
            
            <div>
              <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-gold)', display: 'block', marginBottom: '8px', letterSpacing: '0.12em' }}>
                YOUR NAME
              </label>
              <input 
                type="text" 
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name" 
                required
              />
            </div>

            <div>
              <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-gold)', display: 'block', marginBottom: '8px', letterSpacing: '0.12em' }}>
                YOUR EMAIL
              </label>
              <input 
                type="email" 
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com" 
                required
              />
            </div>

            <div>
              <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-gold)', display: 'block', marginBottom: '8px', letterSpacing: '0.12em' }}>
                PROJECT DETAILS
              </label>
              <textarea 
                name="message"
                className="form-input"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project goals and scope..." 
                rows="4"
                required
                style={{ resize: 'vertical' }}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn-primary" 
              id="email-action" 
              style={{ width: '100%', marginTop: '8px' }}
              data-cursor-text="SEND"
            >
              {submitted ? 'MESSAGE SENT ✓' : 'START A PROJECT →'}
            </button>
          </form>

          {/* Direct Details Sidebar */}
          <div className="glossy-card" style={{ display: 'flex', flexDirection: 'column', gap: '28px', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '1.35rem', color: '#FFF' }}>GET IN TOUCH DIRECTLY</h3>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-gold)', letterSpacing: '0.12em', marginBottom: '4px' }}>
                PRIMARY EMAIL
              </div>
              <a href="mailto:novaagency79@gmail.com" style={{ color: '#FFF', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 600 }}>
                novaagency79@gmail.com
              </a>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-gold)', letterSpacing: '0.12em', marginBottom: '6px' }}>
                AVAILABILITY STATUS
              </div>
              <div className="status-badge" style={{ display: 'inline-flex' }}>
                <span>AVAILABLE FOR NEW PROJECTS</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Link to="/all" className="btn-primary" id="next-section-btn" data-cursor-text="ALL">
            Next: Main Workspace (All) →
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

export default Contact;
