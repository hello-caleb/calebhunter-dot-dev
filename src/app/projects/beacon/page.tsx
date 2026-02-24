import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Beacon' }

export default function BeaconPage() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-content mx-auto">
      <h1 className="font-serif text-5xl text-text-primary mb-4">Beacon</h1>
      <p className="text-text-secondary text-lg mb-4">
        AI career coach with voice-first interface and proactive opportunity discovery.
      </p>
      {/* TODO: replace with <ProjectDetail project={beacon} /> */}
    </div>
  )
}
