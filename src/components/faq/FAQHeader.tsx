import { faqStyles } from "@/config/faq.config"

interface FAQHeaderProps {
  title: string
  subtitle: string
}

export function FAQHeader({ title, subtitle }: FAQHeaderProps) {
  return (
    <div className={faqStyles.header.container}>
      <h2 className={faqStyles.header.title}>{title}</h2>
      <p className={faqStyles.header.subtitle}>{subtitle}</p>
    </div>
  )
}
