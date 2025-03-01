import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from 'react-hot-toast'

// Optimize font loading
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
})

export const metadata: Metadata = {
  title: "Tirsasaki",
  description: "A modern dark-themed portfolio website built with Next.js",
  generator: 'v0.dev',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Preload critical assets */}
        <link 
          rel="preload" 
          href="/grid.svg" 
          as="image" 
          type="image/svg+xml"
        />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster 
          position="bottom-center"
          toastOptions={{
            duration: 2000,
            style: {
              background: '#333',
              color: '#fff',
            },
          }} 
        />
      </body>
    </html>
  )
}

import './globals.css'