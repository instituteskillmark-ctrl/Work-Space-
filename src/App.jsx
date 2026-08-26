import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
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

        <div className="top-right-actions" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <a 
            href="/Hassan_Ahmad_Resume.pdf" 
            download="Hassan_Ahmad_Resume.pdf" 
            className="btn-outline desktop-nav" 
            style={{ padding: '8px 16px', minHeight: '36px', fontSize: '0.78rem', borderColor: 'var(--border-gold)', color: 'var(--accent-gold)' }} 
            data-cursor-text="CV"
            id="header-download-cv-btn"
          >
            DOWNLOAD CV ⤓
          </a>
          <Link to="/contact" className="btn-primary header-talk-btn desktop-nav" style={{ padding: '8px 16px', minHeight: '36px', fontSize: '0.78rem' }} data-cursor-text="TALK">
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
      <Route path="/" element={<WorkspaceLayout><About standalone={true} /></WorkspaceLayout>} />
      <Route path="/entry" element={<WorkspaceLayout><Entry /></WorkspaceLayout>} />

      {/* Workspace routes with shared header/nav layout */}
      <Route path="/about" element={<WorkspaceLayout><About standalone={true} /></WorkspaceLayout>} />
      <Route path="/projects" element={<WorkspaceLayout><Projects standalone={true} /></WorkspaceLayout>} />
      <Route path="/services" element={<WorkspaceLayout><Services standalone={true} /></WorkspaceLayout>} />
      <Route path="/capabilities" element={<WorkspaceLayout><Capabilities standalone={true} /></WorkspaceLayout>} />
      <Route path="/ai-lab" element={<WorkspaceLayout><AILab standalone={true} /></WorkspaceLayout>} />
      <Route path="/contact" element={<WorkspaceLayout><Contact standalone={true} /></WorkspaceLayout>} />
      <Route path="/all" element={<WorkspaceLayout><WorkspaceOverview /></WorkspaceLayout>} />
      
      {/* Route alias for /workspace and /skills */}
      <Route path="/workspace" element={<Navigate to="/about" replace />} />
      <Route path="/skills" element={<Navigate to="/capabilities" replace />} />

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
      </div>
    </BrowserRouter>
  );
}

export default App;
