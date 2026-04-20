import { Hero } from "@/components/home/Hero";
import { WholesaleSection } from "@/components/home/WholesaleSection";
import { DashboardRow } from "@/components/home/DashboardRow";
import { TechSection } from "@/components/home/TechSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <WholesaleSection />
      <DashboardRow />
      <TechSection />
      <CategoriesSection />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </>
  );
}
