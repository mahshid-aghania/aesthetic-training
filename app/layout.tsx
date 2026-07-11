import React from "react"
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import ChatBot from '@/components/ChatBot'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'Medical Aesthetic Training Toronto & Thornhill | Botox & Filler Courses | Ziba Aesthetics',
  description: 'Best medical aesthetics training in Toronto, Thornhill & North York. Hands-on Botox certification, filler training, laser courses & aesthetic diploma programs. Industry-recognized certification in Ontario.',
  keywords: 'botox training toronto, filler training toronto, medical aesthetics training thornhill, aesthetic courses north york, botox certification ontario, medical aesthetician course toronto, prp training gta, laser technician course toronto, ziba aesthetics training',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#f5f3ef',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        <ChatBot />
        <Analytics />
      </body>
    </html>
  )
}
