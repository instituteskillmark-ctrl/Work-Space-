import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';

const NotFound = () => {
  return (
    <main id="main-content" className="section-block">
      <PageMeta 
        title="404 — Page Not Found — Hassan Ahmad"
        description="The requested page was not found."
      />
      <h1>404 — Page Not Found</h1>
      <p>The requested page does not exist or has moved.</p>
      <br />
      <Link to="/entry" className="action-link" id="return-entry-404">
        Return to Entry Page
      </Link>
    </main>
  );
};

export default NotFound;
