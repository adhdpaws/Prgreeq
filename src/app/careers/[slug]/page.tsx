import { PageHero } from "@/components/PageHero"
import { JobDetailContent } from "@/components/careers/JobDetailContent"
import { jobDetailConfig, jobDetailStyles } from "@/config/jobDetail.config"
import { notFound } from "next/navigation"

interface JobPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params
  const job = jobDetailConfig.jobs.find((j) => j.slug === slug)

  if (!job) {
    notFound()
  }

  return (
    <main className="flex flex-col">
      <PageHero
        badge="CAREER"
        headline={job.title}
        subtitle={job.shortDescription}
        styles={jobDetailStyles.hero}
      />

      <JobDetailContent job={job} styles={jobDetailStyles} />
    </main>
  )
}
