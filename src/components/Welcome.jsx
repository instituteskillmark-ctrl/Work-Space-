import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageMeta from './PageMeta';
import AICore3D from './AICore3D';

const Welcome = () => {
  const navigate = useNavigate();

  // Sequence stages: 'darkness' (0s) -> 'assembling' (0.5s) -> 'igniting' (1.2s) -> 'identity' (1.8s) -> 'telemetry' (2.4s) -> 'active' (3.0s+)
  const [currentStage, setCurrentStage] = useState('darkness');
  const [isWarping, setIsWarping] = useState(false);
  const [warpProgress, setWarpProgress] = useState(0);
  const [hasSeenIntro, setHasSeenIntro] = useState(false);
  const warpTimerRef = useRef(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sessionSeen = sessionStorage.getItem('hasSeenWelcomeIntro');

    if (prefersReducedMotion || sessionSeen) {
      setCurrentStage('active');
      setHasSeenIntro(true);
      return;
    }

    // Choreographed 6-Stage Animation Timeline (~3.0 seconds)
    const timer1 = setTimeout(() => setCurrentStage('assembling'), 400);
    const timer2 = setTimeout(() => setCurrentStage('igniting'), 1100);
    const timer3 = setTimeout(() => setCurrentStage('identity'), 1700);
    const timer4 = setTimeout(() => setCurrentStage('telemetry'), 2300);
    const timer5 = setTimeout(() => {
      setCurrentStage('active');
      sessionStorage.setItem('hasSeenWelcomeIntro', 'true');
      setHasSeenIntro(true);
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      if (warpTimerRef.current) clearInterval(warpTimerRef.current);
    };
  }, []);

  // Handle Skip Intro
  const handleSkip = () => {
    setCurrentStage('active');
    sessionStorage.setItem('hasSeenWelcomeIntro', 'true');
    setHasSeenIntro(true);
  };

  // Handle Replay Intro
  const handleReplay = () => {
    setCurrentStage('darkness');
    setTimeout(() => setCurrentStage('assembling'), 400);
    setTimeout(() => setCurrentStage('igniting'), 1100);
    setTimeout(() => setCurrentStage('identity'), 1700);
    setTimeout(() => setCurrentStage('telemetry'), 2300);
    setTimeout(() => {
      setCurrentStage('active');
    }, 3000);
  };

  // Handle CTA Navigation with Warp Light Sweep Transition
  const handleCtaClick = (e, targetRoute) => {
    e.preventDefault();
    if (isWarping) return;

    setIsWarping(true);
    let progress = 0;

    warpTimerRef.current = setInterval(() => {
      progress += 0.08;
      setWarpProgress(Math.min(1, progress));
      if (progress >= 1) {
        clearInterval(warpTimerRef.current);
        navigate(targetRoute);
      }
    }, 40);
  };

  // Stage flags
  const showIdentity = ['identity', 'telemetry', 'active'].includes(currentStage);
  const showTelemetry = ['telemetry', 'active'].includes(currentStage);
  const showCta = currentStage === 'active';

  return (
    <main id="main-content" className="section-wrapper" style={{ paddingTop: '50px', paddingBottom: '70px', position: 'relative', overflow: 'hidden' }}>
      <PageMeta 
        title="Welcome — Hassan Ahmad | AI Creative Developer"
        description="Welcome to the AI Creative Developer workspace of Hassan Ahmad."
      />

      {/* Screen Backdrop Ambient Glow during Ignition */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: showIdentity 
            ? 'radial-gradient(circle at 65% 50%, rgba(229, 152, 59, 0.08) 0%, rgba(7, 8, 10, 0) 70%)'
            : 'radial-gradient(circle at 50% 50%, rgba(229, 152, 59, 0.03) 0%, rgba(7, 8, 10, 0) 60%)',
          transition: 'background 1.2s ease-in-out'
        }}
      />

      {/* Warp Transition Overlay Curtain */}
      {isWarping && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            pointerEvents: 'none',
            background: `radial-gradient(circle at 50% 50%, rgba(245, 158, 11, ${warpProgress * 0.95}) 0%, rgba(7, 8, 10, ${warpProgress * 0.8}) 80%)`,
            backdropFilter: `blur(${warpProgress * 20}px)`,
            transition: 'opacity 0.1s linear'
          }}
        />
      )}

      <div className="main-wrapper" style={{ position: 'relative', zIndex: 10 }}>
        {/* Top Control Bar: Skip / Replay / Telemetry Status Indicator */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', minHeight: '36px' }}>
          {/* Stage 05 Micro System Status Telemetry */}
          <AnimatePresence>
            {showTelemetry && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  border: '1px solid var(--border-specular)',
                  background: 'rgba(11, 13, 18, 0.65)',
                  backdropFilter: 'blur(12px)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.12em'
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)', boxShadow: '0 0 8px var(--accent-gold)' }} />
                <span>CREATIVE CORE // ONLINE</span>
                <span style={{ color: 'var(--border-specular)' }}>|</span>
                <span style={{ color: 'var(--accent-gold)' }}>LATENCY 0.4ms</span>
                <span style={{ color: 'var(--border-specular)' }}>|</span>
                <span>STATUS // READY</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Skip / Replay Controls */}
          <div style={{ marginLeft: 'auto', display: 'flex', gap: '12px' }}>
            {currentStage !== 'active' && (
              <button
                onClick={handleSkip}
                style={{
                  background: 'transparent',
                  border: '1px solid var(--border-specular)',
                  borderRadius: '16px',
                  padding: '4px 12px',
                  color: 'var(--text-muted)',
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-mono)',
                  cursor: 'pointer',
                  letterSpacing: '0.1em',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-gold)';
                  e.currentTarget.style.color = 'var(--accent-gold)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-specular)';
                  e.currentTarget.style.color = 'var(--text-muted)';
                }}
              >
                SKIP INTRO →
              </button>
            )}

            {hasSeenIntro && currentStage === 'active' && (
              <button
                onClick={handleReplay}
                style={{
                  background: 'transparent',
                  border: '1px solid var(--border-specular)',
                  borderRadius: '16px',
                  padding: '4px 12px',
                  color: 'var(--text-dim)',
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-mono)',
                  cursor: 'pointer',
                  letterSpacing: '0.1em',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-gold)';
                  e.currentTarget.style.color = 'var(--accent-gold)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-specular)';
                  e.currentTarget.style.color = 'var(--text-dim)';
                }}
              >
                REPLAY INTRO ↺
              </button>
            )}
          </div>
        </div>

        {/* Main Grid: Left Identity & Narrative Content | Right Heroic 3D AI Core */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px', alignItems: 'center', minHeight: '520px' }}>
          
          {/* Left Block: Stage 04 Editorial Identity Reveal */}
          <div>
            <AnimatePresence mode="wait">
              {showIdentity && (
                <motion.div
                  key="welcome-identity-content"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Eyebrow badge */}
                  <div className="eyebrow" style={{ marginBottom: '16px' }}>
                    AI CREATIVE DEVELOPER
                  </div>

                  {/* Main Editorial Title */}
                  <h1 
                    style={{ 
                      fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)', 
                      marginTop: '10px', 
                      marginBottom: '20px', 
                      lineHeight: 1.08, 
                      letterSpacing: '-0.02em',
                      fontWeight: 800
                    }}
                  >
                    I BUILD DIGITAL EXPERIENCES THAT FEEL <span className="text-gold" style={{ textShadow: '0 0 30px rgba(229, 152, 59, 0.4)' }}>ALIVE.</span>
                  </h1>

                  {/* Subtitle description */}
                  <p 
                    style={{ 
                      fontSize: '1.15rem', 
                      color: 'var(--text-secondary)', 
                      marginBottom: '36px', 
                      maxWidth: '520px', 
                      lineHeight: 1.6 
                    }}
                  >
                    I combine AI, Design & Code to create immersive digital experiences for the future.
                  </p>

                  {/* Stage 06 CTA Action Buttons */}
                  {showCta ? (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}
                    >
                      <button 
                        onClick={(e) => handleCtaClick(e, '/projects')}
                        className="btn-primary" 
                        id="view-work-hero-btn"
                        data-cursor-text="VIEW"
                        style={{ cursor: 'pointer' }}
                      >
                        VIEW MY WORK →
                      </button>
                      <button 
                        onClick={(e) => handleCtaClick(e, '/entry')}
                        className="btn-primary" 
                        id="proceed-to-entry-btn"
                        data-cursor-text="ENTRY"
                        style={{ background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)', cursor: 'pointer' }}
                      >
                        Proceed to Entry
                      </button>
                      <a 
                        href="#download-cv" 
                        className="btn-outline" 
                        id="download-cv-btn"
                        data-cursor-text="CV"
                        onClick={(e) => {
                          e.preventDefault();
                          alert('Hassan Ahmad CV download started.');
                        }}
                      >
                        DOWNLOAD CV ⤓
                      </a>
                    </motion.div>
                  ) : (
                    <div style={{ height: '48px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', letterSpacing: '0.15em' }}>
                        INITIALIZING WORKSPACE EXPERIENCE...
                      </span>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Heroic AI Core 3D Artifact Visual */}
          <div style={{ width: '100%', height: '520px', position: 'relative' }}>
            <AICore3D stage={currentStage} isWarping={isWarping} warpProgress={warpProgress} />
          </div>

        </div>

        {/* Bottom Scroll to Explore Widget */}
        <div style={{ position: 'absolute', right: '40px', bottom: '20px', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.15em' }}>
          <span>SCROLL TO EXPLORE</span>
          <span style={{ width: '12px', height: '20px', border: '1px solid var(--border-specular)', borderRadius: '10px', display: 'inline-flex', justifyContent: 'center', paddingTop: '2px' }}>
            <span style={{ width: '2px', height: '4px', backgroundColor: 'var(--accent-gold)', borderRadius: '1px' }} />
          </span>
        </div>
      </div>
    </main>
  );
};

export default Welcome;

