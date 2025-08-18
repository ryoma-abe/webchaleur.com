'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import HeroTitleStatic from './HeroTitleStatic';

// タイピングアニメーションを動的インポート（ssr: false で初回転送量削減）
const HeroTitle = dynamic(() => import('./HeroTitle'), {
  ssr: false,
  loading: () => <HeroTitleStatic />
});

interface HeroTitleDynamicProps {
  isVisible: boolean;
}

export default function HeroTitleDynamic({ isVisible }: HeroTitleDynamicProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // prefers-reduced-motionをチェック
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    if (mediaQuery.matches) {
      return; // アニメーション無効時は静的テキストのまま
    }

    // requestIdleCallbackで遅延実行（LCP後）
    const startAnimation = () => {
      // IntersectionObserverで可視状態を確認
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setShouldAnimate(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      const heroElement = document.querySelector('h1');
      if (heroElement) {
        observer.observe(heroElement);
      }
    };

    // requestIdleCallbackがあれば使用、なければsetTimeoutで代替
    if ('requestIdleCallback' in window) {
      requestIdleCallback(startAnimation, { timeout: 3000 });
    } else {
      setTimeout(startAnimation, 100);
    }
  }, []);

  // アニメーション無効時または読み込み前は静的テキスト
  if (prefersReducedMotion || !shouldAnimate) {
    return <HeroTitleStatic />;
  }

  // アニメーション有効時
  return <HeroTitle isVisible={isVisible} />;
}