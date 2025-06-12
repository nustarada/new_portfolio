import { useState, useEffect } from "react";

export function useScroll() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrolled = window.pageYOffset;
      const maxHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      
      setScrollProgress(progress);
      setIsScrolled(scrolled > 50);
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return { scrollProgress, isScrolled };
}
