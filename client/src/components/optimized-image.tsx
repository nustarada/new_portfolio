import { useState, useRef, useCallback } from 'react';
import { useIntersectionObserver } from '@/utils/performance';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  loading?: 'lazy' | 'eager';
  quality?: number;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  quality = 80,
  placeholder,
  onLoad,
  onError
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  
  // Use intersection observer for lazy loading
  const isInView = useIntersectionObserver(imgRef, 0.1, '50px');
  
  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);
  
  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError]);

  // Generate optimized src based on requirements
  const getOptimizedSrc = useCallback(() => {
    // In production, you could integrate with image optimization services
    // For now, return original src
    return src;
  }, [src]);

  const shouldLoad = loading === 'eager' || isInView;

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {/* Placeholder while loading */}
      {(!isLoaded && !hasError) && placeholder && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.03'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      )}
      
      {/* Actual image */}
      {shouldLoad && (
        <img
          ref={imgRef}
          src={getOptimizedSrc()}
          alt={alt}
          width={width}
          height={height}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={loading}
          decoding="async"
        />
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-white/5 flex items-center justify-center">
          <div className="text-white/60 text-sm">Failed to load image</div>
        </div>
      )}
    </div>
  );
}