import Image from 'next/image';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  loading?: 'lazy' | 'eager';
}

export default function ResponsiveImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 60vw, 50vw",
  loading = 'lazy'
}: ResponsiveImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width || 1200}
      height={height || 675}
      className={className}
      priority={priority}
      loading={priority ? 'eager' : loading}
      sizes={sizes}
    />
  );
}