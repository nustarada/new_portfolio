import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Activity, Zap, Image, Download, Clock, TrendingUp } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  cls: number; // Cumulative Layout Shift
  fid: number; // First Input Delay
  ttfb: number; // Time to First Byte
  domContentLoaded: number;
  loadComplete: number;
  jsHeapSize: number;
  imageCount: number;
  totalImageSize: number;
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);

  const measurePerformance = () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    const resourceEntries = performance.getEntriesByType('resource');
    
    // Core Web Vitals
    let fcp = 0, lcp = 0, cls = 0, fid = 0;
    
    // First Contentful Paint
    const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    if (fcpEntry) fcp = fcpEntry.startTime;
    
    // Observe LCP, CLS, FID via PerformanceObserver
    if ('PerformanceObserver' in window) {
      try {
        // LCP Observer
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          lcp = lastEntry.startTime;
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // CLS Observer
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          cls = clsValue;
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // FID Observer
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            fid = (entry as any).processingStart - entry.startTime;
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (error) {
        console.log('PerformanceObserver not fully supported');
      }
    }

    // Image analysis
    const imageResources = resourceEntries.filter(resource => 
      resource.initiatorType === 'img' || resource.name.includes('image') || 
      resource.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)
    );

    const totalImageSize = imageResources.reduce((total, resource) => {
      return total + (resource.transferSize || 0);
    }, 0);

    // Memory usage
    const memory = (performance as any).memory;
    const jsHeapSize = memory ? memory.usedJSHeapSize : 0;

    const performanceMetrics: PerformanceMetrics = {
      fcp: Math.round(fcp),
      lcp: Math.round(lcp || 0),
      cls: Math.round(cls * 1000) / 1000,
      fid: Math.round(fid || 0),
      ttfb: Math.round(navigation.responseStart - navigation.requestStart),
      domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
      loadComplete: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
      jsHeapSize: Math.round(jsHeapSize / (1024 * 1024) * 100) / 100, // MB
      imageCount: imageResources.length,
      totalImageSize: Math.round(totalImageSize / 1024) // KB
    };

    setMetrics(performanceMetrics);
  };

  useEffect(() => {
    // Measure performance after page load
    if (document.readyState === 'complete') {
      setTimeout(measurePerformance, 1000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(measurePerformance, 1000);
      });
    }
  }, []);

  const getPerformanceGrade = (metric: string, value: number) => {
    const thresholds: { [key: string]: { good: number; needsImprovement: number } } = {
      fcp: { good: 1800, needsImprovement: 3000 },
      lcp: { good: 2500, needsImprovement: 4000 },
      cls: { good: 0.1, needsImprovement: 0.25 },
      fid: { good: 100, needsImprovement: 300 },
      ttfb: { good: 800, needsImprovement: 1800 }
    };

    const threshold = thresholds[metric];
    if (!threshold) return 'secondary';

    if (value <= threshold.good) return 'default'; // Good (green)
    if (value <= threshold.needsImprovement) return 'secondary'; // Needs Improvement (yellow)
    return 'destructive'; // Poor (red)
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  if (!metrics) {
    return (
      <Card className="p-6 glass-card grain-texture border border-white/20">
        <div className="flex items-center space-x-3">
          <Activity className="w-5 h-5 text-primary animate-pulse" />
          <span className="text-white">Analyzing performance...</span>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Zap className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-bold text-white jost-secondary">Performance Analysis</h3>
        </div>
        <Button
          onClick={() => setIsVisible(!isVisible)}
          variant="outline"
          size="sm"
          className="text-white border-white/30"
        >
          {isVisible ? 'Hide Details' : 'Show Details'}
        </Button>
      </div>

      {/* Core Web Vitals */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <Card className="p-4 glass-card grain-texture border border-white/20">
          <div className="text-center space-y-2">
            <Clock className="w-5 h-5 text-blue-400 mx-auto" />
            <div className="text-xs text-white/60">First Contentful Paint</div>
            <div className="text-lg font-bold text-white">{metrics.fcp}ms</div>
            <Badge variant={getPerformanceGrade('fcp', metrics.fcp)}>
              {metrics.fcp <= 1800 ? 'Good' : metrics.fcp <= 3000 ? 'OK' : 'Poor'}
            </Badge>
          </div>
        </Card>

        <Card className="p-4 glass-card grain-texture border border-white/20">
          <div className="text-center space-y-2">
            <Image className="w-5 h-5 text-green-400 mx-auto" />
            <div className="text-xs text-white/60">Largest Contentful Paint</div>
            <div className="text-lg font-bold text-white">{metrics.lcp}ms</div>
            <Badge variant={getPerformanceGrade('lcp', metrics.lcp)}>
              {metrics.lcp <= 2500 ? 'Good' : metrics.lcp <= 4000 ? 'OK' : 'Poor'}
            </Badge>
          </div>
        </Card>

        <Card className="p-4 glass-card grain-texture border border-white/20">
          <div className="text-center space-y-2">
            <TrendingUp className="w-5 h-5 text-purple-400 mx-auto" />
            <div className="text-xs text-white/60">Cumulative Layout Shift</div>
            <div className="text-lg font-bold text-white">{metrics.cls}</div>
            <Badge variant={getPerformanceGrade('cls', metrics.cls)}>
              {metrics.cls <= 0.1 ? 'Good' : metrics.cls <= 0.25 ? 'OK' : 'Poor'}
            </Badge>
          </div>
        </Card>

        <Card className="p-4 glass-card grain-texture border border-white/20">
          <div className="text-center space-y-2">
            <Activity className="w-5 h-5 text-orange-400 mx-auto" />
            <div className="text-xs text-white/60">Time to First Byte</div>
            <div className="text-lg font-bold text-white">{metrics.ttfb}ms</div>
            <Badge variant={getPerformanceGrade('ttfb', metrics.ttfb)}>
              {metrics.ttfb <= 800 ? 'Good' : metrics.ttfb <= 1800 ? 'OK' : 'Poor'}
            </Badge>
          </div>
        </Card>

        <Card className="p-4 glass-card grain-texture border border-white/20">
          <div className="text-center space-y-2">
            <Download className="w-5 h-5 text-cyan-400 mx-auto" />
            <div className="text-xs text-white/60">JS Heap Size</div>
            <div className="text-lg font-bold text-white">{metrics.jsHeapSize}MB</div>
            <Badge variant={metrics.jsHeapSize < 10 ? 'default' : metrics.jsHeapSize < 25 ? 'secondary' : 'destructive'}>
              {metrics.jsHeapSize < 10 ? 'Good' : metrics.jsHeapSize < 25 ? 'OK' : 'High'}
            </Badge>
          </div>
        </Card>
      </div>

      {/* Detailed Analysis */}
      {isVisible && (
        <Card className="p-6 glass-card grain-texture border border-white/20">
          <h4 className="text-lg font-semibold text-white mb-4 jost-secondary">Detailed Metrics</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h5 className="text-white/80 font-medium">Loading Performance</h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">DOM Content Loaded:</span>
                  <span className="text-white">{metrics.domContentLoaded}ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Load Complete:</span>
                  <span className="text-white">{metrics.loadComplete}ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">First Input Delay:</span>
                  <span className="text-white">{metrics.fid}ms</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h5 className="text-white/80 font-medium">Resource Analysis</h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Images Loaded:</span>
                  <span className="text-white">{metrics.imageCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Total Image Size:</span>
                  <span className="text-white">{formatBytes(metrics.totalImageSize * 1024)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Memory Usage:</span>
                  <span className="text-white">{metrics.jsHeapSize}MB</span>
                </div>
              </div>
            </div>
          </div>

          {/* Optimization Recommendations */}
          <div className="mt-6 p-4 bg-white/5 rounded-lg">
            <h5 className="text-white font-medium mb-3">Performance Optimizations Applied</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-1">
                <div className="text-green-400">✓ Image lazy loading implemented</div>
                <div className="text-green-400">✓ Animation throttling (24fps)</div>
                <div className="text-green-400">✓ Canvas performance optimized</div>
              </div>
              <div className="space-y-1">
                <div className="text-green-400">✓ CSS GPU acceleration enabled</div>
                <div className="text-green-400">✓ Reduced motion support</div>
                <div className="text-green-400">✓ Component lazy loading</div>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}