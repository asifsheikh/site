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
    className={`group relative overflow-hidden rounded-[20px] p-7 h-56 flex flex-col justify-between transition-all duration-300 ease-out hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 bg-card border border-border/10 ${isProminent
        ? "shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)]"
        : "shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)]"
      }`}
  >
    {/* Background Node Injection */}
    <div className="absolute inset-0 transition-all duration-300 ease-out group-hover:brightness-[1.04] group-hover:saturate-[1.02]">
      {bgContent}
    </div>

    {/* Subtle Inner overlay for uniform readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/65 to-transparent transition-colors duration-300 group-hover:via-background/75" />
    <div className="absolute inset-0 ring-1 ring-inset ring-border/10" />

    {/* Content */}
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-foreground tracking-tight">{title}</h3>
        <span className="text-muted-foreground/70 transition-transform duration-300 group-hover:translate-x-0.5">
          →
        </span>
      </div>

      <div className="mt-4">
        <p className="text-[15px] text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-auto pt-6">
        <p className="text-xs font-medium text-foreground/70">
          Explore {title.toLowerCase()} →
        </p>
      </div>
    </div>
  </Link>
);

export default function Home() {
  return (
    <div className="min-h-full bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start animate-fade-in">
            <div className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-[420px] lg:h-[520px] group">
              <div className="absolute -inset-3 bg-primary/10 rounded-[2.25rem] blur-xl" />
              <div className="absolute inset-0 bg-primary/10 rounded-[2rem] transform rotate-2 group-hover:rotate-3 transition-transform duration-500 ease-out" />
              <Image
                src="/profile.png"
                alt="Asif Shaikh"
                fill
                className="object-cover rounded-[2rem] shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-1"
                priority
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 40vw"
              />
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-7 animate-fade-in-up">
            <div className="max-w-prose text-center lg:text-left mx-auto lg:mx-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6 leading-tight tracking-tight">
                Hi, I&apos;m Asif.
              </h1>

              <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
                <p>
                  I&apos;m curious about how things work — in code, people, places, and everyday life.
                </p>
                <p>
                  I build software, and I also travel and observe a lot. Over time, I&apos;ve realized both are just different ways of understanding systems — and the ways they shape us.
                </p>
                <p>
                  Currently based in Bangkok, collecting stories and learning in small iterations.
                </p>
              </div>

              {/* Quick links */}
              <div className="mt-10">
                <h2 className="text-sm font-semibold text-foreground/80 tracking-wide uppercase mb-4">
                  Explore
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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

              {/* CTA */}
              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Let&apos;s connect
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
