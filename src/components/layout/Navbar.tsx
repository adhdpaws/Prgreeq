"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { navbarConfig, navbarStyles } from "@/config/navbar.config"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set())

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [isMobileMenuOpen])

  const toggleMobileDropdown = (label: string) => {
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

  return (
    <>
      <header className={navbarStyles.container}>
        <div className={navbarStyles.wrapper}>
          {/* Brand/Logo */}
          <Link
            href={navbarConfig.brand.href}
            className={navbarStyles.brand.link}
            aria-label={`${navbarConfig.brand.name} home`}
          >
            {navbarConfig.brand.name}
          </Link>

          {/* Desktop Navigation */}
          <nav className={navbarStyles.desktop.nav} aria-label="Main navigation">
            {navbarConfig.navigation.map((item) => (
              <div key={item.label} className={navbarStyles.desktop.navItem}>
                <Link href={item.href} className={navbarStyles.desktop.navLink}>
                  {item.label}
                </Link>
                {item.dropdownItems && item.dropdownItems.length > 0 && (
                  <div className={navbarStyles.desktop.dropdown.container}>
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className={navbarStyles.desktop.dropdown.item}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link href={navbarConfig.cta.href} className={navbarStyles.cta.desktop}>
            {navbarConfig.cta.label}
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className={navbarStyles.mobile.button}
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div
            className={navbarStyles.mobile.overlay}
            onClick={() => setIsMobileMenuOpen(false)}
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
                {navbarConfig.brand.name}
              </span>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className={navbarStyles.mobile.closeButton}
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className={navbarStyles.mobile.nav} aria-label="Mobile navigation">
              {navbarConfig.navigation.map((item) => (
                <div key={item.label} className={navbarStyles.mobile.navItem}>
                  <button
                    type="button"
                    onClick={() => toggleMobileDropdown(item.label)}
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
                            onClick={() => setIsMobileMenuOpen(false)}
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
                href={navbarConfig.cta.href}
                className={navbarStyles.cta.mobile}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {navbarConfig.cta.label}
              </Link>
            </div>
          </aside>
        </>
      )}
    </>
  )
}
