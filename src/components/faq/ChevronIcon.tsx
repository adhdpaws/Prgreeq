import { faqStyles } from "@/config/faq.config"

interface ChevronIconProps {
  isOpen: boolean
}

export function ChevronIcon({ isOpen }: ChevronIconProps) {
  return (
    <svg
      className={`${faqStyles.faqItem.icon} ${isOpen ? "rotate-180" : "rotate-0"}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
