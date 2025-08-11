"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import TypingAnimationWithDelete from "../animations/TypingAnimationWithDelete";

interface NewsItem {
  title: string;
  date: string;
  category: string;
  slug: string;
}

interface HeroClientProps {
  latestNews: NewsItem[];
}

export default function HeroClient({ latestNews }: HeroClientProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessageSet, setCurrentMessageSet] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [lines, setLines] = useState<string[]>(["", "", ""]);

  const messages = [
    {
      line1: "十勝の企業様の",
      line2: "Webサイトのこと",
      line3: "お手伝いします。"
    },
    {
      line1: "100件以上の制作実績で",
      line2: "培った技術力で",
      line3: "サポートします。"
    },
    {
      line1: "Next.js・Shopifyなど",
      line2: "最新技術も",
      line3: "しっかり対応。"
    },
    {
      line1: "制作後の運用も",
      line2: "ずっと一緒に",
      line3: "フォローします。"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    // 初期メッセージをセット
    setLines([messages[0].line1, "", ""]);
  }, []);

  // タイピング完了時の処理
  const handleLineComplete = (lineIndex: number) => {
    if (lineIndex === 0) {
      setLines(prev => [prev[0], messages[currentMessageSet].line2, ""]);
      setCurrentLine(1);
    } else if (lineIndex === 1) {
      setLines(prev => [prev[0], prev[1], messages[currentMessageSet].line3]);
      setCurrentLine(2);
    } else if (lineIndex === 2) {
      // 最後のメッセージセットでない場合のみ、3秒後に削除開始
      if (currentMessageSet < messages.length - 1) {
        setTimeout(() => {
          setIsDeleting(true);
          setCurrentLine(2); // 3行目から削除開始
        }, 3000);
      }
    }
  };

  // 削除完了時の処理
  const handleDeleteComplete = (lineIndex: number) => {
    if (lineIndex === 2) {
      setLines(prev => [prev[0], prev[1], ""]);
      setCurrentLine(1);
    } else if (lineIndex === 1) {
      setLines(prev => [prev[0], "", ""]);
      setCurrentLine(0);
    } else if (lineIndex === 0) {
      // すべて削除完了後、次のメッセージセットへ
      setLines(["", "", ""]);
      setIsDeleting(false);
      setCurrentMessageSet(prev => prev + 1);
      
      // 次のメッセージの1行目をセット
      setTimeout(() => {
        setLines([messages[currentMessageSet + 1].line1, "", ""]);
        setCurrentLine(0);
      }, 200);
    }
  };

  // 日付のフォーマット
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-white py-12 lg:py-16">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center">
          {/* メインコンテンツを中央配置 */}
          <div className="">
            {/* メインタイトル - タイピングアニメーション */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 lg:mb-10 min-h-[200px] lg:min-h-[250px] transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span className="block mb-2 min-h-[1.2em]">
                {lines[0] && (
                  <TypingAnimationWithDelete
                    key={`line1-${currentMessageSet}`}
                    text={lines[0]}
                    speed={80}
                    deleteSpeed={40}
                    showCursor={currentLine === 0 || (currentLine === 0 && isDeleting)}
                    onComplete={() => !isDeleting && handleLineComplete(0)}
                    onDeleteComplete={() => handleDeleteComplete(0)}
                    isDeleting={isDeleting && currentLine === 0}
                  />
                )}
              </span>
              <span className="text-primary-blue block relative text-[1.2em] mb-2 min-h-[1.2em]">
                {lines[1] && (
                  <>
                    <TypingAnimationWithDelete
                      key={`line2-${currentMessageSet}`}
                      text={lines[1]}
                      speed={80}
                      deleteSpeed={40}
                      showCursor={currentLine === 1 || (currentLine === 1 && isDeleting)}
                      onComplete={() => !isDeleting && handleLineComplete(1)}
                      onDeleteComplete={() => handleDeleteComplete(1)}
                      isDeleting={isDeleting && currentLine === 1}
                    />
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#5b8fb9] to-transparent opacity-40 rounded-sm" />
                  </>
                )}
              </span>
              <span className="block min-h-[1.2em]">
                {lines[2] && (
                  <TypingAnimationWithDelete
                    key={`line3-${currentMessageSet}`}
                    text={lines[2]}
                    speed={80}
                    deleteSpeed={40}
                    showCursor={true}
                    onComplete={() => !isDeleting && handleLineComplete(2)}
                    onDeleteComplete={() => handleDeleteComplete(2)}
                    isDeleting={isDeleting && currentLine === 2}
                  />
                )}
              </span>
            </h1>

            {/* サブテキスト - 中央揃え */}
            <p
              className={`text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto mb-10 lg:mb-12 transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              帯広・音更・十勝を中心に
              <br className="sm:hidden" />
              ホームページやネットショップを作っています。
              <br />
              <span className="block sm:inline">最新の技術を使いながら、</span>
              <span className="block sm:inline">
                お客様に寄り添ったものづくりを。
              </span>
              <br />
              <span className="text-base text-gray-500 mt-2 block">
                ※オンラインでの打ち合わせも対応しています
              </span>
            </p>

            {/* CTA ボタン - 中央に大きく */}
            <div
              className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 lg:mb-16 transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <Link href="/contact" className="btn-primary text-center text-lg px-8 py-4">
                まずは気軽に相談
              </Link>

              <Link href="/works" className="btn-secondary text-center text-lg px-8 py-4">
                制作事例を見る
              </Link>
            </div>
          </div>

          {/* 最新のお知らせを全幅に拡大 */}
          {latestNews.length > 0 && (
            <div
              className={`w-full bg-white/95 backdrop-blur-sm rounded-[24px] shadow-[0_20px_60px_rgba(91,143,185,0.1)] p-8 lg:p-10 transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-6 text-center">
                最新のお知らせ
              </h3>
              
              <div className="space-y-3 max-w-4xl mx-auto">
                {latestNews.map((news, index) => (
                  <Link 
                    key={news.slug} 
                    href={`/news/${news.slug}`} 
                    className="block group hover:bg-gray-50 rounded-lg p-3 transition-colors duration-200"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-sm text-gray-500 whitespace-nowrap">
                        {formatDate(news.date)}
                      </span>
                      <div className="flex-1">
                        <span className="text-base text-gray-800 group-hover:text-primary-blue transition-colors duration-200">
                          {news.title}
                        </span>
                        {index === 0 && (
                          <span className="inline-block ml-2 px-2 py-0.5 bg-red-100 text-red-600 text-xs rounded-full font-medium">
                            NEW
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Link href="/news" className="inline-flex items-center gap-2 text-primary-blue hover:text-primary-blue/80 font-medium transition-colors duration-200">
                  すべてのお知らせを見る
                  <span>→</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}