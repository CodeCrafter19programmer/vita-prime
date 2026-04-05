import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VitaPrime — Premium Supplements Uganda',
  description: 'Uganda\'s most trusted online supplement store. Science-backed vitamins, minerals & wellness products delivered to your door across Uganda.',
  keywords: 'supplements Uganda, vitamins Kampala, VitaPrime, health supplements Uganda',
  openGraph: {
    title: 'VitaPrime Uganda',
    description: 'Premium supplements delivered across Uganda',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
