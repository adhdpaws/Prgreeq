"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, ChevronDown } from "lucide-react"
import { navbarStyles } from "@/config/navbar.config"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
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

export function MobileMenu({ isOpen, onClose, navigation, brandName, cta }: MobileMenuProps) {
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set())

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(label)) {
        newSet.delete(label)
      } else {
        newSet.add(label)
      }
      return newSet
    })
  }

  if (!isOpen) return null

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={navbarStyles.mobile.overlay}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <aside
        className={navbarStyles.mobile.panel}
        role="dialog"
        aria-label="Mobile navigation menu"
        aria-modal="true"
      >
        {/* Mobile Menu Header */}
        <div className={navbarStyles.mobile.header}>
          <span className={navbarStyles.mobile.brandText}>
            {brandName}
          </span>
          <button
            type="button"
            onClick={onClose}
            className={navbarStyles.mobile.closeButton}
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={navbarStyles.mobile.nav} aria-label="Mobile navigation">
          {navigation.map((item) => (
            <div key={item.label} className={navbarStyles.mobile.navItem}>
              <button
                type="button"
                onClick={() => toggleDropdown(item.label)}
                className={navbarStyles.mobile.navButton}
                aria-expanded={openDropdowns.has(item.label)}
              >
                <span>{item.label}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openDropdowns.has(item.label) ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              {openDropdowns.has(item.label) &&
                item.dropdownItems &&
                item.dropdownItems.length > 0 && (
                  <div className={navbarStyles.mobile.dropdown.container}>
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className={navbarStyles.mobile.dropdown.item}
                        onClick={onClose}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </nav>

        {/* Mobile CTA */}
        <div className={navbarStyles.mobile.ctaContainer}>
          <Link
            href={cta.href}
            className={navbarStyles.cta.mobile}
            onClick={onClose}
          >
            {cta.label}
          </Link>
        </div>
      </aside>
    </>
  )
}
