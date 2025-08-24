import HeroServer from "@/components/sections/hero/HeroServer";
import AboutSection from "@/components/sections/about/AboutSection";
import StrengthsSection from "@/components/sections/strengths/StrengthsSection";
import WorksServer from "@/components/sections/WorksServer";
// import VoiceSection from "@/components/sections/voice/VoiceSection";
// import BlogServer from "@/components/sections/BlogServer";
// import FAQSection from "@/components/sections/faq/FAQSection";

export default function Home() {
  return (
    <>
      <HeroServer />
      <AboutSection />
      <StrengthsSection />
      <WorksServer />
      {/*
      <VoiceSection />
      <BlogServer />
      <FAQSection /> 
      */}
    </>
  );
}
