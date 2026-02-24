import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'OmniRoute' }

export default function OmniRoutePage() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-content mx-auto">
      <h1 className="font-serif text-5xl text-text-primary mb-4">OmniRoute</h1>
      <p className="text-text-secondary text-lg mb-4">
        Voice-first universal AI router using Elasticsearch to intelligently route to the optimal
        model.
      </p>
      {/* TODO: replace with <ProjectDetail project={omniroute} /> */}
    </div>
  )
}
