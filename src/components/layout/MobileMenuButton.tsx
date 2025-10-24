"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { navbarStyles } from "@/config/navbar.config"

interface MobileMenuButtonProps {
  onOpen: () => void
}

export function MobileMenuButton({ onOpen }: MobileMenuButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(true)
    onOpen()
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={navbarStyles.mobile.button}
      aria-label="Open navigation menu"
      aria-expanded={isOpen}
    >
      <Menu className="w-6 h-6" aria-hidden="true" />
    </button>
  )
}
