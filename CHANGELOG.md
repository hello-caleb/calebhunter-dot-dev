# Changelog

All notable changes to the calebhunter.dev portfolio project will be documented in this file.

## [Unreleased]

### Added

- About page (`/about`) with five sections: opening bio, what I do, current focus, career stat grid, and tech stack badge grid.
- `AboutContent` client component with Framer Motion staggered fade-up entrance and responsive stat grid (terracotta numbers, secondary descriptor text).

---

## [0.5.0] – 2026-02-24 — Projects index and detail pages (Task 5)

### Added

- Projects index page (`/projects`) with hero section and full 2-column `ProjectCard` grid.
- `ProjectDetail` reusable component: status badge, serif title, tagline, description, AI Involvement callout box (terracotta left border, `accent-light` background), key technical decisions list, tech stack badges, and links section.
- Four project detail pages: `/projects/healthbridge`, `/projects/bountyswarm`, `/projects/beacon`, `/projects/omniroute`.
- HealthBridge and BountySwarm show real Live Demo / GitHub / Devpost links.
- Beacon and OmniRoute show "GitHub — Coming Soon" state.
- Framer Motion staggered fade-up entrance on all detail pages.

### Changed

- Extended `Project` interface in `src/content/projects.ts` with `aiInvolvement: string` and `technicalDecisions: string[]` fields, populated for all 4 projects.

---

## [0.4.0] – 2026-02-24 — Home page (Task 4)

### Added

- Home page (`/`) with three sections: Hero, FeaturedProjects, and BuiltWithClaude.
- `Hero` component: asymmetric two-column layout with headshot, name, tagline, supporting copy, and primary CTAs (View Projects, About Me). Framer Motion staggered entrance.
- `FeaturedProjects` component: "What I'm Building" section rendering all 4 project cards in a 2-column grid.
- `BuiltWithClaude` component: callout section noting the site was built with Claude Code.
- `ProjectCard` component: title, status badge, tagline, tech stack tags, and link to detail page.
- `Badge` UI component with variants: `default`, `green`, `blue`, `purple`, `subtle`.
- `Button` UI component with variants (`primary`, `secondary`, `ghost`) and sizes (`sm`, `md`, `lg`); supports both link and button modes.

---

## [0.3.0] – 2026-02-24 — Site layout (Task 3)

### Added

- `Header` component with site name/logo and primary navigation (Home, Projects, About, Blog, Contact).
- `Footer` component with copyright and secondary links.
- `Container` UI component (`max-w-content`, centered, horizontal padding).
- Root layout (`src/app/layout.tsx`) wiring Header, main content area, and Footer.
- Google Fonts loaded via `next/font/google`: Instrument Serif, DM Sans, JetBrains Mono.
- Accessibility skip-to-content link.

---

## [0.2.0] – 2026-02-24 — CI and deployment (Task 2)

### Added

- GitHub Actions CI workflow (`.github/workflows/ci.yml`): runs lint and build on every push and pull request.
- Lighthouse CI workflow (`.github/workflows/lighthouse.yml`): automated performance and accessibility audits.
- Vercel deployment configuration.

---

## [0.1.0] – 2026-02-24 — Initial scaffold (Task 1)

### Added

- Initial project scaffold: Next.js 16 (App Router) + React 19 + TypeScript 5.
- Tailwind CSS v4 with design tokens via `@theme` in `globals.css`. A `tailwind.config.ts` is kept with documented token values for reference.
- Route stubs for all MVP pages: `/`, `/projects`, `/about`, `/blog`, `/contact`.
- Project detail routes: `/projects/healthbridge`, `/projects/bountyswarm`, `/projects/beacon`, `/projects/omniroute`.
- Blog dynamic route: `/blog/[slug]`.
- Claude chat API route (`/api/chat`) with Anthropic SDK.
- Component scaffolds: layout (Header, Footer, Navigation), home (Hero, FeaturedProjects, BuiltWithClaude), chat (ChatWidget, ChatMessage, ChatInput), projects (ProjectCard, ProjectDetail), and shared UI (Button, Badge, Container).
- Project data source of truth in `src/content/projects.ts`.
- Design tokens: off-white background (#FAFAF8), terracotta accent (#D4763C), dark text (#1A1A1A).
- Fonts: Instrument Serif (headings), DM Sans (body), JetBrains Mono (code).
- Framer Motion and Lucide React dependencies.
- ESLint 9 + Prettier configured; lint passes clean.
- `.env.local.example` for `ANTHROPIC_API_KEY`.
- Planning docs: `PROJECT_VISION.md`, `CONTENT_PLAN.md`.

### Notes

- Scaffold landed on Next.js 16 + React 19 + Tailwind v4 (latest stable as of Feb 2026) rather than the originally planned Next.js 14.
- Tailwind v4 replaced `tailwind.config.ts` as the primary config with CSS-based `@theme` in `globals.css`.
