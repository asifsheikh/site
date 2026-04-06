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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-gray-900 mb-8 leading-tight tracking-tight">
            Hi, I&apos;m Asif.
          </h1>

          <div className="space-y-6 text-lg sm:text-xl text-gray-600 leading-relaxed font-light">
            <p>
              I build things, explore places, and write about what I learn along the way.
            </p>

            <p>
              Currently based in Bangkok — moving between code, cities, and perspectives that shape how I see the world.
            </p>

            <p>
              I&apos;m an engineer by profession, but I&apos;m equally curious about the world beyond it.
              I enjoy understanding how things work — from systems and products to people and everyday life.
              Travel has become a big part of that journey, helping me see things differently and think more clearly.
            </p>

            <div className="pt-4 pb-2">
              <p className="font-medium text-gray-900 mb-4 text-left">I spend my time across a few different worlds:</p>
              
              <div className="space-y-6 text-left">
                <div className="group">
                  <Link href="/travel" className="block">
                    <h3 className="text-xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors flex items-center lg:justify-start justify-center gap-2">
                      <span className="text-gray-400">→</span> Travel
                    </h3>
                    <p className="text-base text-gray-500 mt-1 lg:ml-6">Stories and reflections from places I&apos;ve experienced.</p>
                  </Link>
                </div>

                <div className="group">
                  <Link href="/blogs" className="block">
                    <h3 className="text-xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors flex items-center lg:justify-start justify-center gap-2">
                      <span className="text-gray-400">→</span> Thoughts
                    </h3>
                    <p className="text-base text-gray-500 mt-1 lg:ml-6">Ideas, observations, and things I&apos;m still figuring out.</p>
                  </Link>
                </div>

                <div className="group">
                  <Link href="/work-experience" className="block">
                    <h3 className="text-xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors flex items-center lg:justify-start justify-center gap-2">
                      <span className="text-gray-400">→</span> Work
                    </h3>
                    <p className="text-base text-gray-500 mt-1 lg:ml-6">What I build and how I think about systems.</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <p>
                If something here resonates with you, I&apos;d love to hear from you.
              </p>
              <Link
                href="/contact"
                className="inline-block mt-4 text-gray-900 font-medium hover:text-gray-600 underline decoration-gray-300 decoration-2 underline-offset-4 hover:decoration-gray-600 transition-all duration-300"
              >
                Let&apos;s connect.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
