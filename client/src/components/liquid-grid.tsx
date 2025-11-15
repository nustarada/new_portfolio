import { useEffect, useRef, useCallback, useMemo } from "react";
import { useThrottle, useDebounce } from "@/utils/performance";

interface LiquidGridProps {
  mouseX: number;
  mouseY: number;
  intensity: number;
}

export function LiquidGrid({ mouseX, mouseY, intensity }: LiquidGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const isVisible = useRef(true);

  const throttledMouseX = useThrottle(mouseX, 16);
  const throttledMouseY = useThrottle(mouseY, 16);
  const debouncedIntensity = useDebounce(intensity, 100);

  const config = useMemo(
    () => ({
      gridSize: 60,
      distortionRadius: 150,
      maxDistortion: 10,
      lerpFactor: 0.15,
      targetFPS: 25,
      baseOpacity: 0.35,
      activeOpacity: 0.9,
      lineWidth: 0.7,
    }),
    [],
  );

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio, 2);
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.scale(dpr, dpr);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
      desynchronized: true,
      willReadFrequently: false,
    });
    if (!ctx) return;

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
      },
      { rootMargin: "100px" },
    );
    observer.observe(canvas);

    let currentMouseX = throttledMouseX || 50;
    let currentMouseY = throttledMouseY || 50;
    let lastFrameTime = 0;
    let lastMouseX = currentMouseX;
    let lastMouseY = currentMouseY;
    let isMouseStationary = false;
    const frameInterval = 1000 / config.targetFPS;
    const intersectionRef = { x: 0, y: 0 };
    let driftOffset = 0;

    const drawLiquidGrid = (timestamp: number) => {
      if (timestamp - lastFrameTime < frameInterval) {
        animationRef.current = requestAnimationFrame(drawLiquidGrid);
        return;
      }
      lastFrameTime = timestamp;

      if (!isVisible.current) {
        animationRef.current = requestAnimationFrame(drawLiquidGrid);
        return;
      }

      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      if (width === 0 || height === 0) return;

      const mouseDeltaX = Math.abs(throttledMouseX - lastMouseX);
      const mouseDeltaY = Math.abs(throttledMouseY - lastMouseY);
      isMouseStationary =
        mouseDeltaX < 1 && mouseDeltaY < 1 && debouncedIntensity < 0.1;

      if (isMouseStationary && timestamp % 3 !== 0) {
        animationRef.current = requestAnimationFrame(drawLiquidGrid);
        return;
      }

      currentMouseX += (throttledMouseX - currentMouseX) * config.lerpFactor;
      currentMouseY += (throttledMouseY - currentMouseY) * config.lerpFactor;

      lastMouseX = throttledMouseX;
      lastMouseY = throttledMouseY;

      const mousePixelX = (currentMouseX / 100) * width;
      const mousePixelY = (currentMouseY / 100) * height;

      driftOffset += 0.1;

      ctx.clearRect(0, 0, width, height);

      const totalOpacity = Math.min(
        config.baseOpacity + debouncedIntensity * config.activeOpacity,
        2.9,
      );

      ctx.lineWidth = config.lineWidth;
      ctx.shadowColor = `rgba(79, 172, 254, ${debouncedIntensity * 0.25})`;
      ctx.shadowBlur = debouncedIntensity * 6;

      // Draw vertical lines near mouse
      const startX = mousePixelX - config.distortionRadius;
      const endX = mousePixelX + config.distortionRadius;
      const startY = mousePixelY - config.distortionRadius;
      const endY = mousePixelY + config.distortionRadius;

      for (
        let x = startX - (startX % config.gridSize);
        x <= endX;
        x += config.gridSize
      ) {
        ctx.beginPath();

        for (let y = startY - (startY % 12); y <= endY; y += 12) {
          const dx = x - mousePixelX;
          const dy = y - mousePixelY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > config.distortionRadius) continue;

          const opacityFactor = Math.pow(
            1 - distance / config.distortionRadius,
            3,
          );
          ctx.strokeStyle = `rgba(79, 172, 254, ${0.15 + opacityFactor})`;

          let distortedX = x;
          const wave =
            Math.sin((x + driftOffset) * 0.05 + timestamp * 0.002) * 5;
          distortedX += wave;

          if (distance > 0) {
            const distortionFactor = Math.pow(
              1 - distance / config.distortionRadius,
              2,
            );
            const distortion =
              distortionFactor *
              config.maxDistortion *
              debouncedIntensity *
              0.6;
            distortedX +=
              Math.sin((dx / distance) * distortion) * distortion * 0.3;
          }

          if (y === startY - (startY % 12)) ctx.moveTo(distortedX, y);
          else ctx.lineTo(distortedX, y);
        }
        ctx.stroke();
      }

      // Draw horizontal lines near mouse
      for (
        let y = startY - (startY % config.gridSize);
        y <= endY;
        y += config.gridSize
      ) {
        ctx.beginPath();

        for (let x = startX - (startX % 12); x <= endX; x += 12) {
          const dx = x - mousePixelX;
          const dy = y - mousePixelY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > config.distortionRadius) continue;

          const opacityFactor = Math.pow(
            1 - distance / config.distortionRadius,
            3,
          );
          ctx.strokeStyle = `rgba(79, 172, 254, ${0.15 + opacityFactor})`;

          let distortedY = y;
          const wave =
            Math.sin((y + driftOffset) * 0.05 + timestamp * 0.002) * 5;
          distortedY += wave;

          if (distance > 0) {
            const distortionFactor = Math.pow(
              1 - distance / config.distortionRadius,
              2,
            );
            const distortion =
              distortionFactor *
              config.maxDistortion *
              debouncedIntensity *
              0.6;
            distortedY +=
              Math.sin((dy / distance) * distortion) * distortion * 0.3;
          }

          if (x === startX - (startX % 12)) ctx.moveTo(x, distortedY);
          else ctx.lineTo(x, distortedY);
        }
        ctx.stroke();
      }

      ctx.shadowBlur = 0;

      animationRef.current = requestAnimationFrame(drawLiquidGrid);
    };

    drawLiquidGrid(0);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [throttledMouseX, throttledMouseY, debouncedIntensity, config]);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
  );
}
