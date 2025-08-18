'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill,
  className,
  priority = false,
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
  loading = 'lazy',
  sizes,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${className || ''}`}>
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          quality={quality}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          className={`
            duration-700 ease-in-out
            ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
            ${className || ''}
          `}
          onLoad={() => setIsLoading(false)}
          loading={loading}
          sizes={sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width || 500}
          height={height || 300}
          quality={quality}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          className={`
            duration-700 ease-in-out
            ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
            ${className || ''}
          `}
          onLoad={() => setIsLoading(false)}
          loading={loading}
          sizes={sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
        />
      )}
    </div>
  );
}