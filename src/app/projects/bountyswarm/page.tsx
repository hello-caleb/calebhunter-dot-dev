import type { Metadata } from 'next'
import { projects } from '@/content/projects'
import ProjectDetail from '@/components/projects/ProjectDetail'

export const metadata: Metadata = {
  title: 'BountySwarm',
  description: 'AI-powered multi-agent system that automates hackathon prize distribution.',
}

export default function BountySwarmPage() {
  const project = projects.find((p) => p.slug === 'bountyswarm')!
  return <ProjectDetail project={project} />
}
