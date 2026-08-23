import React, { useState } from 'react';

const SkillsGraph = () => {
  const [activeCategory, setActiveCategory] = useState('web');

  const skillNodes = [
    { 
      id: 'ai', 
      title: 'AI & ML', 
      techStack: ['ChatGPT API', 'Gemini', 'LangChain', 'Prompt Engineering'], 
      x: 50, y: 12 
    },
    { 
      id: 'web', 
      title: 'WEB DEVELOPMENT', 
      techStack: ['React 19', 'Next.js', 'Node.js', 'Vite', 'Tailwind/CSS'], 
      x: 82, y: 35 
    },
    { 
      id: 'design', 
      title: 'UI / UX DESIGN', 
      techStack: ['Figma', 'Framer Motion', 'Design Systems', 'Micro-interactions'], 
      x: 78, y: 72 
    },
    { 
      id: 'creative', 
      title: 'CREATIVE DEVELOPMENT', 
      techStack: ['3D WebGL', 'Canvas Shaders', 'Animation', 'Interactive UX'], 
      x: 50, y: 88 
    },
    { 
      id: 'chatbots', 
      title: 'CHATBOTS', 
      techStack: ['AI Agents', 'Voice Synthesis', 'Customer Automation', 'Bot APIs'], 
      x: 22, y: 72 
    },
    { 
      id: 'automation', 
      title: 'AUTOMATION', 
      techStack: ['n8n Workflows', 'Make.com', 'Zapier', 'API Integration'], 
      x: 18, y: 35 
    }
  ];

  const currentActiveNode = skillNodes.find(n => n.id === activeCategory) || skillNodes[1];

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div className="skills-graph-container" style={{ position: 'relative', width: '100%', minHeight: '520px', margin: '30px 0' }}>
        {/* SVG Dynamic Energy Connection Lines */}
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="activeGoldPath" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E5983B" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {skillNodes.map((node) => {
            const isSelected = activeCategory === node.id;
            return (
              <g key={node.id}>
                <line
                  x1="50%"
                  y1="50%"
                  x2={`${node.x}%`}
                  y2={`${node.y}%`}
                  stroke={isSelected ? 'url(#activeGoldPath)' : 'rgba(229, 152, 59, 0.2)'}
                  strokeWidth={isSelected ? 3.5 : 1.2}
                  strokeDasharray={isSelected ? 'none' : '4 4'}
                  style={{ transition: 'all 0.4s ease' }}
                />
                {isSelected && (
                  <circle
                    cx={`${node.x}%`}
                    cy={`${node.y}%`}
                    r="6"
                    fill="#F59E0B"
                    style={{ filter: 'drop-shadow(0 0 12px #F59E0B)' }}
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* Central HASSAN AI CORE Node */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '136px',
            height: '136px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(229, 152, 59, 0.4) 0%, rgba(11, 13, 18, 0.95) 75%)',
            border: '2px solid var(--accent-gold)',
            boxShadow: '0 0 50px rgba(229, 152, 59, 0.5), inset 0 0 25px rgba(229, 152, 59, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            zIndex: 10,
            cursor: 'pointer'
          }}
          data-cursor-text="CORE"
        >
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.15rem', color: '#FFF', letterSpacing: '0.12em' }}>
            HASSAN
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--accent-gold)', letterSpacing: '0.15em', marginTop: '2px' }}>
            AI CORE
          </span>
        </div>

        {/* Spatial Orbiting Domain Nodes */}
        {skillNodes.map((node) => {
          const isSelected = activeCategory === node.id;
          return (
            <div
              key={node.id}
              onClick={() => setActiveCategory(node.id)}
              onMouseEnter={() => setActiveCategory(node.id)}
              style={{
                position: 'absolute',
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: 'translate(-50%, -50%)',
                background: isSelected ? 'rgba(229, 152, 59, 0.2)' : 'rgba(11, 13, 18, 0.85)',
                border: `1.5px solid ${isSelected ? 'var(--accent-gold)' : 'var(--border-specular)'}`,
                borderRadius: '12px',
                padding: '12px 20px',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                backdropFilter: 'blur(18px)',
                boxShadow: isSelected ? '0 0 35px rgba(229, 152, 59, 0.4)' : '0 12px 25px rgba(0, 0, 0, 0.5)',
                zIndex: isSelected ? 15 : 5,
                minWidth: '180px',
                textAlign: 'center'
              }}
              data-cursor-text="DOMAIN"
            >
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.85rem', color: isSelected ? 'var(--accent-gold)' : 'var(--text-primary)', letterSpacing: '0.06em' }}>
                {node.title}
              </div>
            </div>
          );
        })}
      </div>

      {/* Dynamic Technology Stack Reveal Card for Selected Domain */}
      <div 
        className="glossy-card" 
        style={{ 
          marginTop: '20px', 
          padding: '24px 32px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          flexWrap: 'wrap', 
          gap: '20px',
          borderColor: 'var(--border-gold)',
          background: 'rgba(15, 18, 25, 0.9)'
        }}
      >
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-gold)', letterSpacing: '0.15em', marginBottom: '4px' }}>
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
