import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  link: {
    text: string
    url: string
  }
  styles: {
    container: string
    contentWrapper: string
    title: string
    description: string
    link: string
    linkArrow: string
  }
}

export function ServiceCard({
  title,
  description,
  link,
  styles,
}: ServiceCardProps) {
  return (
    <article className={styles.container}>
      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <Link href={link.url} className={styles.link}>
        {link.text}
        <ArrowRight className={styles.linkArrow} />
      </Link>
    </article>
  )
}
