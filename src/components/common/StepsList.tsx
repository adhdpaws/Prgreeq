interface Step {
  title: string
  description: string
}

interface StepsListProps {
  steps: Step[]
  styles: {
    container: string
    item: string
    title: string
    description: string
  }
}

export function StepsList({ steps, styles }: StepsListProps) {
  return (
    <div className={styles.container}>
      {steps.map((step, index) => (
        <div key={index} className={styles.item}>
          <h3 className={styles.title}>{step.title}</h3>
          <p className={styles.description}>{step.description}</p>
        </div>
      ))}
    </div>
  )
}
