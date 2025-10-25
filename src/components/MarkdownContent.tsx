/**
 * MarkdownContent Component
 * 
 * Renders markdown HTML with proper styling
 * Includes support for:
 * - Syntax highlighting (via rehype-pretty-code)
 * - Anchor links (via rehype-slug + rehype-autolink-headings)
 * - GFM features: tables, task lists, strikethrough (via remark-gfm)
 */

interface MarkdownContentProps {
  html: string
  className?: string
}

export function MarkdownContent({ html, className = '' }: MarkdownContentProps) {
  return (
    <div
      className={`prose ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

/**
 * Usage Example:
 * 
 * import { posts } from '#site/content'
 * import { MarkdownContent } from '@/components/MarkdownContent'
 * 
 * const post = posts[0]
 * 
 * <MarkdownContent html={post.body} />
 */
