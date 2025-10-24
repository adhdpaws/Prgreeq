import { footerStyles } from "@/config/footer.config"

export function FooterPattern() {
  return (
    <div className={footerStyles.patternSection.container}>
      <div className={footerStyles.patternSection.innerContainer}>
        <div className="w-full h-full relative">
          {Array.from({ length: 400 }).map((_, i) => (
            <div
              key={i}
              className={footerStyles.patternSection.patternItem}
              style={{
                left: `${i * 300 - 600}px`,
                top: "-120px",
                transform: "rotate(-45deg)",
                transformOrigin: "top left",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
