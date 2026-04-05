'use client'

import { createContext, useContext, useState, useCallback } from 'react'

interface ChatContextValue {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

const ChatContext = createContext<ChatContextValue | null>(null)

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((o) => !o), [])

  return (
    <ChatContext.Provider value={{ isOpen, open, close, toggle }}>
      {children}
    </ChatContext.Provider>
  )
}

export function useChatWidget() {
  const ctx = useContext(ChatContext)
  if (!ctx) throw new Error('useChatWidget must be used inside ChatProvider')
  return ctx
}
