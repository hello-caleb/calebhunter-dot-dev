import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import Container from '@/components/ui/Container'
import AnimatedSection from '@/components/ui/AnimatedSection'
import BlogPostList from '@/components/blog/BlogPostList'

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Technical content, project reflections, and builder notes.',
}

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 border-b border-border">
        <Container>
          <AnimatedSection trigger="animate">
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">Blog</p>
            <h1 className="font-serif text-5xl md:text-6xl text-text-primary mb-4">Writing</h1>
            <p className="text-text-secondary text-lg max-w-xl leading-relaxed">
              Technical content, project reflections, and builder notes.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Post list */}
      <section className="py-16 md:py-20">
        <Container>
          <BlogPostList posts={posts} formatDate={formatDate} />
        </Container>
      </section>
    </>
  )
}
