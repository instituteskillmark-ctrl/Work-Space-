import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Welcome from './components/Welcome';
import Entry from './components/Entry';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Capabilities from './components/Capabilities';
import AILab from './components/AILab';
import Contact from './components/Contact';
import WorkspaceOverview from './components/WorkspaceOverview';
import NotFound from './components/NotFound';
import SidebarNav from './components/SidebarNav';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import './App.css';

// Component layout wrapper for workspace destination routes
const WorkspaceLayout = ({ children }) => {
  return (
    <>
      <CustomCursor />
      <header className="top-header">
        <Link to="/" className="brand-mark" data-cursor-text="HOME">
          <div className="brand-icon">HA</div>
          <div className="brand-text">
            <span className="brand-name">HASSAN AHMAD</span>
            <span className="brand-sub">AI CREATIVE DEVELOPER</span>
          </div>
        </Link>

        <Navigation />

        <div className="top-right-actions">
          <div className="status-badge">
            <span className="status-dot"></span>
            <span>AVAILABLE FOR NEW PROJECTS</span>
          </div>
          <Link to="/contact" className="btn-primary" style={{ padding: '8px 16px', minHeight: '38px', fontSize: '0.8rem' }} data-cursor-text="TALK">
            LET'S TALK
          </Link>
        </div>
      </header>

      <SidebarNav />
      {children}
    </>
  );
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WorkspaceLayout><Welcome /></WorkspaceLayout>} />
      <Route path="/entry" element={<WorkspaceLayout><Entry /></WorkspaceLayout>} />

      {/* Workspace routes with shared header/nav layout */}
      <Route path="/about" element={<WorkspaceLayout><About standalone={true} /></WorkspaceLayout>} />
      <Route path="/projects" element={<WorkspaceLayout><Projects standalone={true} /></WorkspaceLayout>} />
      <Route path="/services" element={<WorkspaceLayout><Services standalone={true} /></WorkspaceLayout>} />
      <Route path="/capabilities" element={<WorkspaceLayout><Capabilities standalone={true} /></WorkspaceLayout>} />
      <Route path="/ai-lab" element={<WorkspaceLayout><AILab standalone={true} /></WorkspaceLayout>} />
      <Route path="/contact" element={<WorkspaceLayout><Contact standalone={true} /></WorkspaceLayout>} />
      <Route path="/all" element={<WorkspaceLayout><WorkspaceOverview /></WorkspaceLayout>} />
      
      {/* Route alias for /workspace */}
      <Route path="/workspace" element={<Navigate to="/about" replace />} />

      {/* 404 fallback route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <div className="app-layout">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <AppRoutes />
        <footer style={{ marginTop: 'auto', padding: '24px 40px', borderTop: '1px solid var(--border-glass)', fontSize: '13px', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <p>© 2025 Hassan Ahmad. All Rights Reserved.</p>
          <p>Built with Passion ♥</p>
          <a href="#top" style={{ color: 'var(--accent-gold)', textDecoration: 'none' }}>Back to Top ↑</a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
