import type { ReactNode } from "react"

interface BadgeProps {
  icon: ReactNode
  text: string
  styles: {
    container: string
    icon: string
    text: string
  }
}

export function Badge({ icon, text, styles }: BadgeProps) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.text}>{text}</div>
    </div>
  )
}
