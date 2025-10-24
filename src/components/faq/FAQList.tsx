"use client"

import { useState } from "react"
import { faqStyles } from "@/config/faq.config"
import { FAQItem } from "./FAQItem"

interface FAQ {
  question: string
  answer: string
}

interface FAQListProps {
  faqs: FAQ[]
}

export function FAQList({ faqs }: FAQListProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className={faqStyles.faqList.container}>
      <div className={faqStyles.faqList.wrapper}>
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openItems.includes(index)}
            onToggle={() => toggleItem(index)}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}
