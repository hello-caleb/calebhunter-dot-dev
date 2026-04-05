'use client'

import dynamic from 'next/dynamic'
import { m } from 'framer-motion'
import { useChatWidget } from '@/components/chat/ChatContext'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => null,
})

// Chat panel metrics (must match ChatWidget.tsx):
//   container: fixed bottom-6 right-6 (24px each)
//   button height: ~48px, gap: 12px, panel height: 520px
//   panel top from viewport bottom = 24 + 48 + 12 + 520 = 604px
//
// Robot resting position: bottom 80px, right 0 (fills hero lower-right)
// To animate up to panel top:  y = -(604 - 80) = -524,  x = -24 (shift left to match right-6)

const CLOSED = { y: 0, x: 0 }
const OPEN   = { y: -524, x: -24 }

export default function RobotMascot() {
  const { isOpen } = useChatWidget()

  return (
    <m.div
      className="fixed z-40 w-[600px] h-[600px] pointer-events-none hidden md:block"
      style={{ bottom: 80, right: 0, originX: 1, originY: 1, scale: 0.33 }}
      animate={isOpen ? OPEN : CLOSED}
      transition={{ type: 'spring', stiffness: 280, damping: 28 }}
    >
      <Spline
        scene="/robot.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
    </m.div>
  )
}
