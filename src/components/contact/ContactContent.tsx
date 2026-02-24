'use client'

import { useState } from 'react'
import { m, type Variants } from 'framer-motion'
import { Mail, Linkedin, Github, Twitter, Check } from 'lucide-react'
import Container from '@/components/ui/Container'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const EMAIL = 'caleb.r.hunter@gmail.com'

const socialLinks = [
  {
    platform: 'LinkedIn',
    handle: 'linkedin.com/in/calebhunter',
    href: 'https://linkedin.com/in/calebhunter',
    icon: Linkedin,
  },
  {
    platform: 'GitHub',
    handle: 'github.com/hello-caleb',
    href: 'https://github.com/hello-caleb',
    icon: Github,
  },
  {
    platform: 'X',
    handle: '@Caleb9to5',
    href: 'https://x.com/Caleb9to5',
    icon: Twitter,
  },
]

export default function ContactContent() {
  const [copied, setCopied] = useState(false)

  function handleEmailClick() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

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
          <m.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl"
          >
            {/* Email — copy to clipboard */}
            <m.button
              variants={fadeUp}
              onClick={handleEmailClick}
              className="flex items-center gap-4 rounded-xl border border-border bg-surface p-5 transition-all duration-200 hover:border-border-hover hover:shadow-md group text-left w-full"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-light text-accent shrink-0">
                {copied ? <Check size={18} /> : <Mail size={18} />}
              </span>
              <div className="min-w-0">
                <p className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-0.5">
                  Email
                </p>
                <p className="text-sm font-medium text-text-primary truncate group-hover:text-accent transition-colors">
                  {copied ? 'Copied!' : EMAIL}
                </p>
              </div>
            </m.button>

            {/* Social links */}
            {socialLinks.map(({ platform, handle, href, icon: Icon }) => (
              <m.a
                key={platform}
                variants={fadeUp}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
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
              </m.a>
            ))}
          </m.div>
        </Container>
      </section>
    </>
  )
}
