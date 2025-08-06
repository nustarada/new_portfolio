import { useEffect, useRef, useCallback, useMemo } from 'react';
import { useThrottle, useDebounce } from '@/utils/performance';

interface LiquidGridProps {
  mouseX: number;
  mouseY: number;
  intensity: number;
}

export function LiquidGrid({ mouseX, mouseY, intensity }: LiquidGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const isVisible = useRef(true);
  
  // Throttle mouse position updates to reduce computation
  const throttledMouseX = useThrottle(mouseX, 16); // ~60fps
  const throttledMouseY = useThrottle(mouseY, 16);
  const debouncedIntensity = useDebounce(intensity, 100);

  // Memoize static values
  const config = useMemo(() => ({
    gridSize: 120, // Increased for better performance
    distortionRadius: 80,
    maxDistortion: 10,
    lerpFactor: 0.12,
    targetFPS: 24, // Reduced from 30fps to 24fps for better performance
    baseOpacity: 0.06,
    activeOpacity: 0.08,
    lineWidth: 0.6
  }), []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Use lower DPI for better performance on high-DPI displays
    const dpr = Math.min(window.devicePixelRatio, 2);
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.scale(dpr, dpr);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize smooth interpolation variables
    let currentMouseX = throttledMouseX || 50;
    let currentMouseY = throttledMouseY || 50;
    let lastFrameTime = 0;
    const frameInterval = 1000 / config.targetFPS;

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
      currentMouseX += (throttledMouseX - currentMouseX) * config.lerpFactor;
      currentMouseY += (throttledMouseY - currentMouseY) * config.lerpFactor;
      
      // Convert percentage to pixels with smoothed values
      const mousePixelX = (currentMouseX / 100) * width;
      const mousePixelY = (currentMouseY / 100) * height;
      
      ctx.clearRect(0, 0, width, height);
      
      // Elegant minimal grid with refined opacity
      const totalOpacity = Math.min(config.baseOpacity + debouncedIntensity * config.activeOpacity, 0.25);
      
      // Refined grid with elegant cyan theme
      ctx.strokeStyle = `rgba(79, 172, 254, ${totalOpacity})`;
      ctx.lineWidth = config.lineWidth;
      ctx.shadowColor = `rgba(79, 172, 254, ${debouncedIntensity * 0.15})`;
      ctx.shadowBlur = debouncedIntensity * 4;

      // Draw elegant minimal vertical lines
      for (let x = 0; x <= width; x += config.gridSize) {
        ctx.beginPath();
        
        for (let y = 0; y <= height; y += 12) {
          const dx = x - mousePixelX;
          const dy = y - mousePixelY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          let distortedX = x;
          
          if (distance < config.distortionRadius && distance > 0) {
            const distortionFactor = Math.pow(1 - distance / config.distortionRadius, 2);
            const distortion = distortionFactor * config.maxDistortion * debouncedIntensity * 0.6;
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
      for (let y = 0; y <= height; y += config.gridSize) {
        ctx.beginPath();
        
        for (let x = 0; x <= width; x += 12) {
          const dx = x - mousePixelX;
          const dy = y - mousePixelY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          let distortedY = y;
          
          if (distance < config.distortionRadius && distance > 0) {
            const distortionFactor = Math.pow(1 - distance / config.distortionRadius, 2);
            const distortion = distortionFactor * config.maxDistortion * debouncedIntensity * 0.6;
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
      if (debouncedIntensity > 0.5) {
        ctx.fillStyle = `rgba(79, 172, 254, ${debouncedIntensity * 0.3})`;
        const nearestGridX = Math.round(mousePixelX / config.gridSize) * config.gridSize;
        const nearestGridY = Math.round(mousePixelY / config.gridSize) * config.gridSize;
        
        const intersectionSize = 3 + (debouncedIntensity * 2);
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
  }, [throttledMouseX, throttledMouseY, debouncedIntensity, config]);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
}