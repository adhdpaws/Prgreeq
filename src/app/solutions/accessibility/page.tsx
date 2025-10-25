import { PageHero } from "@/components/PageHero"
import { solutionPageStyles } from "@/config/solutionPage.config"
import { SolutionContent } from "@/components/solutions/SolutionContent"
import { solutionServicesConfig } from "@/config/solutionServices.config"

export default function AccessibilityPage() {
  return (
    <main className="flex flex-col">
      <PageHero
        badge="SOLUTIONS"
        headline="Accessibility Services"
        subtitle="Ensuring your digital content is accessible to all learners, meeting WCAG standards and creating inclusive learning experiences."
        styles={solutionPageStyles.hero}
      />
      
      <SolutionContent services={solutionServicesConfig.accessibility} />
    </main>
  )
}
