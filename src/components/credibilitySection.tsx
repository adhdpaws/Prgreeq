import { credibilityConfig, credibilityStyles } from "@/config/credibility.config"
import { Badge } from "./credibility/Badge"
import { CredibilityHeader } from "./credibility/CredibilityHeader"
import { LogoGrid } from "./credibility/LogoGrid"

export default function CredibilitySection() {
  return (
    <section className={credibilityStyles.container} aria-label="Trusted partners and clients">
      <CredibilityHeader
        badge={<Badge icon={credibilityConfig.badge.icon} text={credibilityConfig.badge.text} />}
        title={credibilityConfig.header.title}
        subtitle={credibilityConfig.header.subtitle}
        cta={credibilityConfig.header.cta}
      />

      <LogoGrid
        partners={credibilityConfig.partners}
        mobileCols={credibilityConfig.grid.mobileCols}
        desktopCols={credibilityConfig.grid.desktopCols}
      />
    </section>
  )
}