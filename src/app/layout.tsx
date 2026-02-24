import type { Metadata } from 'next'
import { Instrument_Serif, DM_Sans, JetBrains_Mono } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ChatWidget from '@/components/chat/ChatWidget'

// ─── Google Fonts ─────────────────────────────────────────────────────────────
const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    template: '%s | Caleb Hunter',
    default: 'Caleb Hunter — AI Builder & Developer Ecosystem Lead',
  },
  description:
    'Portfolio of Caleb Hunter. 20+ years building developer ecosystems at Meta, Google, IBM, and Samsung. Now building AI-powered applications with Claude and frontier models.',
  metadataBase: new URL('https://calebhunter.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://calebhunter.dev',
    siteName: 'Caleb Hunter',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@Caleb9to5',
  },
}

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans bg-background text-text-primary antialiased min-h-screen flex flex-col">
        {/* Skip to content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded"
        >
          Skip to main content
        </a>

        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
