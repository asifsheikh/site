import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface ProjectPageProps {
  params: {
    slug: string
  }
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

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params
  const projectPath = join(process.cwd(), 'content', 'projects', `${slug}.mdx`)
  
  try {
    const fileContent = readFileSync(projectPath, 'utf8')
    const { data, content } = matter(fileContent)
    
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/projects"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              ← Back to Projects
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {data.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {data.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {data.technologies?.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
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
                    className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
                {data.githubUrl && (
                  <a
                    href={data.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md font-medium hover:bg-gray-50 transition-colors"
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
