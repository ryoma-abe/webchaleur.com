'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatProps {
  children: ReactNode;
  duration?: number;
  className?: string;
}

export default function Float({ 
  children, 
  duration = 3,
  className = '' 
}: FloatProps) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [-0.5, 0.5, -0.5],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}