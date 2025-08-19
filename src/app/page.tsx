import dynamic from 'next/dynamic';
import HeroServer from '@/components/sections/HeroServer';
import AboutSection from '@/components/sections/about/AboutSection';
import StrengthsSection from '@/components/sections/strengths/StrengthsSection';

// Below-the-fold content - lazy load
const Works = dynamic(() => import('@/components/sections/LazyWorks'));

const VoiceSection = dynamic(() => import('@/components/sections/voice/VoiceSection'));

const Blog = dynamic(() => import('@/components/sections/LazyBlog'));

const FAQSection = dynamic(() => import('@/components/sections/faq/FAQSection'));

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