import type { Metadata } from 'next'
import { projects } from '@/content/projects'
import ProjectDetail from '@/components/projects/ProjectDetail'

export const metadata: Metadata = {
  title: 'HealthBridge',
  description: 'Real-time ASL-to-text communication bridge for deaf patients and doctors.',
}

export default function HealthBridgePage() {
  const project = projects.find((p) => p.slug === 'healthbridge')!
  return <ProjectDetail project={project} />
}
