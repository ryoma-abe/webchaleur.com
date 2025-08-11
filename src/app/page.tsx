import HeroServer from '@/components/sections/HeroServer';
import About from '@/components/sections/About';
import Strengths from '@/components/sections/Strengths';
import Works from '@/components/sections/WorksServer';
import Voice from '@/components/sections/Voice';
import Blog from '@/components/sections/BlogServer';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  return (
    <>
      <HeroServer />
      <About />
      <Strengths />
      <Works />
      <Voice />
      <Blog />
      <FAQ />
    </>
  );
}