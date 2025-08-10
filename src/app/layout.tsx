import type { Metadata } from "next";
import { Klee_One, Zen_Maru_Gothic } from 'next/font/google';
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from 'next/script';

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

export const metadata: Metadata = {
  metadataBase: new URL('https://webchaleur.jp'),
  title: {
    default: 'WebChaleur ｜ 十勝のウェブ制作パートナー',
    template: '%s | WebChaleur',
  },
  description: '帯広・音更・十勝エリアのホームページ制作。地元企業様に寄り添い、最新技術で温かみのあるサイトを作ります。',
  keywords: [
    '帯広 ホームページ制作',
    '音更 Web制作',
    '十勝 ECサイト',
    'Shopify 北海道',
    'ウェブ制作 十勝',
    'ホームページ作成 帯広',
  ],
  authors: [{ name: 'WebChaleur' }],
  creator: 'WebChaleur',
  publisher: 'WebChaleur',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'WebChaleur ｜ 十勝のウェブ制作パートナー',
    description: '帯広・音更・十勝エリアのホームページ制作。地元企業様に寄り添い、最新技術で温かみのあるサイトを作ります。',
    url: 'https://webchaleur.jp',
    siteName: 'WebChaleur',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WebChaleur - 十勝のウェブ制作パートナー',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebChaleur ｜ 十勝のウェブ制作パートナー',
    description: '帯広・音更・十勝エリアのホームページ制作。',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${kleeOne.variable} ${zenMaruGothic.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "WebChaleur",
              "description": "帯広・音更・十勝エリアのホームページ制作会社",
              "url": "https://webchaleur.jp",
              "telephone": "+81-155-00-0000",
              "email": "info@webchaleur.jp",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "",
                "addressLocality": "音更町",
                "addressRegion": "北海道",
                "postalCode": "080-0000",
                "addressCountry": "JP"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 42.9929,
                "longitude": 143.2001
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "priceRange": "¥¥",
              "image": "https://webchaleur.jp/og-image.jpg"
            }
          `}
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
