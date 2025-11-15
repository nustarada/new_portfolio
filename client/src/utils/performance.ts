// Performance utilities and optimizations

// Lazy loading utility for components
export const lazyLoad = <T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>
) => {
  return React.lazy(importFunc);
};

// Image optimization utility
export const optimizeImageSrc = (src: string, width?: number, height?: number, quality = 80) => {
  // For development, return original src
  if (import.meta.env.DEV) return src;
  
  // In production, you could add image optimization service integration here
  return src;
};

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (
  elementRef: React.RefObject<Element>,
  threshold = 0.1,
  rootMargin = '50px'
) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  
  React.useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );
    
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [threshold, rootMargin]);
  
  return isIntersecting;
};

// Debounce utility for performance-critical operations
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);
  
  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  
  return debouncedValue;
};

// Throttle utility for scroll/mouse events
export const useThrottle = <T>(value: T, interval: number): T => {
  const [throttledValue, setThrottledValue] = React.useState(value);
  const lastUpdated = React.useRef<number>(0);
  
  React.useEffect(() => {
    const now = Date.now();
    if (now - lastUpdated.current >= interval) {
      setThrottledValue(value);
      lastUpdated.current = now;
    } else {
      const timeout = setTimeout(() => {
        setThrottledValue(value);
        lastUpdated.current = Date.now();
      }, interval - (now - lastUpdated.current));
      
      return () => clearTimeout(timeout);
    }
  }, [value, interval]);
  
  return throttledValue;
};

// Memory cleanup utility
export const useCleanup = (cleanupFn: () => void) => {
  React.useEffect(() => {
    return cleanupFn;
  }, []);
};

// Performance monitoring
export const measurePerformance = (name: string, fn: () => void) => {
  if (import.meta.env.DEV) {
    performance.mark(`${name}-start`);
    fn();
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
  } else {
    fn();
  }
};

import React from 'react';