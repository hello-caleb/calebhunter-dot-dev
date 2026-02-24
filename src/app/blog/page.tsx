import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Technical content, project reflections, and builder notes.',
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
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
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">Blog</p>
          <h1 className="font-serif text-5xl md:text-6xl text-text-primary mb-4">Writing</h1>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed">
            Technical content, project reflections, and builder notes.
          </p>
        </Container>
      </section>

      {/* Post list */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-2xl divide-y divide-border">
            {posts.map((post) => (
              <article key={post.slug} className="py-8 first:pt-0">
                <time className="text-sm text-text-tertiary">{formatDate(post.date)}</time>
                <h2 className="font-serif text-2xl text-text-primary mt-1 mb-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-accent transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-text-secondary leading-relaxed mb-3">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
