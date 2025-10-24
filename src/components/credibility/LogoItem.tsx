import { credibilityStyles } from "@/config/credibility.config"

interface LogoItemProps {
  name: string
  logo: string
  url: string
  index: number
  totalItems: number
  mobileCols: number
  desktopCols: number
}

export function LogoItem({ name, logo, url, index, totalItems, mobileCols, desktopCols }: LogoItemProps) {
  // Calculate border classes based on position
  const isMobileFirstColumn = index % mobileCols === 0
  const isMobileLastColumn = index % mobileCols === mobileCols - 1
  const isDesktopFirstColumn = index % desktopCols === 0
  const isDesktopLastColumn = index % desktopCols === desktopCols - 1
  const isDesktopTopRow = index < desktopCols
  const isDesktopBottomRow = index >= totalItems - desktopCols
  const isMobileBottomRow = index >= totalItems - mobileCols

  const borderClasses = `
    border-b border-[rgba(227,226,225,0.5)]
    ${index < totalItems - mobileCols ? "sm:border-b-[0.5px]" : "sm:border-b"}
    ${index >= totalItems - mobileCols ? "border-b" : ""}
    ${isMobileFirstColumn ? "border-r-[0.5px]" : ""}
    sm:border-r-[0.5px] sm:border-l-0
    ${isDesktopFirstColumn ? "md:border-l" : "md:border-l-[0.5px]"}
    ${isDesktopLastColumn ? "md:border-r" : "md:border-r-[0.5px]"}
    ${isDesktopTopRow ? "md:border-b-[0.5px]" : ""}
    ${isDesktopBottomRow ? "md:border-t-[0.5px] md:border-b" : ""}
    border-[#E3E2E1]
  `

  return (
    <a
      href={url}
      className={`${credibilityStyles.logoGrid.logoItem} ${borderClasses}`}
      aria-label={`Visit ${name}`}
    >
      <div className={credibilityStyles.logoGrid.logoIcon}>
        <img src={logo} alt={`${name} logo`} className={credibilityStyles.logoGrid.logoImage} />
      </div>
      <div className={credibilityStyles.logoGrid.logoName}>{name}</div>
    </a>
  )
}
