import type { Metadata } from 'next'
import './globals.css'
import StructuredData from './structured-data'

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Webquill - Modern Web Content Platform',
  description: 'Webquill is a powerful platform for creating, managing, and publishing web content with ease. Create beautiful websites, blogs, and digital content.',
  generator: 'v0.dev',
  keywords: ['webquill', 'content platform', 'web content', 'website builder', 'content management'],
  authors: [{ name: 'Webquill Team' }],
  openGraph: {
    title: 'Webquill - Modern Web Content Platform',
    description: 'Create beautiful websites and digital content with Webquill',
    url: 'https://webquill.com',
    siteName: 'Webquill',
    images: [
      {
        url: '/wq.png',
        width: 800,
        height: 600,
        alt: 'Webquill Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webquill - Modern Web Content Platform',
    description: 'Create beautiful websites and digital content with Webquill',
    images: ['/wq.png'],
  },
  icons: {
    icon: '/wq.png',
    shortcut: '/wq.png',
    apple: '/wq.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4f46e5" />
        <link rel="canonical" href="http://localhost:3000" />
        <StructuredData />
      </head>
      <body>{children}</body>
    </html>
  )
}
