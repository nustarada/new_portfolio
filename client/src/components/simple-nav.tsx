import React, { useState } from 'react';

// Ultra-simple navigation component - no dependencies, no complex logic
export const SimpleNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Navigation Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#3B82F6',
          border: '3px solid white',
          color: 'white',
          fontSize: '20px',
          cursor: 'pointer',
          zIndex: 999999,
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)'
        }}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Menu Panel */}
      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 999998
            }}
          />
          <div
            style={{
              position: 'fixed',
              bottom: '100px',
              right: '30px',
              width: '250px',
              backgroundColor: 'rgba(20, 30, 50, 0.95)',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '20px',
              zIndex: 999999
            }}
          >
            <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '16px' }}>
              Navigate
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Overview', 'Problem', 'Research', 'Design', 'Testing', 'Results'].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    const element = document.getElementById(section.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                    setIsOpen(false);
                  }}
                  style={{
                    padding: '10px 15px',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: '5px',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};