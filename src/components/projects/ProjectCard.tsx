'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { m } from 'framer-motion'
import Badge from '@/components/ui/Badge'
import type { Project } from '@/content/projects'

const statusVariant = {
  Live: 'green',
  'In Development': 'blue',
  'Hackathon Submission': 'purple',
} as const satisfies Record<Project['status'], 'green' | 'blue' | 'purple'>

interface ProjectCardProps {
  project: Project
  index?: number
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
      className="group flex flex-col rounded-xl border border-border bg-surface p-6 transition-all duration-200 hover:border-border-hover hover:shadow-md"
    >
      {/* Header: title + status badge */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-serif text-xl text-text-primary">{project.title}</h3>
        <Badge variant={statusVariant[project.status]} className="shrink-0 mt-0.5">
          {project.status}
        </Badge>
      </div>

      {/* Tagline */}
      <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">{project.tagline}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.techStack.map((tech) => (
          <Badge key={tech} variant="subtle">
            {tech}
          </Badge>
        ))}
      </div>

      {/* Footer link */}
      <Link
        href={`/projects/${project.slug}`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors group-hover:gap-2.5"
      >
        View Project <ArrowRight size={14} />
      </Link>
    </m.div>
  )
}
