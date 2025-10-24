import Image from "next/image"

interface Logo {
  name: string
  src: string
  alt: string
}

interface LogoStripProps {
  logos: Logo[]
  styles: {
    container: string
    logo: string
  }
}

export function LogoStrip({ logos, styles }: LogoStripProps) {
  return (
    <div className={styles.container} role="region" aria-label="Partner logos">
      {logos.map((logo, index) => (
        <Image
          key={`${logo.name}-${index}`}
          src={logo.src}
          alt={logo.alt}
          width={120}
          height={36}
          className={styles.logo}
          loading="lazy"
        />
      ))}
    </div>
  )
}
