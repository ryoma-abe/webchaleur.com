import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from 'next/script';
import { generatePageMetadata, generateOrganizationSchema } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({ path: '/' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* Critical CSS インライン */}
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
              --font-handwritten: 'Klee One', serif;
              --font-rounded: 'Zen Maru Gothic', sans-serif;
            }
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
              font-family: 'Zen Maru Gothic', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              background-color: var(--bg-cream);
              color: var(--text-dark);
              line-height: 1.8;
            }
            h1, h2, h3, h4, h5, h6 {
              font-family: 'Klee One', serif;
              font-weight: 600;
            }
            .hero-section { min-height: 100vh; position: relative; }
            header { position: fixed; width: 100%; top: 0; z-index: 50; }
            main { padding-top: 64px; }
          `
        }} />
        
        {/* Google Fontsを非同期で読み込み */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Klee+One:wght@600&family=Zen+Maru+Gothic:wght@400&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Klee+One:wght@600&family=Zen+Maru+Gothic:wght@400&display=swap"
        />
        
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
