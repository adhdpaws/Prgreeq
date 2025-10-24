"use client"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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
    mobileWrapper?: string
    mobileSelect?: string
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

  const activeService = services.find(s => s.id === activeSection)

  const handleMobileChange = (value: string) => {
    scrollToSection(value)
  }

  return (
    <nav className={styles.container}>
      {/* Mobile dropdown view */}
      <div className={styles.mobileWrapper || "sm:hidden w-full px-4 flex items-center justify-center gap-2"}>
        <span className="text-[#666666] text-sm font-medium whitespace-nowrap">Prgreeq ›</span>
        <Select
          value={activeSection || services[0]?.id}
          onValueChange={handleMobileChange}
        >
          <SelectTrigger className={styles.mobileSelect || "flex-1 max-w-[280px] border-[#E5E5E5] rounded-md focus:ring-[#2D2926] text-[#2D2926] font-medium"}>
            <SelectValue placeholder={services[0]?.label} />
          </SelectTrigger>
          <SelectContent className="rounded-md border-[#E5E5E5]">
            {services.map((service) => (
              <SelectItem 
                key={service.id} 
                value={service.id}
                className="rounded-sm focus:bg-[#F5F5F3] cursor-pointer"
              >
                {service.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Desktop buttons view */}
      <div className={`${styles.wrapper} hidden sm:flex`}>
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
