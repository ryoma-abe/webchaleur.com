import WobblyHeading from '@/components/ui/WobblyHeading';
import SketchyCard from '@/components/ui/SketchyCard';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({ path: '/terms' });

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <WobblyHeading level={1} underline english="Terms of Service">
          利用規約
        </WobblyHeading>

        <SketchyCard className="mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray mb-6">
              この利用規約（以下「本規約」といいます）は、WebChaleur（以下「当社」といいます）が
              提供するサービス（以下「本サービス」といいます）の利用条件を定めるものです。
            </p>

            <h2 className="text-xl text-primary mt-8 mb-4">
              第1条（適用）
            </h2>
            <p className="text-gray mb-6">
              本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
            </p>

            <h2 className="text-xl text-primary mt-8 mb-4">
              第2条（利用登録）
            </h2>
            <p className="text-gray mb-6">
              本サービスにおいては、登録希望者が本規約に同意の上、当社の定める方法によって利用登録を申請し、
              当社がこれを承認することによって、利用登録が完了するものとします。
            </p>

            <h2 className="text-xl text-primary mt-8 mb-4">
              第3条（サービス内容）
            </h2>
            <p className="text-gray mb-6">
              当社は、以下のサービスを提供いたします：
            </p>
            <ul className="list-disc pl-6 text-gray mb-6">
              <li>Webサイトの企画・制作・運営</li>
              <li>ECサイトの構築・運営支援</li>
              <li>Webコンサルティング</li>
              <li>デジタルマーケティング支援</li>
              <li>その他、これらに付随するサービス</li>
            </ul>

            <h2 className="text-xl text-primary mt-8 mb-4">
              第4条（料金および支払方法）
            </h2>
            <p className="text-gray mb-6">
              ユーザーは、本サービスの利用にあたり、当社が別途定める料金を、
              当社が指定する方法により支払うものとします。
            </p>

            <h2 className="text-xl text-primary mt-8 mb-4">
              第5条（禁止事項）
            </h2>
            <p className="text-gray mb-6">
              ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません：
            </p>
            <ul className="list-disc pl-6 text-gray mb-6">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当社、他のユーザー、その他第三者の知的財産権を侵害する行為</li>
              <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
              <li>本サービスの運営を妨害するおそれのある行為</li>
              <li>不正アクセスをし、またはこれを試みる行為</li>
              <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
              <li>不正な目的を持って本サービスを利用する行為</li>
              <li>その他、当社が不適切と判断する行為</li>
            </ul>

            <h2 className="text-xl text-primary mt-8 mb-4">
              第6条（著作権）
            </h2>
            <p className="text-gray mb-6">
              本サービスで当社が作成した成果物の著作権は、料金の完済後、ユーザーに譲渡されます。
              ただし、当社は実績紹介等の目的で、成果物を使用する権利を有するものとします。
            </p>

            <h2 className="text-xl text-primary mt-8 mb-4">
              第7条（免責事項）
            </h2>
            <p className="text-gray mb-6">
              当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、
              有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、
              権利侵害などを含みます）がないことを明示的にも黙示的にも保証しておりません。
            </p>

            <h2 className="text-xl text-primary mt-8 mb-4">
              第8条（サービス内容の変更等）
            </h2>
            <p className="text-gray mb-6">
              当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは
              本サービスの提供を中止することができるものとし、これによってユーザーに
              生じた損害について一切の責任を負いません。
            </p>

            <h2 className="text-xl text-primary mt-8 mb-4">
              第9条（利用規約の変更）
            </h2>
            <p className="text-gray mb-6">
              当社は、必要と判断した場合には、ユーザーに通知することなくいつでも
              本規約を変更することができるものとします。
            </p>

            <h2 className="text-xl text-primary mt-8 mb-4">
              第10条（個人情報の取扱い）
            </h2>
            <p className="text-gray mb-6">
              当社は、本サービスの利用によって取得する個人情報については、
              当社「プライバシーポリシー」に従い適切に取り扱うものとします。
            </p>

            <h2 className="text-xl text-primary mt-8 mb-4">
              第11条（準拠法・裁判管轄）
            </h2>
            <p className="text-gray mb-6">
              本規約の解釈にあたっては、日本法を準拠法とします。
              本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する
              裁判所を専属的合意管轄とします。
            </p>

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