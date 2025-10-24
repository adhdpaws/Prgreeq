import { footerConfig, footerStyles } from "@/config/footer.config"
import { BrandSection } from "./footer/BrandSection"
import { SocialLink } from "./footer/SocialLink"
import { NavigationColumn } from "./footer/NavigationColumn"
import { FooterPattern } from "./footer/FooterPattern"

export default function FooterSection() {
  return (
    <div className={footerStyles.container}>
      {/* Main Footer Content */}
      <div className={footerStyles.mainContent}>
        {/* Brand Section */}
        <BrandSection name={footerConfig.brand.name} tagline={footerConfig.brand.tagline}>
          {footerConfig.socialLinks.map((social, index) => (
            <SocialLink
              key={index}
              href={social.href}
              icon={social.icon}
              ariaLabel={social.ariaLabel}
            />
          ))}
        </BrandSection>

        {/* Navigation Links Grid */}
        <div className={footerStyles.navigationGrid.container}>
          {footerConfig.navigationSections.map((section, index) => {
            const borderClass = footerStyles.borders[section.title.toLowerCase() as keyof typeof footerStyles.borders] || ""
            return (
              <NavigationColumn
                key={index}
                title={section.title}
                links={section.links}
                borderClass={borderClass}
              />
            )
          })}
        </div>
      </div>

      {/* Bottom Pattern Section */}
      <FooterPattern />
    </div>
  )
}