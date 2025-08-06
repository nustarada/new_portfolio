import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Eye } from 'lucide-react';

interface NavigationSection {
  id: string;
  title: string;
  color: string;
}

interface CaseStudyNavigationProps {
  sections: NavigationSection[];
  currentSection?: string;
}

export const CaseStudyNavigation: React.FC<CaseStudyNavigationProps> = ({
  sections,
  currentSection = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(currentSection);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      // Update active section based on scroll position
      const sectionElements = sections.map(section => ({
        ...section,
        element: document.getElementById(section.id)
      }));

      let current = '';
      for (const section of sectionElements) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section.id;
            break;
          }
        }
      }
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for sticky header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Navigation Button - Simple Implementation */}
      <div 
        className="fixed bottom-6 right-6 z-[9999]"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl hover:scale-105 transition-transform duration-200 flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
            boxShadow: '0 8px 32px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
          }}
        >
          {isOpen ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <Menu className="w-7 h-7 text-white" />
          )}
        </button>
      </div>

      {/* Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 9998
              }}
            />
            
            {/* Navigation Menu */}
            <motion.div
              initial={{ opacity: 0, x: 300, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 300, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed bottom-28 right-6 w-80 max-h-[70vh] overflow-y-auto rounded-xl shadow-2xl z-[9998]"
              style={{ 
                position: 'fixed',
                bottom: '112px',
                right: '24px',
                zIndex: 9998,
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 58, 138, 0.9))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
              }}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-white/10">
                  <Eye className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold text-white modern-heritage">Case Study Navigation</h3>
                </div>

                {/* Section List */}
                <div className="space-y-2">
                  {sections.map((section, index) => (
                    <motion.button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 text-left hover:scale-[1.02] ${
                        activeSection === section.id 
                          ? 'bg-gradient-to-r from-primary/20 to-purple-500/20 border border-primary/30' 
                          : 'hover:bg-white/5 border border-transparent hover:border-white/10'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 4 }}
                    >
                      {/* Section Number */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border ${
                        activeSection === section.id 
                          ? 'bg-primary/20 border-primary text-primary' 
                          : 'bg-white/10 border-white/20 text-white/70'
                      }`}>
                        {index + 1}
                      </div>
                      
                      {/* Section Title */}
                      <div className="flex-1">
                        <p className={`font-semibold text-sm jost-secondary ${
                          activeSection === section.id ? 'text-white' : 'text-white/80'
                        }`}>
                          {section.title}
                        </p>
                      </div>
                      
                      {/* Active Indicator */}
                      {activeSection === section.id && (
                        <motion.div
                          className="w-2 h-2 rounded-full bg-primary"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 400 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Progress Info */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex justify-between items-center text-sm text-white/60 jost-secondary">
                    <span>Reading Progress</span>
                    <span className="font-bold text-primary">{Math.round(scrollProgress)}%</span>
                  </div>
                  <div className="mt-2 h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-purple-400 rounded-full"
                      style={{ width: `${scrollProgress}%` }}
                      transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};