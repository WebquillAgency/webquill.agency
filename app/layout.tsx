import type { Metadata } from 'next'
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Webquill',
  description: 'Created by Webquill',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
