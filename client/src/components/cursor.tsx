import { useEffect } from "react";

export function CustomCursor() {
  useEffect(() => {
    const cursorDot = document.createElement('div');
    const cursorRing = document.createElement('div');
    
    cursorDot.className = 'cyber-cursor-dot';
    cursorRing.className = 'cyber-cursor-ring';
    
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorRing);
    
    const moveCursor = (e: MouseEvent) => {
      cursorDot.style.left = e.clientX - 3 + 'px';
      cursorDot.style.top = e.clientY - 3 + 'px';
      
      cursorRing.style.left = e.clientX - 16 + 'px';
      cursorRing.style.top = e.clientY - 16 + 'px';
    };
    
    const handleMouseDown = () => {
      cursorRing.style.transform = 'scale(0.7)';
      cursorDot.style.transform = 'scale(1.5)';
    };
    
    const handleMouseUp = () => {
      cursorRing.style.transform = 'scale(1)';
      cursorDot.style.transform = 'scale(1)';
    };
    
    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('cursor-pointer')) {
        cursorRing.style.borderColor = 'hsl(326, 100%, 74%)';
        cursorRing.style.transform = 'scale(1.5)';
        cursorDot.style.background = 'hsl(326, 100%, 74%)';
      }
    };
    
    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('cursor-pointer')) {
        cursorRing.style.borderColor = 'hsl(192, 100%, 67%)';
        cursorRing.style.transform = 'scale(1)';
        cursorDot.style.background = 'hsl(192, 100%, 67%)';
      }
    };
    
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      if (document.body.contains(cursorDot)) document.body.removeChild(cursorDot);
      if (document.body.contains(cursorRing)) document.body.removeChild(cursorRing);
    };
  }, []);
  
  return null;
}
