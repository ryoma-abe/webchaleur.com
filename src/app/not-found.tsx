'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className={`text-center max-w-2xl transition-all duration-800 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* 404イラスト */}
        <div className="mb-8">
          <h1 
            className="text-8xl md:text-9xl font-[var(--font-handwritten)] font-bold text-primary-blue mb-4"
            style={{ transform: 'rotate(-2deg)' }}
          >
            404
          </h1>
          <div className="text-6xl mb-6">🔍</div>
        </div>

        {/* メッセージ */}
        <h2 className="heading-section mb-4">
          ページが見つかりません
        </h2>
        <p className="text-body mb-8 max-w-md mx-auto">
          お探しのページは移動したか、削除された可能性があります。
          <br />
          URLをご確認いただくか、トップページからお探しください。
        </p>

        {/* 人間味のあるメッセージ */}
        <div 
          className="bg-[var(--bg-light)] p-6 mb-8"
          style={{ 
            borderRadius: '20px',
            border: '2px dashed #8fb5d1'
          }}
        >
          <p className="text-body">
            <span className="text-2xl mb-2 block">💭</span>
            ページが迷子になってしまったようです...
            <br />
            でも大丈夫！以下のボタンから戻れます。
          </p>
        </div>

        {/* アクションボタン */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn-primary"
          >
            トップページへ戻る
          </Link>
          <Link
            href="/contact"
            className="btn-secondary"
          >
            お問い合わせ
          </Link>
        </div>

        {/* 追加情報 */}
        <div className="mt-12 pt-8 border-t border-dashed border-primary-light">
          <p className="text-caption">
            よくアクセスされるページ
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <Link href="/#works" className="text-primary-blue hover:underline">
              制作実績
            </Link>
            <span className="text-[var(--text-gray)]">・</span>
            <Link href="/#strengths" className="text-primary-blue hover:underline">
              できること
            </Link>
            <span className="text-[var(--text-gray)]">・</span>
            <Link href="/#faq" className="text-primary-blue hover:underline">
              よくある質問
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}