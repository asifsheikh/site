export default function Resume() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Resume
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            You can view or download my resume below.
          </p>
        </div>

        {/* Resume Viewer */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden mb-8">
          {/* PDF Viewer */}
          <div className="aspect-[8.5/11] w-full">
            <iframe
              src="/resume.pdf#toolbar=1&navpanes=1&scrollbar=1"
              className="w-full h-full border-0"
              title="Asif Shaikh Resume"
            />
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center">
          <a
            href="/resume.pdf"
            download="Asif_Shaikh_Resume.pdf"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume (PDF)
          </a>
        </div>

        {/* Alternative: If PDF viewer doesn't work well, show a preview */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Having trouble viewing the PDF? 
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 ml-1 underline"
            >
              Open in new tab
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
