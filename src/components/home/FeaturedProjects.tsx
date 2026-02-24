import { projects } from '@/content/projects'
import ProjectCard from '@/components/projects/ProjectCard'
import Container from '@/components/ui/Container'

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-background-subtle">
      <Container>
        <div className="mb-12">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-text-primary">What I&apos;m Building</h2>
          <p className="mt-4 text-text-secondary max-w-xl">
            From hackathon submissions to tools I use every day — all built with AI-assisted
            workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}
