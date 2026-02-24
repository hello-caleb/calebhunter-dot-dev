# calebhunter.dev

Portfolio site for Caleb Hunter — AI builder, developer ecosystem lead, and 20+ year technology professional. Built with Claude Code and deployed on Vercel.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) + TypeScript |
| Styling | Tailwind CSS v4 with custom design tokens |
| AI Chat | Anthropic Claude API via `/api/chat` (server-side) |
| Fonts | Instrument Serif, DM Sans, JetBrains Mono (Google Fonts) |
| Animations | Framer Motion |
| Icons | Lucide React |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm 9 or later

### Local Development

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local
# Edit .env.local and add your ANTHROPIC_API_KEY

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

| Variable | Description |
|----------|-------------|
| `ANTHROPIC_API_KEY` | Anthropic API key from [console.anthropic.com](https://console.anthropic.com/) |

## Project Structure

```
src/
├── app/              # Next.js App Router pages and API routes
│   ├── projects/     # Project detail pages (healthbridge, bountyswarm, beacon, omniroute)
│   ├── about/        # About page
│   ├── blog/         # Blog index and [slug] dynamic route
│   ├── contact/      # Contact page
│   └── api/chat/     # Server-side Claude API route
├── components/
│   ├── layout/       # Header, Footer, Navigation
│   ├── home/         # Hero, FeaturedProjects, BuiltWithClaude
│   ├── projects/     # ProjectCard, ProjectDetail
│   ├── chat/         # ChatWidget, ChatMessage, ChatInput
│   └── ui/           # Button, Badge, Container
├── content/
│   ├── projects.ts   # Project data (single source of truth)
│   └── blog/         # MDX blog posts
├── lib/
│   ├── anthropic.ts  # Anthropic SDK client (server-side only)
│   └── utils.ts      # cn() and other utilities
└── styles/
    └── globals.css   # Design tokens (@theme) + base styles
```

## Scripts

```bash
npm run dev       # Start development server (http://localhost:3000)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

## Design Tokens

Custom design tokens are defined in `src/styles/globals.css` using Tailwind v4's `@theme` directive, making them available as Tailwind utilities (`bg-background`, `text-accent`, etc.) and as CSS custom properties (`var(--color-accent)`).

| Token | Value | Tailwind Class |
|-------|-------|---------------|
| background | `#FAFAF8` | `bg-background` |
| accent | `#D4763C` | `text-accent`, `bg-accent` |
| text-primary | `#1A1A1A` | `text-text-primary` |
| chat-bg | `#1A1A1A` | `bg-chat-bg` |

## License

MIT
