import { useEffect } from "react";

export function ParticleBackground() {
  useEffect(() => {
    const createFloatingElement = () => {
      const element = document.createElement('div');
      element.className = 'floating-element animate-subtle-float';
      
      // Random geometric shapes
      const shapes = ['○', '△', '◇', '□', '◎'];
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      
      element.style.position = 'fixed';
      element.style.left = Math.random() * window.innerWidth + 'px';
      element.style.top = Math.random() * window.innerHeight + 'px';
      element.style.fontSize = Math.random() * 20 + 20 + 'px';
      element.style.color = 'hsl(240, 5.9%, 90%)';
      element.style.fontFamily = 'DM Mono, monospace';
      element.style.pointerEvents = 'none';
      element.style.zIndex = '1';
      element.style.opacity = '0.08';
      element.style.animationDelay = Math.random() * 3 + 's';
      element.textContent = shape;
      
      document.body.appendChild(element);
      
      setTimeout(() => {
        if (document.body.contains(element)) {
          document.body.removeChild(element);
        }
      }, 15000);
    };
    
    const createGradientOrb = () => {
      const orb = document.createElement('div');
      orb.className = 'floating-element animate-elegant-scale';
      
      const colors = [
        'hsl(231, 48%, 48%)',
        'hsl(158, 64%, 52%)',
        'hsl(45, 100%, 72%)'
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      orb.style.position = 'fixed';
      orb.style.left = Math.random() * window.innerWidth + 'px';
      orb.style.top = Math.random() * window.innerHeight + 'px';
      orb.style.width = Math.random() * 60 + 40 + 'px';
      orb.style.height = orb.style.width;
      orb.style.borderRadius = '50%';
      orb.style.background = `radial-gradient(circle, ${color}20, transparent)`;
      orb.style.pointerEvents = 'none';
      orb.style.zIndex = '1';
      orb.style.opacity = '0.15';
      orb.style.animationDelay = Math.random() * 4 + 's';
      
      document.body.appendChild(orb);
      
      setTimeout(() => {
        if (document.body.contains(orb)) {
          document.body.removeChild(orb);
        }
      }, 20000);
    };
    
    // Create fewer initial floating elements
    for (let i = 0; i < 3; i++) {
      setTimeout(createFloatingElement, i * 2000);
    }
    
    // Create fewer initial gradient orbs
    for (let i = 0; i < 2; i++) {
      setTimeout(createGradientOrb, i * 4000);
    }
    
    // Create elements less frequently
    const elementInterval = setInterval(createFloatingElement, 15000);
    const orbInterval = setInterval(createGradientOrb, 20000);
    
    return () => {
      clearInterval(elementInterval);
      clearInterval(orbInterval);
    };
  }, []);
  
  return null;
}
