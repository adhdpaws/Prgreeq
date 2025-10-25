import { defineConfig, defineCollection, s } from 'velite'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'

// Define blog posts collection
const posts = defineCollection({
  name: 'Post',
  pattern: 'blog/**/*.md',
  schema: s
    .object({
      title: s.string().max(99),
      slug: s.slug('blog'),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      category: s.string().optional(),
      image: s.string().optional(),
      body: s.markdown(),
    })
    .transform(data => ({ ...data, permalink: `/blog/${data.slug}` }))
})

// Define services collection
const services = defineCollection({
  name: 'Service',
  pattern: 'services/**/*.md',
  schema: s
    .object({
      title: s.string().max(99),
      slug: s.slug('services'),
      description: s.string().max(999).optional(),
      subtitle: s.string().max(200).optional(),
      category: s.string().optional(),
      image: s.string().optional(),
      published: s.boolean().default(true),
      body: s.markdown(),
    })
    .transform(data => ({ ...data, permalink: `/services/${data.slug}` }))
})

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true
  },
  collections: { posts, services },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          keepBackground: false,
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['anchor'],
            ariaLabel: 'Link to section'
          }
        }
      ]
    ],
    remarkPlugins: [remarkGfm]
  }
})
