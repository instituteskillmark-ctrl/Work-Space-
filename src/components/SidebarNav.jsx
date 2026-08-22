import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SidebarNav = () => {
  const location = useLocation();

  const indexItems = [
    { id: 'home', num: '01', label: 'HOME', path: '/' },
    { id: 'about', num: '02', label: 'ABOUT', path: '/about' },
    { id: 'skills', num: '03', label: 'SKILLS', path: '/capabilities' },
    { id: 'projects', num: '04', label: 'PROJECTS', path: '/projects' },
    { id: 'services', num: '05', label: 'SERVICES', path: '/services' },
    { id: 'contact', num: '06', label: 'CONTACT', path: '/contact' }
  ];

  return (
    <>
      {/* Left Vertical Section Index (Desktop) */}
      <aside className="side-index-nav" aria-label="Section Index">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {indexItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path === '/' && location.pathname === '/entry');
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`index-item ${isActive ? 'active' : ''}`}
                data-cursor-text="GO"
              >
                <span className="index-indicator"></span>
                <span style={{ color: 'var(--text-dim)', fontSize: '0.65rem' }}>{item.num}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div style={{ marginTop: 'auto', paddingTop: '40px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', maxWidth: '100px', lineHeight: '1.4' }}>
            LET'S CREATE SOMETHING AMAZING
          </div>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)', boxShadow: '0 0 10px var(--accent-gold)', marginTop: '10px' }} />
        </div>
      </aside>

      {/* Right Vertical Social & Scroll Widgets (Desktop) */}
      <aside className="side-social-nav" aria-label="Social Links">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="LinkedIn">in</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="GitHub">gh</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Instagram">ig</a>
        <a href="mailto:novaagency79@gmail.com" className="social-icon-link" aria-label="Email">✉</a>
      </aside>
    </>
  );
};

export default SidebarNav;
