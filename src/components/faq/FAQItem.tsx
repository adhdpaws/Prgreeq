"use client"

import { faqStyles } from "@/config/faq.config"
import { ChevronIcon } from "./ChevronIcon"

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  index: number
}

export function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <div className={faqStyles.faqItem.container}>
      <button
        onClick={onToggle}
        className={faqStyles.faqItem.button}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <div className={faqStyles.faqItem.question}>{question}</div>
        <div className={faqStyles.faqItem.iconContainer}>
          <ChevronIcon isOpen={isOpen} />
        </div>
      </button>

      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className={`${faqStyles.faqItem.answerWrapper} ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className={faqStyles.faqItem.answer}>{answer}</div>
      </div>
    </div>
  )
}
