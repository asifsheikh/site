import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors duration-300"
            >
              Asif Shaikh
            </Link>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link
                href="/work-experience"
                className="text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-white hover:shadow-sm rounded-lg"
              >
                Work Experience
              </Link>
              <Link
                href="/blogs"
                className="text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-white hover:shadow-sm rounded-lg"
              >
                Blogs
              </Link>
              <Link
                href="/books"
                className="text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-white hover:shadow-sm rounded-lg"
              >
                📚 Books
              </Link>
              <Link
                href="/resume"
                className="text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-white hover:shadow-sm rounded-lg"
              >
                Resume
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-white hover:shadow-sm rounded-lg"
              >
                Contact
              </Link>
            </div>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
