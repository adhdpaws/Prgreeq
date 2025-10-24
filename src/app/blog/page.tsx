"use client"

import { useState } from "react"
import { PageHero } from "@/components/PageHero"
import { BlogFilter } from "@/components/blog/BlogFilter"
import { BlogGrid } from "@/components/blog/BlogGrid"
import { blogPageConfig, blogPageStyles } from "@/config/blogPage.config"

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  // Filter posts based on active category
  const filteredPosts =
    activeCategory === "all"
      ? blogPageConfig.posts
      : blogPageConfig.posts.filter((post) =>
          post.category
            .toLowerCase()
            .includes(activeCategory.toLowerCase().replace(/-/g, " "))
        )

  return (
    <main className="flex flex-col">
      <PageHero
        badge={blogPageConfig.hero.badge}
        headline={blogPageConfig.hero.headline}
        subtitle={blogPageConfig.hero.subtitle}
        styles={blogPageStyles.hero}
      />

      <BlogFilter
        categories={blogPageConfig.filter.categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        styles={blogPageStyles.filter}
      />

      <BlogGrid posts={filteredPosts} styles={blogPageStyles.grid} />
    </main>
  )
}
