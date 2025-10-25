import { PageHero } from "@/components/PageHero"
import { solutionPageStyles } from "@/config/solutionPage.config"
import { SolutionContent } from "@/components/solutions/SolutionContent"
import { solutionServicesConfig } from "@/config/solutionServices.config"

export default function CorporatesPage() {
  return (
    <main className="flex flex-col">
      <PageHero
        badge="SOLUTIONS"
        headline="Corporates Solutions"
        subtitle="Driving corporate learning and development with scalable training solutions, compliance programs, and skill development initiatives."
        styles={solutionPageStyles.hero}
      />
      
      <SolutionContent services={solutionServicesConfig.corporates} />
    </main>
  )
}
