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

  useEffect(() => {
    const handleScroll = () => {
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
      {/* Navigation Toggle Button */}
      <motion.div
        className="fixed right-4 bottom-6 sm:right-6 z-[9998]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-slate-900 via-primary to-purple-600 backdrop-blur-xl border-2 border-white/30 hover:border-white/50 hover:scale-105 transition-all duration-300 shadow-2xl shadow-primary/40 hover:shadow-primary/60 touch-manipulation"
          size="sm"
          style={{ 
            WebkitTapHighlightColor: 'transparent'
          }}
        >
          {isOpen ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <Menu className="w-5 h-5 text-white" />
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
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9997]"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Navigation Menu */}
            <motion.div
              initial={{ opacity: 0, x: 300, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 300, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-2 bottom-20 sm:right-6 w-72 sm:w-80 max-h-96 overflow-y-auto bg-gradient-to-br from-slate-900/95 via-purple-900/90 to-slate-900/95 backdrop-blur-xl border border-white/20 rounded-lg shadow-2xl shadow-primary/20 z-[9998]"
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
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};