"use client"

import Link from "next/link"
import { ArrowLeft, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface BlogPostHeaderProps {
  date: string
  category: string
  readingTime: string
  title: string
  description: string
  styles: {
    container: string
    metaSection: string
    metaItem: string
    metaLabel: string
    metaValue: string
    separator: string
    contentSection: string
    title: string
    description: string
    actionSection: string
    backButton: string
    readMoreButton: string
  }
}

export function BlogPostHeader({
  date,
  category,
  readingTime,
  title,
  description,
  styles,
}: BlogPostHeaderProps) {
  const scrollToContent = () => {
    window.scrollBy({
      top: window.innerHeight * 0.8,
      behavior: "smooth",
    })
  }

  return (
    <header className={styles.container}>
      {/* Title and Description - Shows first on mobile */}
      <div className={styles.contentSection}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>

      {/* Meta Information - Shows after title on mobile, before on desktop */}
      <div className={styles.metaSection}>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>DATE</span>
          <Separator className={styles.separator} />
          <span className={styles.metaValue}>{date}</span>
        </div>

        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>CATEGORY</span>
          <Separator className={styles.separator} />
          <span className={styles.metaValue}>{category}</span>
        </div>

        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>READING TIME</span>
          <Separator className={styles.separator} />
          <span className={styles.metaValue}>{readingTime}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className={styles.actionSection}>
        <Link href="/blog">
          <Button variant="ghost" className={styles.backButton}>
            Go Back
          </Button>
        </Link>

        <Button
          variant="default"
          className={styles.readMoreButton}
          onClick={scrollToContent}
        >
          <div className="w-5 h-5 sm:w-10 sm:h-10 bg-[#2D2926] flex items-center justify-center">
            <ArrowDown className="w-2.5 h-2.5 sm:w-5 sm:h-5 text-white" />
          </div>
          <span>READ MORE</span>
        </Button>
      </div>
    </header>
  )
}
