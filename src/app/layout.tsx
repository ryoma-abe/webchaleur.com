import type { Metadata } from "next";
import { Klee_One, Zen_Maru_Gothic } from 'next/font/google';
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from 'next/script';
import { generatePageMetadata, generateOrganizationSchema } from '@/lib/seo';

const kleeOne = Klee_One({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-handwritten',
  display: 'swap',
});

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-rounded',
  display: 'swap',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <Script id="schema-org" type="application/ld+json">
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
