import { Badge } from "@/components/ui/badge"

export interface PageHeroProps {
  badge: string
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

export function PageHero({ badge, headline, subtitle, styles }: PageHeroProps) {
  return (
    <section className={styles.container} aria-labelledby="page-hero-heading">
      <div className={styles.content}>
        <Badge className={styles.badge}>{badge}</Badge>
        <h1 id="page-hero-heading" className={styles.headline}>
          {headline}
        </h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </section>
  )
}
