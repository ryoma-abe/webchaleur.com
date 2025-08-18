import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // MDXサポート
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  
  // 画像最適化の設定
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1年間のキャッシュ
  },

  // ヘッダーの設定
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  },

  // React Strict Modeを有効化
  reactStrictMode: true,

  // 実験的機能
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'react-icons', 'framer-motion'],
  },
  
  // Production optimizations
  productionBrowserSourceMaps: true,
  compress: true,
  poweredByHeader: false,
  
  // コンパイラ設定
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  
  
  // ブラウザリストの設定（モダンブラウザのみをターゲット）
  transpilePackages: [],
  
  // バンドル分析と最適化
  webpack: (config, { isServer, dev }) => {
    if (!isServer && !dev) {
      // アグレッシブなコード分割とツリーシェイキング
      config.optimization = {
        ...config.optimization,
        minimize: true,
        usedExports: true,
        sideEffects: false,
        splitChunks: {
          chunks: 'all',
          maxAsyncRequests: 30,
          maxInitialRequests: 25,
          minSize: 20000,
          cacheGroups: {
            default: false,
            vendors: false,
            // フレームワーク（React）
            framework: {
              name: 'framework',
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler|react-refresh)[\\/]/,
              chunks: 'all',
              priority: 50,
              enforce: true,
            },
            // 大きなライブラリを個別に分離
            // アイコンは使用時のみロード
            icons: {
              name: 'icons',
              test: /[\\/]node_modules[\\/](react-icons|lucide-react)[\\/]/,
              chunks: 'async',
              priority: 10,
              reuseExistingChunk: true,
            },
            framer: {
              name: 'framer',
              test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
              chunks: 'async',
              priority: 35,
            },
            mdx: {
              name: 'mdx',
              test: /[\\/]node_modules[\\/]@mdx-js[\\/]/,
              chunks: 'async',
              priority: 30,
            },
            // ポリフィルを分離（後で削除しやすいように）
            polyfills: {
              name: 'polyfills',
              test: /[\\/]node_modules[\\/](core-js|regenerator-runtime)[\\/]/,
              chunks: 'all',
              priority: 45,
            },
            // 小さなベンダーライブラリ
            vendor: {
              name: 'vendor',
              test: /[\\/]node_modules[\\/]/,
              chunks: 'async',
              priority: 10,
              minChunks: 2,
            },
            // 共通コード
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'async',
              priority: 5,
              reuseExistingChunk: true,
            },
          },
        },
        runtimeChunk: {
          name: 'runtime',
        },
        moduleIds: 'deterministic',
      };
    }
    return config;
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);