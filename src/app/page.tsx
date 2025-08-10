import Hero from '@/components/sections/Hero';
import Information from '@/components/sections/Information';
import About from '@/components/sections/About';
import Strengths from '@/components/sections/Strengths';
import Works from '@/components/sections/Works';
import Voice from '@/components/sections/Voice';
import Blog from '@/components/sections/Blog';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <Information />
      <About />
      <Strengths />
      <Works />
      <Voice />
      <Blog />
      <FAQ />
    </>
  );
}