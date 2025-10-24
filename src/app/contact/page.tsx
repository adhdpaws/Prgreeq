import { contactPageConfig, contactPageStyles } from "@/config/contactPage.config"
import { ContactHero } from "@/components/contact/ContactHero"
import { MapSection } from "@/components/contact/MapSection"
import { MobileContactInfo } from "@/components/contact/MobileContactInfo"

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      <ContactHero
        badge={contactPageConfig.hero.badge}
        headline={contactPageConfig.hero.headline}
        description={contactPageConfig.hero.description}
        contactInfo={contactPageConfig.contactInfo}
        formTitle={contactPageConfig.form.title}
        formSubtitle={contactPageConfig.form.subtitle}
        styles={contactPageStyles.hero}
      />

      <MapSection
        embedUrl={contactPageConfig.map.embedUrl}
        styles={contactPageStyles.map}
      />

      <MobileContactInfo
        contactInfo={contactPageConfig.contactInfo}
        styles={contactPageStyles.mobileContactInfo}
      />
    </main>
  )
}
