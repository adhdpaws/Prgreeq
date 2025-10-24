import { Badge } from "@/components/ui/badge"

interface ServicesHeroProps {
  badge: {
    text: string
  }
  headline: string
  subtitle: string
  styles: {
    container: string
    content: string
    badge: string
    headline: string
    subtitle: string
  }
}

export function ServicesHero({ badge, headline, subtitle, styles }: ServicesHeroProps) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Badge variant="outline" className={styles.badge}>
          {badge.text}
        </Badge>
        <h1 className={styles.headline}>{headline}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </section>
  )
}
