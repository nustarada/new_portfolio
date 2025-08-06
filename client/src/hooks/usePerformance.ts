import { useEffect, useCallback, useRef } from 'react';

// Custom hook for performance monitoring and optimization
export const usePerformanceOptimization = () => {
  const rafRef = useRef<number>();

  // Optimize scroll events with passive listeners
  const useOptimizedScroll = useCallback((callback: (e: Event) => void, dependencies: any[] = []) => {
    useEffect(() => {
      const handleScroll = (e: Event) => {
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }
        rafRef.current = requestAnimationFrame(() => callback(e));
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }
      };
    }, dependencies);
  }, []);

  // Optimize resize events
  const useOptimizedResize = useCallback((callback: (e: Event) => void, dependencies: any[] = []) => {
    useEffect(() => {
      let timeout: NodeJS.Timeout;
      const handleResize = (e: Event) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => callback(e), 100);
      };

      window.addEventListener('resize', handleResize, { passive: true });
      return () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(timeout);
      };
    }, dependencies);
  }, []);

  // Memory cleanup on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return {
    useOptimizedScroll,
    useOptimizedResize
  };
};

// Hook for optimizing heavy computations
export const useOptimizedComputation = <T>(
  computeFunction: () => T,
  dependencies: any[],
  threshold = 16 // Target 60fps
): T | null => {
  const resultRef = useRef<T | null>(null);
  const computingRef = useRef(false);

  useEffect(() => {
    if (computingRef.current) return;
    
    computingRef.current = true;
    const startTime = performance.now();

    const compute = () => {
      const result = computeFunction();
      const endTime = performance.now();
      
      if (endTime - startTime < threshold) {
        resultRef.current = result;
      } else {
        // If computation takes too long, defer it
        setTimeout(() => {
          resultRef.current = computeFunction();
          computingRef.current = false;
        }, 0);
        return;
      }
      
      computingRef.current = false;
    };

    requestAnimationFrame(compute);
  }, dependencies);

  return resultRef.current;
};

// Hook for optimizing image loading
export const useOptimizedImages = () => {
  const preloadImage = useCallback((src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  }, []);

  const preloadImages = useCallback(async (sources: string[]): Promise<HTMLImageElement[]> => {
    const promises = sources.map(preloadImage);
    try {
      return await Promise.all(promises);
    } catch (error) {
      console.warn('Failed to preload some images:', error);
      return [];
    }
  }, [preloadImage]);

  return { preloadImage, preloadImages };
};