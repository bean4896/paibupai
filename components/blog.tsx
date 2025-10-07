import Post01 from '@/public/images/blog-01.jpg'
import Post02 from '@/public/images/blog-02.jpg'
import Post03 from '@/public/images/blog-03.jpg'
import PostAuthor01 from '@/public/images/blog-author-01.jpg'
import PostAuthor02 from '@/public/images/blog-author-02.jpg'
import PostAuthor03 from '@/public/images/blog-author-03.jpg'
import { Section, Heading, BlogCard } from './ui'

const blogPosts = [
  {
    image: Post01,
    title: "Concept Art & Illustrations by Stef Euphoria",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    authorName: "Knut Mayer",
    authorImage: PostAuthor01,
    href: "#0"
  },
  {
    image: Post02,
    title: "Patrick Chen's Branding by Thought & Found Studio",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    authorName: "Samuel Regan",
    authorImage: PostAuthor02,
    href: "#0"
  },
  {
    image: Post03,
    title: "Soma Brewing Branding & Packaging by Quim Martin",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    authorName: "Fabian Centero",
    authorImage: PostAuthor03,
    href: "#0"
  }
]

export default function Blog() {
  return (
    <Section padding="lg">
      {/* Section header */}
      <div className="pb-12 md:pb-20">
        <Heading level={2} variant="section" className="text-center md:text-left">
          From our blog
        </Heading>
      </div>
      
      {/* Posts */}
      <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            image={post.image}
            title={post.title}
            excerpt={post.excerpt}
            authorName={post.authorName}
            authorImage={post.authorImage}
            href={post.href}
            className={`data-aos-fade-down ${index > 0 ? `data-aos-delay-${index * 100}` : ''}`}
          />
        ))}
      </div>
    </Section>
  )
}