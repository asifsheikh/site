import Image from 'next/image'

interface WorkExperience {
  company: string
  location: string
  role: string
  period: string
  description: string
  logo: string
}

const workExperiences: WorkExperience[] = [
  {
    company: "Agoda",
    location: "Bangkok, Thailand",
    role: "Staff Mobile Engineer",
    period: "Nov 2025 – Present",
    description: "Part of the Developer Experience team, driving initiatives that enable mobile engineering at scale. Focused on improving developer workflows, accelerating CI/CD pipelines, optimizing local build times, and building robust modular architectures. My work ensures that engineers at Agoda can deliver world-class mobile experiences faster, safer, and with higher confidence.",
    logo: "/logos/agoda.png"
  },
  {
    company: "Freelancing / Independent Consulting",
    location: "Pune, India",
    role: "Independent Mobile Consultant",
    period: "Feb 2025 – Oct 2025",
    description: "Worked independently with startups and small teams to design and develop end-to-end mobile apps across Android and iOS. Built products from concept to deployment using Flutter, Firebase, and native technologies, spanning fintech, social, and productivity domains. This phase deepened my understanding of user-centered design, client collaboration, and product thinking.",
    logo: "/logos/freelance.png"
  },
  {
    company: "Spotify",
    location: "Berlin, Germany",
    role: "Senior Android Engineer",
    period: "Feb 2022 – Oct 2024",
    description: "Contributed to the Spotify Premium experience for Asian markets, enhancing personalization and performance. Worked with Kotlin and Mobius architecture on a Bazel-based monorepo, ensuring scalable and maintainable feature development. Collaborated closely with cross-functional teams — backend, design, and data — to deliver high-impact improvements while maintaining high test coverage and build reliability.",
    logo: "/logos/spotify.png"
  },
  {
    company: "GoJek",
    location: "Bengaluru, India",
    role: "Senior Android Engineer",
    period: "Mar 2019 – Oct 2021",
    description: "Led feature development on the Driver Platform team, focusing on reliability and scalability. Designed modular, testable code using MVP and Clean Architecture principles. Advocated for better code reviews, automated tests, and continuous integration practices — improving engineering velocity and code quality across the team.",
    logo: "/logos/gojek.png"
  },
  {
    company: "Dunzo",
    location: "Bengaluru, India",
    role: "Android Engineer & Project Lead",
    period: "2018 – 2019",
    description: "Joined early in Dunzo's growth phase, helping to rewrite the entire user app using modern Android tools — Kotlin, RxJava, and MVI. Introduced Test-Driven Development and standardized architecture patterns, setting a foundation for future scalability.",
    logo: "/logos/dunzo.png"
  },
  {
    company: "Ola",
    location: "Bengaluru, India",
    role: "Android Engineer",
    period: "Aug 2017 – May 2018",
    description: "Worked on customer-facing features in one of India's most widely used mobility apps. Gained hands-on experience optimizing app performance at scale and integrating real-time data-driven features for millions of users.",
    logo: "/logos/ola.png"
  },
  {
    company: "Persistent Systems",
    location: "Pune, India",
    role: "Android Engineer",
    period: "2014 – 2015",
    description: "Started my professional journey at Persistent Systems, where I developed Android apps for enterprise clients. Built a strong foundation in Android fundamentals, software architecture, and collaborative engineering.",
    logo: "/logos/persistent.png"
  }
]

export default function WorkExperience() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Work Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through mobile engineering, from enterprise development to scaling 
            developer experience at leading tech companies.
          </p>
        </div>

          {/* Work Experience Cards */}
          <div className="space-y-12">
            {workExperiences.map((experience, index) => (
              <div
                key={index}
                className="bg-card text-card-foreground border border-border/10 rounded-2xl p-8 hover:shadow-xl hover:border-border/20 transition-all duration-500 hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  opacity: 0,
                  transform: 'translateY(20px)'
                }}
              >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Company Logo */}
                <div className="flex-shrink-0 flex justify-center lg:justify-start">
                  {experience.company === "Spotify" ? (
                    <a
                      href="https://open.spotify.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:opacity-80 transition-opacity duration-300"
                    >
                      <Image
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </a>
                  ) : experience.company === "Agoda" ? (
                    <a
                      href="https://www.agoda.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:opacity-80 transition-opacity duration-300"
                    >
                      <Image
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </a>
                  ) : experience.company === "GoJek" ? (
                    <a
                      href="https://www.gojek.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:opacity-80 transition-opacity duration-300"
                    >
                      <Image
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </a>
                  ) : experience.company === "Dunzo" ? (
                    <a
                      href="https://www.dunzo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:opacity-80 transition-opacity duration-300"
                    >
                      <Image
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </a>
                  ) : experience.company === "Ola" ? (
                    <a
                      href="https://www.olacabs.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:opacity-80 transition-opacity duration-300"
                    >
                      <Image
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </a>
                  ) : experience.company === "Persistent Systems" ? (
                    <a
                      href="https://www.persistent.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:opacity-80 transition-opacity duration-300"
                    >
                      <Image
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </a>
                  ) : (
                    <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center overflow-hidden border border-border/10">
                      <div className="w-12 h-12 bg-border/20 rounded-lg flex items-center justify-center">
                        <span className="text-muted-foreground font-bold text-sm">
                          {experience.company.split(' ')[0].charAt(0)}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 text-center sm:text-left">
                      {/* Left side - Company info */}
                      <div className="flex-1">
                        {experience.company === "Spotify" ? (
                          <a
                            href="https://open.spotify.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:opacity-80 transition-opacity duration-300"
                          >
                            <h3 className="text-3xl font-bold text-foreground mb-2 hover:text-primary transition-colors duration-300">
                              {experience.company}
                            </h3>
                          </a>
                        ) : experience.company === "Agoda" ? (
                          <a
                            href="https://www.agoda.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:opacity-80 transition-opacity duration-300"
                          >
                            <h3 className="text-3xl font-bold text-foreground mb-2 hover:text-primary transition-colors duration-300">
                              {experience.company}
                            </h3>
                          </a>
                        ) : experience.company === "GoJek" ? (
                          <a
                            href="https://www.gojek.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:opacity-80 transition-opacity duration-300"
                          >
                            <h3 className="text-3xl font-bold text-foreground mb-2 hover:text-primary transition-colors duration-300">
                              {experience.company}
                            </h3>
                          </a>
                        ) : experience.company === "Dunzo" ? (
                          <a
                            href="https://www.dunzo.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:opacity-80 transition-opacity duration-300"
                          >
                            <h3 className="text-3xl font-bold text-foreground mb-2 hover:text-primary transition-colors duration-300">
                              {experience.company}
                            </h3>
                          </a>
                        ) : experience.company === "Ola" ? (
                          <a
                            href="https://www.olacabs.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:opacity-80 transition-opacity duration-300"
                          >
                            <h3 className="text-3xl font-bold text-foreground mb-2 hover:text-primary transition-colors duration-300">
                              {experience.company}
                            </h3>
                          </a>
                        ) : experience.company === "Persistent Systems" ? (
                          <a
                            href="https://www.persistent.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:opacity-80 transition-opacity duration-300"
                          >
                            <h3 className="text-3xl font-bold text-foreground mb-2 hover:text-primary transition-colors duration-300">
                              {experience.company}
                            </h3>
                          </a>
                        ) : (
                          <h3 className="text-3xl font-bold text-foreground mb-2">
                            {experience.company}
                          </h3>
                        )}
                        
                        <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                          <svg className="w-4 h-4 text-muted-foreground/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <p className="text-muted-foreground font-medium">
                            {experience.location}
                          </p>
                        </div>
                      </div>
                      
                      {/* Right side - Role and duration */}
                      <div className="text-center sm:text-left sm:ml-6">
                        <div className="text-lg font-bold text-foreground mb-2">
                          {experience.role}
                        </div>
                        <p className="text-muted-foreground text-sm font-medium text-center sm:text-left">
                          {experience.period}
                        </p>
                      </div>
                    </div>
                  
                  <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                    {experience.description}
                  </p>
                  
                  {/* Learn More Button */}
                  <div className="mt-6">
                    <button className="text-primary hover:text-primary/80 font-medium transition-all duration-300 hover:translate-x-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded">
                      Learn more 
                      <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <div className="bg-card text-card-foreground rounded-2xl p-8 border border-border/10">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Interested in working together?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I&apos;m always excited to discuss new opportunities, collaborations, 
              or just chat about mobile engineering and developer experience.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
