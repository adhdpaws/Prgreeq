import { footerStyles } from "@/config/footer.config"

interface BrandSectionProps {
  name: string
  tagline: string
  children: React.ReactNode
}

export function BrandSection({ name, tagline, children }: BrandSectionProps) {
  return (
    <div className={footerStyles.brandSection.container}>
      {/* Brand Name */}
      <div className="self-stretch flex justify-start items-center gap-3">
        <div className={footerStyles.brandSection.name}>{name}</div>
      </div>
      
      {/* Tagline */}
      <div className={footerStyles.brandSection.tagline}>
        {tagline}
      </div>

      {/* Social Media Icons */}
      <div className={footerStyles.brandSection.socialContainer}>
        {children}
      </div>
    </div>
  )
}
