import Image from 'next/image'
import Link from 'next/link'

interface CategoryCardProps {
  title: string;
  description: string;
  link: string;
  bgContent: React.ReactNode;
  isProminent?: boolean;
}

const CategoryCard = ({ title, description, link, bgContent, isProminent }: CategoryCardProps) => (
  <Link
    href={link}
    className={`group relative overflow-hidden rounded-[20px] p-8 h-56 flex flex-col justify-end transition-all duration-300 ease-out hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 bg-white border border-black/[0.04] ${
      isProminent 
        ? "shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)]" 
        : "shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)]"
    }`}
  >
    {/* Background Node Injection */}
    <div className="absolute inset-0 transition-all duration-300 ease-out group-hover:brightness-[1.03]">
      {bgContent}
    </div>
    
    {/* Subtle Inner overlay for uniform readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-transparent transition-colors duration-300 group-hover:from-white group-hover:via-white/70" />
    
    {/* Content */}
    <div className="relative z-10 transition-transform duration-300 ease-out">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed max-w-[95%]">
        {description}
      </p>
    </div>
  </Link>
);

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
              I&apos;m someone who&apos;s curious about how things work — not just in code, but in people, places, and everyday life.
            </p>

            <p>
              I build software, but I also spend a lot of time exploring the world, observing, and trying to make sense of what I see. Over time, I&apos;ve realized that both — building and exploring — are just different ways of understanding the same thing: how systems work, and how they shape us.
            </p>

            <p>
              Lately, I&apos;ve been moving between cities, perspectives, and ideas — currently based in Bangkok — letting each place change how I think, even in small ways.
            </p>
            
            <p>
              This space is a reflection of that journey.
            </p>

            <div className="pt-8 pb-4 w-full">
              <h2 className="text-xl font-medium text-gray-900 mb-8 text-left">
                I spend my time across a few different worlds:
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <CategoryCard 
                  title="Travel" 
                  description="Places, moments, and stories that stayed with me." 
                  link="/travel" 
                  bgContent={
                    <div className="w-full h-full bg-gradient-to-br from-orange-50/80 via-rose-50/50 to-sky-50/60" />
                  }
                />
                
                <CategoryCard 
                  title="Thoughts" 
                  description="Ideas, questions, and observations I'm still exploring." 
                  link="/blogs" 
                  isProminent={true}
                  bgContent={
                    <div className="w-full h-full bg-gradient-to-tr from-purple-50/60 via-indigo-50/30 to-blue-50/40" />
                  }
                />
                
                <CategoryCard 
                  title="Work" 
                  description="Things I've built and how I think about systems." 
                  link="/work-experience" 
                  bgContent={
                    <div className="w-full h-full bg-gray-50/50 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px] opacity-15" />
                  }
                />
              </div>
            </div>

            <div className="pt-6">
              <p>
                If something here resonates, I&apos;d love to connect.
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
