import type { Metadata } from 'next'
import ContactContent from '@/components/contact/ContactContent'

export const metadata: Metadata = {
  title: 'Contact',
  description: "I'm currently exploring senior DevRel and AI roles. The best way to reach me is directly.",
}

export default function ContactPage() {
  return <ContactContent />
}
