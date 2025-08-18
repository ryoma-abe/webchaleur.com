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
  productionBrowserSourceMaps: false,
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
      // アグレッシブなコード分割
      config.optimization = {
        ...config.optimization,
        minimize: true,
        splitChunks: {
          chunks: 'all',
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          minSize: 10000,
          cacheGroups: {
            default: false,
            vendors: false,
            // React関連を分離
            react: {
              name: 'react',
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              priority: 40,
              reuseExistingChunk: true,
            },
            // Framer Motion
            framer: {
              name: 'framer',
              test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
              priority: 35,
              reuseExistingChunk: true,
            },
            // MDX関連
            mdx: {
              name: 'mdx',
              test: /[\\/]node_modules[\\/]@mdx-js[\\/]/,
              priority: 35,
              reuseExistingChunk: true,
            },
            // その他のvendor
            vendor: {
              name: 'vendor',
              test: /[\\/]node_modules[\\/]/,
              priority: 10,
              reuseExistingChunk: true,
            },
            // 共通モジュール
            common: {
              name: 'common',
              minChunks: 2,
              priority: 5,
              reuseExistingChunk: true,
            },
          },
        },
        runtimeChunk: 'single',
        moduleIds: 'deterministic',
      };
      
      // TerserPluginの設定
      if (config.optimization.minimizer && config.optimization.minimizer[0] && config.optimization.minimizer[0].options) {
        config.optimization.minimizer[0].options.terserOptions = {
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log', 'console.info'],
          },
        };
      }
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