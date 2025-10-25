import { MapPin, DollarSign, Briefcase } from "lucide-react"
import Image from "next/image"

interface Job {
  slug: string
  title: string
  shortDescription: string
  details: {
    description: string
  }
  responsibilities: string[]
  qualifications: string[]
  benefits: string[]
  jobDetails: {
    location: string
    compensation: string
    type: string
    contact: {
      name: string
      role: string
      image: string
    }
  }
}

interface JobDetailContentProps {
  job: Job
  styles: any
}

export function JobDetailContent({ job, styles }: JobDetailContentProps) {
  return (
    <div className={styles.content.container}>
      <div className={styles.content.layout}>
        {/* Main Content - Left Side */}
        <div className={styles.content.mainContent}>
          {/* Details Section */}
          <section className={styles.section.container}>
            <h2 className={styles.section.title}>DETAILS</h2>
            <div className={styles.section.content}>
              <p className={styles.section.text}>{job.details.description}</p>
            </div>
          </section>

          {/* Responsibilities Section */}
          <section className={styles.section.container}>
            <h2 className={styles.section.title}>RESPONSIBILITIES</h2>
            <ul className={styles.section.list}>
              {job.responsibilities.map((responsibility, index) => (
                <li key={index} className={styles.section.listItem}>
                  <span className={styles.section.bullet}>•</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Qualifications Section */}
          <section className={styles.section.container}>
            <h2 className={styles.section.title}>QUALIFICATIONS</h2>
            <ul className={styles.section.list}>
              {job.qualifications.map((qualification, index) => (
                <li key={index} className={styles.section.listItem}>
                  <span className={styles.section.bullet}>•</span>
                  <span>{qualification}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Benefits Section */}
          <section className={styles.section.container}>
            <h2 className={styles.section.title}>BENEFITS</h2>
            <ul className={styles.section.list}>
              {job.benefits.map((benefit, index) => (
                <li key={index} className={styles.section.listItem}>
                  <span className={styles.section.bullet}>•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar - Right Side */}
        <aside className={styles.content.sidebar}>
          <div className={styles.detailsCard.container}>
            <h3 className={styles.detailsCard.title}>DETAILS</h3>

            <div className={styles.detailsCard.detailsList}>
              {/* Location */}
              <div className={styles.detailsCard.detailItem}>
                <MapPin className={styles.detailsCard.detailIcon} />
                <div className={styles.detailsCard.detailText}>
                  <span className={styles.detailsCard.detailValue}>
                    {job.jobDetails.location}
                  </span>
                </div>
              </div>

              {/* Compensation */}
              <div className={styles.detailsCard.detailItem}>
                <DollarSign className={styles.detailsCard.detailIcon} />
                <div className={styles.detailsCard.detailText}>
                  <span className={styles.detailsCard.detailValue}>
                    {job.jobDetails.compensation}
                  </span>
                </div>
              </div>

              {/* Job Type */}
              <div className={styles.detailsCard.detailItem}>
                <Briefcase className={styles.detailsCard.detailIcon} />
                <div className={styles.detailsCard.detailText}>
                  <span className={styles.detailsCard.detailValue}>
                    {job.jobDetails.type}
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.detailsCard.divider} />

            {/* Contact Section */}
            <div className={styles.detailsCard.contactSection}>
              <h4 className={styles.detailsCard.contactTitle}>CONTACT</h4>
              <div className={styles.detailsCard.contactCard}>
                <Image
                  src={job.jobDetails.contact.image}
                  alt={job.jobDetails.contact.name}
                  width={48}
                  height={48}
                  className={styles.detailsCard.contactImage}
                />
                <div className={styles.detailsCard.contactInfo}>
                  <span className={styles.detailsCard.contactName}>
                    {job.jobDetails.contact.name}
                  </span>
                  <span className={styles.detailsCard.contactRole}>
                    {job.jobDetails.contact.role}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
