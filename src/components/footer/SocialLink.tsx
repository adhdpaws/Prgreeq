import type { LucideIcon } from "lucide-react"
import { footerStyles } from "@/config/footer.config"

interface SocialLinkProps {
  href: string
  icon: LucideIcon
  ariaLabel: string
}

export function SocialLink({ href, icon: Icon, ariaLabel }: SocialLinkProps) {
  return (
    <a
      href={href}
      className={footerStyles.brandSection.socialLink}
      aria-label={ariaLabel}
    >
      <Icon className="w-full h-full" />
    </a>
  )
}
