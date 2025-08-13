import WobblyHeading from '@/components/ui/WobblyHeading';
import SketchyCard from '@/components/ui/SketchyCard';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({ path: '/privacy' });

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <WobblyHeading level={1} underline english="Privacy Policy">
          プライバシーポリシー
        </WobblyHeading>

        <SketchyCard className="mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray mb-6">
              WebChaleur（以下「当社」といいます）は、お客様の個人情報の重要性を認識し、
              以下のプライバシーポリシーに基づき、個人情報の保護に努めます。
            </p>

            <h2 className="text-xl text-primary mt-8 mb-4">
              1. 個人情報の定義
            </h2>
            <p className="text-gray mb-6">
              個人情報とは、個人に関する情報であり、氏名、生年月日、住所、電話番号、
              メールアドレスなど、特定の個人を識別できる情報を指します。
            </p>

            <h2 className="text-xl text-primary mt-8 mb-4">
              2. 個人情報の収集
            </h2>
            <p className="text-gray mb-6">
              当社は、以下の場合に個人情報を収集することがあります：
            </p>
            <ul className="list-disc pl-6 text-gray mb-6">
              <li>お問い合わせフォームからのご連絡時</li>
              <li>サービスのお申し込み時</li>
              <li>アンケートへのご回答時</li>
              <li>その他、お客様から直接提供いただく場合</li>
            </ul>

            <h2 className="text-xl text-primary mt-8 mb-4">
              3. 個人情報の利用目的
            </h2>
            <p className="text-gray mb-6">
              収集した個人情報は、以下の目的で利用いたします：
            </p>
            <ul className="list-disc pl-6 text-gray mb-6">
              <li>お問い合わせへの回答</li>
              <li>サービスの提供および運営</li>
              <li>サービスの改善および新サービスの開発</li>
              <li>重要なお知らせやご案内の送付</li>
              <li>統計データの作成（個人を特定できない形式）</li>
            </ul>

            <h2 className="text-xl text-primary mt-8 mb-4">
              4. 個人情報の第三者提供
            </h2>
            <p className="text-gray mb-6">
              当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません：
            </p>
            <ul className="list-disc pl-6 text-gray mb-6">
              <li>お客様の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要な場合</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要な場合</li>
            </ul>

            <h2 className="text-xl text-primary mt-8 mb-4">
              5. 個人情報の安全管理
            </h2>
            <p className="text-gray mb-6">
              当社は、個人情報の漏洩、滅失、毀損の防止その他の個人情報の安全管理のために、
              必要かつ適切な措置を講じます。
            </p>

            <h2 className="text-xl text-primary mt-8 mb-4">
              6. Cookie（クッキー）について
            </h2>
            <p className="text-gray mb-6">
              当サイトでは、アクセス解析やサービス向上のためにCookieを使用することがあります。
              Cookieは個人を特定する情報を含みません。
            </p>

            <h2 className="text-xl text-primary mt-8 mb-4">
              7. アクセス解析ツール
            </h2>
            <p className="text-gray mb-6">
              当サイトでは、Googleアナリティクスを使用してアクセス情報を収集しています。
              収集されたデータは匿名で処理され、個人を特定することはできません。
            </p>

            <h2 className="text-xl text-primary mt-8 mb-4">
              8. 個人情報の開示・訂正・削除
            </h2>
            <p className="text-gray mb-6">
              お客様から個人情報の開示、訂正、削除のご請求があった場合は、
              ご本人確認の上、速やかに対応いたします。
            </p>

            <h2 className="text-xl text-primary mt-8 mb-4">
              9. プライバシーポリシーの変更
            </h2>
            <p className="text-gray mb-6">
              当社は、必要に応じて本プライバシーポリシーを変更することがあります。
              変更後のプライバシーポリシーは、当サイトに掲載した時点から効力を生じるものとします。
            </p>

            <h2 className="text-xl text-primary mt-8 mb-4">
              10. お問い合わせ
            </h2>
            <p className="text-gray mb-6">
              個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください：
            </p>
            <div className="bg-accent-beige/30 p-4 rounded-2xl">
              <p className="text-gray">
                WebChaleur<br />
                メール: info@webchaleur.jp<br />
                お問い合わせフォーム: <a href="/contact" className="text-primary-blue hover:underline">こちら</a>
              </p>
            </div>

            <p className="text-gray mt-8 text-sm">
              制定日: 2023年4月1日<br />
              最終更新日: 2024年3月1日
            </p>
          </div>
        </SketchyCard>
      </div>
    </main>
  );
}