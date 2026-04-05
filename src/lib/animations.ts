import type { Variants } from 'framer-motion'

/**
 * Shared Framer Motion variant library.
 *
 * Usage in components:
 *   import { fadeUp, stagger } from '@/lib/animations'
 *
 * Reduced-motion pattern (LazyMotion / m.* components):
 *   const shouldReduce = useReducedMotion()
 *   <m.div
 *     variants={fadeUp}
 *     initial={shouldReduce ? false : 'hidden'}
 *     animate="show"
 *   />
 */

/** Fade up: opacity 0→1, y 24→0 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

/** Fade in: opacity 0→1, no movement */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

/** Stagger container: cascades children with 0.1 s delay between each */
export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

/** Scale in: scale 0.96→1 combined with fade, good for cards */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

/**
 * Standard viewport config for scroll-triggered animations.
 * Fires once when the element is 80 px into the viewport.
 */
export const viewportOnce = { once: true, margin: '-80px' } as const
