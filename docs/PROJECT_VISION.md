# calebhunter.dev – Project Vision

## 1. Product vision

calebhunter.dev is my public developer portfolio and home on the web.  
It showcases how I design, build, and ship AI‑powered products and developer experiences using modern tools like Claude, Gemini, and agentic coding workflows.[file:71]  
The site is both a personal brand asset and a live case study of how I work with AI as a collaborator, not just a code autocomplete.

## 2. Target audience and goals

### Primary audience

- Hiring managers and team members for roles like **Claude Evangelist, Applied AI (Startups)** and similar AI/devrel positions.
- Founders and technical leaders evaluating how I think about AI‑powered products and developer ecosystems.[file:71]

### Core goals

- Make it easy to understand **who I am**, what I’ve done, and how I work with AI.
- Demonstrate real, shipped projects that use Claude/Gemini/other AI tools in meaningful ways.[file:71]
- Show that I can run a disciplined, reproducible **agentic development workflow** (planning, branches, PRs, CI, reviews).
- Provide clear contact paths for collaboration, speaking, and advisory work.
- Feel credible, modern, and lightweight—no bloated CMS or heavy marketing fluff.

## 3. Non‑negotiable constraints

- **Performance:** Fast initial load, good Lighthouse/Core Web Vitals, static or lightweight SSR where possible.
- **Accessibility:** Sensible semantics, keyboard navigation, sufficient color contrast, alt text for key imagery.[file:71]
- **Security & privacy:** No secrets in the repo; API keys via environment variables only; minimal analytics.
- **Workflow:**
  - All changes via feature branches and pull requests.
  - CI (lint, tests, build) must pass before merging.
  - AI agents never push directly to `main`.
- **Clarity over cleverness:** Readable, maintainable code with tests for important logic.

## 4. Tech stack (initial)

- Framework: **Next.js (TypeScript)**
- Styling: **Tailwind CSS** with a minimalist, editorial feel.[file:71]
- Fonts: Instrument Serif (headings), DM Sans (body), JetBrains Mono (code), or closest matches via Google Fonts.[file:71]
- Deployment: Vercel (or similar) with preview environments for PRs.
- AI integration: Claude API (chat widget and/or “Ask about my work” interface), with room to add Gemini later.[file:71]
- Tooling: ESLint, Prettier, Testing Library + Jest/Vitest, GitHub Actions CI.

(If we later change the stack, this section should be updated.)

## 5. High‑level feature set (epics)

- **Home page**
  - Hero that clearly states who I am and what I do.
  - “What I’m Building” project highlights.
  - “Built with Claude” callout explaining AI involvement.[file:71]
  - Floating “Ask Claude about me” chat entrypoint.[file:71]

- **Projects**
  - Grid/list of key projects (HealthBridge, hackathon work, AI tools, etc.).[file:71]
  - Detail pages outlining problem, solution, tech, and AI workflows used.

- **AI Workflow / Case Studies**
  - Deep dives into how I use Claude/Gemini for planning, coding, and shipping.
  - Walkthroughs of agentic workflows, including this portfolio itself.

- **About**
  - Narrative of my background, values, and approach to AI and developer ecosystems.
  - Timeline or highlights of roles, companies, and key projects.

- **Talks / Content**
  - Speaking engagements, blog posts, podcasts, and other thought leadership.
  - Links to external content (YouTube, conference sites, etc.).

- **Contact**
  - Simple, secure way to reach me (email, calendar link, or contact form).

## 6. How AI will be used to build this

- Use Claude Code, VS Code agents, and other tools as **primary implementers** for many features, but within a strict Git/PR workflow.
- Keep planning and specification in Markdown docs in the repo, so agents always have clear context.
- Use secondary AI agents for code review, PR summaries, and risk identification.
- Document notable AI decisions and tradeoffs in PR descriptions and an “AI Workflow” section of the site.

## 7. Success criteria

- A hiring manager can understand who I am and what I can do in **under 3 minutes**.
- At least 3–5 projects documented with clear AI involvement.
- A visible, credible development workflow (GitHub history, PRs, CI) that I’d be comfortable walking through in an interview.
- The site is simple to maintain and extend for future projects and case studies.
