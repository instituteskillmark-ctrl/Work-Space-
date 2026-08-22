import React from 'react';
import PageMeta from './PageMeta';
import About from './About';
import Projects from './Projects';
import Services from './Services';
import Capabilities from './Capabilities';
import AILab from './AILab';
import BuildWithHassan from './BuildWithHassan';
import Contact from './Contact';

const WorkspaceOverview = () => {
  return (
    <main id="main-content">
      <PageMeta 
        title="Main Workspace — Hassan Ahmad | AI Creative Developer"
        description="Full consolidated workspace overview of Hassan Ahmad."
      />
      <About standalone={false} />
      <Capabilities standalone={false} />
      <Projects standalone={false} />
      <Services standalone={false} />
      <AILab standalone={false} />
      <BuildWithHassan />
      <Contact standalone={false} />
    </main>
  );
};

export default WorkspaceOverview;
