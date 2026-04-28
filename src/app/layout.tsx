import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.asifshaikh.xyz'),
  title: 'Asif Shaikh - Personal Website',
  description: 'Personal website showcasing projects, resume, and contact information',
  openGraph: {
    title: 'Asif Shaikh - Personal Website',
    description: 'Personal website showcasing projects, resume, and contact information',
    url: 'https://www.asifshaikh.xyz',
    siteName: 'Asif Shaikh',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asif Shaikh - Personal Website',
    description: 'Personal website showcasing projects, resume, and contact information',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth light">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-background text-foreground antialiased`}>
        <div className="h-screen flex flex-col overflow-hidden bg-background">
          <Header />
          <main className="flex-1 overflow-auto bg-background pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
