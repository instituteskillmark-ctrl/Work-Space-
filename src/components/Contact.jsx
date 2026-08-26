import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';

const Contact = ({ standalone = true }) => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        throw new Error(data.error || 'Server error occurred');
      }
    } catch (err) {
      console.warn('API Endpoint notice, executing direct mailto fallback:', err);
      // Fallback: Open mailto directly with prefilled user information
      const mailtoSubject = encodeURIComponent(`Start a Project Inquiry from ${formData.name}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\n\nProject Details:\n${formData.message}`
      );
      window.location.href = `mailto:hassan217175@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  const content = (
    <section className="section-wrapper" id="contact-section" style={{ position: 'relative' }}>
      {standalone && (
        <PageMeta 
          title="Contact & Start a Project — Hassan Ahmad"
          description="Contact Hassan Ahmad, AI Creative Developer. Call/WhatsApp 03217175831 or email hassan217175@gmail.com."
        />
      )}
      <div className="main-wrapper">
        <span className="eyebrow">06 CONTACT // LET'S WORK TOGETHER</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', marginBottom: '40px', maxWidth: '850px', lineHeight: 1.2 }}>
          You have the idea. <br />
          <span className="text-gold" style={{ fontStyle: 'italic', textShadow: '0 0 30px var(--accent-gold-glow)' }}>I'll build the experience.</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', marginBottom: '48px' }}>
          {/* Contact Form */}
          <form className="glossy-card" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px', padding: '36px' }}>
            <h3 style={{ fontSize: '1.35rem', color: '#FFF', letterSpacing: '0.02em' }}>Start a Project</h3>
            
            <div>
              <label className="card-eyebrow" style={{ display: 'block', marginBottom: '8px' }}>
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

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              <div>
                <label className="card-eyebrow" style={{ display: 'block', marginBottom: '8px' }}>
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
                <label className="card-eyebrow" style={{ display: 'block', marginBottom: '8px' }}>
                  PHONE / WHATSAPP (OPTIONAL)
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="03217175831" 
                />
              </div>
            </div>

            <div>
              <label className="card-eyebrow" style={{ display: 'block', marginBottom: '8px' }}>
                PROJECT DETAILS
              </label>
              <textarea 
                name="message"
                className="form-input"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project goals, scope, and timeline..." 
                rows="4"
                required
                style={{ resize: 'vertical' }}
              ></textarea>
            </div>

            {status === 'error' && (
              <div style={{ color: '#ef4444', fontSize: '0.85rem' }}>
                ⚠️ {errorMessage || 'Failed to send message. Please try again.'}
              </div>
            )}

            <button 
              type="submit" 
              className="btn-primary" 
              id="email-action" 
              disabled={status === 'sending'}
              style={{ width: '100%', marginTop: '8px', opacity: status === 'sending' ? 0.7 : 1 }}
              data-cursor-text="SEND"
            >
              {status === 'sending' && 'SENDING INQUIRY... ⏳'}
              {status === 'success' && 'PROJECT INQUIRY SENT TO HASSAN ✓'}
              {status === 'idle' && 'START A PROJECT →'}
              {status === 'error' && 'RETRY SENDING →'}
            </button>
          </form>

          {/* Direct Details Sidebar */}
          <div className="glossy-card" style={{ display: 'flex', flexDirection: 'column', gap: '28px', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '1.35rem', color: '#FFF' }}>GET IN TOUCH DIRECTLY</h3>

            <div>
              <div className="card-eyebrow" style={{ marginBottom: '4px' }}>
                PRIMARY EMAIL
              </div>
              <a href="mailto:hassan217175@gmail.com" style={{ color: '#FFF', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 600 }}>
                hassan217175@gmail.com
              </a>
            </div>

            <div>
              <div className="card-eyebrow" style={{ marginBottom: '4px' }}>
                PHONE & WHATSAPP
              </div>
              <a href="tel:03217175831" style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 700 }}>
                03217175831
              </a>
            </div>

            <div>
              <div className="card-eyebrow" style={{ marginBottom: '6px' }}>
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
