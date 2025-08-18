import type { Metadata } from "next";
import { Klee_One, Zen_Maru_Gothic } from 'next/font/google';
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from 'next/script';
import { generatePageMetadata, generateOrganizationSchema } from '@/lib/seo';

// Google Fontsの最適化設定
const kleeOne = Klee_One({
  weight: ['600'],
  subsets: ['latin'],
  variable: '--font-handwritten',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-rounded',
  display: 'swap',
  preload: true,
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
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for Above-the-fold content */
            :root {
              --main-blue: #5b8fb9;
              --light-blue: #8fb5d1;
              --lighter-blue: #b8d4e8;
              --bg-cream: #fefdfb;
              --text-dark: #2c2825;
              --text-gray: #5a524c;
              --accent-beige: #e5e3e1;
            }
            body {
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              background-color: var(--bg-cream);
              color: var(--text-dark);
            }
            .hero-section {
              min-height: 100vh;
              position: relative;
            }
          `
        }} />
        <Script id="schema-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(generateOrganizationSchema())}
        </Script>
      </head>
      <body className="antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
