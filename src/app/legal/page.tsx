import LegalPageLayout from "@/components/layouts/LegalPageLayout";
import SubHeading from '@/components/ui/SubHeading';
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({ path: "/legal" });

export default function LegalPage() {
  return (
    <LegalPageLayout
      title="特定商取引法に基づく表記"
      englishTitle="Legal Notice"
    >
      <SubHeading>販売業者</SubHeading>
      <p className="text-gray mb-6">WebChaleur（ウェブシャル）</p>

      <SubHeading>運営責任者</SubHeading>
      <p className="text-gray mb-6">安部 僚真</p>

      <SubHeading>所在地</SubHeading>
      <p className="text-gray mb-6">
        〒080-0000<br />
        北海道河東郡音更町○○○○
      </p>

      <SubHeading>電話番号</SubHeading>
      <p className="text-gray mb-6">
        お問い合わせはメールまたはお問い合わせフォームよりお願いいたします
      </p>

      <SubHeading>メールアドレス</SubHeading>
      <p className="text-gray mb-6">webchaleur@gmail.com</p>

      <SubHeading>URL</SubHeading>
      <p className="text-gray mb-6">https://webchaleur.jp</p>

      <SubHeading>販売価格</SubHeading>
      <p className="text-gray mb-6">
        各サービスページをご参照ください。<br />
        すべて税込価格で表示しております。
      </p>

      <SubHeading>商品代金以外の必要料金</SubHeading>
      <p className="text-gray mb-6">
        銀行振込の場合、振込手数料はお客様負担となります。
      </p>

      <SubHeading>支払方法</SubHeading>
      <p className="text-gray mb-6">
        銀行振込<br />
        ※その他の支払方法については個別にご相談ください
      </p>

      <SubHeading>支払時期</SubHeading>
      <p className="text-gray mb-6">
        【前払いの場合】<br />
        ご注文確定後、7日以内にお支払いください。<br />
        <br />
        【後払いの場合】<br />
        納品後、請求書発行日より30日以内にお支払いください。
      </p>

      <SubHeading>商品の引渡し時期</SubHeading>
      <p className="text-gray mb-6">
        プロジェクトの規模により異なります。<br />
        ご契約時に納期をお知らせいたします。
      </p>

      <SubHeading>返品・交換について</SubHeading>
      <p className="text-gray mb-6">
        サービスの性質上、返品・返金はお受けしておりません。<br />
        ただし、納品物に重大な瑕疵がある場合は、無償で修正対応いたします。
      </p>

      <SubHeading>キャンセルについて</SubHeading>
      <p className="text-gray mb-6">
        ご契約後のキャンセルは、作業の進捗に応じてキャンセル料が発生する場合があります。<br />
        詳細は契約書の定めによります。
      </p>

      <SubHeading>その他</SubHeading>
      <p className="text-gray mb-6">
        上記以外の事項に関しましては、お取引の際に詳細をご説明いたします。<br />
        ご不明な点がございましたら、お気軽にお問い合わせください。
      </p>

      <p className="text-gray mt-8 text-sm">最終更新日: 2024年3月1日</p>
    </LegalPageLayout>
  );
}
