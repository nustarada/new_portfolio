import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.6
};

export function PageTransition({ children, className = '' }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Staggered animations for sections
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const staggerItem = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
};

// Smooth scroll reveal animation
export const scrollReveal = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

// Hero section animations
export const heroAnimation = {
  initial: {
    opacity: 0,
    y: 100,
    scale: 0.8
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export const heroItem = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};