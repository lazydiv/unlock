import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/shared/nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'unlock',
  description: 'screen lock riddle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} scrollbar-hide w-full md:w-2/3 text-white bg-black flex flex-col justify-center items-center mx-auto`}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
