interface PageHeroProps {
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
    <section className={styles.container}>
      <div className={styles.content}>
        <span className={styles.badge}>{badge}</span>
        <h1 className={styles.headline}>{headline}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </section>
  )
}
