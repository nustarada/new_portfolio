import { useEffect } from "react";

export function CustomCursor() {
  useEffect(() => {
    const cursorDot = document.createElement('div');
    const cursorRing = document.createElement('div');
    
    cursorDot.className = 'cursor-dot';
    cursorRing.className = 'cursor-ring';
    
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorRing);
    
    const moveCursor = (e: MouseEvent) => {
      cursorDot.style.left = e.clientX - 4 + 'px';
      cursorDot.style.top = e.clientY - 4 + 'px';
      
      cursorRing.style.left = e.clientX - 20 + 'px';
      cursorRing.style.top = e.clientY - 20 + 'px';
    };
    
    const handleMouseDown = () => {
      cursorRing.style.transform = 'scale(0.8)';
    };
    
    const handleMouseUp = () => {
      cursorRing.style.transform = 'scale(1)';
    };
    
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.removeChild(cursorDot);
      document.body.removeChild(cursorRing);
    };
  }, []);
  
  return null;
}
