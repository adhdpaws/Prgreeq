import { faqConfig, faqStyles } from "@/config/faq.config"
import { FAQHeader } from "./faq/FAQHeader"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <section className={faqStyles.container} aria-labelledby="faq-heading">
      <div className="flex-1 w-full px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-12 lg:gap-32">
        {/* Left side - Header */}
        <div className="w-full lg:w-[450px] lg:shrink-0 flex flex-col gap-4">
          <h2 className="text-[#2D2926] text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight font-sans">
            {faqConfig.header.title}
          </h2>
          <p className="text-[#3D3935] text-sm sm:text-base leading-6 sm:leading-7 font-sans">
            {faqConfig.header.subtitle}
          </p>
        </div>
        
        {/* Right side - FAQ Accordion */}
        <div className="flex-1 w-full">
          <Accordion type="single" collapsible className="w-full">
            {faqConfig.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="text-left text-[#2D2926] text-base sm:text-lg font-semibold hover:no-underline py-5 sm:py-6 hover:text-[oklch(0.586_0.253_17.585)] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#3D3935] text-sm sm:text-base leading-6 sm:leading-7 pb-5 sm:pb-6 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
