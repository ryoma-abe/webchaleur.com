import WobblyHeading from '@/components/ui/WobblyHeading';
import FadeIn from '@/components/animations/FadeIn';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({ path: '/legal' });

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
      {/* ヒーローセクション */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <WobblyHeading level={1} underline english="Legal Notice">
            特定商取引法に基づく表記
          </WobblyHeading>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
              <div className="prose prose-lg max-w-none">
            <dl className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <dt className="text-lg text-primary mb-2">
                  販売業者
                </dt>
                <dd className="text-gray">
                  WebChaleur（ウェブシャル）
                </dd>
              </div>

              <div className="border-b border-gray-100 pb-4">
                <dt className="text-lg text-primary mb-2">
                  運営責任者
                </dt>
                <dd className="text-gray">
                  山田 太郎
                </dd>
              </div>

              <div className="border-b border-gray-100 pb-4">
                <dt className="text-lg text-primary mb-2">
                  所在地
                </dt>
                <dd className="text-gray">
                  〒080-0000<br />
                  北海道河東郡音更町○○○○
                </dd>
              </div>

              <div className="border-b border-gray-100 pb-4">
                <dt className="text-lg text-primary mb-2">
                  電話番号
                </dt>
                <dd className="text-gray">
                  お問い合わせはメールまたはお問い合わせフォームよりお願いいたします
                </dd>
              </div>

              <div className="border-b border-gray-100 pb-4">
                <dt className="text-lg text-primary mb-2">
                  メールアドレス
                </dt>
                <dd className="text-gray">
                  info@webchaleur.jp
                </dd>
              </div>

              <div className="border-b border-gray-100 pb-4">
                <dt className="text-lg text-primary mb-2">
                  URL
                </dt>
                <dd className="text-gray">
                  https://webchaleur.jp
                </dd>
              </div>

              <div className="border-b border-gray-100 pb-4">
                <dt className="text-lg text-primary mb-2">
                  販売価格
                </dt>
                <dd className="text-gray">
                  各サービスページをご参照ください。<br />
                  すべて税込価格で表示しております。
                </dd>
              </div>

              <div className="border-b border-gray-100 pb-4">
                <dt className="text-lg text-primary mb-2">
                  商品代金以外の必要料金
                </dt>
                <dd className="text-gray">
                  銀行振込の場合、振込手数料はお客様負担となります。
                </dd>
              </div>

              <div className="border-b border-gray-100 pb-4">
                <dt className="text-lg text-primary mb-2">
                  支払方法
                </dt>
                <dd className="text-gray">
                  銀行振込<br />
                  ※その他の支払方法については個別にご相談ください
                </dd>
              </div>

              <div className="border-b border-gray-100 pb-4">
                <dt className="text-lg text-primary mb-2">
                  支払時期
                </dt>
                <dd className="text-gray">
                  【前払いの場合】<br />
                  ご注文確定後、7日以内にお支払いください。<br />
                  <br />
                  【後払いの場合】<br />
                  納品後、請求書発行日より30日以内にお支払いください。
                </dd>
              </div>

              <div className="border-b border-gray-100 pb-4">
                <dt className="text-lg text-primary mb-2">
                  商品の引渡し時期
                </dt>
                <dd className="text-gray">
                  プロジェクトの規模により異なります。<br />
                  ご契約時に納期をお知らせいたします。
                </dd>
              </div>

              <div className="border-b border-gray-100 pb-4">
                <dt className="text-lg text-primary mb-2">
                  返品・交換について
                </dt>
                <dd className="text-gray">
                  サービスの性質上、返品・返金はお受けしておりません。<br />
                  ただし、納品物に重大な瑕疵がある場合は、無償で修正対応いたします。
                </dd>
              </div>

              <div className="border-b border-gray-100 pb-4">
                <dt className="text-lg text-primary mb-2">
                  キャンセルについて
                </dt>
                <dd className="text-gray">
                  ご契約後のキャンセルは、作業の進捗に応じてキャンセル料が発生する場合があります。<br />
                  詳細は契約書の定めによります。
                </dd>
              </div>

              <div>
                <dt className="text-lg text-primary mb-2">
                  その他
                </dt>
                <dd className="text-gray">
                  上記以外の事項に関しましては、お取引の際に詳細をご説明いたします。<br />
                  ご不明な点がございましたら、お気軽にお問い合わせください。
                </dd>
              </div>
            </dl>

                <p className="text-gray mt-8 text-sm">
                  最終更新日: 2024年3月1日
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}