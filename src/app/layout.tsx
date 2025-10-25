import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Asif Shaikh - Personal Website',
  description: 'Personal website showcasing projects, resume, and contact information',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900`}>
        <div className="h-screen flex flex-col overflow-hidden bg-white">
          <Header />
          <main className="flex-1 overflow-auto bg-white">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
