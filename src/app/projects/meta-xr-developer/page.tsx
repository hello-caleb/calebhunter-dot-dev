import type { Metadata } from 'next'
import { projects } from '@/content/projects'
import ProjectDetail from '@/components/projects/ProjectDetail'

export const metadata: Metadata = {
  title: 'Meta XR Developer Ecosystem',
  description:
    'Scaled Meta\'s VR developer community from 2,200 to 4,600 members — 109% growth through targeted programs, competitions, and technical content.',
}

export default function MetaXRDeveloperPage() {
  const project = projects.find((p) => p.slug === 'meta-xr-developer')!
  return <ProjectDetail project={project} />
}
