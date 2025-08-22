"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import HeroTitleStatic from './HeroTitleStatic';


const HeroTitleDynamic = dynamic(() => import('./HeroTitleDynamic'), {
  ssr: false,
  loading: () => <HeroTitleStatic />
});

export default function HeroTitle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      
      <div className="block md:hidden">
        <HeroTitleStatic />
      </div>
      
      
      <div className="hidden md:block">
        {mounted ? <HeroTitleDynamic /> : <HeroTitleStatic />}
      </div>
    </>
  );
}