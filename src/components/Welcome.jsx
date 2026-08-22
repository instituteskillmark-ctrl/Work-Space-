import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';

const Welcome = () => {
  return (
    <main id="main-content" className="section-block">
      <PageMeta 
        title="Welcome — Hassan Ahmad"
        description="Welcome to the AI Creative Developer workspace of Hassan Ahmad."
      />
      <h1 className="welcome-title">
        WELCOME TO MY WEBSITE
      </h1>
      <Link 
        to="/entry" 
        className="primary-action" 
        style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}
        id="proceed-to-entry-btn"
      >
        Proceed to Entry
      </Link>
    </main>
  );
};

export default Welcome;
