import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface Section {
  id: string;
  title: string;
  color: string;
}

interface Props {
  sections: Section[];
}

export const CaseStudyNav: React.FC<Props> = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Find the current section
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'relative', zIndex: 999999 }}>
      {/* Test Red Button - Maximum Visibility */}
      <div
        style={{
          position: 'fixed',
          bottom: '100px',
          right: '20px',
          width: '80px',
          height: '80px',
          backgroundColor: '#FF0000',
          borderRadius: '50%',
          zIndex: 999999,
          display: 'block',
          border: '4px solid white',
          boxShadow: '0 0 30px rgba(255, 0, 0, 0.8)',
          fontSize: '14px',
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
          lineHeight: '72px',
          pointerEvents: 'auto'
        }}
      >
        RED TEST
      </div>

      {/* Navigation Button - Enhanced Visibility */}
      <button
        onClick={() => {
          console.log('NAVIGATION BUTTON CLICKED!');
          setIsOpen(!isOpen);
        }}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          backgroundColor: '#3B82F6',
          border: '4px solid white',
          boxShadow: '0 8px 30px rgba(59, 130, 246, 0.8)',
          zIndex: 999999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: 'white',
          fontSize: '16px',
          fontWeight: 'bold',
          pointerEvents: 'auto',
          transform: 'translateZ(0)'
        }}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation Menu */}
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
              zIndex: 9999
            }}
          />

          {/* Menu Panel */}
          <div
            style={{
              position: 'fixed',
              bottom: '90px',
              right: '20px',
              width: '300px',
              maxHeight: '400px',
              backgroundColor: 'rgba(15, 23, 42, 0.95)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6)',
              zIndex: 10001,
              padding: '20px',
              overflowY: 'auto'
            }}
          >
            <h3 style={{ color: 'white', marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>
              Case Study Navigation
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  style={{
                    padding: '12px 16px',
                    backgroundColor: activeSection === section.id ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
                    border: `1px solid ${activeSection === section.id ? '#3B82F6' : 'rgba(255, 255, 255, 0.1)'}`,
                    borderRadius: '8px',
                    color: activeSection === section.id ? '#60A5FA' : 'rgba(255, 255, 255, 0.8)',
                    cursor: 'pointer',
                    fontSize: '14px',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== section.id) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== section.id) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: activeSection === section.id ? '#3B82F6' : 'rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: 'white'
                    }}
                  >
                    {index + 1}
                  </div>
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};