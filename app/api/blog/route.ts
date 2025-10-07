import { NextRequest, NextResponse } from 'next/server'
import { fetchAllPosts, fetchPostsPage } from '@/lib/github-api'

// GET /api/blog - Fetch all blog posts or paginated posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = searchParams.get('page')
    const featured = searchParams.get('featured')
    
    if (featured === 'true') {
      // Return only featured posts
      const { fetchFeaturedPosts } = await import('@/lib/github-api')
      const posts = await fetchFeaturedPosts()
      return NextResponse.json({ posts })
    }
    
    if (page) {
      // Return paginated posts
      const pageNumber = parseInt(page, 10)
      if (isNaN(pageNumber) || pageNumber < 1) {
        return NextResponse.json(
          { error: 'Invalid page number' },
          { status: 400 }
        )
      }
      
      const result = await fetchPostsPage(pageNumber)
      return NextResponse.json(result)
    }
    
    // Return all posts
    const posts = await fetchAllPosts()
    return NextResponse.json({ posts })
    
  } catch (error) {
    console.error('Blog API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    )
  }
}
