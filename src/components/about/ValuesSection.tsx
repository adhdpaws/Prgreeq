import { StepsList } from "@/components/common/StepsList"

interface Value {
  title: string
  description: string
}

interface ValuesSectionProps {
  badge: string
  values: Value[]
  styles: {
    container: string
    content: string
    badge: string
    valuesList: {
      container: string
      item: string
      title: string
      description: string
    }
  }
}

export function ValuesSection({ badge, values, styles }: ValuesSectionProps) {
  return (
    <section className={styles.container} aria-labelledby="values-heading">
      <div className={styles.content}>
        <h2 id="values-heading" className={styles.badge}>
          {badge}
        </h2>
        
        <StepsList steps={values} styles={styles.valuesList} />
      </div>
    </section>
  )
}
