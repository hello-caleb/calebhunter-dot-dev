'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
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
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`text-sm font-medium transition-colors relative pb-0.5 ${
                isActive(href)
                  ? 'text-accent after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-accent'
                  : 'text-text-secondary hover:text-text-primary'
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
