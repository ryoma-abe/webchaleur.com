import WobblyHeading from '@/components/ui/WobblyHeading';
import SketchyCard from '@/components/ui/SketchyCard';
import HandDrawnButton from '@/components/ui/HandDrawnButton';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';
import { FaDesktop, FaShoppingCart, FaChartLine, FaTools, FaCamera, FaPalette, FaRobot, FaCheck } from 'react-icons/fa';

export const metadata = generatePageMetadata({ path: '/services' });

export default function ServicesPage() {
  const services = [
    {
      id: 'web',
      title: 'Web制作',
      subtitle: 'Corporate Website',
      description: '企業の顔となるホームページを、最新技術と温かみのあるデザインで制作します。',
      features: [
        'レスポンシブデザイン',
        'SEO対策',
        'CMS導入',
        '高速表示',
        'お問い合わせフォーム',
        'ブログ機能'
      ],
      price: '30万円〜',
      duration: '1〜2ヶ月',
      icon: FaDesktop,
    },
    {
      id: 'ec',
      title: 'ECサイト構築',
      subtitle: 'E-commerce Site',
      description: 'Shopifyを活用して、地域の特産品やサービスを全国に届けるオンラインショップを構築します。',
      features: [
        'Shopify構築',
        '決済システム導入',
        '在庫管理',
        '配送設定',
        '定期購入機能',
        'SNS連携'
      ],
      price: '50万円〜',
      duration: '2〜3ヶ月',
      icon: FaShoppingCart,
    },
    {
      id: 'consulting',
      title: 'コンサルティング',
      subtitle: 'Digital Consulting',
      description: 'デジタルマーケティングやSNS運用など、Web戦略全般をサポートします。',
      features: [
        'Web戦略立案',
        'SNS運用支援',
        'SEO/SEM対策',
        'アクセス解析',
        '改善提案',
        '社内研修'
      ],
      price: '月額5万円〜',
      duration: '継続支援',
      icon: FaChartLine,
    },
  ];

  const additionalServices = [
    {
      title: '保守・運用サポート',
      description: 'サイト公開後の更新作業や緊急対応をサポート',
      price: '月額1万円〜',
      icon: FaTools,
    },
    {
      title: '写真撮影・動画制作',
      description: 'プロカメラマンによる商品撮影や企業紹介動画の制作',
      price: '5万円〜',
      icon: FaCamera,
    },
    {
      title: 'ロゴ・名刺デザイン',
      description: 'ブランドアイデンティティを表現するロゴや名刺のデザイン',
      price: '3万円〜',
      icon: FaPalette,
    },
    {
      title: 'AI活用支援',
      description: 'ChatGPTなどのAIツールを業務に活用する方法をサポート',
      price: 'ご相談',
      icon: FaRobot,
    },
  ];

  return (
    <main className="min-h-screen bg-bg-cream">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <WobblyHeading level={1} underline english="Our Services">
            サービス
          </WobblyHeading>
          <p className="text-xl text-text-gray mt-6 max-w-3xl mx-auto">
            十勝を拠点に、全国の企業様のデジタル化を支援します。
            <br />
            地元でも遠方でも、お客様のビジネスに最適なソリューションをご提案いたします。
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <SketchyCard className="h-full" variant="elevated">
                  <div className="text-center mb-6 text-6xl text-primary-blue">
                    <service.icon className="mx-auto" />
                  </div>
                  
                  <h3 className="heading-card text-main-blue mb-2">
                    {service.title}
                  </h3>
                  <span className="text-caption text-text-gray">
                    {service.subtitle}
                  </span>
                  
                  <p className="text-body my-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-klee font-bold text-text-dark mb-3">
                      主な機能・サービス
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-text-gray">
                          <FaCheck className="text-main-blue mt-1 text-xs flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-accent-beige pt-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-caption block mb-1">料金目安</span>
                        <span className="font-klee font-bold text-main-blue">
                          {service.price}
                        </span>
                      </div>
                      <div>
                        <span className="text-caption block mb-1">制作期間</span>
                        <span className="font-klee font-bold text-text-dark">
                          {service.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link href={`/contact?service=${service.id}`}>
                      <HandDrawnButton variant="outline" size="medium" className="w-full">
                        詳しく相談する
                      </HandDrawnButton>
                    </Link>
                  </div>
                </SketchyCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 md:px-8 bg-bg-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <WobblyHeading level={2} underline>
              その他のサービス
            </WobblyHeading>
            <p className="text-body mt-4">
              Web制作以外にも、様々なサービスでお客様をサポートします
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl hover:translate-y-[-2px] transition-all group shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)]"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div className="text-4xl mb-4 text-primary-blue">
                  <service.icon className="mx-auto" />
                </div>
                <h3 className="font-klee font-bold text-lg text-text-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-caption mb-4">
                  {service.description}
                </p>
                <span className="text-sm font-bold text-main-blue">
                  {service.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Flow */}
      <section className="py-16 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <WobblyHeading level={2} underline>
              制作の流れ
            </WobblyHeading>
          </div>

          <div className="space-y-8">
            {[
              { step: '01', title: 'ヒアリング', description: 'まずはお客様のご要望やお悩みをじっくりお聞きします。（オンライン対応可）', duration: '無料' },
              { step: '02', title: 'ご提案・お見積り', description: '最適なプランとお見積りをご提案します。', duration: '1週間' },
              { step: '03', title: 'デザイン制作', description: 'お客様のイメージを形にしていきます。', duration: '2週間' },
              { step: '04', title: '開発・実装', description: '機能を実装し、テストを行います。', duration: '2-4週間' },
              { step: '05', title: '公開・納品', description: 'サイトを公開し、運用方法をご説明します。', duration: '1週間' },
              { step: '06', title: 'アフターサポート', description: '公開後も継続的にサポートいたします。', duration: '継続' },
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-main-blue text-white rounded-full flex items-center justify-center font-klee font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-klee font-bold text-xl text-text-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-body mb-2">
                    {item.description}
                  </p>
                  <span className="text-caption text-main-blue">
                    期間: {item.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-8 bg-gradient-to-br from-lighter-blue to-light-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-section text-white mb-6">
            まずは気軽にご相談ください
          </h2>
          <p className="text-xl text-white/90 mb-8">
            十勝から全国へ、企業様のデジタル化を全力でサポートします。
            <br />
            お見積りは無料です。全国どこからでもお気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <HandDrawnButton variant="primary" size="large">
                無料相談を申し込む
              </HandDrawnButton>
            </Link>
            <Link href="/works">
              <HandDrawnButton variant="secondary" size="large">
                制作実績を見る
              </HandDrawnButton>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}