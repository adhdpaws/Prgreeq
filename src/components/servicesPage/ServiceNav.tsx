"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

interface ServiceNavProps {
  services: Array<{
    id: string
    label: string
  }>
  styles: {
    container: string
    wrapper: string
    button: string
    activeButton: string
  }
}

export function ServiceNav({ services, styles }: ServiceNavProps) {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = services.map((service) => document.getElementById(service.id))
      const scrollPosition = window.scrollY + 150

      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [services])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        {services.map((service) => (
          <Button
            key={service.id}
            variant="outline"
            onClick={() => scrollToSection(service.id)}
            className={activeSection === service.id ? styles.activeButton : styles.button}
          >
            {service.label}
          </Button>
        ))}
      </div>
    </nav>
  )
}
