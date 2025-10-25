import { credibilityStyles } from "@/config/credibility.config"
import Link from "next/link"
import type { ReactNode } from "react"

interface CredibilityHeaderProps {
  badge: ReactNode
  title: string
  subtitle: string
  cta?: {
    text: string
    url: string
  }
}

export function CredibilityHeader({ badge, title, subtitle, cta }: CredibilityHeaderProps) {
  return (
    <div className={credibilityStyles.headerSection.container}>
      <div className={credibilityStyles.headerSection.innerWrapper}>
        {badge}
        <h2 className={credibilityStyles.headerSection.title}>{title}</h2>
        <p className={credibilityStyles.headerSection.subtitle}>{subtitle}</p>
        {cta && (
          <Link 
            href={cta.url}
            className="mt-4 px-6 py-2.5 bg-[#2D2926] hover:bg-[#3D3935] text-white rounded-lg text-sm font-medium transition-colors duration-200"
          >
            {cta.text}
          </Link>
        )}
      </div>
    </div>
  )
}
