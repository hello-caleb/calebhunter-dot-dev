import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import BuiltWithClaude from '@/components/home/BuiltWithClaude'

export const metadata: Metadata = {
  title: 'Caleb Hunter — AI Builder & Developer Ecosystem Lead',
  description:
    '20+ years building developer ecosystems at Meta, Google, IBM, and Samsung. Now building AI-powered applications with Claude and frontier models.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <BuiltWithClaude />
    </>
  )
}
