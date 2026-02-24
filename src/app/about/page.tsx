import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'About' }

export default function AboutPage() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-content mx-auto">
      <h1 className="font-serif text-5xl text-text-primary mb-8">About</h1>
      {/* TODO: implement full About page content */}
    </div>
  )
}
