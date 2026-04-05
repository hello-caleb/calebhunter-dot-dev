'use client'

import { useReducedMotion, m } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/lib/animations'
import type { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  /** Use 'animate' for above-the-fold sections; 'whileInView' (default) for below-fold */
  trigger?: 'animate' | 'whileInView'
}

/**
 * Lightweight wrapper that applies a fadeUp entry animation to its children.
 * Respects prefers-reduced-motion.
 */
export default function AnimatedSection({
  children,
  className,
  trigger = 'whileInView',
}: AnimatedSectionProps) {
  const shouldReduce = useReducedMotion()

  const motionProps =
    trigger === 'animate'
      ? {
          initial: shouldReduce ? false : ('hidden' as const),
          animate: 'show' as const,
        }
      : {
          initial: shouldReduce ? false : ('hidden' as const),
          whileInView: 'show' as const,
          viewport: viewportOnce,
        }

  return (
    <m.div variants={fadeUp} {...motionProps} className={className}>
      {children}
    </m.div>
  )
}
