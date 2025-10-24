import type { LucideIcon } from "lucide-react"
import { footerStyles } from "@/config/footer.config"

interface FooterLinkProps {
  href: string
  label: string
  icon?: LucideIcon
}

export function FooterLink({ href, label, icon: Icon }: FooterLinkProps) {
  if (Icon) {
    return (
      <a href={href} className={footerStyles.navigationGrid.linkWithIcon}>
        <Icon className="w-4 h-4" />
        <span>{label}</span>
      </a>
    )
  }

  return (
    <a href={href} className={footerStyles.navigationGrid.link}>
      {label}
    </a>
  )
}
