'use client'

interface ChatMessageProps {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? 'bg-accent text-white rounded-br-sm'
            : 'bg-[#2a2a2a] text-[#fafaf8] rounded-bl-sm'
        }`}
      >
        {content}
      </div>
    </div>
  )
}
