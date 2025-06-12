import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SkillBarProps {
  skill: string;
  percentage: number;
  color: 'electric' | 'vibrant' | 'purple';
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
    electric: 'bg-electric',
    vibrant: 'bg-vibrant',
    purple: 'bg-purple'
  };

  return (
    <div id={`skill-${skill}`} className="skill-bar">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <motion.div 
          className={`skill-progress h-2 rounded-full ${colorClasses[color]}`}
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${percentage}%` : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
