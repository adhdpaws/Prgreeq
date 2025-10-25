import Image from "next/image"

interface BlogPostImageProps {
  image: string
  alt: string
  styles: {
    container: string
    imageWrapper: string
    image: string
  }
}

export function BlogPostImage({ image, alt, styles }: BlogPostImageProps) {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={alt}
          fill
          className={styles.image}
          sizes="100vw"
          priority
        />
      </div>
    </section>
  )
}
