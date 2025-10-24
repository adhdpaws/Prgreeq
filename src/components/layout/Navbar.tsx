import Link from "next/link"
import { navbarConfig, navbarStyles } from "@/config/navbar.config"
import { NavbarWrapper } from "./NavbarWrapper"
import { NavbarClient } from "./NavbarClient"

export function Navbar() {
  return (
    <NavbarWrapper>
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

        {/* Mobile Menu (Client Component) */}
        <NavbarClient
          navigation={navbarConfig.navigation}
          brandName={navbarConfig.brand.name}
          cta={navbarConfig.cta}
        />
      </div>
    </NavbarWrapper>
  )
}

