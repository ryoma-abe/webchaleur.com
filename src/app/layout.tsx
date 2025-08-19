import type { Metadata } from "next";
import { Klee_One, Zen_Maru_Gothic } from 'next/font/google';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from 'next/script';
import { generatePageMetadata, generateOrganizationSchema } from '@/lib/seo';
import "./globals.css";
import CriticalCSS from '@/components/CriticalCSS';

const kleeOne = Klee_One({
  weight: '600',
  subsets: ['latin'],
  variable: '--font-handwritten',
  display: 'swap',
  preload: false,
  adjustFontFallback: true,
});

const zenMaruGothic = Zen_Maru_Gothic({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rounded',
  display: 'swap',
  preload: false,
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
      <head />
      <body className="antialiased">
        <CriticalCSS />
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