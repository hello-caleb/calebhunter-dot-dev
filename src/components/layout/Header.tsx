'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { m, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, MessageCircle } from 'lucide-react'
import Navigation from './Navigation'
import Container from '@/components/ui/Container'
import { useChatWidget } from '@/components/chat/ChatContext'


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const { toggle: toggleChat } = useChatWidget()

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  function toggleDark() {
    const next = !isDark
    document.documentElement.classList.toggle('dark', next)
    setIsDark(next)
  }

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
          {/* Claude chat widget button */}
          <div className="relative group">
            <button
              onClick={toggleChat}
              aria-label="Ask Claude about Caleb"
              className="w-8 h-8 rounded-full bg-accent/75 hover:bg-accent hover:shadow-[0_0_12px_4px] hover:shadow-accent/50 transition-all flex items-center justify-center text-white"
            >
              <MessageCircle size={15} />
            </button>
            <div className="pointer-events-none absolute top-full right-0 mt-2 px-2.5 py-1.5 rounded-md bg-surface border border-border shadow-md text-xs text-text-primary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150">
              Ask Claude about Caleb
            </div>
          </div>
          {/* Dark mode toggle */}
          <div className="relative group">
            <button
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={toggleDark}
              className="w-8 h-8 rounded-full bg-accent/75 hover:bg-accent hover:shadow-[0_0_12px_4px] hover:shadow-accent/50 transition-all flex items-center justify-center text-white"
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <div className="pointer-events-none absolute top-full right-0 mt-2 px-2.5 py-1.5 rounded-md bg-surface border border-border shadow-md text-xs text-text-primary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150">
              {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            </div>
          </div>
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
                  <MessageCircle size={16} />
                  Ask Claude about Caleb
                </button>
              </div>
            </Container>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
