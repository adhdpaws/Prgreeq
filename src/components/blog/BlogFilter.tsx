"use client"

import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Category {
  id: string
  label: string
}

interface BlogFilterProps {
  categories: Category[]
  activeCategory: string
  onCategoryChange: (categoryId: string) => void
  styles: {
    container: string
    mobileWrapper: string
    mobileSelect: string
    filterList: string
    filterButton: string
    filterButtonActive: string
    moreButton: string
  }
}

export function BlogFilter({
  categories,
  activeCategory,
  onCategoryChange,
  styles,
}: BlogFilterProps) {
  const [showAll, setShowAll] = useState(false)
  
  const visibleCategories = showAll ? categories : categories.slice(0, 4)
  const hasMore = categories.length > 4

  return (
    <div className={styles.container}>
      {/* Mobile dropdown view */}
      <div className={styles.mobileWrapper}>
        <span className="text-[#525252] text-sm font-medium whitespace-nowrap">Category ›</span>
        <Select
          value={activeCategory}
          onValueChange={onCategoryChange}
        >
          <SelectTrigger className={styles.mobileSelect}>
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent className="rounded-md border-[#E5E5E5]">
            {categories.map((category) => (
              <SelectItem 
                key={category.id} 
                value={category.id}
                className="rounded-sm focus:bg-[#F5F5F3] cursor-pointer"
              >
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Desktop filter buttons */}
      <div className={`${styles.filterList} hidden sm:flex`}>
        {visibleCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={
              activeCategory === category.id
                ? styles.filterButtonActive
                : styles.filterButton
            }
          >
            {category.label}
          </button>
        ))}
        {hasMore && (
          <button
            onClick={() => setShowAll(!showAll)}
            className={styles.moreButton}
          >
            {showAll ? "Less" : "More"}
          </button>
        )}
      </div>
    </div>
  )
}
