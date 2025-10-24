interface DecorativePatternProps {
  styles: {
    container: string
    wrapper: string
    line: string
  }
}

export function DecorativePattern({ styles }: DecorativePatternProps) {
  return (
    <aside className={styles.container} aria-hidden="true">
      <div className={styles.wrapper}>
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className={styles.line} />
        ))}
      </div>
    </aside>
  )
}
