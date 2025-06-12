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

    const gridSize = 40;
    const distortionRadius = 200;
    const maxDistortion = 50;
    const lerpFactor = 0.1;
    
    // Initialize smooth interpolation variables
    let currentMouseX = mouseX || 50;
    let currentMouseY = mouseY || 50;

    const drawLiquidGrid = () => {
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
      
      // Add glow effect based on intensity
      const baseOpacity = 0.4;
      const glowOpacity = intensity * 0.6;
      const totalOpacity = Math.min(baseOpacity + glowOpacity, 1.0);
      
      // Enhanced grid with glow effect
      ctx.strokeStyle = `rgba(138, 43, 226, ${totalOpacity})`;
      ctx.lineWidth = 1.5;
      ctx.shadowColor = `rgba(138, 43, 226, ${intensity * 0.5})`;
      ctx.shadowBlur = intensity * 15;

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

      // Add secondary grid with different color for more visibility
      ctx.strokeStyle = `rgba(78, 205, 196, ${totalOpacity * 0.6})`;
      ctx.lineWidth = 1;
      ctx.shadowColor = `rgba(78, 205, 196, ${intensity * 0.3})`;
      ctx.shadowBlur = intensity * 10;

      // Draw secondary vertical lines offset by half grid size
      for (let x = gridSize / 2; x <= width; x += gridSize) {
        ctx.beginPath();
        
        for (let y = 0; y <= height; y += 6) {
          const dx = x - mousePixelX;
          const dy = y - mousePixelY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          let distortedX = x;
          
          if (distance < distortionRadius && distance > 0) {
            const distortionFactor = Math.pow(1 - distance / distortionRadius, 2);
            const distortion = distortionFactor * maxDistortion * intensity * 0.5;
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

      // Draw secondary horizontal lines offset by half grid size
      for (let y = gridSize / 2; y <= height; y += gridSize) {
        ctx.beginPath();
        
        for (let x = 0; x <= width; x += 6) {
          const dx = x - mousePixelX;
          const dy = y - mousePixelY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          let distortedY = y;
          
          if (distance < distortionRadius && distance > 0) {
            const distortionFactor = Math.pow(1 - distance / distortionRadius, 2);
            const distortion = distortionFactor * maxDistortion * intensity * 0.5;
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