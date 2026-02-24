import type { Metadata } from 'next'
import { projects } from '@/content/projects'
import ProjectDetail from '@/components/projects/ProjectDetail'

export const metadata: Metadata = {
  title: 'OmniRoute',
  description: 'Voice-first AI meta-router using Elasticsearch to route requests to the optimal model.',
}

export default function OmniRoutePage() {
  const project = projects.find((p) => p.slug === 'omniroute')!
  return <ProjectDetail project={project} />
}
