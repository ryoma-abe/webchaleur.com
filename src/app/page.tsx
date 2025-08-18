import dynamic from 'next/dynamic';
import HeroServer from '@/components/sections/HeroServer';
import AboutSection from '@/components/sections/about/AboutSection';
import StrengthsSection from '@/components/sections/strengths/StrengthsSection';

// Below-the-fold content - lazy load
const Works = dynamic(() => import('@/components/sections/LazyWorks'), {
  loading: () => <div className="min-h-[400px]" />,
});

const VoiceSection = dynamic(() => import('@/components/sections/voice/VoiceSection'), {
  loading: () => <div className="min-h-[300px]" />,
});

const Blog = dynamic(() => import('@/components/sections/LazyBlog'), {
  loading: () => <div className="min-h-[400px]" />,
});

const FAQSection = dynamic(() => import('@/components/sections/faq/FAQSection'), {
  loading: () => <div className="min-h-[300px]" />,
});

export default function Home() {
  return (
    <>
      <HeroServer />
      <AboutSection />
      <StrengthsSection />
      <Works />
      <VoiceSection />
      <Blog />
      <FAQSection />
    </>
  );
}