interface MapSectionProps {
  embedUrl: string
  styles: {
    container: string
    iframe: string
  }
}

export function MapSection({ embedUrl, styles }: MapSectionProps) {
  return (
    <section className={styles.container}>
      <iframe
        src={embedUrl}
        className={styles.iframe}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Our Location Map"
      />
    </section>
  )
}
