import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface Job {
  id: string
  title: string
  description: string
  type: string
  location: string
}

interface JobListingProps {
  jobs: Job[]
  styles: {
    container: string
    stickyHeader: string
    headerText: string
    listContainer: string
    jobCard: {
      container: string
      content: string
      leftSection: string
      title: string
      description: string
      rightSection: string
      metaGroup: string
      badge: string
      arrow: string
    }
  }
}

export function JobListing({ jobs, styles }: JobListingProps) {
  return (
    <section className={styles.container}>
      <div className="flex flex-col lg:flex-row">
        {/* Left Section - OPEN JOBS */}
        <div className={styles.stickyHeader}>
          <h2 className={styles.headerText}>OPEN JOBS</h2>
        </div>

        {/* Right Section - Job Cards */}
        <div className={styles.listContainer}>
          {jobs.map((job) => (
            <Link key={job.id} href={`/careers/${job.id}`}>
              <article className={styles.jobCard.container}>
                <div className={styles.jobCard.content}>
                  {/* Left Section - Title and Description */}
                  <div className={styles.jobCard.leftSection}>
                    <h3 className={styles.jobCard.title}>{job.title}</h3>
                    <p className={styles.jobCard.description}>{job.description}</p>
                  </div>

                  {/* Right Section - Job Type, Location, and Arrow */}
                  <div className={styles.jobCard.rightSection}>
                    <div className={styles.jobCard.metaGroup}>
                      <span className={styles.jobCard.badge}>{job.type}</span>
                      <span className={styles.jobCard.badge}>{job.location}</span>
                    </div>
                    <div className={styles.jobCard.arrow}>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
