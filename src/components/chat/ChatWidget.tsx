'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { m, AnimatePresence, type Variants } from 'framer-motion'
import { X, MessageCircle } from 'lucide-react'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const MAX_MESSAGES = 20

const panelVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  exit: { opacity: 0, y: 16, scale: 0.98, transition: { duration: 0.15, ease: 'easeIn' } },
}

function generateSessionId() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36)
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [limitReached, setLimitReached] = useState(false)
  const [sessionId] = useState(generateSessionId)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const openButtonRef = useRef<HTMLButtonElement>(null)

  const sentCount = messages.filter((m) => m.role === 'user').length

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  // Escape key closes panel
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) setIsOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  // Focus trap: keep focus inside panel when open
  useEffect(() => {
    if (!isOpen) return
    const panel = panelRef.current
    if (!panel) return

    const focusable = panel.querySelectorAll<HTMLElement>(
      'button, textarea, input, a, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    function trap(e: KeyboardEvent) {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }

    panel.addEventListener('keydown', trap)
    first?.focus()
    return () => panel.removeEventListener('keydown', trap)
  }, [isOpen])

  // Return focus to open button on close
  useEffect(() => {
    if (!isOpen) openButtonRef.current?.focus()
  }, [isOpen])

  const sendMessage = useCallback(async (text: string) => {
    if (isLoading || limitReached) return

    const userMessage: Message = { role: 'user', content: text }
    const next = [...messages, userMessage]
    setMessages(next)
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next, sessionId }),
      })

      if (res.status === 429) {
        const data = await res.json()
        setMessages((prev) => [...prev, { role: 'assistant', content: data.error }])
        setLimitReached(true)
        return
      }

      if (!res.ok || !res.body) throw new Error('Request failed')

      // Stream SSE response
      setMessages((prev) => [...prev, { role: 'assistant', content: '' }])
      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() ?? ''

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          const payload = line.slice(6)
          if (payload === '[DONE]') break
          try {
            const { text } = JSON.parse(payload)
            setMessages((prev) => {
              const updated = [...prev]
              updated[updated.length - 1] = {
                role: 'assistant',
                content: updated[updated.length - 1].content + text,
              }
              return updated
            })
          } catch {
            // malformed chunk — skip
          }
        }
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Something went wrong. Please try again.' },
      ])
    } finally {
      setIsLoading(false)
    }
  }, [isLoading, limitReached, messages, sessionId])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <m.div
            ref={panelRef}
            role="dialog"
            aria-label="Chat with Claude about Caleb"
            aria-modal="true"
            variants={panelVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="w-[360px] max-w-[calc(100vw-3rem)] h-[520px] max-h-[calc(100vh-6rem)] bg-[#1a1a1a] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#2a2a2a] shrink-0">
              <div>
                <p className="text-sm font-medium text-[#fafaf8]">Ask Claude about me</p>
                <p className="text-xs text-[#6b6b6b] mt-0.5">
                  {sentCount} / {MAX_MESSAGES} messages
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="text-[#6b6b6b] hover:text-[#fafaf8] transition-colors p-1 rounded"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.length === 0 && (
                <p className="text-xs text-[#6b6b6b] text-center mt-8 leading-relaxed">
                  Ask me about Caleb&apos;s projects, background, or experience.
                </p>
              )}
              {messages.map((msg, i) => (
                <ChatMessage key={i} role={msg.role} content={msg.content} />
              ))}
              {isLoading && messages[messages.length - 1]?.role !== 'assistant' && (
                <div className="flex justify-start">
                  <div className="bg-[#2a2a2a] rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <m.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-[#6b6b6b]"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-4 pb-4 shrink-0">
              <ChatInput
                onSend={sendMessage}
                disabled={isLoading || limitReached}
              />
              <p className="text-[10px] text-[#6b6b6b] text-center mt-2">
                Powered by Claude
              </p>
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <button
        ref={openButtonRef}
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? 'Close chat' : 'Ask Claude about me'}
        aria-expanded={isOpen}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-accent text-white text-sm font-medium shadow-lg hover:bg-accent-hover transition-colors"
      >
        <MessageCircle size={16} />
        Ask Claude about me
      </button>
    </div>
  )
}
