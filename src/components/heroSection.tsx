import { heroConfig, heroStyles } from "@/config/hero.config"
import { HeroContent } from "./hero/HeroContent"

export function HeroSection() {
  return (
    <section className={heroStyles.container} aria-label="Hero section">
      <div className={heroStyles.contentSection.wrapper}>
        <HeroContent
          badge={heroConfig.badge}
          headline={heroConfig.headline}
          subtitle={heroConfig.subtitle}
          cta={heroConfig.cta}
          styles={heroStyles.contentSection}
        />
      </div>
    </section>
  )
}
