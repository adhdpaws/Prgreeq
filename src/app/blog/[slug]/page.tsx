import { notFound } from "next/navigation"
import { posts } from "#site/content"
import { BlogPostHeader } from "@/components/blog/BlogPostHeader"
import { BlogPostImage } from "@/components/blog/BlogPostImage"
import { ShareSidebar } from "@/components/blog/ShareSidebar"
import { blogPostStyles, formatDate, calculateReadingTime } from "@/config/blogPost.config"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

async function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug)
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post || !post.published) {
    notFound()
  }

  const formattedDate = formatDate(post.date)
  const readingTime = calculateReadingTime(post.body)
  const postUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://prgeeq.com'}/blog/${slug}`

  return (
    <main className="flex flex-col">
      <BlogPostHeader
        date={formattedDate}
        category={post.category || "Uncategorized"}
        readingTime={readingTime}
        title={post.title}
        description={post.description || ""}
        styles={blogPostStyles.header}
      />

      {post.image && (
        <BlogPostImage
          image={post.image}
          alt={post.title}
          styles={blogPostStyles.image}
        />
      )}

      <div className="relative w-full px-4 sm:px-6 md:px-16 lg:px-24 xl:px-40 py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-48 max-w-7xl mx-auto">
          <ShareSidebar url={postUrl} title={post.title} className="order-2 lg:order-1" />
          
          <article className="flex-1 min-w-0 order-1 lg:order-2">
            <div
              className={blogPostStyles.content.prose}
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
          </article>
        </div>
      </div>
    </main>
  )
}
