import Image from 'next/image'
import Link from 'next/link'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  category: string
  readTime: string
  publishDate: string
  slug: string
  featured?: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding the Open-Closed Principle in Software Engineering',
    excerpt: 'Dive into the Open-Closed Principle (OCP) from SOLID principles. Learn how to design code that&apos;s open for extension but closed for modification, with practical Kotlin examples for Android development.',
    image: '/blog-images/OCP.png',
    category: 'Software Design',
    readTime: '8 min read',
    publishDate: 'May 14, 2025',
    slug: 'open-closed-principle',
    featured: true
  },
  {
    id: '7',
    title: 'Kotlin Multiplatform vs Flutter: A Simple Comparison for Android Developers',
    excerpt: 'A practical comparison between Kotlin Multiplatform and Flutter for Android developers. Learn when to choose each technology, their strengths, weaknesses, and real-world considerations.',
    image: '/blog-images/kmp.png',
    category: 'Tech',
    readTime: '6 min read',
    publishDate: 'April 1, 2025',
    slug: 'kotlin-multiplatform-vs-flutter'
  },
  {
    id: '8',
    title: 'Navigating Team Dynamics: An Engineer&apos;s Guide to Seamless Embedding at Spotify',
    excerpt: 'Learn about Spotify&apos;s unique approach to internal mobility and team embedding. Discover how engineers can grow by working across different teams and the benefits this brings to both personal development and organizational culture.',
    image: '/blog-images/team_dynamics.png',
    category: 'Tech',
    readTime: '8 min read',
    publishDate: 'December 17, 2023',
    slug: 'navigating-team-dynamics-spotify'
  },
  {
    id: '9',
    title: 'Getting Interviewed at Spotify – A Dream Come True',
    excerpt: 'My journey through Spotify&apos;s interview process for an Android Engineering position in Stockholm. Learn about their structured approach, remote interviews, and the four distinct final rounds that make Spotify stand out.',
    image: '/blog-images/spotify_interview.png',
    category: 'Tech',
    readTime: '7 min read',
    publishDate: 'February 6, 2022',
    slug: 'getting-interviewed-at-spotify'
  },
  {
    id: '10',
    title: 'SOLID Principles – Separation of Concern',
    excerpt: 'The first in a series on SOLID principles. Learn about Separation of Concern (SoC) - a foundational concept that helps organize code so each part does only one kind of task. Includes practical Kotlin examples.',
    image: '/blog-images/solid.png',
    category: 'Tech',
    readTime: '5 min read',
    publishDate: 'April 6, 2019',
    slug: 'solid-principles-separation-of-concern'
  },
  {
    id: '6',
    title: 'The Art of Code Reviews: Building Better Teams',
    excerpt: 'How to conduct effective code reviews that improve code quality, knowledge sharing, and team collaboration. Practical tips from years of experience in mobile engineering teams.',
      image: '/blog-images/code_review.png',
    category: 'Team Building',
    readTime: '9 min read',
    publishDate: 'March 5, 2025',
    slug: 'art-of-code-reviews'
  }
]

export default function BlogsPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Thoughts on mobile engineering, developer experience, and building scalable systems. 
            Sharing lessons learned from startups to scale-ups.
          </p>
        </div>

        {/* Featured Blog Post */}
        {featuredPost && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Featured Post</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover rounded-l-2xl md:rounded-l-2xl rounded-t-2xl md:rounded-t-none"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{featuredPost.publishDate}</span>
                    <Link
                      href={`/blogs/${featuredPost.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Blog Posts Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">All Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">•</span>
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">{post.publishDate}</span>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-300"
                    >
                      Read More
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Keep Checking Back */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            More Content Coming Soon
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I&apos;m constantly working on new posts about mobile engineering, developer experience, 
            and building scalable systems. Keep checking back for fresh insights and practical tips!
          </p>
          <div className="flex justify-center">
            <div className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Check back regularly for updates
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
