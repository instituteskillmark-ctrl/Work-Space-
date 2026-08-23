import React, { useState } from 'react';
import skills3DCubeImg from '../assets/skills-3d-cube.png';

const SkillsGraph = () => {
  const [activeCategory, setActiveCategory] = useState('web');

  const skillNodes = [
    { 
      id: 'ai', 
      title: 'AI & ML', 
      techStack: ['ChatGPT API', 'Gemini', 'LangChain', 'Prompt Engineering'], 
      icon: '🧠' 
    },
    { 
      id: 'web', 
      title: 'WEB DEVELOPMENT', 
      techStack: ['React 19', 'Next.js', 'Node.js', 'Vite', 'Tailwind/CSS'], 
      icon: '</>' 
    },
    { 
      id: 'design', 
      title: 'UI / UX DESIGN', 
      techStack: ['Figma', 'Framer Motion', 'Design Systems', 'Micro-interactions'], 
      icon: '🎨' 
    },
    { 
      id: 'creative', 
      title: 'CREATIVE DEVELOPMENT', 
      techStack: ['3D WebGL', 'Canvas Shaders', 'Animation', 'Interactive UX'], 
      icon: '🚀' 
    },
    { 
      id: 'chatbots', 
      title: 'CHATBOTS', 
      techStack: ['AI Agents', 'Voice Synthesis', 'Customer Automation', 'Bot APIs'], 
      icon: '💬' 
    },
    { 
      id: 'automation', 
      title: 'AUTOMATION', 
      techStack: ['n8n Workflows', 'Make.com', 'Zapier', 'API Integration'], 
      icon: '⚙️' 
    }
  ];

  const currentActiveNode = skillNodes.find(n => n.id === activeCategory) || skillNodes[1];

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* 3D Illuminated Obsidian Cube Artifact Frame (Replaces old sphere) */}
      <div 
        className="glossy-card" 
        style={{ 
          position: 'relative', 
          width: '100%', 
          borderRadius: '16px', 
          overflow: 'hidden', 
          padding: '24px', 
          border: '1px solid var(--border-gold)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85), 0 0 40px rgba(229, 152, 59, 0.25)',
          background: 'rgba(11, 13, 18, 0.92)',
          marginBottom: '24px'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <span className="card-eyebrow">
            3D SKILL ARCHITECTURE // CUBE CORE
          </span>
          <span className="status-badge" style={{ margin: 0, padding: '2px 8px', fontSize: '0.62rem' }}>
            INTERACTIVE DOMAINS
          </span>
        </div>

        {/* High-Resolution 3D Illuminated Cube Image */}
        <div 
          style={{ 
            position: 'relative', 
            width: '100%', 
            maxHeight: '460px', 
            borderRadius: '12px', 
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#07080a'
          }}
        >
          <img 
            src={skills3DCubeImg} 
            alt="Hassan Creative Developer — 3D Illuminated Skill Architecture Cube" 
            style={{
              width: '100%',
              maxHeight: '460px',
              objectFit: 'contain',
              objectPosition: 'center',
              display: 'block',
              filter: 'brightness(1.02) contrast(1.05)'
            }}
          />
        </div>

        {/* Domain Selection Tabs (All 6 Domain Cards) */}
        <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '12px' }}>
          {skillNodes.map((node) => {
            const isSelected = activeCategory === node.id;
            return (
              <div
                key={node.id}
                onClick={() => setActiveCategory(node.id)}
                onMouseEnter={() => setActiveCategory(node.id)}
                className="glossy-card"
                style={{
                  padding: '14px 18px',
                  cursor: 'pointer',
                  borderRadius: '10px',
                  border: isSelected ? '1px solid var(--accent-gold)' : '1px solid var(--border-specular)',
                  background: isSelected ? 'rgba(229, 152, 59, 0.18)' : 'rgba(255, 255, 255, 0.02)',
                  boxShadow: isSelected ? '0 0 25px rgba(229, 152, 59, 0.3)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'all 0.3s ease'
                }}
                data-cursor-text="DOMAIN"
              >
                <span style={{ fontSize: '1rem', color: 'var(--accent-gold)' }}>{node.icon}</span>
                <span className="card-subheading" style={{ fontSize: '0.82rem', color: isSelected ? 'var(--accent-gold)' : '#FFF' }}>
                  {node.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dynamic Technology Stack Reveal Card for Selected Domain */}
      <div 
        className="glossy-card" 
        style={{ 
          padding: '24px 32px', 
          display: 'flex', 
          alignItems: 'center', 
          justify: 'space-between', 
          flexWrap: 'wrap', 
          gap: '20px',
          borderColor: 'var(--border-gold)',
          background: 'rgba(15, 18, 25, 0.9)'
        }}
      >
        <div>
          <div className="card-eyebrow" style={{ marginBottom: '4px' }}>
            SELECTED DOMAIN TECH STACK // {currentActiveNode.title}
          </div>
          <h4 style={{ fontSize: '1.2rem', color: '#FFF' }}>
            Supporting Technologies & Frameworks
          </h4>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {currentActiveNode.techStack.map((tech, idx) => (
            <span
              key={idx}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                padding: '6px 14px',
                borderRadius: '6px',
                background: 'rgba(229, 152, 59, 0.12)',
                border: '1px solid var(--border-gold)',
                color: '#FFF',
                boxShadow: '0 0 12px rgba(229, 152, 59, 0.15)'
              }}
            >
              #{tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsGraph;
