import { servicesPageConfig, servicesPageStyles } from "@/config/servicesPage.config"
import { PageHero } from "@/components/PageHero"
import { ServiceNav } from "@/components/servicesPage/ServiceNav"
import { ServiceDetail } from "@/components/servicesPage/ServiceDetail"

export default function ServicesPage() {
  return (
    <main className="flex flex-col">
      <PageHero
        badge={servicesPageConfig.hero.badge.text}
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
