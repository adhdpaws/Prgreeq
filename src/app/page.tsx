import CredibilitySection from "@/components/credibilitySection";
import FAQSection from "@/components/faqSection";
import { HeroSection } from "@/components/heroSection";
import { ServicesSection } from "@/components/servicesSection";
import { ContactCard } from "@/components/common/ContactCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      {/* Page content will go here */}
      <HeroSection />
      <ServicesSection />
      <CredibilitySection />
      <FAQSection />
      <ContactCard
        badge="CONTACT"
        headline="Let's start building your brand's unique story together."
        subtitle="Want to see what a difference a strong brand can make? Request a consultation today."
        buttonText="Get in Touch"
        buttonHref="/contact"
        styles={{
          container: "w-full bg-[#F5F5F3] py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32",
          content: "w-full px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12",
          badge: "inline-flex px-2 py-0.5 bg-transparent border border-[#2D2926] text-[#2D2926] text-[10px] font-semibold leading-tight font-sans tracking-wider uppercase rounded-none",
          headline: "text-[#2D2926] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight tracking-tight font-sans text-center max-w-5xl",
          subtitle: "text-[#525252] text-base sm:text-lg md:text-xl font-normal leading-relaxed font-sans text-center max-w-2xl",
          button: "bg-[#2D2926] text-white px-8 py-3.5 sm:px-10 sm:py-4 text-sm sm:text-base font-medium hover:bg-[#1D1916] transition-colors duration-200 rounded-full",
        }}
      />
    </div>
  );
}
