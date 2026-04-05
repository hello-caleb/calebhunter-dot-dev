'use client'

import { LazyMotion } from 'framer-motion'
import { ChatProvider } from '@/components/chat/ChatContext'

const loadFeatures = () => import('framer-motion').then((mod) => mod.domMax)

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <ChatProvider>
      <LazyMotion features={loadFeatures}>{children}</LazyMotion>
    </ChatProvider>
  )
}
