import CredibilitySection from "@/components/credibilitySection";
import FAQSection from "@/components/faqSection";
import { HeroSection } from "@/components/heroSection";
import { ServicesSection } from "@/components/servicesSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      {/* Page content will go here */}
      <HeroSection />
      <ServicesSection />
      <CredibilitySection />
      <FAQSection />
    </div>
  );
}
