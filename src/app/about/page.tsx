import type { Metadata } from 'next'
import AboutContent from '@/components/about/AboutContent'

export const metadata: Metadata = {
  title: 'About',
  description:
    '20+ years at the intersection of developers and platforms — building programs, communities, and technical content that help developers succeed.',
}

export default function AboutPage() {
  return <AboutContent />
}
