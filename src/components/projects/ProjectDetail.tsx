'use client'

import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'
import Container from '@/components/ui/Container'
import Badge from '@/components/ui/Badge'
import type { Project } from '@/content/projects'

const statusVariant = {
  Live: 'green',
  'In Development': 'blue',
  'Hackathon Submission': 'purple',
} as const satisfies Record<Project['status'], 'green' | 'blue' | 'purple'>

interface ProjectDetailProps {
  project: Project
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const { title, tagline, description, status, techStack, aiInvolvement, technicalDecisions, links } =
    project

  const hasAnyRealLink = links.demo || links.github || links.devpost

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          <motion.div variants={stagger} initial="hidden" animate="show">
            {/* Back link */}
            <motion.div variants={fadeUp}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors mb-10"
              >
                <ArrowLeft size={14} />
                All Projects
              </Link>
            </motion.div>

            {/* Header */}
            <motion.div variants={fadeUp} className="mb-8">
              <Badge variant={statusVariant[status]}>{status}</Badge>
              <h1 className="font-serif text-5xl md:text-6xl text-text-primary mt-3 mb-4">
                {title}
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed">{tagline}</p>
            </motion.div>

            {/* Description */}
            <motion.p variants={fadeUp} className="text-text-secondary leading-relaxed mb-12">
              {description}
            </motion.p>

            {/* AI Involvement callout */}
            <motion.div
              variants={fadeUp}
              className="border-l-4 border-accent bg-accent-light rounded-r-lg px-6 py-5 mb-12"
            >
              <h2 className="font-serif text-xl text-text-primary mb-3">AI Involvement</h2>
              <p className="text-text-secondary leading-relaxed">{aiInvolvement}</p>
            </motion.div>

            {/* Technical Decisions */}
            <motion.div variants={fadeUp} className="mb-12">
              <h2 className="font-serif text-2xl text-text-primary mb-5">
                Key Technical Decisions
              </h2>
              <ul className="space-y-3">
                {technicalDecisions.map((decision, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-secondary leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {decision}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tech Stack */}
            <motion.div variants={fadeUp} className="mb-12">
              <h2 className="font-serif text-2xl text-text-primary mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge key={tech} variant="subtle">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* Links */}
            <motion.div variants={fadeUp}>
              <h2 className="font-serif text-2xl text-text-primary mb-4">Links</h2>
              <div className="flex flex-wrap gap-3">
                {links.demo && (
                  <a
                    href={links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}

                {links.github ? (
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-surface text-text-primary text-sm font-medium hover:border-border-hover transition-colors"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-surface text-text-tertiary text-sm font-medium cursor-default select-none">
                    <Github size={14} />
                    GitHub — Coming Soon
                  </span>
                )}

                {links.devpost && (
                  <a
                    href={links.devpost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-surface text-text-primary text-sm font-medium hover:border-border-hover transition-colors"
                  >
                    <ExternalLink size={14} />
                    Devpost
                  </a>
                )}

                {!hasAnyRealLink && (
                  <p className="text-sm text-text-tertiary">
                    This project is in development — links coming soon.
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
