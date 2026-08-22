import React, { useState } from 'react';

const SkillsGraph = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const skillNodes = [
    { id: 'ai', title: 'AI & ML', sub: 'ChatGPT API, Gemini, LangChain', x: 50, y: 12 },
    { id: 'web', title: 'WEB DEVELOPMENT', sub: 'React, Next.js, Node.js', x: 82, y: 35 },
    { id: 'design', title: 'UI / UX DESIGN', sub: 'Figma, Framer Motion', x: 78, y: 72 },
    { id: 'creative', title: 'CREATIVE DEVELOPMENT', sub: '3D, Animation, Interactive', x: 50, y: 88 },
    { id: 'chatbots', title: 'CHATBOTS', sub: 'AI Agents, Voice AI', x: 22, y: 72 },
    { id: 'automation', title: 'AUTOMATION', sub: 'n8n, Make, Zapier', x: 18, y: 35 }
  ];

  return (
    <div className="skills-graph-container" style={{ position: 'relative', width: '100%', minHeight: '500px', margin: '40px 0' }}>
      {/* SVG Connection Energy Pathways */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <defs>
          <linearGradient id="goldPath" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E5983B" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.2" />
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
                stroke={isSelected ? 'url(#goldPath)' : 'rgba(229, 152, 59, 0.25)'}
                strokeWidth={isSelected ? 3 : 1.2}
                strokeDasharray={isSelected ? 'none' : '4 4'}
                style={{ transition: 'all 0.4s ease' }}
              />
              {isSelected && (
                <circle
                  cx={`${node.x}%`}
                  cy={`${node.y}%`}
                  r="6"
                  fill="#F59E0B"
                  style={{ filter: 'drop-shadow(0 0 10px #F59E0B)' }}
                />
              )}
            </g>
          );
        })}
      </svg>

      {/* Central HASSAN Core Node */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '130px',
          height: '130px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(229, 152, 59, 0.35) 0%, rgba(13, 15, 20, 0.95) 75%)',
          border: '2px solid var(--accent-gold)',
          boxShadow: '0 0 50px rgba(229, 152, 59, 0.45), inset 0 0 25px rgba(229, 152, 59, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          zIndex: 10,
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onClick={() => setActiveCategory(null)}
        data-cursor-text="RESET"
      >
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.1rem', color: '#FFF', letterSpacing: '0.12em' }}>
          HASSAN
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--accent-gold)', letterSpacing: '0.15em', marginTop: '2px' }}>
          AI CORE
        </span>
      </div>

      {/* Orbital Skill Nodes */}
      {skillNodes.map((node) => {
        const isSelected = activeCategory === node.id;
        return (
          <div
            key={node.id}
            onClick={() => setActiveCategory(isSelected ? null : node.id)}
            style={{
              position: 'absolute',
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: 'translate(-50%, -50%)',
              background: isSelected ? 'rgba(229, 152, 59, 0.18)' : 'rgba(13, 15, 20, 0.85)',
              border: `1px solid ${isSelected ? 'var(--accent-gold)' : 'var(--border-specular)'}`,
              borderRadius: '10px',
              padding: '12px 18px',
              cursor: 'pointer',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              backdropFilter: 'blur(16px)',
              boxShadow: isSelected ? '0 0 30px rgba(229, 152, 59, 0.35)' : '0 12px 24px rgba(0, 0, 0, 0.4)',
              zIndex: 5,
              minWidth: '170px',
              textAlign: 'center'
            }}
            data-cursor-text="SKILL"
          >
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.82rem', color: isSelected ? 'var(--accent-gold)' : 'var(--text-primary)', letterSpacing: '0.06em' }}>
              {node.title}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.64rem', color: 'var(--text-muted)', marginTop: '3px' }}>
              {node.sub}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsGraph;
