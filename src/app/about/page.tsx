import Image from 'next/image';
import WobblyHeading from '@/components/ui/WobblyHeading';
import SketchyCard from '@/components/ui/SketchyCard';
import HandDrawnButton from '@/components/ui/HandDrawnButton';
import FadeIn from '@/components/animations/FadeIn';

export const metadata = {
  title: '私たちについて | WebChaleur',
  description: 'WebChaleurは十勝・帯広エリアを拠点に、地域企業様のデジタル化を支援するWeb制作会社です。',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg-cream py-20">
      <div className="container mx-auto px-4">
        <WobblyHeading level={1} underline english="About Us">
          私たちについて
        </WobblyHeading>

        {/* ミッション */}
        <FadeIn>
          <div className="max-w-4xl mx-auto mb-16">
            <SketchyCard variant="elevated" className="text-center">
              <h2 className="text-2xl font-klee font-bold text-text-dark mb-4">
                ミッション
              </h2>
              <p className="text-lg text-text-gray font-zenmaru leading-relaxed">
                十勝エリア（帯広・音更）の地域企業に寄り添い、<br />
                最新技術と温かみのあるデザインで、<br />
                親しみやすく信頼できるWeb制作サービスを提供する。
              </p>
            </SketchyCard>
          </div>
        </FadeIn>

        {/* 代表メッセージ */}
        <FadeIn delay={0.2}>
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-klee font-bold text-text-dark mb-8 text-center">
              代表メッセージ
            </h2>
            <SketchyCard>
              <div className="md:flex md:gap-8 items-start">
                <div className="md:flex-1">
                  <p className="text-text-gray font-zenmaru mb-4 leading-relaxed">
                    はじめまして、WebChaleur代表の山田太郎です。
                  </p>
                  <p className="text-text-gray font-zenmaru mb-4 leading-relaxed">
                    十勝で生まれ育った私は、この地域の温かさと可能性を感じながら育ちました。
                    東京でWeb制作の経験を積んだ後、地元十勝に戻り、地域企業様のデジタル化をお手伝いしています。
                  </p>
                  <p className="text-text-gray font-zenmaru mb-4 leading-relaxed">
                    地元だからこそできる、顔の見える関係性を大切にしながら、
                    最新の技術を活用したWeb制作で、皆様のビジネスの成長を支援いたします。
                  </p>
                  <p className="text-text-gray font-zenmaru leading-relaxed">
                    「作って終わり」ではなく、作った後も一緒に成長していける。
                    そんなパートナーとして、末永くお付き合いいただければ幸いです。
                  </p>
                </div>
              </div>
            </SketchyCard>
          </div>
        </FadeIn>

        {/* 私たちの強み */}
        <FadeIn delay={0.4}>
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-2xl font-klee font-bold text-text-dark mb-8 text-center">
              私たちの強み
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <SketchyCard>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏠</div>
                  <h3 className="text-lg font-klee font-bold text-text-dark mb-3">
                    地元密着
                  </h3>
                  <p className="text-sm text-text-gray font-zenmaru">
                    帯広・音更なら30分以内にお伺いします。
                    対面でのお打ち合わせを大切にしています。
                  </p>
                </div>
              </SketchyCard>

              <SketchyCard>
                <div className="text-center">
                  <div className="text-4xl mb-4">💻</div>
                  <h3 className="text-lg font-klee font-bold text-text-dark mb-3">
                    最新技術
                  </h3>
                  <p className="text-sm text-text-gray font-zenmaru">
                    Next.js、Shopifyなど最新の技術を活用。
                    高速で安全なWebサイトを構築します。
                  </p>
                </div>
              </SketchyCard>

              <SketchyCard>
                <div className="text-center">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-lg font-klee font-bold text-text-dark mb-3">
                    継続サポート
                  </h3>
                  <p className="text-sm text-text-gray font-zenmaru">
                    作った後も安心。更新や修正のご相談も
                    いつでもお気軽にどうぞ。
                  </p>
                </div>
              </SketchyCard>
            </div>
          </div>
        </FadeIn>

        {/* 会社概要 */}
        <FadeIn delay={0.6}>
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-klee font-bold text-text-dark mb-8 text-center">
              会社概要
            </h2>
            <SketchyCard>
              <dl className="space-y-4">
                <div className="flex flex-col sm:flex-row">
                  <dt className="font-klee font-bold text-text-dark sm:w-1/3 mb-1 sm:mb-0">
                    会社名
                  </dt>
                  <dd className="text-text-gray font-zenmaru sm:w-2/3">
                    WebChaleur（ウェブシャルール）
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <dt className="font-klee font-bold text-text-dark sm:w-1/3 mb-1 sm:mb-0">
                    所在地
                  </dt>
                  <dd className="text-text-gray font-zenmaru sm:w-2/3">
                    北海道河東郡音更町
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <dt className="font-klee font-bold text-text-dark sm:w-1/3 mb-1 sm:mb-0">
                    設立
                  </dt>
                  <dd className="text-text-gray font-zenmaru sm:w-2/3">
                    2023年4月
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <dt className="font-klee font-bold text-text-dark sm:w-1/3 mb-1 sm:mb-0">
                    事業内容
                  </dt>
                  <dd className="text-text-gray font-zenmaru sm:w-2/3">
                    Web制作・ECサイト構築・Webコンサルティング・デジタルマーケティング支援
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <dt className="font-klee font-bold text-text-dark sm:w-1/3 mb-1 sm:mb-0">
                    対応エリア
                  </dt>
                  <dd className="text-text-gray font-zenmaru sm:w-2/3">
                    十勝全域（帯広市・音更町・芽室町・幕別町・池田町・士幌町・上士幌町・鹿追町・新得町・清水町など）
                  </dd>
                </div>
              </dl>
            </SketchyCard>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.8}>
          <div className="text-center">
            <p className="text-text-gray font-zenmaru mb-6">
              私たちと一緒に、十勝からデジタルの可能性を広げていきませんか？
            </p>
            <HandDrawnButton href="/contact" variant="primary" size="large">
              お問い合わせはこちら
            </HandDrawnButton>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}