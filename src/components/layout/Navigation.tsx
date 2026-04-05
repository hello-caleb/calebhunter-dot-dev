'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { m } from 'framer-motion'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

interface NavigationProps {
  orientation?: 'horizontal' | 'vertical'
  onLinkClick?: () => void
}

export default function Navigation({ orientation = 'horizontal', onLinkClick }: NavigationProps) {
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/')

  if (orientation === 'vertical') {
    return (
      <nav aria-label="Mobile navigation">
        <ul className="flex flex-col py-4 gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={onLinkClick}
                className={`block px-2 py-3 text-sm font-medium border-l-2 transition-colors ${
                  isActive(href)
                    ? 'border-accent text-accent'
                    : 'border-transparent text-text-secondary hover:text-text-primary hover:border-border-hover'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-8">
        {NAV_LINKS.map(({ href, label }) => {
          const active = isActive(href)
          return (
            <li key={href} className="relative">
              <Link
                href={href}
                onClick={onLinkClick}
                className={`text-sm font-medium transition-colors pb-1 ${
                  active ? 'text-accent' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {label}
                {active && (
                  <m.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-1/4 right-1/4 h-px bg-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
