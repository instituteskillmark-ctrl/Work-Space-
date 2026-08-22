import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable custom cursor on mobile touchscreens
    if (window.matchMedia('(max-width: 768px)').matches) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseOver = (e) => {
      const target = e.target.closest('button, a, .interactive-target, input, textarea');
      if (target) {
        setIsHovered(true);
        const text = target.getAttribute('data-cursor-text') || '';
        setCursorText(text);
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small Precision Cursor Center Dot */}
      <div
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
          width: '6px',
          height: '6px',
          backgroundColor: '#E5983B',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: '0 0 10px #F59E0B'
        }}
      />

      {/* Outer Magnetic Halo Ring & Context Label */}
      <div
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
          width: isHovered ? (cursorText ? '64px' : '44px') : '24px',
          height: isHovered ? (cursorText ? '64px' : '44px') : '24px',
          borderRadius: '50%',
          border: '1px solid rgba(229, 152, 59, 0.6)',
          backgroundColor: isHovered ? 'rgba(229, 152, 59, 0.12)' : 'transparent',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'width 0.25s ease, height 0.25s ease, background-color 0.25s ease, transform 0.08s ease-out',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: isHovered ? 'blur(4px)' : 'none',
          boxShadow: isHovered ? '0 0 20px rgba(229, 152, 59, 0.3)' : 'none'
        }}
      >
        {cursorText && (
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#E5983B', letterSpacing: '0.1em', fontWeight: 'bold' }}>
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
};

export default CustomCursor;
