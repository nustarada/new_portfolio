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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="project-card glass-card grain-texture hover:glass-intense overflow-hidden relative group cursor-pointer transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        
        <motion.div 
          className="project-overlay absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center">
            <motion.div 
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 mx-auto shadow-lg"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ 
                scale: isHovered ? 1 : 0, 
                rotate: isHovered ? 0 : -90 
              }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            >
              <span className="text-accent-indigo text-lg">→</span>
            </motion.div>
            <motion.div 
              className="font-inter text-sm font-medium text-white"
              initial={{ y: 10, opacity: 0 }}
              animate={{ 
                y: isHovered ? 0 : 10, 
                opacity: isHovered ? 1 : 0 
              }}
              transition={{ delay: 0.15 }}
            >
              View Project
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className="p-6">
        <h3 className="font-playfair text-xl font-semibold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + tagIndex * 0.03 }}
              className={`px-3 py-1 text-xs font-inter font-medium glass-card grain-texture hover:glass-intense transition-all duration-200 ${
                tagIndex % 3 === 0 
                  ? 'text-primary border-primary/20' :
                tagIndex % 3 === 1 
                  ? 'text-cyan-400 border-cyan-400/20' :
                  'text-emerald-400 border-emerald-400/20'
              }`}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
