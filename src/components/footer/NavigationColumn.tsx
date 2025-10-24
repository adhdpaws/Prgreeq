import type { LucideIcon } from "lucide-react"
import { footerStyles } from "@/config/footer.config"
import { FooterLink } from "./FooterLink"

interface Link {
  label: string
  href: string
  icon?: LucideIcon
}

interface NavigationColumnProps {
  title: string
  links: Link[]
  borderClass?: string
}

export function NavigationColumn({ title, links, borderClass = "" }: NavigationColumnProps) {
  return (
    <div className={`${footerStyles.navigationGrid.column} ${borderClass}`}>
      <div className={footerStyles.navigationGrid.title}>
        {title}
      </div>
      <div className={footerStyles.navigationGrid.linksContainer}>
        {links.map((link, index) => (
          <FooterLink
            key={index}
            href={link.href}
            label={link.label}
            icon={link.icon}
          />
        ))}
      </div>
    </div>
  )
}
