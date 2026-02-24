'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: text content */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item}>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-text-primary leading-tight">
                Caleb Hunter
              </h1>
            </motion.div>

            <motion.div variants={item}>
              <p className="mt-5 text-xl md:text-2xl text-text-secondary leading-snug">
                I build AI-powered products and developer ecosystems.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <p className="mt-4 text-text-secondary leading-relaxed max-w-lg">
                20+ years connecting developers to platforms at Meta, Google, IBM, Samsung, and
                startups. Now building with Claude, Gemini, and the tools shaping what&apos;s next.
              </p>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
              <Button href="/projects" variant="primary" size="lg">
                View Projects
              </Button>
              <Button href="/about" variant="secondary" size="lg">
                About Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="order-first md:order-last"
          >
            <div className="relative aspect-square w-full max-w-sm mx-auto md:max-w-none rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/caleb-headshot.jpg"
                alt="Caleb Hunter"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 384px, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
