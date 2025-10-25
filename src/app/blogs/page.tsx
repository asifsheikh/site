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
    excerpt: 'Dive into the Open-Closed Principle (OCP) from SOLID principles. Learn how to design code that\'s open for extension but closed for modification, with practical Kotlin examples for Android development.',
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
    title: 'Navigating Team Dynamics: An Engineer\'s Guide to Seamless Embedding at Spotify',
    excerpt: 'Learn about Spotify\'s unique approach to internal mobility and team embedding. Discover how engineers can grow by working across different teams and the benefits this brings to both personal development and organizational culture.',
    image: '/blog-images/team_dynamics.png',
    category: 'Tech',
    readTime: '8 min read',
    publishDate: 'December 17, 2023',
    slug: 'navigating-team-dynamics-spotify'
  },
  {
    id: '2',
    title: 'Building Mobile Apps at Scale: Lessons from Spotify',
    excerpt: 'Sharing insights from my time at Spotify, where I worked on the Premium experience for Asian markets. Learn about Mobius architecture, Bazel monorepos, and scaling mobile engineering.',
    image: '/blog-images/spotify-mobile.jpg',
    category: 'Mobile Engineering',
    readTime: '12 min read',
    publishDate: 'April 28, 2025',
    slug: 'spotify-mobile-scale'
  },
  {
    id: '3',
    title: 'Developer Experience: Why It Matters More Than You Think',
    excerpt: 'Exploring how improving developer workflows, CI/CD pipelines, and build systems can dramatically impact team productivity and code quality in mobile development.',
    image: '/blog-images/developer-experience.jpg',
    category: 'Developer Experience',
    readTime: '10 min read',
    publishDate: 'April 15, 2025',
    slug: 'developer-experience-matters'
  },
  {
    id: '4',
    title: 'From Startup to Scale-up: My Journey Through Mobile Engineering',
    excerpt: 'Reflecting on my career journey from early-stage startups like Dunzo to scale-ups like GoJek and Spotify. Key lessons learned about building mobile teams and systems.',
    image: '/blog-images/startup-journey.jpg',
    category: 'Career Journey',
    readTime: '15 min read',
    publishDate: 'March 30, 2025',
    slug: 'startup-to-scaleup-journey'
  },
  {
    id: '5',
    title: 'CI/CD Pipelines: Making Mobile Development Faster',
    excerpt: 'Deep dive into optimizing CI/CD pipelines for mobile development. Learn about build optimization, test automation, and deployment strategies that actually work.',
    image: '/blog-images/cicd-pipelines.jpg',
    category: 'DevOps',
    readTime: '11 min read',
    publishDate: 'March 18, 2025',
    slug: 'mobile-cicd-optimization'
  },
  {
    id: '6',
    title: 'The Art of Code Reviews: Building Better Teams',
    excerpt: 'How to conduct effective code reviews that improve code quality, knowledge sharing, and team collaboration. Practical tips from years of experience in mobile engineering teams.',
    image: '/blog-images/code-reviews.jpg',
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

        {/* Newsletter Signup */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get notified when I publish new posts about mobile engineering, developer experience, 
            and building scalable systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
