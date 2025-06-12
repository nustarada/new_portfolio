import { useEffect } from "react";

export function ParticleBackground() {
  useEffect(() => {
    const createDataStream = () => {
      const particle = document.createElement('div');
      particle.className = 'data-particle';
      particle.style.left = Math.random() * window.innerWidth + 'px';
      particle.style.animationDelay = Math.random() * 5 + 's';
      particle.style.animationDuration = (Math.random() * 5 + 10) + 's';
      
      // Random neon colors
      const colors = [
        'hsl(192, 100%, 67%)',
        'hsl(326, 100%, 74%)',
        'hsl(60, 100%, 67%)'
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.background = `linear-gradient(to bottom, ${color}, transparent)`;
      particle.style.boxShadow = `0 0 10px ${color}`;
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        if (document.body.contains(particle)) {
          document.body.removeChild(particle);
        }
      }, 20000);
    };
    
    const createMatrixCode = () => {
      const code = document.createElement('div');
      code.className = 'animate-matrix-rain';
      code.style.position = 'fixed';
      code.style.left = Math.random() * window.innerWidth + 'px';
      code.style.top = '-20px';
      code.style.color = 'hsl(192, 100%, 67%)';
      code.style.fontSize = '12px';
      code.style.fontFamily = 'JetBrains Mono, monospace';
      code.style.pointerEvents = 'none';
      code.style.zIndex = '1';
      code.style.opacity = '0.3';
      code.textContent = Math.random().toString(36).substring(2, 8).toUpperCase();
      
      document.body.appendChild(code);
      
      setTimeout(() => {
        if (document.body.contains(code)) {
          document.body.removeChild(code);
        }
      }, 12000);
    };
    
    // Create initial data streams
    for (let i = 0; i < 8; i++) {
      setTimeout(createDataStream, i * 500);
    }
    
    // Create initial matrix code
    for (let i = 0; i < 3; i++) {
      setTimeout(createMatrixCode, i * 2000);
    }
    
    // Create data streams periodically
    const streamInterval = setInterval(createDataStream, 2000);
    const codeInterval = setInterval(createMatrixCode, 4000);
    
    return () => {
      clearInterval(streamInterval);
      clearInterval(codeInterval);
    };
  }, []);
  
  return null;
}
