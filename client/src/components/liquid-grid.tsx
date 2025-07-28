import { useEffect, useRef } from 'react';

interface LiquidGridProps {
  mouseX: number;
  mouseY: number;
  intensity: number;
}

export function LiquidGrid({ mouseX, mouseY, intensity }: LiquidGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const gridSize = 100;
    const distortionRadius = 80;
    const maxDistortion = 10;
    const lerpFactor = 0.1;
    
    // Initialize smooth interpolation variables
    let currentMouseX = mouseX || 50;
    let currentMouseY = mouseY || 50;
    let lastFrameTime = 0;
    const targetFPS = 30; // Reduced from 60fps to 30fps
    const frameInterval = 1000 / targetFPS;

    const drawLiquidGrid = (timestamp: number) => {
      if (timestamp - lastFrameTime < frameInterval) {
        animationRef.current = requestAnimationFrame(drawLiquidGrid);
        return;
      }
      lastFrameTime = timestamp;
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      
      if (width === 0 || height === 0) return;
      
      // Smooth interpolation for cursor movement
      currentMouseX += (mouseX - currentMouseX) * lerpFactor;
      currentMouseY += (mouseY - currentMouseY) * lerpFactor;
      
      // Convert percentage to pixels with smoothed values
      const mousePixelX = (currentMouseX / 100) * width;
      const mousePixelY = (currentMouseY / 100) * height;
      
      ctx.clearRect(0, 0, width, height);
      
      // Elegant minimal grid with refined opacity
      const baseOpacity = 0.08;
      const activeOpacity = intensity * 0.12;
      const totalOpacity = Math.min(baseOpacity + activeOpacity, 0.25);
      
      // Refined grid with elegant cyan theme
      ctx.strokeStyle = `rgba(79, 172, 254, ${totalOpacity})`;
      ctx.lineWidth = 0.8;
      ctx.shadowColor = `rgba(79, 172, 254, ${intensity * 0.15})`;
      ctx.shadowBlur = intensity * 4;

      // Draw elegant minimal vertical lines
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        
        for (let y = 0; y <= height; y += 12) {
          const dx = x - mousePixelX;
          const dy = y - mousePixelY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          let distortedX = x;
          
          if (distance < distortionRadius && distance > 0) {
            const distortionFactor = Math.pow(1 - distance / distortionRadius, 2);
            const distortion = distortionFactor * maxDistortion * intensity * 0.6;
            distortedX = x + Math.sin((dx / distance) * distortion) * distortion * 0.3;
          }
          
          if (y === 0) {
            ctx.moveTo(distortedX, y);
          } else {
            ctx.lineTo(distortedX, y);
          }
        }
        ctx.stroke();
      }

      // Draw elegant minimal horizontal lines
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        
        for (let x = 0; x <= width; x += 12) {
          const dx = x - mousePixelX;
          const dy = y - mousePixelY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          let distortedY = y;
          
          if (distance < distortionRadius && distance > 0) {
            const distortionFactor = Math.pow(1 - distance / distortionRadius, 2);
            const distortion = distortionFactor * maxDistortion * intensity * 0.6;
            distortedY = y + Math.sin((dy / distance) * distortion) * distortion * 0.3;
          }
          
          if (x === 0) {
            ctx.moveTo(x, distortedY);
          } else {
            ctx.lineTo(x, distortedY);
          }
        }
        ctx.stroke();
      }

      // Reset shadow for intersection highlights
      ctx.shadowBlur = 0;

      // Add elegant intersection highlights only at mouse proximity
      if (intensity > 0.5) {
        ctx.fillStyle = `rgba(79, 172, 254, ${intensity * 0.3})`;
        const nearestGridX = Math.round(mousePixelX / gridSize) * gridSize;
        const nearestGridY = Math.round(mousePixelY / gridSize) * gridSize;
        
        const intersectionSize = 3 + (intensity * 2);
        ctx.beginPath();
        ctx.arc(nearestGridX, nearestGridY, intersectionSize, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(drawLiquidGrid);
    };

    drawLiquidGrid(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mouseX, mouseY, intensity]);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
}