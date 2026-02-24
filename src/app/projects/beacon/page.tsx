import type { Metadata } from 'next'
import { projects } from '@/content/projects'
import ProjectDetail from '@/components/projects/ProjectDetail'

export const metadata: Metadata = {
  title: 'Beacon',
  description: 'Voice-first AI career coach that proactively surfaces opportunities and coaches through interviews.',
}

export default function BeaconPage() {
  const project = projects.find((p) => p.slug === 'beacon')!
  return <ProjectDetail project={project} />
}
