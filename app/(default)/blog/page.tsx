import { Metadata } from 'next'
import { Section, Heading, BlogCard } from '@/components/ui'
import { fetchAllPosts } from '@/lib/github-api'
import { formatDate } from '@/lib/markdown'

export const metadata: Metadata = {
  title: 'Blog - Paibupai Photography',
  description: 'Read our latest photography tips, Singapore event coverage, and creative insights from Paibupai\'s photography experts.',
}

export default async function Blog() {
  // Fetch blog posts from GitHub
  const posts = await fetchAllPosts()
  
  // Get unique categories from posts
  const allTags = posts.flatMap(post => post.tags)
  const uniqueTags = Array.from(new Set(allTags))
  
  // Create categories array
  const categories = [
    { name: "All", count: posts.length, active: true },
    ...uniqueTags.map(tag => ({
      name: tag,
      count: posts.filter(post => post.tags.includes(tag)).length,
      active: false
    }))
  ]

  return (
    <>
      {/* Hero Section */}
      <Section
        padding="none"
        className="relative pt-32 pb-12 md:pt-40 md:pb-20"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white pointer-events-none -z-10" aria-hidden="true" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Heading
              level={1}
              variant="display"
              className="mb-6"
              data-aos="fade-up"
            >
              Photography{' '}
              <span className="text-primary-500">Insights & Tips</span>
            </Heading>
            
            <p className="text-xl text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="100">
              Stay updated with the latest photography trends, Singapore event coverage, and professional insights from our team.
            </p>
          </div>
        </div>
      </Section>

      {/* Category Filter */}
      {categories.length > 1 && (
        <Section padding="sm" className="border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition duration-150 ease-in-out ${
                    category.active
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Blog Posts Grid */}
      <Section padding="lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {posts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <BlogCard
                  key={post.slug}
                  image={post.coverImage || '/images/blog-default.jpg'}
                  title={post.title}
                  excerpt={post.excerpt}
                  authorName={post.author}
                  authorImage="/images/blog-author-default.jpg"
                  href={`/blog/${post.slug}`}
                  date={formatDate(post.date)}
                  className={`data-aos-fade-up ${index > 0 ? `data-aos-delay-${index * 100}` : ''}`}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No blog posts yet</h3>
                <p className="text-gray-600 mb-6">
                  We're working on creating amazing content for you. Check back soon for photography tips and insights!
                </p>
                <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                  <p className="text-sm text-primary-800">
                    <strong>For content managers:</strong> Add markdown files to your GitHub repository to see them appear here automatically.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Section>
    </>
  )
}
