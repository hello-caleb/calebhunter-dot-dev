import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Blog' }

export default function BlogPage() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-content mx-auto">
      <h1 className="font-serif text-5xl text-text-primary mb-4">Blog</h1>
      <p className="text-text-secondary">
        Technical writing on AI development, developer ecosystems, and building with frontier
        models.
      </p>
      {/* TODO: implement blog post list */}
    </div>
  )
}
