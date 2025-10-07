// Blog configuration for GitHub markdown integration
export const blogConfig = {
  // GitHub repository settings
  github: {
    owner: 'your-username', // Replace with your GitHub username
    repo: 'paibupai-blog', // Replace with your blog repository name
    branch: 'main', // Branch where markdown files are stored
    path: 'posts', // Directory in repo where posts are stored
  },
  
  // Blog settings
  blog: {
    title: 'Paibupai Photography Blog',
    description: 'Professional photography insights, tips, and stories from Singapore',
    postsPerPage: 6,
    featuredPostsCount: 3,
  },
  
  // API settings
  api: {
    cacheTime: 60 * 60 * 1000, // 1 hour cache
    revalidate: 3600, // Revalidate every hour
  }
}

// GitHub API endpoints
export const githubApi = {
  baseUrl: 'https://api.github.com',
  rawBaseUrl: 'https://raw.githubusercontent.com',
  
  // Get repository contents
  getContents: (owner: string, repo: string, path: string, branch: string = 'main') => 
    `${githubApi.baseUrl}/repos/${owner}/${repo}/contents/${path}?ref=${branch}`,
  
  // Get raw file content
  getRawFile: (owner: string, repo: string, path: string, branch: string = 'main') =>
    `${githubApi.rawBaseUrl}/${owner}/${repo}/${branch}/${path}`,
}

// Blog post metadata interface
export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  tags: string[]
  featured: boolean
  coverImage?: string
  readTime: number
}

// Blog post file structure in GitHub
export interface BlogPostFile {
  name: string
  path: string
  download_url: string
  type: 'file'
}
