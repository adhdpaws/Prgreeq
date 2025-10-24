import { ServiceCard } from "./ServiceCard"

interface Service {
  id: string
  title: string
  description: string
  link: {
    text: string
    url: string
  }
}

interface ServicesGridProps {
  services: Service[]
  styles: {
    container: string
    gridWrapper: string
  }
  cardStyles: {
    container: string
    contentWrapper: string
    title: string
    description: string
    link: string
    linkArrow: string
  }
}

export function ServicesGrid({ services, styles, cardStyles }: ServicesGridProps) {
  return (
    <div className={styles.container}>
      <div className={styles.gridWrapper}>
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            link={service.link}
            styles={cardStyles}
          />
        ))}
      </div>
    </div>
  )
}
