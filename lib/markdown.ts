import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'
import { BlogPost } from './blog-config'

// Process markdown content
export async function processMarkdown(content: string): Promise<{
  data: any
  content: string
  html: string
}> {
  // Parse frontmatter
  const { data, content: markdownContent } = matter(content)
  
  // Convert markdown to HTML
  const processedContent = await remark()
    .use(remarkGfm) // GitHub Flavored Markdown
    .use(remarkHtml, { sanitize: false })
    .process(markdownContent)
  
  return {
    data,
    content: markdownContent,
    html: processedContent.toString()
  }
}

// Calculate reading time
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

// Generate excerpt from content
export function generateExcerpt(content: string, maxLength: number = 160): string {
  const plainText = content
    .replace(/[#*`_~]/g, '') // Remove markdown formatting
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim()
  
  if (plainText.length <= maxLength) {
    return plainText
  }
  
  return plainText.substring(0, maxLength).replace(/\s+\S*$/, '') + '...'
}

// Validate blog post data
export function validateBlogPost(data: any, content: string): BlogPost {
  const slug = data.slug || generateSlug(data.title)
  const excerpt = data.excerpt || generateExcerpt(content)
  const readTime = calculateReadingTime(content)
  
  return {
    slug,
    title: data.title || 'Untitled',
    excerpt,
    content,
    date: data.date || new Date().toISOString(),
    author: data.author || 'Paibupai Team',
    tags: Array.isArray(data.tags) ? data.tags : [],
    featured: Boolean(data.featured),
    coverImage: data.coverImage || data.image,
    readTime
  }
}

// Generate slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim()
}

// Format date for display
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-SG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
