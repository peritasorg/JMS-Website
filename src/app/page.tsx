import { Hero } from "@/components/home/Hero";
import { LunaSection } from "@/components/home/LunaSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <LunaSection />
      <CategoriesSection />
      <PillarsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
