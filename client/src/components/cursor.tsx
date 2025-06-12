import { useEffect } from "react";

export function CustomCursor() {
  useEffect(() => {
    const cursorDot = document.createElement('div');
    const cursorRing = document.createElement('div');
    
    cursorDot.className = 'elegant-cursor-dot';
    cursorRing.className = 'elegant-cursor-ring';
    
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorRing);
    
    const moveCursor = (e: MouseEvent) => {
      cursorDot.style.left = e.clientX - 2 + 'px';
      cursorDot.style.top = e.clientY - 2 + 'px';
      
      cursorRing.style.left = e.clientX - 12 + 'px';
      cursorRing.style.top = e.clientY - 12 + 'px';
    };
    
    const handleMouseDown = () => {
      cursorRing.style.transform = 'scale(0.8)';
      cursorDot.style.transform = 'scale(1.2)';
    };
    
    const handleMouseUp = () => {
      cursorRing.style.transform = 'scale(1)';
      cursorDot.style.transform = 'scale(1)';
    };
    
    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('cursor-pointer')) {
        cursorRing.style.borderColor = 'hsl(231, 48%, 48%)';
        cursorRing.style.transform = 'scale(1.3)';
        cursorDot.style.background = 'hsl(231, 48%, 48%)';
      }
    };
    
    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('cursor-pointer')) {
        cursorRing.style.borderColor = 'hsl(240, 5.9%, 10%)';
        cursorRing.style.transform = 'scale(1)';
        cursorDot.style.background = 'hsl(240, 5.9%, 10%)';
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
