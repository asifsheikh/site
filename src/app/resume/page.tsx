import { MDXRemote } from 'next-mdx-remote/rsc'
import { readFileSync } from 'fs'
import { join } from 'path'

export default function Resume() {
  const resumePath = join(process.cwd(), 'content', 'resume.mdx')
  const resumeContent = readFileSync(resumePath, 'utf8')

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <MDXRemote source={resumeContent} />
          </div>
        </div>
      </div>
    </div>
  )
}
