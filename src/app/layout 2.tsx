import type { Metadata } from "next";
import { Klee_One, Zen_Maru_Gothic } from 'next/font/google';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from 'next/script';
import { generatePageMetadata, generateOrganizationSchema } from '@/lib/seo';
import CriticalCSS from '@/components/CriticalCSS';
import LazyStyles from '@/components/LazyStyles';
import "./globals.css";

const kleeOne = Klee_One({
  weight: ['600'],
  subsets: ['latin'],
  variable: '--font-handwritten',
  display: 'swap',
  preload: false, // preloadを無効化して必要最小限のみロード
  adjustFontFallback: true,
});

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-rounded',
  display: 'swap',
  preload: false, // preloadを無効化して必要最小限のみロード
  adjustFontFallback: true,
});

export const metadata: Metadata = generatePageMetadata({ path: '/' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${kleeOne.variable} ${zenMaruGothic.variable}`}>
      <head>
        {/* Preconnect to optimize third-party loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        
        {/* Critical CSS inline */}
        <CriticalCSS />
        
        {/* Preload critical fonts only */}
        <link
          rel="preload"
          as="font"
          href="https://fonts.gstatic.com/s/kleeone/v7/LDI2apCLNRc6A8oT4pbYF8Osc4jc8w.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Non-critical CSS lazy load */}
        <link
          rel="preload"
          as="style"
          href="/_next/static/css/app/layout.css"
          // @ts-ignore
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link rel="stylesheet" href="/_next/static/css/app/layout.css" />
        </noscript>
      </head>
      <body className="antialiased">
        <LazyStyles />
        <Script 
          id="schema-org" 
          type="application/ld+json" 
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema())
          }}
        />
        {/* Google Analytics - lazy load after page load */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
