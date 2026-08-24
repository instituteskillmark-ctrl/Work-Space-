import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const destinations = [
    { id: 'about', path: '/about', label: 'About' },
    { id: 'projects', path: '/projects', label: 'Projects' },
    { id: 'services', path: '/services', label: 'Services' },
    { id: 'capabilities', path: '/capabilities', label: 'Capabilities' },
    { id: 'ai-lab', path: '/ai-lab', label: 'AI Lab' },
    { id: 'contact', path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Desktop Navigation Links */}
      <nav id="main-navigation" className="desktop-nav" aria-label="Main Navigation">
        <ul className="nav-grid">
          {destinations.map((dest) => (
            <li key={dest.id}>
              <NavLink
                to={dest.path}
                className={({ isActive }) => (isActive ? 'nav-link-btn active' : 'nav-link-btn')}
                id={`nav-${dest.id}`}
              >
                {dest.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Toggle Button */}
      <button 
        type="button"
        className="mobile-toggle-btn"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle Navigation Menu"
      >
        <span>{mobileOpen ? '✕ CLOSE' : '☰ MENU'}</span>
      </button>

      {/* Mobile Slide-Down Drawer Navigation */}
      {mobileOpen && (
        <div className="mobile-nav-drawer">
          {destinations.map((dest) => (
            <NavLink
              key={dest.id}
              to={dest.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => (isActive ? 'nav-link-btn active' : 'nav-link-btn')}
              style={{ width: '100%', justifyContent: 'space-between', padding: '12px 18px', fontSize: '0.88rem' }}
            >
              <span>{dest.label}</span>
              <span style={{ color: 'var(--accent-gold)' }}>→</span>
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary"
            style={{ width: '100%', marginTop: '6px', justifyContent: 'center', fontSize: '0.85rem', padding: '12px' }}
          >
            LET'S TALK →
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Navigation;

