'use client'

import Link from 'next/link'
import { useReducedMotion, m } from 'framer-motion'
import { stagger, fadeUp, viewportOnce } from '@/lib/animations'

interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
}

interface BlogPostListProps {
  posts: Post[]
  formatDate: (dateStr: string) => string
}

export default function BlogPostList({ posts, formatDate }: BlogPostListProps) {
  const shouldReduce = useReducedMotion()

  return (
    <m.div
      variants={stagger}
      initial={shouldReduce ? false : 'hidden'}
      whileInView="show"
      viewport={viewportOnce}
      className="max-w-2xl divide-y divide-border"
    >
      {posts.map((post) => (
        <m.article key={post.slug} variants={fadeUp} className="py-8 first:pt-0">
          <time className="text-sm text-text-tertiary">{formatDate(post.date)}</time>
          <h2 className="font-serif text-2xl text-text-primary mt-1 mb-2">
            <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
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
        </m.article>
      ))}
    </m.div>
  )
}
