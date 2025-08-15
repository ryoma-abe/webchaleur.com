import WobblyHeading from '@/components/ui/WobblyHeading';
import FadeIn from '@/components/animations/FadeIn';

interface LegalPageLayoutProps {
  title: string;
  englishTitle: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({
  title,
  englishTitle,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
      {/* ヒーローセクション */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <WobblyHeading level={1} underline english={englishTitle}>
            {title}
          </WobblyHeading>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
              <div className="prose prose-lg max-w-none">
                {children}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}