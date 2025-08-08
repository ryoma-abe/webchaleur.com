import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "WebChaleur ｜ 十勝のウェブ制作パートナー",
  description:
    "帯広・音更・十勝エリアのホームページ制作。地元企業様に寄り添い、最新技術で温かみのあるサイトを作ります。",
  keywords:
    "帯広 ホームページ制作, 音更 Web制作, 十勝 ECサイト, Shopify 北海道",
  openGraph: {
    title: "WebChaleur ｜ 十勝のウェブ制作パートナー",
    description:
      "帯広・音更・十勝エリアのホームページ制作。地元企業様に寄り添い、最新技術で温かみのあるサイトを作ります。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
