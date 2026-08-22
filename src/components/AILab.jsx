import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';
import AICore3D from './AICore3D';

const AILab = ({ standalone = true }) => {
  const [activeExperiment, setActiveExperiment] = useState(0);

  const labExperiments = [
    {
      id: 'exp-01',
      title: 'Autonomous AI Voice Agent Interface',
      category: 'AI & Natural Language',
      status: 'Active Experiment',
      desc: 'Real-time WebRTC voice synthesis integrated with LLMs for human-like conversational interfaces.',
      tech: ['WebRTC', 'OpenAI API', 'React', 'Three.js']
    },
    {
      id: 'exp-02',
      title: 'Realtime 3D Shader & Physics Engine',
      category: 'Creative Development',
      status: 'Prototype in Dev',
      desc: 'GPU-accelerated custom GLSL shaders reacting dynamically to audio input and user cursor proximity.',
      tech: ['WebGL', 'GLSL', 'Canvas 2D', 'Framer Motion']
    },
    {
      id: 'exp-03',
      title: 'Generative UI Component Synthesis',
      category: 'AI Tooling & UX',
      status: 'Future Concept',
      desc: 'Predictive interface engine generating context-aware UI widgets on the fly based on user intent.',
      tech: ['TypeScript', 'Design Systems', 'AI Agents', 'Vite']
    }
  ];

  const content = (
    <section className="section-wrapper" id="ai-lab-section" style={{ position: 'relative' }}>
      {standalone && (
        <PageMeta 
          title="Digital AI Lab — Hassan Ahmad"
          description="Digital AI Lab experiments, creative prototypes, and future concepts by Hassan Ahmad."
        />
      )}
      <div className="main-wrapper">
        <div className="section-header-row">
          <div>
            <span className="eyebrow">DIGITAL CREATIVE LAB // EXPERIMENTS</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
              DIGITAL LAB & <span className="text-gold" style={{ textShadow: '0 0 25px rgba(229, 152, 59, 0.25)' }}>EXPERIMENTS</span>
            </h2>
          </div>
          <div className="status-badge">
            <span className="status-dot"></span>
            <span>3 ACTIVE EXPERIMENTS</span>
          </div>
        </div>

        {/* 3D Core & Floating Experiment Visual Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'center', marginBottom: '48px' }}>
          {/* Left Interactive Experiment Selectors */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {labExperiments.map((exp, index) => {
              const isSelected = activeExperiment === index;
              return (
                <div
                  key={exp.id}
                  onClick={() => setActiveExperiment(index)}
                  className="glossy-card"
                  style={{
                    padding: '24px',
                    cursor: 'pointer',
                    borderColor: isSelected ? 'var(--accent-gold)' : 'var(--border-specular)',
                    background: isSelected ? 'rgba(229, 152, 59, 0.12)' : 'var(--bg-card)',
                    boxShadow: isSelected ? '0 0 30px rgba(229, 152, 59, 0.25)' : 'none'
                  }}
                  data-cursor-text="LAB"
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-gold)' }}>
                      0{index + 1} // {exp.category}
                    </span>
                    <span className="status-badge" style={{ fontSize: '0.62rem', padding: '2px 8px' }}>
                      {exp.status}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.15rem', color: isSelected ? 'var(--accent-gold)' : '#FFF', marginBottom: '8px' }}>
                    {exp.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                    {exp.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right 3D Lab Artifact Engine */}
          <div className="glossy-card" style={{ padding: '20px', height: '440px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '16px', left: '20px', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.15em' }}>
              LAB ENGINE // SIMULATION
            </div>
            <div style={{ width: '100%', height: '340px' }}>
              <AICore3D />
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {labExperiments[activeExperiment].tech.map((t, idx) => (
                <span key={idx} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', padding: '4px 10px', borderRadius: '4px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-specular)', color: 'var(--accent-gold)' }}>
                  #{t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn-primary" id="next-section-btn" data-cursor-text="CONTACT">
            Next: Contact →
          </Link>
        </div>
      </div>
    </section>
  );

  if (standalone) {
    return <main id="main-content">{content}</main>;
  }

  return content;
};

export default AILab;
