import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Contact' }

export default function ContactPage() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-content mx-auto">
      <h1 className="font-serif text-5xl text-text-primary mb-8">Contact</h1>
      <div className="space-y-4 text-text-secondary">
        <p>
          Email:{' '}
          <a
            href="mailto:caleb.r.hunter@gmail.com"
            className="text-accent hover:text-accent-hover"
          >
            caleb.r.hunter@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{' '}
          <a
            href="https://linkedin.com/in/calebhunter"
            className="text-accent hover:text-accent-hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/calebhunter
          </a>
        </p>
        <p>
          GitHub:{' '}
          <a
            href="https://github.com/hello-caleb"
            className="text-accent hover:text-accent-hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/hello-caleb
          </a>
        </p>
        <p>
          X / Twitter:{' '}
          <a
            href="https://x.com/Caleb9to5"
            className="text-accent hover:text-accent-hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Caleb9to5
          </a>
        </p>
      </div>
    </div>
  )
}
