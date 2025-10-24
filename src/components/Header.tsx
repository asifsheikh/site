'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="bg-gray-50 border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              Asif Shaikh
            </Link>
          </div>
          
          {/* Desktop Navigation */}
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
                Blog
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
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-gray-900 p-2 transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
            <nav className="px-6 py-4">
              <div className="flex flex-col space-y-2">
                <Link
                  href="/work-experience"
                  className="text-gray-600 hover:text-gray-900 px-4 py-3 text-base font-medium transition-all duration-300 hover:bg-gray-50 rounded-lg"
                  onClick={closeMobileMenu}
                >
                  Work Experience
                </Link>
                <Link
                  href="/blogs"
                  className="text-gray-600 hover:text-gray-900 px-4 py-3 text-base font-medium transition-all duration-300 hover:bg-gray-50 rounded-lg"
                  onClick={closeMobileMenu}
                >
                  Blog
                </Link>
                <Link
                  href="/resume"
                  className="text-gray-600 hover:text-gray-900 px-4 py-3 text-base font-medium transition-all duration-300 hover:bg-gray-50 rounded-lg"
                  onClick={closeMobileMenu}
                >
                  Resume
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 px-4 py-3 text-base font-medium transition-all duration-300 hover:bg-gray-50 rounded-lg"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
