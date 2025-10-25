import { Button } from "@/components/ui/button"

interface ServiceDetailProps {
  id: string
  title: string
  subtitle: string
  description: string
  features: string[]
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
    featureText: string
  }
}

export function ServiceDetail({
  id,
  title,
  subtitle,
  description,
  features,
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

        {/* Right Side - Features */}
        <div className={styles.rightFeatures}>
          <h3 className={styles.featuresTitle}>
            {subtitle}
          </h3>
          
          <div className={styles.featuresList}>
            {features.map((feature, index) => (
              <p key={index} className={styles.featureText}>
                {feature}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
