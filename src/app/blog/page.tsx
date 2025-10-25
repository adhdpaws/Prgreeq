"use client"

import { useState, useMemo } from "react"
import { PageHero } from "@/components/PageHero"
import { BlogFilter } from "@/components/blog/BlogFilter"
import { BlogGrid } from "@/components/blog/BlogGrid"
import { blogPageConfig, blogPageStyles } from "@/config/blogPage.config"
import { posts } from "#site/content"

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  // Transform Velite posts to match BlogGrid interface
  const transformedPosts = useMemo(() => {
    return posts
      .filter((post) => post.published)
      .map((post) => ({
        image: post.image || "/blog/thumbnail.png",
        title: post.title,
        description: post.description || "",
        category: post.category || "Uncategorized",
        slug: post.slug,
      }))
  }, [])

  // Filter posts based on active category
  const filteredPosts = useMemo(() => {
    if (activeCategory === "all") {
      return transformedPosts
    }
    return transformedPosts.filter((post) =>
      post.category
        .toLowerCase()
        .includes(activeCategory.toLowerCase().replace(/-/g, " "))
    )
  }, [activeCategory, transformedPosts])

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
