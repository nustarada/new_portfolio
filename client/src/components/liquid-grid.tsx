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
    const distortionRadius = 150;
    const maxDistortion = 30;

    const drawLiquidGrid = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = `rgba(138, 43, 226, ${0.15 * intensity})`;
      ctx.lineWidth = 1;

      // Convert percentage to pixels
      const mousePixelX = (mouseX / 100) * width;
      const mousePixelY = (mouseY / 100) * height;

      // Draw vertical lines with liquid distortion
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        let prevY = 0;
        
        for (let y = 0; y <= height; y += 2) {
          const distanceToMouse = Math.sqrt(
            Math.pow(x - mousePixelX, 2) + Math.pow(y - mousePixelY, 2)
          );
          
          let distortedX = x;
          
          if (distanceToMouse < distortionRadius) {
            const distortionFactor = (1 - distanceToMouse / distortionRadius);
            const angle = Math.atan2(y - mousePixelY, x - mousePixelX);
            const distortion = Math.sin(distortionFactor * Math.PI) * maxDistortion * intensity;
            
            distortedX = x + Math.cos(angle + Math.PI / 2) * distortion;
          }
          
          if (y === 0) {
            ctx.moveTo(distortedX, y);
          } else {
            ctx.lineTo(distortedX, y);
          }
          prevY = y;
        }
        ctx.stroke();
      }

      // Draw horizontal lines with liquid distortion
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        
        for (let x = 0; x <= width; x += 2) {
          const distanceToMouse = Math.sqrt(
            Math.pow(x - mousePixelX, 2) + Math.pow(y - mousePixelY, 2)
          );
          
          let distortedY = y;
          
          if (distanceToMouse < distortionRadius) {
            const distortionFactor = (1 - distanceToMouse / distortionRadius);
            const angle = Math.atan2(y - mousePixelY, x - mousePixelX);
            const distortion = Math.sin(distortionFactor * Math.PI) * maxDistortion * intensity;
            
            distortedY = y + Math.sin(angle + Math.PI / 2) * distortion;
          }
          
          if (x === 0) {
            ctx.moveTo(x, distortedY);
          } else {
            ctx.lineTo(x, distortedY);
          }
        }
        ctx.stroke();
      }

      // Add flowing wave effect
      const time = Date.now() * 0.001;
      ctx.strokeStyle = `rgba(138, 43, 226, ${0.1 * intensity})`;
      
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        const offsetX = Math.sin(time + i) * 20;
        const offsetY = Math.cos(time + i * 0.7) * 15;
        
        for (let x = 0; x <= width; x += 2) {
          const waveY = height / 2 + Math.sin((x + time * 100 + i * 100) * 0.01) * 30;
          const distanceToMouse = Math.sqrt(
            Math.pow(x - mousePixelX, 2) + Math.pow(waveY - mousePixelY, 2)
          );
          
          let finalY = waveY + offsetY;
          let finalX = x + offsetX;
          
          if (distanceToMouse < distortionRadius) {
            const distortionFactor = (1 - distanceToMouse / distortionRadius);
            const angle = Math.atan2(waveY - mousePixelY, x - mousePixelX);
            const distortion = Math.sin(distortionFactor * Math.PI) * maxDistortion * intensity;
            
            finalX += Math.cos(angle + Math.PI / 2) * distortion;
            finalY += Math.sin(angle + Math.PI / 2) * distortion;
          }
          
          if (x === 0) {
            ctx.moveTo(finalX, finalY);
          } else {
            ctx.lineTo(finalX, finalY);
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