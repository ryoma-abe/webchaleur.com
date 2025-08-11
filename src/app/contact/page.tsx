import Contact from '@/components/sections/Contact';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({ path: '/contact' });

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Contact />
    </div>
  );
}