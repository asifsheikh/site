import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-full bg-white flex">
      {/* Image section - takes up 50% of screen width, image right-aligned */}
      <div className="w-1/2 flex items-center justify-end pr-8">
        <div className="relative w-1/2 h-2/3">
          <Image
            src="/profile.png"
            alt="Asif Shaikh"
            fill
            className="object-cover rounded-3xl shadow-2xl"
            priority
          />
          {/* Subtle overlay for better text contrast if needed */}
          <div className="absolute inset-0 rounded-3xl bg-black/5"></div>
        </div>
      </div>

      {/* Text content section - takes up remaining 50% of screen, centered with image */}
      <div className="w-1/2 flex items-center justify-start pl-8">
        <div className="max-w-2xl text-center lg:text-left">
          {/* Greeting */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Hi, I'm <span className="text-gray-900">Asif Shaikh</span>
          </h1>
          
          {/* Description paragraphs */}
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Welcome to my digital space. I'm a passionate builder, thinker, and creator, 
              currently working on meaningful tech projects and products that bridge distance 
              and bring people closer—both literally and emotionally.
            </p>
            
            <p>
              Feel free to explore my{' '}
              <Link 
                href="/work-experience" 
                className="underline decoration-2 underline-offset-4 hover:text-gray-900 transition-colors duration-300 font-medium"
              >
                Work Experience
              </Link>
              {' '}and read my{' '}
              <Link 
                href="/blogs" 
                className="underline decoration-2 underline-offset-4 hover:text-gray-900 transition-colors duration-300 font-medium"
              >
                Blogs
              </Link>
              . If anything resonates or you'd like to collaborate,{' '}
              <Link 
                href="/contact" 
                className="underline decoration-2 underline-offset-4 hover:text-gray-900 transition-colors duration-300 font-medium"
              >
                get in touch
              </Link>
              —I'd love to hear from you.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
