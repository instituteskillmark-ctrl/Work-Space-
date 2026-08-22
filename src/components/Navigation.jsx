import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navigation = () => {
  const destinations = [
    { id: 'about', path: '/about', label: 'About' },
    { id: 'projects', path: '/projects', label: 'Projects' },
    { id: 'services', path: '/services', label: 'Services' },
    { id: 'capabilities', path: '/capabilities', label: 'Capabilities' },
    { id: 'ai-lab', path: '/ai-lab', label: 'AI Lab' },
    { id: 'contact', path: '/contact', label: 'Contact' },
    { id: 'all', path: '/all', label: 'Main Workspace (All)' }
  ];

  return (
    <nav id="main-navigation" aria-label="Main Navigation">
      <ul className="nav-grid">
        <li>
          <Link to="/entry" className="nav-link-btn" id="nav-return-entry">
            ← Return to Entry
          </Link>
        </li>
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
