import { servicesConfig, servicesStyles } from "@/config/services.config"
import { ServicesGrid } from "./services/ServicesGrid"

export function ServicesSection() {
  return (
    <section className={servicesStyles.container} aria-labelledby="services-heading">
      <div className="flex-1 flex flex-col">
        <h2 id="services-heading" className="sr-only">
          Our Services
        </h2>
        <ServicesGrid
          services={servicesConfig.services}
          styles={servicesStyles.servicesGrid}
          cardStyles={servicesStyles.serviceCard}
        />
      </div>
    </section>
  )
}
