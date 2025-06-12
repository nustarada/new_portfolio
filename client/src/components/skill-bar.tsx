import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SkillBarProps {
  skill: string;
  percentage: number;
  color: 'cyan' | 'pink' | 'yellow';
}

export function SkillBar({ skill, percentage, color }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`skill-${skill}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [skill]);

  const colorClasses = {
    cyan: 'bg-gradient-to-r from-neon-cyan to-neon-cyan/80',
    pink: 'bg-gradient-to-r from-neon-pink to-neon-pink/80',
    yellow: 'bg-gradient-to-r from-neon-yellow to-neon-yellow/80'
  };

  const glowClasses = {
    cyan: 'shadow-neon-cyan/50',
    pink: 'shadow-neon-pink/50',
    yellow: 'shadow-neon-yellow/50'
  };

  return (
    <div id={`skill-${skill}`} className="skill-bar-cyber">
      <div className="flex justify-between mb-3">
        <span className="font-jetbrains text-sm tracking-wider text-text-primary">{skill}</span>
        <span className="font-jetbrains text-xs text-neon-cyan">{percentage}%</span>
      </div>
      <div className="skill-bar-cyber h-3 relative">
        <motion.div 
          className={`skill-progress-cyber h-full ${colorClasses[color]} ${glowClasses[color]}`}
          initial={{ width: 0, boxShadow: "0 0 0 transparent" }}
          animate={{ 
            width: isVisible ? `${percentage}%` : 0,
            boxShadow: isVisible ? "0 0 20px currentColor" : "0 0 0 transparent"
          }}
          transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
        />
        
        {/* Data flow animation */}
        {isVisible && (
          <motion.div
            className="absolute top-0 left-0 h-full w-2 bg-white/60 blur-sm"
            initial={{ x: 0 }}
            animate={{ x: `${percentage * 4}px` }}
            transition={{ 
              duration: 2,
              ease: "easeOut",
              delay: 0.5
            }}
          />
        )}
        
        {/* Scanning line */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full w-px bg-white/80"
            initial={{ x: 0 }}
            animate={{ x: isVisible ? `${percentage * 4}px` : 0 }}
            transition={{ 
              duration: 3,
              ease: "easeOut",
              delay: 0.2
            }}
          />
        </div>
      </div>
    </div>
  );
}
