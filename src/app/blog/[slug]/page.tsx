import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return { title: slug.replace(/-/g, ' ') }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  return (
    <div className="min-h-screen px-6 py-16 max-w-content mx-auto">
      <h1 className="font-serif text-5xl text-text-primary mb-4">
        {slug.replace(/-/g, ' ')}
      </h1>
      {/* TODO: implement MDX rendering */}
    </div>
  )
}
