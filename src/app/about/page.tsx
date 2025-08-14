import WobblyHeading from "@/components/ui/WobblyHeading";
import HandDrawnButton from "@/components/ui/HandDrawnButton";
import FadeIn from "@/components/animations/FadeIn";
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
              <h2 className="text-3xl text-primary mb-10 text-center font-klee">
                <span className="text-primary-blue">WebChaleur</span>とは
              </h2>
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

        {/* サービス内容 */}
        <FadeIn delay={0.1}>
          <section className="mb-20">
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-primary-blue/5 to-transparent rounded-3xl p-8 md:p-12">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary font-klee leading-tight mb-16">
                    <span className="text-primary-blue">Webサイト制作</span>・
                    <span className="text-primary-blue">ECサイト構築</span>
                    <br />
                    <span className="text-2xl md:text-3xl lg:text-4xl">
                      システム開発・保守運用
                    </span>
                  </h2>

                  <div className="max-w-3xl mx-auto">
                    <p className="text-base md:text-lg text-gray leading-relaxed">
                      WebChaleurは、十勝・帯広を拠点に全国のお客様をサポートしています。
                    </p>
                    <p className="text-base md:text-lg text-gray leading-relaxed mt-4">
                      企業サイトやECサイトの新規制作はもちろん、既存サイトのリニューアル、
                      業務効率化のためのシステム開発、サイトの保守運用まで幅広く対応。
                    </p>
                    <p className="text-base md:text-lg text-gray leading-relaxed mt-4">
                      地元企業様は直接お伺いし、遠方のお客様はオンラインで密に連携しながら、
                      それぞれのビジネスに最適なWeb戦略をご提案します。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* 代表メッセージ */}
        <FadeIn delay={0.2}>
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl text-primary mb-10 text-center font-klee">
                代表メッセージ
              </h2>
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
          <div className="max-w-5xl mx-auto mb-20">
            <h2 className="text-3xl text-primary mb-10 text-center font-klee">
              会社概要
            </h2>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <table className="w-full">
                <tbody>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <th className="text-left text-primary px-6 py-5 w-1/3 md:w-1/4 font-medium">
                      屋号
                    </th>
                    <td className="text-gray px-6 py-5">
                      WebChaleur（ウェブシャル）
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <th className="text-left text-primary px-6 py-5 font-medium">
                      代表者
                    </th>
                    <td className="text-gray px-6 py-5">安部 僚真</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <th className="text-left text-primary px-6 py-5 font-medium">
                      所在地
                    </th>
                    <td className="text-gray px-6 py-5">北海道河東郡音更町</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <th className="text-left text-primary px-6 py-5 font-medium">
                      設立
                    </th>
                    <td className="text-gray px-6 py-5">2023年4月</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <th className="text-left text-primary px-6 py-5 align-top font-medium">
                      事業内容
                    </th>
                    <td className="text-gray px-6 py-5">
                      <ul className="space-y-1">
                        <li>• Webサイト制作（企業サイト、LP、採用サイト等）</li>
                        <li>• ECサイト構築（Shopify、EC-CUBE等）</li>
                        <li>• システム開発（業務効率化ツール、Webアプリ等）</li>
                        <li>• 保守運用・サポート</li>
                        <li>• Webコンサルティング</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <th className="text-left text-primary px-6 py-5 align-top font-medium">
                      対応エリア
                    </th>
                    <td className="text-gray px-6 py-5">
                      <ul className="space-y-1">
                        <li>• 十勝全域（直接訪問可能）</li>
                        <li>• 北海道全域</li>
                        <li>• 全国（オンライン対応）</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <th className="text-left text-primary px-6 py-5 font-medium">
                      連絡先
                    </th>
                    <td className="text-gray px-6 py-5">info@webchaleur.jp</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.8}>
          <section className="py-12 bg-gradient-to-b from-transparent to-primary-blue/5 rounded-3xl">
            <div className="text-center">
              <p className="text-lg text-gray mb-8">
                Webのことでお困りごとはありませんか？
                <br />
                お気軽にご相談ください。
              </p>
              <HandDrawnButton href="/contact" variant="primary" size="large">
                お問い合わせはこちら →
              </HandDrawnButton>
            </div>
          </section>
        </FadeIn>
      </div>
    </main>
  );
}
