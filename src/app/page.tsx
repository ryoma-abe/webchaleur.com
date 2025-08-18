import HeroServer from '@/components/sections/HeroServer';
import AboutSection from '@/components/sections/about/AboutSection';
import StrengthsSection from '@/components/sections/strengths/StrengthsSection';
import Works from '@/components/sections/LazyWorks';
import VoiceSection from '@/components/sections/voice/VoiceSection';
import Blog from '@/components/sections/LazyBlog';
import FAQSection from '@/components/sections/faq/FAQSection';

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