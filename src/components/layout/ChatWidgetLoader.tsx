'use client'

import dynamic from 'next/dynamic'
import RobotMascot from '@/components/home/RobotMascot'

const ChatWidget = dynamic(() => import('@/components/chat/ChatWidget'), { ssr: false })

export default function ChatWidgetLoader() {
  return (
    <>
      <RobotMascot />
      <ChatWidget />
    </>
  )
}
