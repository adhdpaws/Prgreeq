import { credibilityStyles } from "@/config/credibility.config"

export function DecorativePattern() {
  return (
    <div className={credibilityStyles.decorativePattern.container}>
      <div className={credibilityStyles.decorativePattern.wrapper}>
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className={credibilityStyles.decorativePattern.line} />
        ))}
      </div>
    </div>
  )
}
