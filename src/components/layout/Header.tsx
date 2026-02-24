'use client'

import { useState } from 'react'
import Link from 'next/link'
import { m, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Navigation from './Navigation'
import Container from '@/components/ui/Container'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <Container className="flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-xl text-text-primary hover:text-accent transition-colors"
        >
          Caleb Hunter
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:block">
          <Navigation />
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
            </Container>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
