import { credibilityStyles } from "@/config/credibility.config"
import { LogoItem } from "./LogoItem"
import { DecorativePattern } from "./DecorativePattern"

interface Partner {
  name: string
  logo: string
  url: string
}

interface LogoGridProps {
  partners: Partner[]
  mobileCols: number
  desktopCols: number
}

export function LogoGrid({ partners, mobileCols, desktopCols }: LogoGridProps) {
  return (
    <div className={credibilityStyles.logoGrid.container}>
      <DecorativePattern />

      <div className={credibilityStyles.logoGrid.gridWrapper}>
        {partners.map((partner, index) => (
          <LogoItem
            key={index}
            name={partner.name}
            logo={partner.logo}
            url={partner.url}
            index={index}
            totalItems={partners.length}
            mobileCols={mobileCols}
            desktopCols={desktopCols}
          />
        ))}
      </div>

      <DecorativePattern />
    </div>
  )
}
