import { servicesPageConfig, servicesPageStyles } from "@/config/servicesPage.config"
import { ServicesHero } from "@/components/servicesPage/ServicesHero"
import { ServiceNav } from "@/components/servicesPage/ServiceNav"
import { ServiceDetail } from "@/components/servicesPage/ServiceDetail"

export default function ServicesPage() {
  return (
    <main className="flex flex-col">
      <ServicesHero
        badge={servicesPageConfig.hero.badge}
        headline={servicesPageConfig.hero.headline}
        subtitle={servicesPageConfig.hero.subtitle}
        styles={servicesPageStyles.hero}
      />

      <ServiceNav services={servicesPageConfig.serviceNav} styles={servicesPageStyles.serviceNav} />

      {servicesPageConfig.services.map((service) => (
        <ServiceDetail
          key={service.id}
          id={service.id}
          title={service.title}
          subtitle={service.subtitle}
          description={service.description}
          steps={service.steps}
          styles={servicesPageStyles.serviceSection}
        />
      ))}
    </main>
  )
}
