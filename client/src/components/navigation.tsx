import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { href: "#home", label: "HOME", icon: "⌂" },
  { href: "#about", label: "ABOUT", icon: "◊" },
  { href: "#work", label: "WORK", icon: "▣" },
  { href: "#skills", label: "SKILLS", icon: "◉" },
  { href: "#contact", label: "CONTACT", icon: "⟡" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          current = section.getAttribute('id') || '';
        }
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-dark-bg/90 backdrop-blur-xl border-b border-neon-cyan/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="font-righteous text-3xl font-bold neon-text cursor-pointer animate-neon-glow"
            whileHover={{ scale: 1.1, filter: "brightness(1.3)" }}
            onClick={() => scrollToSection('#home')}
          >
            CYBER•DEV
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 font-jetbrains text-sm tracking-wider transition-all duration-300 ${
                  activeSection === item.href.replace('#', '') 
                    ? 'text-neon-cyan' 
                    : 'text-text-secondary hover:text-neon-pink'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2 text-neon-yellow">{item.icon}</span>
                {item.label}
                {activeSection === item.href.replace('#', '') && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-pink"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              className="block w-6 h-0.5 bg-neon-cyan mb-1"
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 6 : 0,
              }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-neon-cyan mb-1"
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-neon-cyan"
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -6 : 0,
              }}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden mt-6 py-4 bg-dark-surface/80 backdrop-blur-md rounded-lg border border-neon-cyan/20"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`block w-full text-left py-3 px-4 font-jetbrains text-sm tracking-wider transition-colors ${
                  activeSection === item.href.replace('#', '') 
                    ? 'text-neon-cyan bg-neon-cyan/10' 
                    : 'text-text-secondary hover:text-neon-pink hover:bg-neon-pink/5'
                }`}
              >
                <span className="mr-3 text-neon-yellow">{item.icon}</span>
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
