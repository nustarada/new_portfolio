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
      transition={{ delay: index * 0.1 }}
      className="project-card portfolio-card bg-dark-surface rounded-2xl overflow-hidden hover:shadow-2xl relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <motion.div 
          className="project-hover-overlay absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center">
            <motion.i 
              className="fas fa-external-link-alt text-2xl mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: isHovered ? 1 : 0 }}
              transition={{ delay: 0.1 }}
            />
            <motion.div 
              className="font-semibold"
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: isHovered ? 0 : 20, 
                opacity: isHovered ? 1 : 0 
              }}
              transition={{ delay: 0.2 }}
            >
              View Case Study
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className="p-6">
        <h3 className="font-space text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
              className={`px-3 py-1 text-xs rounded-full ${
                tagIndex % 3 === 0 ? 'bg-electric/20 text-electric' :
                tagIndex % 3 === 1 ? 'bg-vibrant/20 text-vibrant' :
                'bg-purple/20 text-purple'
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
