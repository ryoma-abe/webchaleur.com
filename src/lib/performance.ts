// パフォーマンス監視ユーティリティ

export function reportWebVitals(metric: any) {
  // Core Web Vitalsの測定
  if (metric.label === 'web-vital') {
    // 開発環境でのデバッグ用（必要に応じてコメント解除）
    // console.log(metric);
    
    // 本番環境では分析サービスに送信
    if (process.env.NODE_ENV === 'production') {
      // Google Analytics やその他の分析サービスに送信
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_label: metric.id,
          non_interaction: true,
        });
      }
    }
  }
}

// 画像の遅延読み込み設定
export const imageLoader = ({ src, width, quality }: any) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

// プリロード設定
export function preloadAssets() {
  if (typeof window !== 'undefined') {
    // 重要なフォントのプリロード
    const link1 = document.createElement('link');
    link1.rel = 'preload';
    link1.as = 'font';
    link1.type = 'font/woff2';
    link1.href = '/fonts/KleeOne-Regular.woff2';
    link1.crossOrigin = 'anonymous';
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.rel = 'preload';
    link2.as = 'font';
    link2.type = 'font/woff2';
    link2.href = '/fonts/ZenMaruGothic-Regular.woff2';
    link2.crossOrigin = 'anonymous';
    document.head.appendChild(link2);
  }
}

// デバウンス関数（スクロールイベントなどの最適化用）
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// スロットル関数（頻繁なイベントの制限用）
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(null, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}