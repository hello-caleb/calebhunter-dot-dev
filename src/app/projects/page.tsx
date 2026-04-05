import type { Metadata } from 'next'
import { projects } from '@/content/projects'
import ProjectsGrid from '@/components/projects/ProjectsGrid'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Hackathon submissions, AI experiments, and tools in the making — all built with AI-assisted workflows.',
}

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 border-b border-border">
        <Container>
          <AnimatedSection trigger="animate">
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">Work</p>
            <h1 className="font-serif text-5xl md:text-6xl text-text-primary mb-4">Projects</h1>
            <p className="text-text-secondary text-lg max-w-xl leading-relaxed">
              Hackathon submissions, AI experiments, and tools in the making — all built with
              AI-assisted workflows.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-20">
        <Container>
          <ProjectsGrid projects={projects} />
        </Container>
      </section>
    </>
  )
}
