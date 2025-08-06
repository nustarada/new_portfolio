import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  
  // Debug logging
  console.log('CaseStudyNavigation rendered with sections:', sections.length);

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
    <div className="case-study-navigation">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/20 backdrop-blur-sm z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400"
          style={{ width: `${scrollProgress}%` }}
          transition={{ type: 'spring', stiffness: 400, damping: 40 }}
        />
      </div>

      {/* Navigation Toggle Button */}
      <motion.div
        className="fixed right-4 bottom-4 md:right-6 md:bottom-6"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0 }}
        style={{ 
          zIndex: 999999, 
          position: 'fixed',
          pointerEvents: 'auto'
        }}
      >
        <Button
          onClick={() => {
            console.log('Navigation button clicked!');
            setIsOpen(!isOpen);
          }}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-blue-500/90 to-purple-500/90 backdrop-blur-md border-2 border-white/30 hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50"
          style={{
            zIndex: 999999,
            visibility: 'visible',
            display: 'flex'
          }}
          size="sm"
        >
          {isOpen ? (
            <X className="w-6 h-6 md:w-7 md:h-7 text-white" />
          ) : (
            <Menu className="w-6 h-6 md:w-7 md:h-7 text-white" />
          )}
        </Button>
      </motion.div>

      {/* Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
              onClick={() => setIsOpen(false)}
              style={{ zIndex: 90 }}
            />
            
            {/* Navigation Menu */}
            <motion.div
              initial={{ opacity: 0, x: 300, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 300, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-4 bottom-20 md:right-6 md:bottom-24 w-[320px] md:w-80 max-h-[70vh] overflow-y-auto bg-gradient-to-br from-slate-900/98 via-blue-900/95 to-slate-900/98 backdrop-blur-xl border-2 border-white/30 rounded-xl shadow-2xl shadow-blue-500/25"
              style={{ 
                zIndex: 999998
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
    </div>
  );
};