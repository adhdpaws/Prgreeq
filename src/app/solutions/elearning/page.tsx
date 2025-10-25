import { PageHero } from "@/components/PageHero"
import { solutionPageStyles } from "@/config/solutionPage.config"
import { SolutionContent } from "@/components/solutions/SolutionContent"
import { solutionServicesConfig } from "@/config/solutionServices.config"

export default function ELearningPage() {
  return (
    <main className="flex flex-col">
      <PageHero
        badge="SOLUTIONS"
        headline="eLearning Development"
        subtitle="Creating engaging, interactive, and effective eLearning experiences that drive learning outcomes and learner engagement."
        styles={solutionPageStyles.hero}
      />
      
      <SolutionContent services={solutionServicesConfig.elearning} />
    </main>
  )
}
