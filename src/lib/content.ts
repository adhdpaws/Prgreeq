// Import the generated collections from Velite
import { posts, services } from '#site/content'

/**
 * Example usage of Velite-generated content
 * 
 * The collections are fully typed and available at build time
 */

// Example 1: Get all published posts
export function getAllPosts() {
  return posts.filter(post => post.published)
}

// Example 2: Get a single post by slug
export function getPostBySlug(slug: string) {
  return posts.find(post => post.slug === slug)
}

// Example 3: Get posts by category
export function getPostsByCategory(category: string) {
  return posts.filter(post => post.category === category && post.published)
}

// Example 4: Get all published services
export function getAllServices() {
  return services.filter(service => service.published)
}

// Example 5: Get a single service by slug
export function getServiceBySlug(slug: string) {
  return services.find(service => service.slug === slug)
}

// Example 6: Get services by category
export function getServicesByCategory(category: string) {
  return services.filter(service => service.category === category && service.published)
}

/**
 * Type information is automatically available:
 * 
 * Each post has:
 * - title: string
 * - slug: string
 * - description?: string
 * - date: string (ISO date)
 * - published: boolean
 * - category?: string
 * - image?: string
 * - body: string (HTML content)
 * - permalink: string (e.g., "/blog/welcome-to-our-blog")
 * 
 * Each service has:
 * - title: string
 * - slug: string
 * - description?: string
 * - subtitle?: string
 * - category?: string
 * - image?: string
 * - published: boolean
 * - body: string (HTML content)
 * - permalink: string (e.g., "/services/elearning-development")
 */
