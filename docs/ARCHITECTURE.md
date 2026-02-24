# calebhunter.dev – Architecture

## 1. Overview

This is a Next.js + TypeScript + Tailwind CSS application deployed to Vercel.  
Content is primarily file‑based (Markdown/JSON), with optional API routes for AI chat.

## 2. Directory structure (planned)

- `/src/app` – Next.js app router pages and layouts.
- `/src/components` – Reusable UI components (navigation, cards, sections).
- `/src/lib` – Utilities (content loading, analytics, AI client, etc.).
- `/content` – Markdown/JSON for projects, case studies, and static copy.
- `/public` – Static assets (images, favicons).
- `/tests` – Unit and component tests.

## 3. Key modules

- **Layout & navigation:** shared layout, header, footer, SEO defaults.
- **Projects:** components to render project grids and detail pages from content files.
- **AI chat:** client‑side widget + API route that proxies to the Claude API using env vars (no secrets in repo).
- **Analytics:** minimal privacy‑friendly tracking (if added later).

## 4. Non‑functional requirements mapping

- Performance: static generation where possible, optimized images, minimal JS.
- Accessibility: semantic HTML, ARIA where needed, keyboard focus management.
- Security: env‑based secrets, rate limiting on AI endpoints, no PII storage.

## 5. Testing strategy

- Snapshot and interaction tests for critical components (hero, project cards, chat widget).
- Basic integration tests for key pages to ensure they render and link correctly.
