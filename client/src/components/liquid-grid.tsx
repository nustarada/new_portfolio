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

    const gridSize = 50;
    const distortionRadius = 180;
    const maxDistortion = 35;
    
    // Smooth interpolation for mouse position
    let currentMouseX = mouseX;
    let currentMouseY = mouseY;
    const lerpFactor = 0.1;

    const drawLiquidGrid = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      
      // Smooth interpolation for cursor movement
      currentMouseX += (mouseX - currentMouseX) * lerpFactor;
      currentMouseY += (mouseY - currentMouseY) * lerpFactor;
      
      // Convert percentage to pixels with smoothed values
      const mousePixelX = (currentMouseX / 100) * width;
      const mousePixelY = (currentMouseY / 100) * height;
      
      ctx.clearRect(0, 0, width, height);
      
      // Static grid with subtle purple lines
      ctx.strokeStyle = `rgba(138, 43, 226, 0.1)`;
      ctx.lineWidth = 1;

      // Draw vertical lines with liquid distortion
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        
        for (let y = 0; y <= height; y += 4) {
          const dx = x - mousePixelX;
          const dy = y - mousePixelY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          let distortedX = x;
          
          if (distance < distortionRadius && distance > 0) {
            const distortionFactor = Math.pow(1 - distance / distortionRadius, 2);
            const distortion = distortionFactor * maxDistortion * intensity;
            distortedX = x + (dx / distance) * distortion;
          }
          
          if (y === 0) {
            ctx.moveTo(distortedX, y);
          } else {
            ctx.lineTo(distortedX, y);
          }
        }
        ctx.stroke();
      }

      // Draw horizontal lines with liquid distortion
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        
        for (let x = 0; x <= width; x += 4) {
          const dx = x - mousePixelX;
          const dy = y - mousePixelY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          let distortedY = y;
          
          if (distance < distortionRadius && distance > 0) {
            const distortionFactor = Math.pow(1 - distance / distortionRadius, 2);
            const distortion = distortionFactor * maxDistortion * intensity;
            distortedY = y + (dy / distance) * distortion;
          }
          
          if (x === 0) {
            ctx.moveTo(x, distortedY);
          } else {
            ctx.lineTo(x, distortedY);
          }
        }
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(drawLiquidGrid);
    };

    drawLiquidGrid();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mouseX, mouseY, intensity]);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
}