import { PageHero } from "@/components/PageHero"
import { solutionPageStyles } from "@/config/solutionPage.config"
import { SolutionContent } from "@/components/solutions/SolutionContent"
import { solutionServicesConfig } from "@/config/solutionServices.config"

export default function AcademiaPage() {
  return (
    <main className="flex flex-col">
      <PageHero
        badge="SOLUTIONS"
        headline="Academia Solutions"
        subtitle="Transforming educational institutions with cutting-edge eLearning solutions, accessible content, and innovative digital learning experiences."
        styles={solutionPageStyles.hero}
      />
      
      <SolutionContent services={solutionServicesConfig.academia} />
    </main>
  )
}
