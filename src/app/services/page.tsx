import WobblyHeading from '@/components/ui/WobblyHeading';
import SketchyCard from '@/components/ui/SketchyCard';
import HandDrawnButton from '@/components/ui/HandDrawnButton';
import CTASection from '@/components/ui/CTASection';
import FadeIn from '@/components/animations/FadeIn';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';
import { FaDesktop, FaShoppingCart, FaChartLine, FaTools, FaCamera, FaPalette, FaRobot, FaCheck, FaInstagram, FaSearch, FaRocket } from 'react-icons/fa';

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
      id: 'ai',
      title: 'AI導入支援',
      subtitle: 'AI Integration',
      description: 'ChatGPTやClaudeなどのAIツールを業務に活用し、効率化を実現します。',
      features: [
        'AI活用相談',
        '業務自動化',
        'カスタムGPT作成',
        'プロンプト設計',
        '社内研修',
        '継続サポート'
      ],
      price: '10万円〜',
      duration: '1〜2週間',
      icon: FaRobot,
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
      title: 'SNS運用代行',
      description: 'Instagram・X(Twitter)・Facebookの投稿作成と運用',
      price: '月額3万円〜',
      icon: FaInstagram,
    },
    {
      title: 'LP制作',
      description: '商品やキャンペーン専用のランディングページ制作',
      price: '15万円〜',
      icon: FaRocket,
    },
    {
      title: 'SEO対策',
      description: '検索順位向上のための内部対策とコンテンツ改善',
      price: '月額2万円〜',
      icon: FaSearch,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <WobblyHeading level={1} underline english="Our Services">
            サービス
          </WobblyHeading>
          <p className="text-xl text-gray mt-6 max-w-3xl mx-auto">
            十勝からWebの力で、あなたのビジネスをもっと楽しく。
            <br />
            地元の方も遠方の方も、まずは気軽にご相談ください。
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
                <SketchyCard className="h-full flex flex-col" variant="elevated">
                  <div className="text-center mb-6 text-6xl text-primary-blue">
                    <service.icon className="mx-auto" />
                  </div>
                  
                  <h3 className="heading-card text-primary-blue mb-2">
                    {service.title}
                  </h3>
                  <span className="text-caption text-gray">
                    {service.subtitle}
                  </span>
                  
                  <p className="text-body my-6">
                    {service.description}
                  </p>

                  <div className="flex-grow">
                    <h4 className="text-primary mb-3">
                      主な機能・サービス
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray">
                          <FaCheck className="text-primary-blue mt-1 text-xs flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-accent-beige pt-4 mt-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-caption block mb-1">料金目安</span>
                        <span className="text-primary-blue">
                          {service.price}
                        </span>
                      </div>
                      <div>
                        <span className="text-caption block mb-1">制作期間</span>
                        <span className="text-primary">
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
      <section className="py-16 px-6 md:px-8 bg-light">
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
                <h3 className="text-lg text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-caption mb-4">
                  {service.description}
                </p>
                <span className="text-sm text-primary-blue">
                  {service.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Flow */}
      <section className="py-16 px-6 md:px-8 bg-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <WobblyHeading level={2} underline>
              制作の流れ
            </WobblyHeading>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'ヒアリング', description: 'まずはお客様のご要望やお悩みをじっくりお聞きします。（オンライン対応可）', duration: '即日対応' },
              { step: '02', title: 'ご提案・お見積り', description: '最適なプランとお見積りをご提案します。', duration: '3〜5日' },
              { step: '03', title: 'デザイン制作', description: 'お客様のイメージを形にしていきます。', duration: '1〜2週間' },
              { step: '04', title: '開発・実装', description: '機能を実装し、テストを行います。', duration: '2〜4週間' },
              { step: '05', title: '公開・納品', description: 'サイトを公開し、運用方法をご説明します。', duration: '3〜5日' },
              { step: '06', title: 'アフターサポート', description: '公開後も継続的にサポートいたします。', duration: '永続対応' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto">
                    {item.step}
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray mb-4">
                    {item.description}
                  </p>
                  <div className="text-sm text-primary-blue font-medium">
                    {item.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="px-6 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <CTASection />
          </FadeIn>
        </div>
      </div>
    </main>
  );
}