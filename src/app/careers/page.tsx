import { PageHero } from "@/components/PageHero"
import { JobListing } from "@/components/careers/JobListing"
import { careersPageConfig, careersPageStyles } from "@/config/careersPage.config"

export default function CareersPage() {
  return (
    <main className="flex flex-col">
      <PageHero
        badge={careersPageConfig.hero.badge}
        headline={careersPageConfig.hero.headline}
        subtitle={careersPageConfig.hero.subtitle}
        styles={careersPageStyles.hero}
      />

      <JobListing
        jobs={careersPageConfig.jobs}
        styles={careersPageStyles.jobs}
      />
    </main>
  )
}
