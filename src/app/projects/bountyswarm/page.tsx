import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'BountySwarm' }

export default function BountySwarmPage() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-content mx-auto">
      <h1 className="font-serif text-5xl text-text-primary mb-4">BountySwarm</h1>
      <p className="text-text-secondary text-lg mb-4">
        AI-powered multi-agent system that automates hackathon prize distribution via smart
        contracts.
      </p>
      {/* TODO: replace with <ProjectDetail project={bountyswarm} /> */}
    </div>
  )
}
