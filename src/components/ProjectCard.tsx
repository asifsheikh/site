import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  href: string
  githubUrl?: string
  liveUrl?: string
}

export default function ProjectCard({
  title,
  description,
  technologies,
  href,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        <Link href={href} className="hover:text-blue-600 transition-colors">
          {title}
        </Link>
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
          >
            Live Demo
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 text-sm font-medium transition-colors"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  )
}
