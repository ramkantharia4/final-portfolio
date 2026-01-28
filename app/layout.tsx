import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });
const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Ram Kantharia | Full-Stack Developer & Digital Marketing Expert',
  description: 'Full-stack developer specializing in web & mobile development, AI integration, and digital marketing. Founder of YODA Agency. Building extraordinary digital experiences with Next.js, Flutter, and modern technologies.',
  keywords: ['Full-Stack Developer', 'Web Development', 'Mobile Development', 'Flutter', 'Next.js', 'Digital Marketing', 'Meta Ads', 'React', 'Node.js', 'AI Integration'],
  authors: [{ name: 'Ram Kantharia' }],
  creator: 'Ram Kantharia',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ramkantharia.com',
    title: 'Ram Kantharia | Full-Stack Developer & Digital Marketing Expert',
    description: 'Full-stack developer specializing in web & mobile development, AI integration, and digital marketing. Building extraordinary digital experiences.',
    siteName: 'Ram Kantharia Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ram Kantharia | Full-Stack Developer',
    description: 'Full-stack developer specializing in web & mobile development, AI integration, and digital marketing.',
    creator: '@ramisalwayskidding',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
