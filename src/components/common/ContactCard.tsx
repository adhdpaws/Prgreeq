import { Button } from "@/components/ui/button"

interface ContactCardProps {
  badge: string
  headline: string
  subtitle: string
  buttonText: string
  buttonHref: string
  styles: {
    container: string
    content: string
    badge: string
    headline: string
    subtitle: string
    button: string
  }
}

export function ContactCard({
  badge,
  headline,
  subtitle,
  buttonText,
  buttonHref,
  styles,
}: ContactCardProps) {
  return (
    <section className={styles.container} aria-labelledby="contact-heading">
      <div className={styles.content}>
        <h2 id="contact-heading" className={styles.badge}>
          {badge}
        </h2>
        
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <h3 className={styles.headline}>{headline}</h3>
          <p className={styles.subtitle}>{subtitle}</p>
          
          <Button className={styles.button} asChild>
            <a href={buttonHref}>{buttonText}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
