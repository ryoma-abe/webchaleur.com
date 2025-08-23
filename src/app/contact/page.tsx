import ContactForm from "@/components/sections/Contact";
import PageHeader from "@/components/ui/PageHeader";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({ path: "/contact" });

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
      <PageHeader
        englishTitle="Contact"
        japaneseTitle="お問い合わせ"
        description="十勝エリアはもちろん、全国どこからでもお気軽にご相談ください。お見積りは無料です。"
      />

      <div className="max-w-5xl mx-auto px-6 md:px-8 py-12">
        <ContactForm />
      </div>
    </div>
  );
}