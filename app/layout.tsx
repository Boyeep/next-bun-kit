import type { Metadata } from 'next'

import './globals.css'
import Providers from './providers'

import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Next Bun Kit',
  description: 'A clean Next.js and Bun frontend boilerplate',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-dvh bg-background font-sans text-foreground')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
