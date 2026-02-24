import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Caleb Hunter — AI Builder & Developer Ecosystem Lead',
  description:
    '20+ years building developer ecosystems at Meta, Google, IBM, and Samsung. Now building AI-powered applications with Claude and frontier models.',
}

export default function HomePage() {
  return (
    <div>
      {/* Hero — TODO: replace with <Hero /> component */}
      <section className="min-h-screen flex items-center px-6 py-24 max-w-content mx-auto">
        <div>
          <h1 className="font-serif text-6xl text-text-primary mb-6">Caleb Hunter</h1>
          <p className="text-xl text-text-secondary mb-4">
            I build AI-powered products and developer ecosystems.
          </p>
          <p className="text-text-secondary max-w-lg">
            20+ years connecting developers to platforms at Meta, Google, IBM, Samsung, and
            startups. Now building with Claude, Gemini, and the tools shaping what&apos;s next.
          </p>
        </div>
      </section>

      {/* TODO: <FeaturedProjects /> */}
      {/* TODO: <BuiltWithClaude /> */}
    </div>
  )
}
