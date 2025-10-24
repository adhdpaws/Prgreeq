import { credibilityStyles } from "@/config/credibility.config"
import type { ReactNode } from "react"

interface BadgeProps {
  icon: ReactNode
  text: string
}

export function Badge({ icon, text }: BadgeProps) {
  return (
    <div className={credibilityStyles.badge.container}>
      <div className={credibilityStyles.badge.icon}>{icon}</div>
      <div className={credibilityStyles.badge.text}>{text}</div>
    </div>
  )
}
