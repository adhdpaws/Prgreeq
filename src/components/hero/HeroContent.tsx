import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface HeroContentProps {
  badge: {
    text: string
  }
  headline: string
  subtitle: string
  cta: {
    primary: {
      text: string
      url: string
    }
    secondary: {
      text: string
      url: string
    }
  }
  styles: {
    content: string
    badge: string
    headline: string
    subtitle: string
    ctaGroup: string
    primaryButton: string
    secondaryButton: string
  }
}

export function HeroContent({ badge, headline, subtitle, cta, styles }: HeroContentProps) {
  return (
    <div className={styles.content}>
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
        <Badge variant="outline" className={styles.badge}>
          {badge.text}
        </Badge>
        <h1 className={styles.headline}>{headline}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      
      <div className={styles.ctaGroup}>
        <Button asChild className={styles.primaryButton}>
          <Link href={cta.primary.url} aria-label={cta.primary.text}>
            {cta.primary.text}
          </Link>
        </Button>
        <Button asChild variant="outline" className={styles.secondaryButton}>
          <Link href={cta.secondary.url} aria-label={cta.secondary.text}>
            {cta.secondary.text}
          </Link>
        </Button>
      </div>
    </div>
  )
}
