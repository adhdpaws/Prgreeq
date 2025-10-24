interface Stat {
  number: string
  label: string
  description: string
  bgColor?: string
  fullWidth?: boolean
}

interface StatsSectionProps {
  stats: Stat[]
  styles: {
    container: string
    grid: string
    card: string
    fullWidthCard: string
    number: string
    label: string
    description: string
  }
}

export function StatsSection({ stats, styles }: StatsSectionProps) {
  return (
    <section className={styles.container} aria-labelledby="stats-heading">
      <h2 id="stats-heading" className="sr-only">Our Statistics</h2>
      <div className={styles.grid}>
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`${stat.fullWidth ? styles.fullWidthCard : styles.card} ${stat.bgColor || 'bg-[#F5F5F3]'}`}
          >
            <div className={styles.number}>{stat.number}</div>
            <div className={styles.label}>{stat.label}</div>
            <p className={styles.description}>{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
