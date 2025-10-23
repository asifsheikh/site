import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main content container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          
          {/* Profile picture section */}
          <div className="flex-shrink-0">
            <div className="relative">
              <Image
                src="/profile.png"
                alt="Asif Shaikh"
                width={200}
                height={200}
                className="rounded-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                priority
              />
              {/* Subtle ring around profile picture */}
              <div className="absolute inset-0 rounded-full ring-2 ring-gray-200 ring-offset-4 ring-offset-white"></div>
            </div>
          </div>

          {/* Text content section */}
          <div className="text-center lg:text-left max-w-2xl">
            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Asif Shaikh
            </h1>
            
            {/* Tagline/Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Mobile Engineer | Building apps that connect people and simplify life.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
