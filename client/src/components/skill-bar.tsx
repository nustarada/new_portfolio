import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SkillBarProps {
  skill: string;
  percentage: number;
  color: 'indigo' | 'emerald' | 'gold';
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
    indigo: 'bg-gradient-to-r from-accent-indigo to-accent-indigo/80',
    emerald: 'bg-gradient-to-r from-accent-emerald to-accent-emerald/80',
    gold: 'bg-gradient-to-r from-accent-gold to-accent-gold/80'
  };

  return (
    <div id={`skill-${skill}`} className="skill-progress-bar">
      <div className="flex justify-between mb-3">
        <span className="font-inter text-sm font-medium text-foreground">{skill}</span>
        <span className="font-dm-mono text-xs text-muted-foreground">{percentage}%</span>
      </div>
      <div className="skill-progress-bar h-2 relative">
        <motion.div 
          className={`skill-progress-fill h-full ${colorClasses[color]}`}
          initial={{ width: 0 }}
          animate={{ 
            width: isVisible ? `${percentage}%` : 0
          }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        />
        
        {/* Subtle progress indicator */}
        {isVisible && (
          <motion.div
            className="absolute top-0 right-0 h-full w-1 bg-white/40 rounded-r"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.5,
              delay: 2.3
            }}
          />
        )}
      </div>
    </div>
  );
}
