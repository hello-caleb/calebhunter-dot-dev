'use client'

import { useState, type KeyboardEvent } from 'react'
import { ArrowUp } from 'lucide-react'

interface ChatInputProps {
  onSend: (message: string) => void
  disabled?: boolean
}

export default function ChatInput({ onSend, disabled = false }: ChatInputProps) {
  const [value, setValue] = useState('')

  function handleSend() {
    const trimmed = value.trim()
    if (!trimmed || disabled) return
    onSend(trimmed)
    setValue('')
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex items-end gap-2 border-t border-[#2a2a2a] pt-3">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder="Ask about Caleb's work..."
        rows={1}
        className="flex-1 resize-none bg-[#2a2a2a] text-[#fafaf8] placeholder-[#6b6b6b] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50"
        style={{ maxHeight: '120px' }}
      />
      <button
        onClick={handleSend}
        disabled={disabled || !value.trim()}
        aria-label="Send message"
        className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white hover:bg-accent-hover transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <ArrowUp size={14} />
      </button>
    </div>
  )
}
