"use client"

import { usePathname } from "next/navigation"

export function useNavbarSticky() {
  const pathname = usePathname()
  // Determine if navbar should be sticky based on current page
  const isSticky = pathname !== "/services" && pathname !== "/blog"
  
  return isSticky
}
