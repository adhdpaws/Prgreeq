import Image from "next/image"
import Link from "next/link"

export interface BlogCardProps {
  image: string
  title: string
  description: string
  category: string
  slug: string
  styles: {
    card: string
    imageWrapper: string
    image: string
    content: string
    title: string
    description: string
    category: string
  }
}

export function BlogCard({
  image,
  title,
  description,
  category,
  slug,
  styles,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <span className={styles.category}>{category}</span>
      </div>
    </Link>
  )
}
