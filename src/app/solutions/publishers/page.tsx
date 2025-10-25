import { PageHero } from "@/components/PageHero"
import { solutionPageStyles } from "@/config/solutionPage.config"
import { SolutionContent } from "@/components/solutions/SolutionContent"
import { solutionServicesConfig } from "@/config/solutionServices.config"

export default function PublishersPage() {
  return (
    <main className="flex flex-col">
      <PageHero
        badge="SOLUTIONS"
        headline="Publishers Solutions"
        subtitle="Empowering publishers with digital-first content solutions, accessible publishing, and innovative distribution platforms."
        styles={solutionPageStyles.hero}
      />
      
      <SolutionContent services={solutionServicesConfig.publishers} />
    </main>
  )
}
