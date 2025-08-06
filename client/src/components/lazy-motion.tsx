import { motion, MotionProps } from 'framer-motion';
import { useIntersectionObserver } from '@/utils/performance';
import { useRef, useMemo } from 'react';

interface LazyMotionProps extends MotionProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  reduceMotion?: boolean;
}

// Reduced motion variants for performance
const performanceVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export function LazyMotion({
  children,
  threshold = 0.1,
  rootMargin = '50px',
  reduceMotion = false,
  initial,
  animate,
  exit,
  transition,
  ...props
}: LazyMotionProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(elementRef, threshold, rootMargin);
  
  // Use reduced motion variants if specified or if user prefers reduced motion
  const shouldReduceMotion = reduceMotion || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  const motionProps = useMemo(() => {
    if (shouldReduceMotion) {
      return {
        initial: performanceVariants.initial,
        animate: isInView ? performanceVariants.animate : performanceVariants.initial,
        exit: performanceVariants.exit,
        transition: { duration: 0.3, ease: 'easeOut' }
      };
    }
    
    return {
      initial: initial || performanceVariants.initial,
      animate: isInView ? (animate || performanceVariants.animate) : (initial || performanceVariants.initial),
      exit: exit || performanceVariants.exit,
      transition: transition || { duration: 0.6, ease: 'easeOut' }
    };
  }, [isInView, shouldReduceMotion, initial, animate, exit, transition]);

  return (
    <motion.div
      ref={elementRef}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.div>
  );
}