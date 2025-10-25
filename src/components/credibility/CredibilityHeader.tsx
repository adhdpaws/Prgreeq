import { credibilityStyles } from "@/config/credibility.config"
import type { ReactNode } from "react"

interface CredibilityHeaderProps {
  badge: ReactNode
  title: string
  subtitle: string
}

export function CredibilityHeader({ badge, title, subtitle }: CredibilityHeaderProps) {
  return (
    <div className={credibilityStyles.headerSection.container}>
      <div className={credibilityStyles.headerSection.innerWrapper}>
        {badge}
        <h2 className={credibilityStyles.headerSection.title}>{title}</h2>
        <p className={credibilityStyles.headerSection.subtitle}>{subtitle}</p>
      </div>
    </div>
  )
}
