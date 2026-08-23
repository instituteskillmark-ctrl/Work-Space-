import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const destinations = [
    { id: 'about', path: '/about', label: 'About' },
    { id: 'projects', path: '/projects', label: 'Projects' },
    { id: 'services', path: '/services', label: 'Services' },
    { id: 'capabilities', path: '/capabilities', label: 'Capabilities' },
    { id: 'ai-lab', path: '/ai-lab', label: 'AI Lab' },
    { id: 'contact', path: '/contact', label: 'Contact' }
  ];

  return (
    <nav id="main-navigation" aria-label="Main Navigation">
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
  );
};

export default Navigation;

