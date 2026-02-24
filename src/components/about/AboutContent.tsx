'use client'

import { motion, type Variants } from 'framer-motion'
import Container from '@/components/ui/Container'
import Badge from '@/components/ui/Badge'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const stats = [
  { metric: '109%', label: 'developer community growth at Meta (2,200 → 4,600)' },
  { metric: '150%', label: 'community growth at Jina AI (to 400K+ users)' },
  { metric: '60K+', label: 'internal developers served at Google' },
  { metric: '40%', label: 'platform adoption increase at IBM' },
  { metric: '$1.5M', label: 'developer competition coordinated at Meta' },
  { metric: '15+', label: 'AI/ML portfolio companies advised at Samsung Next' },
  { metric: '20+', label: 'years across Meta, Google, IBM, Samsung, Jina AI, and startups' },
]

const techStack = [
  'Generative AI',
  'LLMs',
  'AI Agents',
  'Claude API',
  'Gemini',
  'MCP Servers',
  'Python',
  'TypeScript',
  'Next.js',
  'AWS',
  'GCP',
  'Azure',
  'Elasticsearch',
  'PyTorch',
  'TensorFlow',
]

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 border-b border-border">
        <Container>
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">About</p>
          <h1 className="font-serif text-5xl md:text-6xl text-text-primary">Caleb Hunter</h1>
        </Container>
      </section>

      {/* Body */}
      <section className="py-16 md:py-20">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-3xl mx-auto space-y-16"
          >
            {/* 1. Opening */}
            <motion.div variants={fadeUp}>
              <p className="text-lg text-text-secondary leading-relaxed">
                I&apos;ve spent 20+ years at the intersection of developers and platforms — building
                the programs, communities, and technical content that help developers succeed.
                I&apos;ve done this at Meta (scaling a VR developer community from 2,200 to 4,600),
                Google (serving 60,000+ internal developers), IBM (driving 40% platform adoption
                growth), Samsung Next (advising 15+ AI/ML portfolio companies), and Jina AI (growing
                an open-source AI community to 400,000+ users).
              </p>
            </motion.div>

            {/* 2. What I actually do */}
            <motion.div variants={fadeUp}>
              <h2 className="font-serif text-2xl text-text-primary mb-4">What I actually do</h2>
              <p className="text-text-secondary leading-relaxed">
                I&apos;m a builder and a connector. I build AI-powered applications (see my
                projects). I design and run developer programs that drive measurable adoption. I
                translate between technical teams and business stakeholders. I advise startups on
                go-to-market strategy and developer ecosystem growth. And I create the technical
                content — tutorials, workshops, hackathons, documentation — that turns curious
                developers into committed platform users.
              </p>
            </motion.div>

            {/* 3. What I'm focused on now */}
            <motion.div variants={fadeUp}>
              <h2 className="font-serif text-2xl text-text-primary mb-4">
                What I&apos;m focused on now
              </h2>
              <p className="text-text-secondary leading-relaxed">
                I&apos;m deep in the AI builder ecosystem — building applications with Claude,
                Gemini, and other frontier models, participating in hackathons, and exploring how
                multi-agent architectures, voice AI, and intelligent routing can create the next
                generation of developer tools. I&apos;m looking for a role where I can combine my
                two decades of developer ecosystem experience with my hands-on AI building practice
                — ideally helping a platform company like Anthropic bring their technology to the
                startup community.
              </p>
            </motion.div>

            {/* 4. Career highlights — stat grid */}
            <motion.div variants={fadeUp}>
              <h2 className="font-serif text-2xl text-text-primary mb-6">Career highlights</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div key={stat.metric} className="flex flex-col gap-1">
                    <span className="font-serif text-3xl md:text-4xl text-accent leading-none">
                      {stat.metric}
                    </span>
                    <span className="text-sm text-text-secondary leading-snug">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 5. Tech I work with */}
            <motion.div variants={fadeUp}>
              <h2 className="font-serif text-2xl text-text-primary mb-4">Tech I work with</h2>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge key={tech} variant="subtle">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
