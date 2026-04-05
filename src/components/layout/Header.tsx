'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { m, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun } from 'lucide-react'
import Navigation from './Navigation'
import Container from '@/components/ui/Container'
import { useChatWidget } from '@/components/chat/ChatContext'

// Inline Claude logomark SVG
function ClaudeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-.5 14.5v-9l6 4.5-6 4.5z" />
    </svg>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { toggle: toggleChat } = useChatWidget()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border/60 shadow-sm'
          : 'bg-background border-b border-border'
      }`}
    >
      <Container className="flex items-center justify-between h-16">
        {/* Logo — wordmark */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="font-display text-xl leading-none tracking-tight">
            <span className="text-accent font-bold">caleb</span>
            <span className="text-text-tertiary font-normal">hunter</span>
          </span>
        </Link>

        {/* Desktop nav — center */}
        <div className="hidden md:block">
          <Navigation />
        </div>

        {/* Right icons — Claude + dark mode toggle */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={toggleChat}
            aria-label="Ask Claude about me"
            className="p-2 rounded-md text-text-secondary hover:text-accent transition-colors"
          >
            <ClaudeIcon size={18} />
          </button>
          {/* Dark mode toggle — wired in KAN-33 */}
          <button
            aria-label="Toggle dark mode"
            className="p-2 rounded-md text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => {
              document.documentElement.classList.toggle('dark')
            }}
          >
            <Sun size={16} />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors rounded-md"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="border-b border-border bg-background overflow-hidden md:hidden"
          >
            <Container>
              <Navigation orientation="vertical" onLinkClick={() => setMenuOpen(false)} />
              <div className="flex items-center gap-4 pb-4 pt-2 border-t border-border">
                <button
                  onClick={() => { toggleChat(); setMenuOpen(false) }}
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  <ClaudeIcon size={16} />
                  Ask Claude about me
                </button>
              </div>
            </Container>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
