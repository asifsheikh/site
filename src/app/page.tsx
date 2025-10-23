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
                Hi, I&apos;m <span className="text-gray-900">Asif Shaikh</span>
          </h1>
          
          {/* Description paragraphs */}
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              I build and scale mobile engineering systems — focusing on developer experience, 
              modular architectures, and production performance that feels effortless.
            </p>
            
            <p>
                  I&apos;m currently based in Bangkok, Thailand, and work with Agoda as a Staff Mobile Engineer,
              where I focus on enabling mobile engineering at scale through improved developer 
              workflows, faster CI/CD pipelines, and efficient build systems.
            </p>
            
            <p>
                  From developer journeys and tooling to production performance, I&apos;m passionate about
              engineering mobile experiences that scale beautifully — for both users and developers.
            </p>
            
            <p>
              Feel free to explore my{' '}
              <Link 
                href="/work-experience" 
                className="underline decoration-2 underline-offset-4 hover:text-gray-900 transition-colors duration-300 font-medium"
              >
                work experience
              </Link>
              {' '}and read my{' '}
              <Link 
                href="/blogs" 
                className="underline decoration-2 underline-offset-4 hover:text-gray-900 transition-colors duration-300 font-medium"
              >
                blogs
              </Link>
              . If something resonates with you or sparks a thought, don&apos;t hesitate to{' '}
              <Link 
                href="/contact" 
                className="underline decoration-2 underline-offset-4 hover:text-gray-900 transition-colors duration-300 font-medium"
              >
                reach out
              </Link>
              —I&apos;d love to connect.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
