import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from "next/script";
import { generatePageMetadata, generateOrganizationSchema } from "@/lib/seo";
import { Klee_One } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = generatePageMetadata({ path: "/" });

const kleeOne = Klee_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head />
      <body>
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9WSKRWJS1F"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9WSKRWJS1F', {
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
