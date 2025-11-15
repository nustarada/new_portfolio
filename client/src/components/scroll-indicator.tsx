import { useScroll } from "@/hooks/use-scroll";

export function ScrollIndicator() {
  const { scrollProgress } = useScroll();
  
  return (
    <div 
      className="elegant-scroll-indicator"
      style={{ transform: `scaleX(${scrollProgress / 100})` }}
    />
  );
}
