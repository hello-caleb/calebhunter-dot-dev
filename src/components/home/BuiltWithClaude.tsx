import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'

export default function BuiltWithClaude() {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">
            How this was built
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-4">
            Built with Claude Code
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            This site was built using Claude Code as a development partner. Every component, every
            animation, every API route — written collaboratively with AI. The chat widget is
            powered by the Claude API.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors group"
          >
            Learn how I build with AI
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Container>
    </section>
  )
}
