import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-full bg-white flex flex-col lg:flex-row relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Image section - full width on mobile, 50% on desktop */}
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end px-4 lg:pr-12 py-12 lg:py-0 animate-fade-in">
        <div className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-[400px] lg:h-[500px] group">
          <div className="absolute inset-0 bg-primary/10 rounded-[2rem] transform rotate-3 group-hover:rotate-6 transition-transform duration-500 ease-out" />
          <Image
            src="/profile.png"
            alt="Asif Shaikh"
            fill
            className="object-cover rounded-[2rem] shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2"
            priority
            sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 50vw"
          />
        </div>
      </div>

      {/* Text content section - full width on mobile, 50% on desktop */}
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start px-4 lg:pl-12 py-8 lg:py-0">
        <div className="max-w-2xl text-center lg:text-left animate-fade-in-up">
          {/* Greeting */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-gray-900 mb-8 leading-tight tracking-tight">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Asif Shaikh</span>
          </h1>

          {/* Description paragraphs */}
          <div className="space-y-6 text-lg sm:text-xl text-gray-600 leading-relaxed font-light">
            <p>
              I build and scale mobile engineering systems — focusing on <span className="font-medium text-gray-900">developer experience</span>,
              <span className="font-medium text-gray-900"> modular architectures</span>, and <span className="font-medium text-gray-900">production performance</span> that feels effortless.
            </p>

            <p>
              I&apos;m currently based in Bangkok, Thailand, and work with <span className="font-medium text-gray-900">Agoda</span> as a Staff Mobile Engineer,
              where I focus on enabling mobile engineering at scale through improved developer
              workflows, faster CI/CD pipelines, and efficient build systems.
            </p>

            <p>
              From developer journeys and tooling to production performance, I&apos;m passionate about
              engineering mobile experiences that scale beautifully — for both users and developers.
            </p>

            <div className="pt-4">
              <p>
                Feel free to explore my{' '}
                <Link
                  href="/work-experience"
                  className="text-primary font-medium hover:text-primary/80 underline decoration-2 underline-offset-4 transition-colors duration-300"
                >
                  work experience
                </Link>
                {' '}and read my{' '}
                <Link
                  href="/blogs"
                  className="text-primary font-medium hover:text-primary/80 underline decoration-2 underline-offset-4 transition-colors duration-300"
                >
                  blogs
                </Link>
                . If something resonates with you or sparks a thought, don&apos;t hesitate to{' '}
                <Link
                  href="/contact"
                  className="text-primary font-medium hover:text-primary/80 underline decoration-2 underline-offset-4 transition-colors duration-300"
                >
                  reach out
                </Link>
                —I&apos;d love to connect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
