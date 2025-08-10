'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FadeIn({ 
  children, 
  delay = 0, 
  duration = 0.8,
  className = '' 
}: FadeInProps) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 20,
        rotate: -0.2
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        rotate: 0
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration,
        delay,
        ease: 'easeOut'
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}