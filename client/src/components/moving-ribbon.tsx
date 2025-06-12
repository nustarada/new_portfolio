import { motion } from "framer-motion";

const skills = [
  "AI Design Tools", "Figma Mastery", "Replit Prototyping", "Design Systems", 
  "User Research", "AI-Powered Workflows", "Rapid Prototyping", "Design Automation",
  "Product Strategy", "Cross-functional Leadership", "Data Visualization", 
  "Interaction Design", "Design Thinking", "Agile Methodology", "Brand Identity",
  "Responsive Design", "Accessibility", "Performance Optimization", "Team Mentoring",
  "Creative Direction", "Visual Storytelling", "Design Operations", "Innovation",
  "Problem Solving", "Strategic Planning", "User Experience", "Interface Design"
];

export function MovingRibbon() {
  return (
    <div className="relative overflow-hidden py-8 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-y border-primary/20">
      {/* Top ribbon */}
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -2000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 60,
            ease: "linear",
          },
        }}
      >
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <div
            key={`top-${index}`}
            className="flex items-center mx-8"
          >
            <span className="text-lg md:text-xl font-medium text-white/90 tracking-wide">
              {skill}
            </span>
            <div className="w-2 h-2 bg-primary rounded-full mx-8" />
          </div>
        ))}
      </motion.div>

      {/* Bottom ribbon - moving in opposite direction */}
      <motion.div
        className="flex whitespace-nowrap mt-4"
        animate={{ x: [-2000, 0] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 50,
            ease: "linear",
          },
        }}
      >
        {[...skills.slice().reverse(), ...skills.slice().reverse(), ...skills.slice().reverse()].map((skill, index) => (
          <div
            key={`bottom-${index}`}
            className="flex items-center mx-8"
          >
            <span className="text-base md:text-lg font-medium text-white/70 tracking-wide">
              {skill}
            </span>
            <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mx-8" />
          </div>
        ))}
      </motion.div>

      {/* Gradient overlays to create fade effect */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
    </div>
  );
}