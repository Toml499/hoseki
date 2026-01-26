import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HOSEKI | Tunisian Artisanal Excellence',
  description: 'Handcrafted Tunisian jewelry and accessories celebrating artisanal heritage since 1988',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
