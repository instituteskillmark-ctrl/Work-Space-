import React, { useState } from 'react';

const BuildWithHassan = ({ onSelectChoice }) => {
  const [step, setStep] = useState(1);
  const [buildingType, setBuildingType] = useState('AI TOOL');
  const [vibe, setVibe] = useState('FUTURISTIC');
  const [needed, setNeeded] = useState('FULL EXPERIENCE');

  const buildingOptions = ['AI TOOL', 'WEBSITE', 'SAAS', 'CHATBOT', 'AUTOMATION'];
  const vibeOptions = ['MINIMAL', 'FUTURISTIC', 'LUXURY', 'EXPERIMENTAL', 'BOLD'];
  const needOptions = ['DESIGN', 'DEVELOPMENT', 'AI', 'AUTOMATION', 'FULL EXPERIENCE'];

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      if (onSelectChoice) {
        onSelectChoice({ buildingType, vibe, needed });
      }
      // Smooth scroll to contact form
      const contactEl = document.getElementById('contact-section');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="section-wrapper" id="build-experience" style={{ position: 'relative' }}>
      <div className="main-wrapper">
        <span className="eyebrow">INTERACTIVE EXPERIENCE // PROJECT START</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', marginBottom: '32px' }}>
          BUILD WITH <span className="text-gold" style={{ textShadow: '0 0 25px rgba(229, 152, 59, 0.25)' }}>HASSAN</span>
        </h2>

        <div className="glossy-card" style={{ padding: 'clamp(20px, 4vw, 36px)', position: 'relative' }}>
          {/* Step Progress Indicators */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                style={{
                  flex: 1,
                  height: '4px',
                  borderRadius: '2px',
                  backgroundColor: step >= s ? 'var(--accent-gold)' : 'var(--border-specular)',
                  boxShadow: step >= s ? '0 0 10px var(--accent-gold)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>

          {/* STEP 1: WHAT ARE WE BUILDING? */}
          {step === 1 && (
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', letterSpacing: '0.15em', marginBottom: '8px' }}>
                STEP 01 // CATEGORY
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '24px', color: '#FFF' }}>
                WHAT ARE WE BUILDING?
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
                {buildingOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setBuildingType(opt)}
                    className="nav-link-btn"
                    style={{
                      padding: '12px 24px',
                      fontSize: '0.85rem',
                      borderRadius: '8px',
                      borderColor: buildingType === opt ? 'var(--accent-gold)' : 'var(--border-specular)',
                      backgroundColor: buildingType === opt ? 'rgba(229, 152, 59, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                      color: buildingType === opt ? 'var(--accent-gold)' : 'var(--text-secondary)',
                      boxShadow: buildingType === opt ? '0 0 20px rgba(229, 152, 59, 0.25)' : 'none'
                    }}
                    data-cursor-text="SELECT"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: WHAT'S THE VIBE? */}
          {step === 2 && (
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', letterSpacing: '0.15em', marginBottom: '8px' }}>
                STEP 02 // AESTHETIC DIRECTION
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '24px', color: '#FFF' }}>
                WHAT'S THE VIBE?
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
                {vibeOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setVibe(opt)}
                    className="nav-link-btn"
                    style={{
                      padding: '12px 24px',
                      fontSize: '0.85rem',
                      borderRadius: '8px',
                      borderColor: vibe === opt ? 'var(--accent-gold)' : 'var(--border-specular)',
                      backgroundColor: vibe === opt ? 'rgba(229, 152, 59, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                      color: vibe === opt ? 'var(--accent-gold)' : 'var(--text-secondary)',
                      boxShadow: vibe === opt ? '0 0 20px rgba(229, 152, 59, 0.25)' : 'none'
                    }}
                    data-cursor-text="SELECT"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: WHAT DO YOU NEED? */}
          {step === 3 && (
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', letterSpacing: '0.15em', marginBottom: '8px' }}>
                STEP 03 // SCOPE & SERVICES
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '24px', color: '#FFF' }}>
                WHAT DO YOU NEED?
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
                {needOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setNeeded(opt)}
                    className="nav-link-btn"
                    style={{
                      padding: '12px 24px',
                      fontSize: '0.85rem',
                      borderRadius: '8px',
                      borderColor: needed === opt ? 'var(--accent-gold)' : 'var(--border-specular)',
                      backgroundColor: needed === opt ? 'rgba(229, 152, 59, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                      color: needed === opt ? 'var(--accent-gold)' : 'var(--text-secondary)',
                      boxShadow: needed === opt ? '0 0 20px rgba(229, 152, 59, 0.25)' : 'none'
                    }}
                    data-cursor-text="SELECT"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid var(--border-glass)' }}>
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="btn-outline"
                style={{ padding: '8px 16px', minHeight: '40px', fontSize: '0.8rem' }}
              >
                ← Previous
              </button>
            ) : <div />}

            <button
              type="button"
              onClick={handleNext}
              className="btn-primary"
              data-cursor-text="NEXT"
            >
              {step === 3 ? "LET'S BUILD IT →" : "Next Step →"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildWithHassan;
