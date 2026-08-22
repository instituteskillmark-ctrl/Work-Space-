import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import './App.css';

// Component layout wrapper for workspace destination routes
const WorkspaceLayout = ({ children }) => {
  return (
    <>
      <header>
        <div className="site-brand" style={{ fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '10px' }}>
          Hassan Ahmad — AI Creative Developer Workspace
        </div>
        <Navigation />
      </header>
      {children}
    </>
  );
};

function AppRoutes() {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/entry" element={<Entry />} />

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
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Requirement 8: Visually hidden skip link for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <AppRoutes />
        {/* Requirement 1: Footer landmark */}
        <footer style={{ marginTop: '20px', padding: '10px 0', borderTop: '1px solid #eee', fontSize: '13px' }}>
          <p>Hassan Ahmad — AI Creative Developer Workspace</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
