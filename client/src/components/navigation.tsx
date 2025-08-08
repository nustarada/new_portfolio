import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import LogoImage from "@assets/Logo white_1754674219191.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Don't render navigation on case study pages
  if (location === '/case-study' || location === '/liffo-case') {
    return null;
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-intense border-b border-white/10 shadow-2xl shadow-primary/20' 
          : 'glass-card'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <div className="relative">
              <img 
                src={LogoImage} 
                alt="Karan Gadhave Logo" 
                className="h-16 w-16 object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-400/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: 'About', id: 'about' },
              { label: 'Projects', id: 'projects' },
              { label: 'Contact', id: 'contact' }
            ].map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative group px-4 py-2 text-white/90 hover:text-white font-medium transition-all duration-300"
              >
                <div className="absolute inset-0 glass-card grain-texture opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">{item.label}</span>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-cyan-400 group-hover:w-full group-hover:left-0 transition-all duration-300" />
              </motion.button>
            ))}

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="relative group px-6 py-3 text-white font-bold cta-button border-0"
              >
                <span className="relative z-10">Contact Me</span>
              </button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden glass-card grain-texture p-2 border border-white/10 hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-white transform transition-all duration-300" />
              <div className="w-full h-0.5 bg-white transform transition-all duration-300" />
              <div className="w-full h-0.5 bg-white transform transition-all duration-300" />
            </div>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}