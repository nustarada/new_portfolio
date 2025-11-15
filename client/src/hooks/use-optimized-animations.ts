import { useMemo } from 'react';

// Optimized animation presets for better performance
export const useOptimizedAnimations = () => {
  return useMemo(() => ({
    // Reduced complexity animations
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.4, ease: 'easeOut' }
    },
    
    slideUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease: 'easeOut' }
    },
    
    slideInLeft: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5, ease: 'easeOut' }
    },
    
    slideInRight: {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5, ease: 'easeOut' }
    },
    
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.4, ease: 'easeOut' }
    },
    
    // Hover animations with better performance
    hoverScale: {
      scale: 1.02,
      transition: { duration: 0.2, ease: 'easeOut' }
    },
    
    hoverLift: {
      y: -2,
      transition: { duration: 0.2, ease: 'easeOut' }
    },
    
    // Staggered animations
    stagger: {
      animate: {
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2
        }
      }
    },
    
    // Page transitions
    pageTransition: {
      initial: { opacity: 0, y: 20 },
      animate: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
      },
      exit: { 
        opacity: 0, 
        y: -20,
        transition: { duration: 0.3, ease: 'easeIn' }
      }
    }
  }), []);
};

// Performance-optimized motion config
export const optimizedMotionConfig = {
  // Reduce layout thrashing
  layout: false,
  
  // Optimize animations
  transition: {
    type: 'tween',
    ease: 'easeOut',
    duration: 0.3
  },
  
  // Reduce unnecessary re-renders
  static: true
};