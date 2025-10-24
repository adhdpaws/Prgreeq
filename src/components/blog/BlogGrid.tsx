import { BlogCard, type BlogCardProps } from "./BlogCard"

interface BlogPost {
  image: string
  title: string
  description: string
  category: string
  slug: string
}

interface BlogGridProps {
  posts: BlogPost[]
  styles: {
    container: string
    grid: string
    card: BlogCardProps["styles"]
  }
}

export function BlogGrid({ posts, styles }: BlogGridProps) {
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            image={post.image}
            title={post.title}
            description={post.description}
            category={post.category}
            slug={post.slug}
            styles={styles.card}
          />
        ))}
      </div>
    </section>
  )
}
