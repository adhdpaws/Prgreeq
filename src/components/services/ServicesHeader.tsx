import { Badge } from "@/components/ui/badge"

interface ServicesHeaderProps {
  badge: {
    text: string
    icon: React.ReactNode
  }
  title: string
  subtitle: string
  styles: {
    container: string
    innerWrapper: string
    title: string
    subtitle: string
  }
  badgeStyles: {
    container: string
    icon: string
    text: string
  }
}

export function ServicesHeader({ badge, title, subtitle, styles, badgeStyles }: ServicesHeaderProps) {
  return (
    <header className={styles.container}>
      <div className={styles.innerWrapper}>
        <Badge variant="outline" className={badgeStyles.container}>
          <div className={badgeStyles.icon}>{badge.icon}</div>
          <div className={badgeStyles.text}>{badge.text}</div>
        </Badge>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </header>
  )
}
