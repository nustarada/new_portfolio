import { motion } from "framer-motion";

const skills = [
  "AI Design Tools", "Figma Mastery", "Advanced Prototyping", "Design Systems", 
  "User Research", "AI-Powered Workflows", "Rapid Prototyping", "Design Automation",
  "Product Strategy", "Cross-functional Leadership", "Data Visualization", 
  "Interaction Design", "Design Thinking", "Agile Methodology", "Brand Identity",
  "Responsive Design", "Accessibility", "Performance Optimization", "Team Mentoring",
  "Creative Direction", "Visual Storytelling", "Design Operations", "Innovation",
  "Problem Solving", "Strategic Planning", "User Experience", "Interface Design"
];

const skillIcons = ["✦", "◆", "●", "▲", "◇", "★"];

export function MovingRibbon() {
  return (
    <div className="relative overflow-hidden py-12 glass-card grain-texture border-y border-white/15">
      {/* Simplified Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/4 to-transparent" />
      </div>

      {/* Top ribbon */}
      <motion.div
        className="flex whitespace-nowrap mb-6"
        animate={{ x: [0, -2000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={`top-${index}`}
            className="flex items-center mx-4 group"
          >
            <div className="flex items-center space-x-3 px-4 py-2 glass-card hover:glass-intense transition-all duration-300">
              <span className="text-primary/70 text-sm font-medium">
                {skillIcons[index % skillIcons.length]}
              </span>
              <span className="text-lg md:text-xl font-medium text-white/90 tracking-wide jost-secondary">
                {skill}
              </span>
            </div>
            <div className="w-2 h-2 bg-gradient-to-r from-primary to-cyan-400 mx-4 transform rotate-45" />
          </div>
        ))}
      </motion.div>

      {/* Middle decorative line */}
      <div className="relative flex items-center justify-center my-4">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute w-4 h-4 bg-gradient-to-r from-primary to-emerald-400" />
      </div>

      {/* Bottom ribbon - moving in opposite direction */}
      <motion.div
        className="flex whitespace-nowrap mt-6"
        animate={{ x: [-2000, 0] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {[...skills.slice().reverse(), ...skills.slice().reverse()].map((skill, index) => (
          <div
            key={`bottom-${index}`}
            className="flex items-center mx-4 group"
          >
            <div className="flex items-center space-x-3 px-4 py-2 glass-card hover:glass-intense transition-all duration-300">
              <span className="text-primary/70 text-sm font-medium">
                {skillIcons[(index + 3) % skillIcons.length]}
              </span>
              <span className="text-lg md:text-xl font-medium text-white/90 tracking-wide jost-secondary">
                {skill}
              </span>
            </div>
            <div className="w-2 h-2 bg-gradient-to-r from-primary to-cyan-400 mx-4 transform rotate-45" />
          </div>
        ))}
      </motion.div>

      {/* Enhanced gradient overlays */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent pointer-events-none z-10" />
      
      {/* Top and bottom fade */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-slate-950/50 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-950/50 to-transparent pointer-events-none z-10" />
    </div>
  );
}