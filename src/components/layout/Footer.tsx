import { Github, Linkedin, Twitter } from 'lucide-react'
import Container from '@/components/ui/Container'

const SOCIAL_LINKS = [
  { href: 'https://github.com/hello-caleb', label: 'GitHub', Icon: Github },
  { href: 'https://linkedin.com/in/calebhunter', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://x.com/Caleb9to5', label: 'X / Twitter', Icon: Twitter },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8">
        <p className="text-text-tertiary text-sm">
          © {new Date().getFullYear()} Caleb Hunter
        </p>
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-text-tertiary hover:text-text-secondary transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  )
}
