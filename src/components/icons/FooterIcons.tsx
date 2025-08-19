"use client";

import dynamic from 'next/dynamic';

// アイコンを動的インポート
export const FaEnvelope = dynamic(
  () => import('react-icons/fa').then(mod => ({ default: mod.FaEnvelope })),
  { 
    ssr: false
  }
);

export const FaMapMarkerAlt = dynamic(
  () => import('react-icons/fa').then(mod => ({ default: mod.FaMapMarkerAlt })),
  { 
    ssr: false
  }
);

export const FaInstagram = dynamic(
  () => import('react-icons/fa').then(mod => ({ default: mod.FaInstagram })),
  { 
    ssr: false
  }
);

export const FaXTwitter = dynamic(
  () => import('react-icons/fa6').then(mod => ({ default: mod.FaXTwitter })),
  { 
    ssr: false
  }
);