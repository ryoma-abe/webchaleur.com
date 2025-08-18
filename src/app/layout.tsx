import type { Metadata } from "next";
import { Klee_One, Zen_Maru_Gothic } from 'next/font/google';
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from 'next/script';
import { generatePageMetadata, generateOrganizationSchema } from '@/lib/seo';

const kleeOne = Klee_One({
  weight: ['600'],
  subsets: ['latin'],
  variable: '--font-handwritten',
  display: 'optional',
  preload: false,
  adjustFontFallback: false,
});

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-rounded',
  display: 'swap',
  preload: true,
  adjustFontFallback: false,
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
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
