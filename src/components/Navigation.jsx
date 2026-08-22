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
      <p><strong>Workspace Navigation:</strong></p>
      <ul>
        <li>
          <Link 
            to="/entry"
            id="nav-return-entry"
          >
            ← Return to Entry
          </Link>
        </li>
        {destinations.map((dest) => (
          <li key={dest.id}>
            <NavLink
              to={dest.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
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
