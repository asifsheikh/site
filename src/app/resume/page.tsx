export default function Resume() {
  return (
    <div className="min-h-screen bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            My Resume
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            You can view or download my resume below.
          </p>
        </div>

        {/* Mobile-First Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12 justify-center">
          <a
            href="/resume.pdf"
            download="Asif_Shaikh_Resume.pdf"
            className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Open in New Tab
          </a>
        </div>

        {/* Resume Viewer - Hidden on very small screens, shown on larger mobile */}
        <div className="hidden sm:block bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden mb-8">
          {/* PDF Viewer */}
          <div className="aspect-[8.5/11] w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
            <iframe
              src="/resume.pdf#toolbar=1&navpanes=1&scrollbar=1&view=FitH"
              className="w-full h-full border-0"
              title="Asif Shaikh Resume"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mobile PDF Preview - Show on very small screens */}
        <div className="sm:hidden bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-center">
          <div className="mb-4">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Resume Preview</h3>
            <p className="text-gray-600 text-sm mb-4">
              For the best viewing experience on mobile, we recommend downloading the PDF or opening it in a new tab.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="/resume.pdf"
              download="Asif_Shaikh_Resume.pdf"
              className="inline-flex items-center justify-center px-4 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-300 text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View in Browser
            </a>
          </div>
        </div>

        {/* Additional Help Text */}
        <div className="text-center">
          <p className="text-gray-500 text-sm px-4">
            Having trouble viewing the PDF? Try downloading it or opening in a new tab for the best experience.
          </p>
        </div>
      </div>
    </div>
  )
}
