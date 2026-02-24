import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Projects' }

export default function ProjectsPage() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-content mx-auto">
      <h1 className="font-serif text-5xl text-text-primary mb-4">Projects</h1>
      <p className="text-text-secondary mb-12">
        Hackathon submissions, AI experiments, and tools — all built with AI-assisted workflows.
      </p>
      {/* TODO: replace with <ProjectCard /> grid using projects data */}
    </div>
  )
}
