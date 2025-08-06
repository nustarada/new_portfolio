import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

// Navigation that renders outside the normal DOM tree to ensure true viewport positioning
export const ViewportNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigationContent = (
    <>
      {/* Main Navigation Button - Portal to body */}
      <div
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          zIndex: 2147483647, // Maximum z-index value
          pointerEvents: 'auto'
        }}
        data-testid="case-study-nav-button"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#3B82F6',
            border: '3px solid white',
            color: 'white',
            fontSize: '20px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            outline: 'none'
          }}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Menu Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 2147483646
            }}
          />
          
          {/* Menu Panel */}
          <div
            style={{
              position: 'fixed',
              bottom: '100px',
              right: '30px',
              width: '280px',
              maxHeight: '60vh',
              overflowY: 'auto',
              backgroundColor: 'rgba(15, 23, 42, 0.96)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '20px',
              zIndex: 2147483647,
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6)',
              transform: 'translateZ(0)'
            }}
          >
            <h3 style={{ color: 'white', marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>
              Case Study Navigation
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { id: 'overview', title: '1. Overview' },
                { id: 'problem', title: '2. Problem Statement' },
                { id: 'research', title: '3. User Research' },
                { id: 'ideation', title: '4. Ideation' },
                { id: 'design', title: '5. Design Process' },
                { id: 'prototyping', title: '6. Prototyping' },
                { id: 'testing', title: '7. User Testing' },
                { id: 'final-design', title: '8. Final Design' },
                { id: 'impact', title: '9. Impact & Results' },
                { id: 'learnings', title: '10. Key Learnings' }
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    const element = document.getElementById(section.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                    setIsOpen(false);
                  }}
                  style={{
                    padding: '12px 16px',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: '6px',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '14px',
                    textAlign: 'left',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.2)';
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                  }}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );

  // Render to document.body using a portal to escape any relative positioning contexts
  return mounted ? createPortal(navigationContent, document.body) : null;
};console.log('ViewportNav component loaded and should be visible');
