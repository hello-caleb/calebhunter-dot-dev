import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { ArrowLeft } from 'lucide-react'
import { getPost, getAllPosts } from '@/lib/blog'
import Container from '@/components/ui/Container'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <article className="py-16 md:py-24">
      <Container>
        <div className="max-w-2xl mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            All posts
          </Link>

          {/* Header */}
          <header className="mb-10">
            <time className="text-sm text-text-tertiary">{formatDate(post.date)}</time>
            <h1 className="font-serif text-4xl md:text-5xl text-text-primary mt-2 leading-tight">
              {post.title}
            </h1>
          </header>

          {/* Body */}
          <div className="prose">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </Container>
    </article>
  )
}
