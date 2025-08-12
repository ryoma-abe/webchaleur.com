import HeroServer from '@/components/sections/HeroServer';
import AboutSection from '@/components/sections/about/AboutSection';
import StrengthsSection from '@/components/sections/strengths/StrengthsSection';
import Works from '@/components/sections/WorksServer';
import Voice from '@/components/sections/Voice';
import Blog from '@/components/sections/BlogServer';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  return (
    <>
      <HeroServer />
      <AboutSection />
      <StrengthsSection />
      <Works />
      <Voice />
      <Blog />
      <FAQ />
    </>
  );
}