import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const projectsDir = join(process.cwd(), 'content', 'projects')
  const files = readdirSync(projectsDir)

  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({
      slug: file.replace('.mdx', ''),
    }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const projectPath = join(process.cwd(), 'content', 'projects', `${slug}.mdx`)

  try {
    const fileContent = readFileSync(projectPath, 'utf8')
    const { data, content } = matter(fileContent)

    return (
      <div className="min-h-screen bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/projects"
              className="text-primary hover:text-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
            >
              ← Back to Projects
            </Link>
          </div>

          <div className="bg-card text-card-foreground rounded-lg shadow-md p-8 md:p-12 border border-border/10">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {data.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {data.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {data.technologies?.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-border/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                {data.liveUrl && (
                  <a
                    href={data.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    Live Demo
                  </a>
                )}
                {data.githubUrl && (
                  <a
                    href={data.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-border/20 text-foreground px-6 py-2 rounded-md font-medium hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <MDXRemote source={content} />
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    notFound()
  }
}
