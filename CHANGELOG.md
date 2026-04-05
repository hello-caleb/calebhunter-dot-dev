# Changelog

All notable changes to the calebhunter.dev portfolio project will be documented in this file.

---

## [Unreleased] — Site-wide Framer Motion animation system (KAN-12)

### Added

- `src/lib/animations.ts` — shared Variants library: `fadeUp`, `fadeIn`, `stagger`, `scaleIn`, `viewportOnce` viewport config.
- `src/components/ui/AnimatedSection.tsx` — lightweight client wrapper for `fadeUp` entry on Server Component pages; supports `animate` (above-fold) and `whileInView` (scroll-triggered) modes.
- `src/components/projects/ProjectsGrid.tsx` — client component that renders the projects grid with stagger + `whileInView` scroll-triggered animations.
- `src/components/blog/BlogPostList.tsx` — client component for the blog post list with stagger + `whileInView` scroll-triggered animations.

### Changed

- `AboutContent.tsx` — migrated from local inline variants to shared `fadeUp`/`stagger`; body section uses `whileInView` instead of `animate`; hero section uses `animate`; `useReducedMotion()` respected throughout.
- `ContactContent.tsx` — same migration: shared variants, hero uses `animate`, cards use `whileInView`, `useReducedMotion()` respected.
- `ProjectDetail.tsx` — migrated to shared variants; `useReducedMotion()` added.
- `ProjectCard.tsx` — replaced independent `whileInView` entry (now handled by `ProjectsGrid` stagger) with `whileHover={{ y: -4, boxShadow: ... }}` spring lift animation.
- `projects/page.tsx` — uses `AnimatedSection` for hero entry and `ProjectsGrid` for the animated card grid.
- `blog/page.tsx` — uses `AnimatedSection` for hero entry and `BlogPostList` for animated post entries.
- `blog/[slug]/page.tsx` — uses `AnimatedSection` for full-page entry animation.

---

## [Unreleased] — Migrate content to About and add XR project (KAN-14)

### Added

- XR/VR project entry: "Meta XR Developer Ecosystem" — covers scaling Meta's VR developer community from 2,200 to 4,600 members (109% growth), the $1.5M developer competition, and the content and program strategy behind it.
- `/projects/meta-xr-developer` detail page wired to the new project entry in `src/content/projects.ts`.

### Changed

- Verified `AboutContent.tsx` — bio copy, stat grid, and tech stack are complete and accurate: 20+ years experience at Meta, Google, IBM, Samsung, and Jina AI; current focus on Claude/Gemini/frontier models and hackathons; looking for DevRel/ecosystem role at an AI platform company.

---

## [Unreleased] — Hero layout and global nav redesign (KAN-10)

### Added

- `ChatContext` — React context + `ChatProvider` for shared widget open/close state; enables nav Claude icon to open the chat panel.
- `useChatWidget` hook consumed by `Header` and `ChatWidget`.
- Social icons row in hero (LinkedIn, GitHub, X) — inline SVGs styled in `text-tertiary` with `hover:text-accent`.
- "Hello, I'm" label above name in hero — DM Sans, muted, per locked spec.
- Spline 3D scene placeholder slot in hero right column (replaced by KAN-9 asset).

### Changed

- **Hero**: Full rewrite to locked spec — left-aligned single column, full-viewport height (`min-h-[calc(100vh-4rem)]`), one primary CTA ("View Projects"), removed second CTA and bio copy (bio migrates to About in KAN-14).
- **Header**: Wordmark updated — `caleb` bold terracotta, `hunter` muted; scroll state adds `backdrop-blur` + reduced opacity background; Claude icon button in right nav opens chat widget; dark mode toggle button (temp inline class toggle, wired properly in KAN-33).
- **Navigation**: Magic-line underline via Framer Motion `layoutId="nav-underline"` — slides between active and hovered links; "Blog" renamed to "Insights" per spec; active link text terracotta, no weight change.
- **MotionProvider**: `ChatProvider` moved outside `LazyMotion` to prevent animation state reset on async feature load.

---

## [Unreleased] — V2 font system (KAN-7)

### Added

- Bricolage Grotesque loaded via `next/font/google` as the V2 display/heading font — self-hosted at build time, zero CDN requests.
- `--font-display` CSS token in `@theme` (Tailwind utility: `font-display`). `--font-serif` retained as a backward-compatible alias; both resolve to Bricolage Grotesque.
- `--font-body` CSS token as alias for `--font-sans` (DM Sans).
- `DESIGN_SYSTEM.md` — typography scale (h1–h4, body, caption, mono), color token reference, and layout tokens.

### Changed

- Replaced Instrument Serif with Bricolage Grotesque for all heading elements (`h1`–`h6`) and `.prose h2`/`h3`. Display text now reads as more decisive and product-minded.
- `layout.tsx`: swapped `Instrument_Serif` import/config for `Bricolage_Grotesque` (variable font, all weights).
- `globals.css` heading base styles updated to use `var(--font-display)`.

---

## [Unreleased] — V2 dual-mode color system (KAN-22)

### Added

- `@custom-variant dark` directive in `globals.css` activates Tailwind's `dark:` prefix via `.dark` class on `<html>` (class strategy, not OS media query — required for KAN-33 toggle).
- Full dark mode token set in `.dark` / `:root.dark` selector block: near-black backgrounds (`#111111`, `#1A1A1A`, `#222222`), inverted text scale, terracotta accent unchanged, adjusted hover and accent-light values for dark surfaces.
- `darkMode: 'class'` in `tailwind.config.ts` for IDE/tooling compatibility; authoritative config is the CSS `@custom-variant` directive.

### Changed

- `--color-text-tertiary` corrected from `#717171` to `#9B9B9B` per KAN-22 spec.
- `tailwind.config.ts` documentation comment updated to reflect both light and dark token sets.
- All Tailwind utilities (`bg-background`, `text-text-primary`, `border-border`, etc.) now automatically resolve to dark values when `.dark` is present — no per-component `dark:` prefixes required for base tokens.

---

## [1.4.0] – 2026-04-02 — Third blog post (Task 16)

### Added

- Third blog post: "I Use Google Drive as My Primary File System. Here's How I Got Claude Cowork to Play Nice With It." — covers streaming vs. mirroring in Google Drive for Desktop, why streamed files are unreliable with Cowork's file system access, the file format gotcha (.gdoc shortcuts vs. real files), and the working setup using selectively mirrored folders.
- `remark-gfm` dependency to support GFM table syntax in MDX posts.
- Table styles in `.prose` CSS component (`table`, `thead`, `th`, `td`) for blog posts with comparison tables.
- Full OpenGraph (`og:type`, `og:title`, `og:description`, `og:url`, `og:publishedTime`) and Twitter Card (`twitter:title`, `twitter:description`) metadata on individual blog post pages.
- Article JSON-LD structured data (`schema.org/Article`) on individual blog post pages.

---

## [1.3.0] – 2026-02-24 — Second blog post (Task 15)

### Added

- Second blog post: "What I Learned Building 4 AI Projects in 3 Months" — covers HealthBridge, BountySwarm, Beacon, and OmniRoute through four builder lessons: speed constraints, multi-agent consensus, voice-first as product strategy, and the appeal of meta-level infrastructure problems.

---

## [1.2.0] – 2026-02-24 — Beacon & OmniRoute GitHub repos (Task 14)

### Added

- Public GitHub repo for Beacon ([github.com/hello-caleb/beacon](https://github.com/hello-caleb/beacon)) with full README covering problem statement, architecture diagram, tech stack, and status.
- Public GitHub repo for OmniRoute ([github.com/hello-caleb/omniroute](https://github.com/hello-caleb/omniroute)) with full README covering problem statement, routing architecture diagram, Elasticsearch capability registry design, and status.
- GitHub links for Beacon and OmniRoute in `src/content/projects.ts`, replacing the "Coming Soon" state on both project detail pages.

---

## [1.1.0] – 2026-02-24 — Performance & accessibility (Task 10)

### Changed

- Wrapped root layout with `MotionProvider` (`LazyMotion` + async `domMax`) to defer Framer Motion's full feature bundle until after initial render, addressing ~1,196 KiB of unused JS on first load.
- Switched all animated components from `motion.*` to `m.*` (Header, Hero, ProjectCard, ProjectDetail, AboutContent, ContactContent, ChatWidget).
- Lazy-loaded `ChatWidget` via `next/dynamic({ ssr: false })` using a thin `ChatWidgetLoader` client wrapper, removing the chat panel from the SSR bundle.
- Darkened `--color-text-tertiary` from `#9b9b9b` to `#717171` to meet WCAG AA contrast ratio (4.66:1 vs. the required 4.5:1 on the `#fafaf8` background).

---

## [1.0.0] – 2026-02-24 — MVP complete

All nine tasks shipped. Every page built, every PR merged to main.

---

## [0.9.0] – 2026-02-24 — Blog index and first post (Task 9)

### Added

- Blog index (`/blog`) with hero section and readable post list, separated by dividers.
- Dynamic blog post route (`/blog/[slug]`) with MDX rendering via `next-mdx-remote/rsc`, back navigation, and `generateStaticParams` for SSG.
- First post: "Building My Portfolio with Claude Code" (~700 words) covering the planning workflow, what worked, what required human judgment, and the meta-point about AI-assisted development.
- `src/lib/blog.ts` utility for reading and parsing MDX posts with `gray-matter` frontmatter.
- Custom `.prose` CSS component in `globals.css` for readable blog typography (headings, links, code, blockquotes).
- Dependencies: `next-mdx-remote@6`, `gray-matter@4`.

---

## [0.8.0] – 2026-02-24 — Contact page (Task 8)

### Added

- Contact page (`/contact`) with hero section and four contact cards: Email, LinkedIn, GitHub, X.
- Cards use Lucide icons, subtle border, hover shadow, and staggered Framer Motion fade-up entrance.
- Email card copies address to clipboard with a "Copied!" confirmation; external links open in new tab.

---

## [0.7.0] – 2026-02-24 — Claude chat widget and API route (Task 7)

### Added

- Claude chat widget (`ChatWidget`) fixed to the bottom-right on every page. Opens a dark slide-up panel with streaming AI responses about Caleb.
- `ChatMessage` component: user messages right-aligned (terracotta), assistant messages left-aligned (dark surface).
- `ChatInput` component: textarea with send button; disabled while loading or at message limit; Enter key submits.
- `/api/chat` POST route: server-side Anthropic SDK integration, SSE streaming, 20-message per-session rate limit with friendly copy, API key never exposed to client.
- Animated typing indicator (pulsing dots) while waiting for a response.
- Keyboard accessibility: Escape closes the panel, focus trap when open, focus returns to trigger button on close.
- "Powered by Claude" attribution in panel footer.

---

## [0.6.0] – 2026-02-24 — About page (Task 6)

### Added

- About page (`/about`) with five sections: opening bio, what I do, current focus, career stat grid, and tech stack badge grid.
- Career highlights rendered as a responsive stat grid (2-col mobile, 3-col tablet, 4-col desktop) with large terracotta numbers and secondary descriptor text.
- Tech stack rendered as a badge grid using the `Badge` component.
- Framer Motion staggered fade-up entrance on all sections.

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
