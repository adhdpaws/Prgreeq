"use client"

import { useState } from "react"
import { MobileMenuButton } from "./MobileMenuButton"
import { MobileMenu } from "./MobileMenu"

interface NavbarClientProps {
  navigation: Array<{
    label: string
    href: string
    dropdownItems?: Array<{
      label: string
      href: string
    }>
  }>
  brandName: string
  cta: {
    label: string
    href: string
  }
}

export function NavbarClient({ navigation, brandName, cta }: NavbarClientProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <MobileMenuButton onOpen={() => setIsMobileMenuOpen(true)} />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigation={navigation}
        brandName={brandName}
        cta={cta}
      />
    </>
  )
}
