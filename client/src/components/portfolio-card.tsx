import { motion } from "framer-motion";
import { useState } from "react";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  index: number;
}

export function PortfolioCard({ title, description, image, tags, index }: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      className="project-card cyber-card rounded-xl overflow-hidden relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-52 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60" />
        
        <motion.div 
          className="project-hover-overlay absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-center">
            <motion.div 
              className="w-16 h-16 border-2 border-neon-cyan rounded-full flex items-center justify-center mb-4 mx-auto"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ 
                scale: isHovered ? 1 : 0, 
                rotate: isHovered ? 0 : -180 
              }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            >
              <span className="text-neon-cyan text-xl">↗</span>
            </motion.div>
            <motion.div 
              className="font-jetbrains text-sm tracking-wider text-neon-cyan"
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: isHovered ? 0 : 20, 
                opacity: isHovered ? 1 : 0 
              }}
              transition={{ delay: 0.2 }}
            >
              VIEW PROJECT
            </motion.div>
          </div>
        </motion.div>
        
        {/* Scan line effect */}
        <div className="absolute inset-0 scan-lines opacity-20" />
      </div>
      
      <div className="p-6 bg-dark-surface/80 backdrop-blur-sm">
        <h3 className="font-righteous text-xl font-bold mb-3 text-neon-cyan">{title}</h3>
        <p className="text-text-secondary mb-4 text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
              className={`px-3 py-1 text-xs font-jetbrains tracking-wider rounded border transition-all duration-300 ${
                tagIndex % 3 === 0 
                  ? 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30 hover:bg-neon-cyan/20' :
                tagIndex % 3 === 1 
                  ? 'bg-neon-pink/10 text-neon-pink border-neon-pink/30 hover:bg-neon-pink/20' :
                  'bg-neon-yellow/10 text-neon-yellow border-neon-yellow/30 hover:bg-neon-yellow/20'
              }`}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
      
      {/* Holographic corner accent */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-cyan/50" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-pink/50" />
    </motion.div>
  );
}
