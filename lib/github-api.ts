import { blogConfig, githubApi, BlogPost, BlogPostFile } from './blog-config'
import { processMarkdown, validateBlogPost } from './markdown'

// Fetch all blog posts from GitHub
export async function fetchAllPosts(): Promise<BlogPost[]> {
  try {
    const { owner, repo, path, branch } = blogConfig.github
    const url = githubApi.getContents(owner, repo, path, branch)
    
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Paibupai-Blog'
      },
      next: { revalidate: blogConfig.api.revalidate }
    })
    
    if (!response.ok) {
      // Return empty array if repository not found or not configured yet
      if (response.status === 404) {
        console.warn('Blog repository not found or not configured yet. Please update lib/blog-config.ts')
        return []
      }
      throw new Error(`GitHub API error: ${response.status}`)
    }
    
    const files: BlogPostFile[] = await response.json()
    
    // Filter for markdown files
    const markdownFiles = files.filter(file => 
      file.type === 'file' && file.name.endsWith('.md')
    )
    
    // Process each markdown file
    const posts = await Promise.all(
      markdownFiles.map(async (file) => {
        try {
          const content = await fetchMarkdownContent(file.download_url)
          const { data, content: markdownContent } = await processMarkdown(content)
          return validateBlogPost(data, markdownContent)
        } catch (error) {
          console.error(`Error processing ${file.name}:`, error)
          return null
        }
      })
    )
    
    // Filter out failed posts and sort by date
    return posts
      .filter((post): post is BlogPost => post !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

// Fetch a specific blog post by slug
export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const { owner, repo, path, branch } = blogConfig.github
    const url = githubApi.getContents(owner, repo, path, branch)
    
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Paibupai-Blog'
      },
      next: { revalidate: blogConfig.api.revalidate }
    })
    
    if (!response.ok) {
      // Return null if repository not found or not configured yet
      if (response.status === 404) {
        console.warn('Blog repository not found or not configured yet. Please update lib/blog-config.ts')
        return null
      }
      throw new Error(`GitHub API error: ${response.status}`)
    }
    
    const files: BlogPostFile[] = await response.json()
    
    // Find the markdown file with matching slug
    const targetFile = files.find(file => 
      file.type === 'file' && 
      file.name.endsWith('.md') &&
      (file.name === `${slug}.md` || file.name.startsWith(`${slug}-`))
    )
    
    if (!targetFile) {
      return null
    }
    
    const content = await fetchMarkdownContent(targetFile.download_url)
    const { data, content: markdownContent } = await processMarkdown(content)
    return validateBlogPost(data, markdownContent)
    
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error)
    return null
  }
}

// Fetch featured posts
export async function fetchFeaturedPosts(): Promise<BlogPost[]> {
  const allPosts = await fetchAllPosts()
  return allPosts.filter(post => post.featured).slice(0, blogConfig.blog.featuredPostsCount)
}

// Fetch posts for pagination
export async function fetchPostsPage(page: number = 1): Promise<{
  posts: BlogPost[]
  totalPages: number
  currentPage: number
}> {
  const allPosts = await fetchAllPosts()
  const { postsPerPage } = blogConfig.blog
  
  const startIndex = (page - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const posts = allPosts.slice(startIndex, endIndex)
  
  const totalPages = Math.ceil(allPosts.length / postsPerPage)
  
  return {
    posts,
    totalPages,
    currentPage: page
  }
}

// Fetch raw markdown content from GitHub
async function fetchMarkdownContent(downloadUrl: string): Promise<string> {
  const response = await fetch(downloadUrl, {
    next: { revalidate: blogConfig.api.revalidate }
  })
  
  if (!response.ok) {
    throw new Error(`Failed to fetch markdown content: ${response.status}`)
  }
  
  return response.text()
}

// Get all post slugs for static generation
export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await fetchAllPosts()
  return posts.map(post => post.slug)
}
