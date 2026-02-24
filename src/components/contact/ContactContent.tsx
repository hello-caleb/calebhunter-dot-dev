'use client'

import { motion, type Variants } from 'framer-motion'
import { Mail, Linkedin, Github, Twitter } from 'lucide-react'
import Container from '@/components/ui/Container'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const contacts = [
  {
    platform: 'Email',
    handle: 'caleb.r.hunter@gmail.com',
    href: 'mailto:caleb.r.hunter@gmail.com',
    icon: Mail,
    external: false,
  },
  {
    platform: 'LinkedIn',
    handle: 'linkedin.com/in/calebhunter',
    href: 'https://linkedin.com/in/calebhunter',
    icon: Linkedin,
    external: true,
  },
  {
    platform: 'GitHub',
    handle: 'github.com/hello-caleb',
    href: 'https://github.com/hello-caleb',
    icon: Github,
    external: true,
  },
  {
    platform: 'X',
    handle: '@Caleb9to5',
    href: 'https://x.com/Caleb9to5',
    icon: Twitter,
    external: true,
  },
]

export default function ContactContent() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 border-b border-border">
        <Container>
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">Contact</p>
          <h1 className="font-serif text-5xl md:text-6xl text-text-primary mb-4">Get in Touch</h1>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed">
            I&apos;m currently exploring senior DevRel and AI roles. The best way to reach me is
            directly.
          </p>
        </Container>
      </section>

      {/* Cards */}
      <section className="py-16 md:py-20">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl"
          >
            {contacts.map(({ platform, handle, href, icon: Icon, external }) => (
              <motion.a
                key={platform}
                variants={fadeUp}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex items-center gap-4 rounded-xl border border-border bg-surface p-5 transition-all duration-200 hover:border-border-hover hover:shadow-md group"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-light text-accent shrink-0">
                  <Icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-0.5">
                    {platform}
                  </p>
                  <p className="text-sm font-medium text-text-primary truncate group-hover:text-accent transition-colors">
                    {handle}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </Container>
      </section>
    </>
  )
}
