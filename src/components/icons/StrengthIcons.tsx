"use client";

import dynamic from 'next/dynamic';

// アイコンを動的インポート（LCP後にロード）
export const FaGlobe = dynamic(
  () => import('react-icons/fa').then(mod => ({ default: mod.FaGlobe })),
  { 
    ssr: false
  }
);

export const FaRobot = dynamic(
  () => import('react-icons/fa').then(mod => ({ default: mod.FaRobot })),
  { 
    ssr: false
  }
);

export const FaHandshake = dynamic(
  () => import('react-icons/fa').then(mod => ({ default: mod.FaHandshake })),
  { 
    ssr: false
  }
);