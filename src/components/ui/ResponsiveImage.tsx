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
  // ベースファイル名を取得（拡張子とパスを除く）
  const basePath = src.substring(0, src.lastIndexOf('.'));
  
  // srcsetのサイズ
  const widths = [640, 750, 828, 1080, 1200, 1920];
  
  // AVIF形式のsrcsetを生成
  const avifSrcSet = widths
    .map(w => `${basePath}-${w}.avif ${w}w`)
    .join(', ');
  
  // WebP形式のsrcsetを生成
  const webpSrcSet = widths
    .map(w => `${basePath}-${w}.webp ${w}w`)
    .join(', ');
  
  // フォールバック用のWebP画像
  const fallbackSrc = `${basePath}.webp`;
  const fallbackAvif = `${basePath}.avif`;
  
  if (priority) {
    // LCP画像の場合はpictureタグで最適化
    return (
      <picture>
        <source
          type="image/avif"
          srcSet={avifSrcSet}
          sizes={sizes}
        />
        <source
          type="image/webp"
          srcSet={webpSrcSet}
          sizes={sizes}
        />
        <img
          src={fallbackSrc}
          alt={alt}
          width={width}
          height={height}
          className={className}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
    );
  }
  
  // 通常の画像はNext.js Imageコンポーネントを使用
  return (
    <picture>
      <source
        type="image/avif"
        srcSet={`${fallbackAvif}`}
      />
      <source
        type="image/webp"
        srcSet={`${fallbackSrc}`}
      />
      <Image
        src={fallbackSrc}
        alt={alt}
        width={width || 1200}
        height={height || 675}
        className={className}
        loading={loading}
        sizes={sizes}
      />
    </picture>
  );
}