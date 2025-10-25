'use client'

import CodeBlock from './CodeBlock'

interface BlogContentProps {
  content: string
}

export default function BlogContent({ content }: BlogContentProps) {
  // Split content by code blocks
  const parts = content.split(/(```[\s\S]*?```)/g)
  
  return (
    <div className="text-gray-700 leading-relaxed">
      {parts.map((part, index) => {
        // Check if this part is a code block
        const codeBlockMatch = part.match(/^```(\w+)?\n([\s\S]*?)\n```$/)
        
        if (codeBlockMatch) {
          const [, language, code] = codeBlockMatch
          return (
            <CodeBlock
              key={index}
              code={code}
              language={language || 'text'}
            />
          )
        }
        
        // Regular text content
        return (
          <div
            key={index}
            dangerouslySetInnerHTML={{
              __html: part
                .replace(/\n/g, '<br>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>')
                .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800 border">$1</code>')
                .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">$1</h3>')
                .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold text-gray-900 mt-10 mb-6">$1</h2>')
                .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-gray-900 mt-12 mb-8">$1</h1>')
                .replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-6">$1</blockquote>')
                .replace(/^\- (.*$)/gm, '<li class="ml-4 mb-2">• $1</li>')
                .replace(/^\* (.*$)/gm, '<li class="ml-4 mb-2">• $1</li>')
            }}
          />
        )
      })}
    </div>
  )
}
