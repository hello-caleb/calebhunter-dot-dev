# calebhunter.dev – Content Plan

This document captures the specific pages, sections, and content ideas for the site.  
It is a living document; not all sections must ship in v1.

---

## Global content elements

- **Tone:** confident, approachable, and practitioner‑focused.
- **Positioning:** “I build AI‑powered products and developer ecosystems” with concrete stories.
- **Visual themes:** editorial layout, generous whitespace, restrained animation, strong typography.[file:71]

---

## Home page (`/`)

### Hero section

- Layout: asymmetric hero with photo on one side and text on the other.[file:71]
- Core copy (to refine later):
  - Name and primary tagline:
    - “Caleb Hunter”
    - “I build AI‑powered products and developer ecosystems.”

  - Supporting line:
    - “20+ years connecting developers to platforms at Meta, Google, IBM, Samsung, and startups. Now building with Claude, Gemini, and the tools shaping what’s next.”[file:71]

  - Primary CTAs:
    - `[View Projects]`
    - `[About Me]`

### Featured projects – “What I’m Building”

- Section title: “What I’m Building”
- Subtitle: “Hackathon projects, AI experiments, and tools — all built with AI‑assisted workflows.”[file:71]
- Show ~4 project cards; each card includes:
  - Project name
  - One‑line description
  - Tech tags (e.g., “Claude API”, “Next.js”, “Ethereum”)
  - Status badge (“Live”, “In Development”, “Hackathon Submission”)
  - Link to project detail page

### “Built with Claude” callout

- Copy direction:

  > This site was built using Claude Code as a development partner.  
  > The chat widget below is powered by the Claude API.  
  > [Learn how I build with AI →]

- Links to AI workflow case study or about section.

### Chat widget entry

- Floating button text: “Ask Claude about me”.[file:71]
- Visible on all pages; opens an embedded chat surface where visitors can ask about my background, projects, and workflow.

---

## Projects page (`/projects`)

### Layout

- Grid or list of all projects, with room for filters (e.g., “AI products”, “Hackathons”, “Tools”).
- Each item: title, tagline, short description, tech stack, role, year, status.

### Example projects (from plan)

- **HealthBridge**
  - Tagline: Real‑time ASL‑to‑text communication bridge for deaf patients and doctors.[file:71]
  - Status: Hackathon Submission (Gemini 3 Hackathon).
  - Description: summarize problem, architecture (multi‑model Gemini 3, different “thinking levels”), and impact.[file:71]
  - Emphasis: accessibility, real‑time constraints, and thoughtful use of AI.

- (Add additional projects similarly: project name, tagline, description, AI involvement, links.)

Each project gets its own detail page at `/projects/<slug>` with:

- Problem
- Solution
- My role
- Stack and AI tools
- Architecture sketch (text or diagram)
- Outcomes and what I learned.

---

## AI Workflow / Case Studies (`/ai-workflows` or `/case-studies`)

Purpose: show exactly how I work with AI agents.

### Case study ideas

- **“How I built this portfolio with Claude”**
  - From initial plan and repo setup through branches, PRs, CI, and AI review.
  - Screenshots or excerpts from GitHub PRs and agents’ outputs.

- **Project‑specific AI workflows**
  - For HealthBridge and other AI products, describe:
    - Planning with AI,
    - Code generation,
    - Evaluation and testing,
    - Iteration and refactors.

---

## About page (`/about`)

Content concepts:

- Brief professional bio with emphasis on AI, developer platforms, and ecosystem building.
- Highlight experience with companies like Meta, Google, IBM, Samsung, and startups (where applicable).
- A short “How I think about AI and developers” section.
- A personal note: why this work matters to me and what kinds of problems I want to solve.

---

## Talks & Content (`/talks` or `/content`)

- List of talks, podcasts, blog posts, and other public work.
- For each item: title, event/publication, date, short description, and link.
- Space for future pieces about Claude, agentic workflows, and AI product design.

---

## Contact (`/contact`)

- Options (pick a simple combination):
  - Direct email (obfuscated to avoid spam).
  - Calendly link for intro calls.
  - Lightweight contact form with spam protection (if included, note privacy and data handling).

---

## Future enhancements / backlog ideas

- Project filters by tag and year.
- Dark mode toggle.
- More advanced AI chat flows (e.g., “Help me pick which project to look at”).
- Multi‑language support.
- Deeper analytics on what visitors click and ask the AI.
