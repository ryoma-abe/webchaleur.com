"use client";

import dynamic from 'next/dynamic';

// アイコンを動的インポート
export const FaRocket = dynamic(
  () => import('react-icons/fa').then(mod => ({ default: mod.FaRocket })),
  { 
    ssr: false
  }
);