import { Button } from "@/components/ui/button"
import { StepsList } from "@/components/common/StepsList"

interface ServiceStep {
  title: string
  description: string
}

interface ServiceDetailProps {
  id: string
  title: string
  subtitle: string
  description: string
  steps: ServiceStep[]
  styles: {
    container: string
    content: string
    leftCard: string
    cardHeader: string
    cardTitle: string
    cardSubtitle: string
    cardDescription: string
    cardButton: string
    rightFeatures: string
    featuresTitle: string
    featuresList: string
    featureItem: string
    featureTitle: string
    featureDescription: string
  }
}

export function ServiceDetail({
  id,
  title,
  subtitle,
  description,
  steps,
  styles,
}: ServiceDetailProps) {
  return (
    <section id={id} className={styles.container}>
      <div className={styles.content}>
        {/* Left Card - Service Detail */}
        <div className={styles.leftCard}>
          <div>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>{title}</h2>
              <p className={styles.cardSubtitle}>{subtitle}</p>
            </div>
            
            <p className={styles.cardDescription}>{description}</p>
          </div>
          
          <Button className={styles.cardButton} asChild>
            <a href="#contact">Let's Talk</a>
          </Button>
        </div>

        {/* Right Side - Steps with Descriptions */}
        <div className={styles.rightFeatures}>
          <h3 className={styles.featuresTitle}>
            {subtitle}
          </h3>
          
          <StepsList
            steps={steps}
            styles={{
              container: styles.featuresList,
              item: styles.featureItem,
              title: styles.featureTitle,
              description: styles.featureDescription,
            }}
          />
        </div>
      </div>
    </section>
  )
}
