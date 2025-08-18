import type { Metadata } from "next";
import { Klee_One, Zen_Maru_Gothic } from 'next/font/google';
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from 'next/script';
import { generatePageMetadata, generateOrganizationSchema } from '@/lib/seo';
import GoogleAnalytics from '@/components/GoogleAnalytics';

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script id="schema-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(generateOrganizationSchema())}
        </Script>
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
