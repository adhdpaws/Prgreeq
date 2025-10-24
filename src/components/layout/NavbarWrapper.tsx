"use client"

import { useNavbarSticky } from "./useNavbarSticky"
import { navbarStyles } from "@/config/navbar.config"

interface NavbarWrapperProps {
  children: React.ReactNode
}

export function NavbarWrapper({ children }: NavbarWrapperProps) {
  const isSticky = useNavbarSticky()
  
  return (
    <header className={`${navbarStyles.container} ${isSticky ? 'sticky top-0' : 'relative'}`}>
      {children}
    </header>
  )
}
