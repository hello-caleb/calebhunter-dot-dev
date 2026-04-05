'use client'

import { useReducedMotion, m } from 'framer-motion'
import ProjectCard from '@/components/projects/ProjectCard'
import { stagger, fadeUp, viewportOnce } from '@/lib/animations'
import type { Project } from '@/content/projects'

interface ProjectsGridProps {
  projects: Project[]
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const shouldReduce = useReducedMotion()

  return (
    <m.div
      variants={stagger}
      initial={shouldReduce ? false : 'hidden'}
      whileInView="show"
      viewport={viewportOnce}
      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
    >
      {projects.map((project, index) => (
        <m.div key={project.id} variants={fadeUp}>
          <ProjectCard project={project} index={index} />
        </m.div>
      ))}
    </m.div>
  )
}
