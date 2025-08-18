"use client";

import dynamic from 'next/dynamic';

// アイコンを動的インポート
export const FaEnvelope = dynamic(
  () => import('react-icons/fa').then(mod => ({ default: mod.FaEnvelope })),
  { 
    ssr: false,
    loading: () => <span className="inline-block w-4 h-4" />
  }
);

export const FaMapMarkerAlt = dynamic(
  () => import('react-icons/fa').then(mod => ({ default: mod.FaMapMarkerAlt })),
  { 
    ssr: false,
    loading: () => <span className="inline-block w-4 h-4" />
  }
);

export const FaInstagram = dynamic(
  () => import('react-icons/fa').then(mod => ({ default: mod.FaInstagram })),
  { 
    ssr: false,
    loading: () => <span className="inline-block w-4 h-4" />
  }
);

export const FaXTwitter = dynamic(
  () => import('react-icons/fa6').then(mod => ({ default: mod.FaXTwitter })),
  { 
    ssr: false,
    loading: () => <span className="inline-block w-4 h-4" />
  }
);