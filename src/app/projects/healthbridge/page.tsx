import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'HealthBridge' }

export default function HealthBridgePage() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-content mx-auto">
      <h1 className="font-serif text-5xl text-text-primary mb-4">HealthBridge</h1>
      <p className="text-text-secondary text-lg mb-4">
        Real-time ASL-to-text communication bridge for deaf patients and doctors.
      </p>
      {/* TODO: replace with <ProjectDetail project={healthbridge} /> */}
    </div>
  )
}
