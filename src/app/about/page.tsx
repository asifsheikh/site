import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Asif Shaikh',
  description: 'A little more about my journey, perspective, and what shapes my thinking.',
}

export default function AboutPage() {
  return (
    <div className="min-h-full bg-background flex justify-center py-20 px-6 sm:px-12 animate-fade-in-up">
      <div className="max-w-[650px] w-full flex flex-col gap-y-14">
        {/* Section 1 - Opening */}
        <section>
          <h1 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
            A little more about me.
          </h1>
        </section>

        {/* Section 2 - Core Identity */}
        <section className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
          <p>
            I&apos;ve always been curious about how things work — not just in code, but in people, environments, and the small details of everyday life.
          </p>
          <p>
            Over time, that curiosity has taken different forms. Sometimes it shows up in building systems, understanding how things behave and scale. Other times, it&apos;s quieter — observing how people interact, how places feel, and how context shapes everything.
          </p>
          <p>
            I grew up in Pune, India, and started my journey in software engineering early on — studying computer science and later pursuing a master&apos;s in software systems. Since then, I&apos;ve spent the past several years working across different kinds of companies, building software at different scales and learning how systems evolve over time.
          </p>
        </section>

        {/* Divider Optional Polish */}
        <div className="w-12 h-px bg-border/25" />

        {/* Section 3 - Perspective Shift */}
        <section className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
          <p>
            It wasn&apos;t always this way.
          </p>
          <p>
            Earlier, I was more focused on just building and moving forward. But over time — through work, travel, and simply paying more attention — my perspective started to change. I became more interested in understanding <em className="italic">why</em> things are the way they are, not just <em className="italic">how</em> they work.
          </p>
        </section>

        {/* Section 4 - Travel Influence */}
        <section className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
          <p>
            Travel has played a big role in that shift.
          </p>
          <p>
            Moving between cities and cultures made me realize how much our environment shapes how we think. The same person can feel different in a different place — and that idea has stayed with me.
          </p>
        </section>

        {/* Divider Optional Polish */}
        <div className="w-12 h-px bg-border/25" />

        {/* Section 5 - Work Philosophy */}
        <section className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
          <p>
            In my work, I&apos;m drawn to systems — how they&apos;re designed, how they scale, and how small decisions can have long-term impact.
          </p>
          <p>
            But more than that, I care about clarity — building things that feel simple, even when they&apos;re not.
          </p>
        </section>

        {/* Section 6 - Closing */}
        <section className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
          <p>
            I don&apos;t have everything figured out, and I don&apos;t think I&apos;m supposed to.
          </p>
          <p>
            This page is just a reflection of what I&apos;m exploring right now — and it will probably evolve as I do.
          </p>
        </section>
      </div>
    </div>
  )
}
