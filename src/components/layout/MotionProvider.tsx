'use client'

import { LazyMotion } from 'framer-motion'

const loadFeatures = () => import('framer-motion').then((mod) => mod.domMax)

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>
}
