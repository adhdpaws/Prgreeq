import { PageHero } from "@/components/PageHero"
import { aboutPageConfig, aboutPageStyles } from "@/config/aboutPage.config"
import { ValuesSection } from "@/components/about/ValuesSection"
import { StatsSection } from "@/components/about/StatsSection"
import { ContactCard } from "@/components/common/ContactCard"

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <PageHero
        badge={aboutPageConfig.hero.badge}
        headline={aboutPageConfig.hero.headline}
        subtitle={aboutPageConfig.hero.subtitle}
        styles={aboutPageStyles.hero}
      />

      <ValuesSection
        badge={aboutPageConfig.values.badge}
        values={aboutPageConfig.values.items}
        styles={aboutPageStyles.values}
      />

      <StatsSection
        stats={aboutPageConfig.stats}
        styles={aboutPageStyles.stats}
      />

      <ContactCard
        badge={aboutPageConfig.contact.badge}
        headline={aboutPageConfig.contact.headline}
        subtitle={aboutPageConfig.contact.subtitle}
        buttonText={aboutPageConfig.contact.buttonText}
        buttonHref={aboutPageConfig.contact.buttonHref}
        styles={aboutPageStyles.contact}
      />
    </main>
  )
}
