import WobblyHeading from "@/components/ui/WobblyHeading";
import FadeIn from "@/components/animations/FadeIn";
import CompanyInfoList from "@/components/ui/CompanyInfoList";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/ui/CTASection";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({ path: "/about" });

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
      {/* ヒーローセクション */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <WobblyHeading level={1} underline english="About Us">
            WebChaleurについて
          </WobblyHeading>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* WebChaleurとは */}
        <FadeIn>
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <SectionTitle>
                <span className="text-primary-blue">WebChaleur</span>とは
              </SectionTitle>
              <div className="text-center">
                <p className="text-lg text-gray leading-relaxed mb-6">
                  <span className="text-primary-blue font-medium">
                    WebChaleur（ウェブシャル）
                  </span>
                  は、
                  「Web」と「Chaleur（仏語：ぬくもり）」を組み合わせた屋号です。
                </p>
                <p className="text-base text-gray leading-relaxed mb-4">
                  最新の技術を使いながらも、温かみのあるサービスを提供したい。
                  <br />
                  そんな想いから生まれました。
                </p>
                <p className="text-base text-gray leading-relaxed">
                  十勝・帯広を拠点に、地元の方も遠方の方も、
                  <br />
                  <span className="text-primary font-medium">
                    「Webのことなら何でも気軽に相談できる」
                  </span>
                  存在でありたいと考えています。
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* 代表メッセージ */}
        <FadeIn delay={0.2}>
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <SectionTitle>代表メッセージ</SectionTitle>
              <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
                <div className="space-y-6">
                  <p className="text-gray leading-relaxed">
                    はじめまして、WebChaleur代表の安部僚真です。
                  </p>
                  <p className="text-gray leading-relaxed">
                    18歳で十勝に移住し、この地域の温かさと可能性に魅了されました。
                    <br />
                    埼玉と東京の制作会社でWeb制作の経験を積んだ後、十勝に戻り、地域企業様はもちろん、
                    全国の企業様のデジタル化をお手伝いしています。
                  </p>
                  <p className="text-gray leading-relaxed">
                    地元十勝では顔の見える関係性を、遠方のお客様とはオンラインでの密なコミュニケーションを大切にしながら、
                    最新の技術を活用したWeb制作で、皆様のビジネスの成長を支援いたします。
                  </p>
                  <p className="text-gray leading-relaxed">
                    「作って終わり」ではなく、作った後も一緒に成長していける。
                    そんなパートナーとして、末永くお付き合いいただければ幸いです。
                  </p>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="text-right text-gray">
                      WebChaleur 代表
                      <br />
                      <span className="text-lg text-primary-blue font-klee mt-2 inline-block">
                        安部 僚真
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* 会社概要 */}
        <FadeIn delay={0.6}>
          <div className="max-w-4xl mx-auto mb-20">
            <SectionTitle>会社概要</SectionTitle>
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
              <CompanyInfoList
                items={[
                  { label: "屋号", value: "WebChaleur（ウェブシャル）" },
                  { label: "代表", value: "安部 僚真" },
                  { label: "所在地", value: "北海道河東郡音更町" },
                  { label: "設立", value: "2023年4月" },
                  { label: "連絡先", value: "info@webchaleur.jp" },
                ]}
              />
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.8}>
          <CTASection />
        </FadeIn>
      </div>
    </main>
  );
}
