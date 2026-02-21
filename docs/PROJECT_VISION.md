# CALEB HUNTER — Developer Portfolio Site
## Complete Build Plan for Claude Code

**Repository:** `calebhunter-dot-dev`  
**Domain:** calebhunter.dev (DNS later — deploy to Vercel first)  
**Goal:** Ship a portfolio site that positions Caleb as a credible candidate for Anthropic's Claude Evangelist, Applied AI (Startups) role  
**Audience:** Anthropic hiring managers, AI/DevRel decision-makers, startup ecosystem leaders

---

## PROJECT VISION

This is not a generic developer portfolio. This is a living demonstration that Caleb Hunter builds real things with AI — specifically with Claude. The site itself is the portfolio piece. Every design choice, every interaction, every line of copy should communicate: "This person understands developers, builds with AI, and can represent a platform to the startup ecosystem."

The site must feel like it was built by someone who ships products, not someone who follows tutorials. It should be sophisticated enough to impress a design-conscious Anthropic team, technical enough to earn respect from engineers, and warm enough to feel like a real person lives behind it.

---

## TARGET AUDIENCE AND GOALS

**Primary audience:** The hiring team for Anthropic's "Claude Evangelist, Applied AI (Startups)" role.

**What they care about (from the JD):**
- Builder credibility — "write production-quality code, build compelling demos"
- Startup ecosystem experience — "lived the 0-to-1 journey"
- Technical content creation — "tutorials, demo apps, and blog posts"
- Developer community building — "build relationships with key technical communities"
- Hands-on AI experience — "hands-on experience building with LLMs"

**What this site must prove:**
1. Caleb builds real AI-powered applications (projects section)
2. Caleb understands the Claude platform deeply enough to embed it into a production site (chat widget)
3. Caleb has 20+ years of relevant ecosystem and program experience (about section)
4. Caleb creates technical content (blog section)
5. Caleb thinks like a founder and product person, not just a program manager (overall site quality and product thinking)

---

## CORE OUTCOMES

1. **A hiring manager can understand who Caleb is within 10 seconds** — clear hero section with value proposition
2. **Projects demonstrate AI builder credibility** — 4 project cards with rich detail pages showing architecture decisions, tech stack, and live demos where available
3. **The Claude-powered chat widget is a memorable differentiator** — visitors can ask about Caleb's work and get intelligent, contextual answers powered by the Anthropic API
4. **The site itself demonstrates modern AI-assisted development** — built with Claude Code, deployed on Vercel, clean architecture
5. **Blog section signals ongoing technical content creation** — even with 1-2 initial posts, it shows intent and capability
6. **Contact is frictionless** — clear paths to reach Caleb via email, LinkedIn, X, or GitHub
7. **Performance and accessibility are excellent** — fast load times, semantic HTML, keyboard navigable, good Lighthouse scores

---

## NON-NEGOTIABLE CONSTRAINTS

### Performance
- Lighthouse performance score ≥ 90
- First Contentful Paint < 1.5s
- No layout shift (CLS < 0.1)
- Images optimized (Next.js Image component or equivalent)

### Accessibility
- Semantic HTML throughout
- ARIA labels where needed
- Keyboard navigable (including the chat widget)
- Sufficient color contrast ratios (WCAG AA minimum)
- Skip-to-content link

### Security
- API key NEVER in client-side code — all Claude API calls go through a server-side API route
- Environment variables for all secrets
- Rate limiting on the chat API route (max 20 messages per session, max 100 per day)
- Input sanitization on chat messages

### Code Quality
- TypeScript throughout
- Clean component architecture
- Git branch/PR workflow
- README with setup instructions

---

## TECH STACK

- **Framework:** Next.js 14+ (App Router) with TypeScript
- **Styling:** Tailwind CSS with custom design tokens
- **Deployment:** Vercel
- **AI Chat:** Anthropic Claude API (claude-sonnet-4-5-20250929) via server-side API route
- **Fonts:** Load from Google Fonts — see design section for specific choices
- **Icons:** Lucide React
- **Animations:** Framer Motion (subtle, purposeful — not gratuitous)

---

## DESIGN DIRECTION

### Aesthetic: "Light Sophistication"
Inspired by speakeasy.com but adapted for a personal portfolio. Light background, not stark white — think warm off-whites and soft creams. Premium typography. Subtle depth through shadows, gentle gradients, and layered elements. The feeling should be: "this person has taste and builds with intention."

### Color Palette
```
--background: #FAFAF8        /* warm off-white */
--background-subtle: #F3F2EE /* slightly darker for sections */
--surface: #FFFFFF            /* cards, elevated elements */
--text-primary: #1A1A1A       /* near-black, not pure black */
--text-secondary: #6B6B6B     /* muted text */
--text-tertiary: #9B9B9B      /* subtle labels */
--accent: #D4763C             /* warm amber/terracotta — distinctive, not generic blue */
--accent-hover: #BE6832       /* darker accent for hover states */
--accent-light: #FDF0E7       /* light accent for backgrounds */
--border: #E8E6E1             /* subtle borders */
--border-hover: #D1CFC9       /* border hover state */
--code-bg: #F6F5F2            /* code block background */
--chat-bg: #1A1A1A            /* chat widget uses dark for contrast */
--chat-text: #FAFAF8          /* chat text */
```

### Typography
- **Display/Headings:** "Instrument Serif" (Google Fonts) — elegant, editorial, distinctive
- **Body:** "DM Sans" (Google Fonts) — clean, modern, highly readable
- **Code/Mono:** "JetBrains Mono" (Google Fonts) — developer-credible

### Layout Principles
- Max content width: 1200px, centered
- Generous whitespace — let content breathe
- Asymmetric hero section (text left, visual element right)
- Card-based project grid (2 columns on desktop, 1 on mobile)
- Subtle entrance animations (fade-up on scroll, staggered)
- No parallax, no heavy effects — sophistication through restraint

### Chat Widget Design
- Fixed bottom-right corner button with Claude's anthropic orange/terracotta accent
- Opens as a slide-up panel (not a popup)
- Dark background (#1A1A1A) to contrast with the light site — makes it feel like a distinct "tool"
- Smooth open/close animation
- Message bubbles with subtle typing indicator
- "Powered by Claude" badge at bottom of chat panel
- Close button and session message counter ("12/20 messages")

---

## SITE STRUCTURE AND CONTENT

### Page 1: Home (/)

**Hero Section:**
```
[Photo]                    [Text area]
                           Caleb Hunter
                           I build AI-powered products
                           and developer ecosystems.

                           20+ years connecting developers to platforms
                           at Meta, Google, IBM, Samsung, and startups.
                           Now building with Claude, Gemini, and the
                           tools shaping what's next.

                           [View Projects]  [About Me]
```

**Featured Projects Section:**
Title: "What I'm Building"
Subtitle: "Hackathon projects, AI experiments, and tools — all built with AI-assisted workflows."

Display 4 project cards (see project details below). Each card shows:
- Project name
- One-line description
- Tech tags (e.g., "Claude API", "Next.js", "Ethereum")
- Status badge ("Live", "In Development", "Hackathon Submission")
- Link to project detail page

**"Built with Claude" Section:**
A brief callout section:
```
This site was built using Claude Code as a development partner.
The chat widget below is powered by the Claude API.
[Learn how I build with AI →]  (links to a blog post or about section)
```

**Chat Widget:**
Floating button: "Ask Claude about me"
Always present on every page.

---

### Page 2: Projects (/projects)

Grid of all projects with filter/sort capability (or just a clean list for v1).

#### Project 1: HealthBridge
**Tagline:** Real-time ASL-to-text communication bridge for deaf patients and doctors
**Status:** Hackathon Submission (Gemini 3 Hackathon)
**Description:**
466 million people worldwide have disabling hearing loss. HealthBridge is a real-time communication bridge that works in both directions simultaneously — ASL signs captured via webcam are recognized by Gemini 3 Flash and displayed as text for doctors, while spoken medical terminology is transcribed and simplified into plain language for patients.

The system uses a multi-model Gemini 3 architecture with four distinct Thinking Levels tuned per-task: HIGH for patient history queries requiring deep reasoning, MEDIUM for medical object triage balancing accuracy and speed, and LOW for both jargon detection and ASL recognition where real-time responsiveness is critical.

**Key Technical Decisions:**
- Multi-model architecture: Gemini 3 Pro for reasoning, Flash for real-time recognition, Gemini 2.5 Flash Native Audio for bidirectional streaming
- Thinking Levels tuned per-pipeline rather than one global setting
- Media Resolution control: HIGH for ASL (subtle finger positions matter), MEDIUM for object triage
- LiveKit (WebRTC) for low-latency video sessions

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Gemini 3 Pro + Flash, LiveKit/WebRTC, Vercel

**Links:**
- Live Demo: https://health-bridge-omega.vercel.app/
- GitHub: https://github.com/hello-caleb/healthbridge
- Devpost: https://devpost.com/software/healthbridge-hketdo

---

#### Project 2: BountySwarm
**Tagline:** AI-powered multi-agent system that automates hackathon prize distribution
**Status:** Hackathon Submission (MNEE Hackathon) — Live on Ethereum Sepolia Testnet
**Description:**
After a hackathon ends, winners typically wait 60-90 days to get paid due to manual verification, tax forms, and bank transfers. BountySwarm cuts that to under 60 seconds.

It works by using five AI "agents" that each handle a specific part of the verification process — Scout monitors when judging is complete, Analyst calculates winners from scores, Auditor checks eligibility and rule compliance, Compliance verifies tax/legal paperwork, and Executor triggers the actual payment. All five must agree before any money moves, forming a consensus mechanism.

Once consensus is reached, a smart contract on the Ethereum blockchain releases MNEE stablecoin to winners, with cryptographic proof of why they won embedded in the transaction. The whole process is visible on a public dashboard built with a "Living Glass" design aesthetic.

The meta-angle: this project was solving the very problem the hackathon itself has — slow prize payouts. "If we win, use our tool to pay us."

**Key Technical Decisions:**
- 5-agent consensus architecture (Scout, Analyst, Auditor, Compliance, Executor)
- Smart contracts on Ethereum Sepolia testnet for transparent, verifiable payouts
- Cryptographic proof embedded in blockchain transactions
- Real-time dashboard with glassmorphism UI

**Tech Stack:** TypeScript, AI Agents, Ethereum/Solidity, Smart Contracts, MNEE Stablecoin

**Links:**
- GitHub: https://github.com/hello-caleb/bountyswarm

---

#### Project 3: Beacon
**Tagline:** AI career coach that talks to you — not another job board
**Status:** In Development
**Description:**
Traditional job searching is broken. People search for job titles they already know, on one platform at a time, and prep for interviews by reading blog posts. Beacon flips that by being a proactive, always-on career intelligence agent that talks to you like a human advisor.

The core experience: open Beacon and it already knows your background — your resume, your LinkedIn, your work history. Start talking to it naturally. It coaches you proactively on career moves, finds opportunities you'd never search for by matching against a deep understanding of who you are (not just keywords), and coaches you through interviews in real-time voice with adaptive feedback.

The MVP focuses on the voice conversation experience, with the agent demonstrating that it genuinely understands your career trajectory and can surface insights you wouldn't get from a job board. The "wow moment" is when the agent tells you something about your own career path that surprises you.

**Key Technical Decisions:**
- Voice-first architecture — conversation, not forms
- Career context engine that synthesizes resume + LinkedIn + work history
- Proactive recommendation system (not reactive search)
- Real-time interview coaching with adaptive questioning

**Tech Stack:** TypeScript, LLM APIs, Voice AI, Career Data Pipeline

**Links:**
- GitHub: Coming Soon

---

#### Project 4: OmniRoute
**Tagline:** Talk to one AI. Get the best AI. — The universal AI meta-router
**Status:** In Development
**Description:**
The biggest friction point in the AI era is knowing which AI tool to use for what. Should you use Claude for this writing task? ChatGPT for that canvas feature? Gemini for video analysis? Midjourney or Stability AI for images? OmniRoute solves this by being a single conversational interface — primarily voice-driven — that sits above the entire AI ecosystem.

You talk naturally: "I need to create a pitch deck for my startup." The system parses your intent, figures out what you actually need (asks smart follow-up questions if ambiguous), then routes your request to the optimal AI model for the job. Sometimes it's one model. Sometimes it chains several together — Claude writes the copy, Stability generates the hero image, and the results come back unified.

The intelligence behind the routing is powered by Elasticsearch, which acts as a living, searchable knowledge base of the entire AI landscape — every major model's capabilities, strengths, weaknesses, pricing, and latest features, all indexed and queryable through hybrid semantic search.

**Key Technical Decisions:**
- Voice-first input with intent parsing
- Elasticsearch as AI model capability registry
- Hybrid semantic search for model matching
- Multi-model chaining for complex requests
- Elastic Workflows for orchestration

**Tech Stack:** TypeScript, Elasticsearch, Multiple LLM APIs, Voice AI, Semantic Search

**Links:**
- GitHub: Coming Soon

---

### Page 3: About (/about)

**Content structure:**

**Opening paragraph (personal, specific, not generic):**
I've spent 20+ years at the intersection of developers and platforms — building the programs, communities, and technical content that help developers succeed. I've done this at Meta (scaling a VR developer community from 2,200 to 4,600), Google (serving 60,000+ internal developers), IBM (driving 40% platform adoption growth), Samsung Next (advising 15+ AI/ML portfolio companies), and Jina AI (growing an open-source AI community to 400,000+ users).

**What I actually do:**
I'm a builder and a connector. I build AI-powered applications (see my projects). I design and run developer programs that drive measurable adoption. I translate between technical teams and business stakeholders. I advise startups on go-to-market strategy and developer ecosystem growth. And I create the technical content — tutorials, workshops, hackathons, documentation — that turns curious developers into committed platform users.

**What I'm focused on now:**
I'm deep in the AI builder ecosystem — building applications with Claude, Gemini, and other frontier models, participating in hackathons, and exploring how multi-agent architectures, voice AI, and intelligent routing can create the next generation of developer tools. I'm looking for a role where I can combine my two decades of developer ecosystem experience with my hands-on AI building practice — ideally helping a platform company like Anthropic bring their technology to the startup community.

**Career highlights (visual timeline or key stats):**
- 109% developer community growth at Meta (2,200 → 4,600 developers)
- 150% community growth at Jina AI (to 400K+ users globally)
- 60,000+ internal developers served at Google
- 40% platform adoption increase at IBM
- $1.5M developer competition coordinated at Meta
- 15+ AI/ML portfolio companies advised at Samsung Next
- 20+ years across Meta, Google, IBM, Samsung, Jina AI, and startups

**Tech I work with:**
Generative AI, LLMs, AI Agents, Claude API, Gemini, MCP Servers, Python, TypeScript, Next.js, AWS, GCP, Azure, Elasticsearch, PyTorch, TensorFlow

---

### Page 4: Blog (/blog)

**Initial posts (at least 1-2 for launch):**

**Post 1:** "Building My Portfolio with Claude Code: An AI-Assisted Development Workflow"
- Write about the experience of building this very site using Claude Code
- Document the workflow: planning → prompting → iteration → deployment
- Be honest about what worked and what didn't
- This is exactly the kind of content a Claude Evangelist would create

**Post 2 (optional for launch, but valuable):** "What I Learned Building 4 AI Projects in 3 Months"
- Reflect on HealthBridge, BountySwarm, Beacon, OmniRoute
- Talk about multi-model architectures, agent design, voice AI
- Frame it as a builder's perspective, not a tutorial

If you only have time for one, do Post 1. It's the most meta and most relevant to Anthropic.

---

### Page 5: Contact (/contact)

Simple, clean page:
- Email: caleb.r.hunter@gmail.com (mailto link)
- LinkedIn: linkedin.com/in/calebhunter
- GitHub: github.com/hello-caleb
- X/Twitter: x.com/Caleb9to5
- A simple contact form (optional — can use Formspree or just list the links)

---

## CLAUDE CHAT WIDGET — SYSTEM PROMPT

The chat widget uses the Anthropic API via a Next.js API route. Here is the system prompt:

```
You are an AI assistant embedded on Caleb Hunter's developer portfolio site (calebhunter.dev). You are powered by Claude, made by Anthropic. Your job is to help visitors learn about Caleb's work, projects, skills, and background.

## Who is Caleb Hunter
Caleb is a senior technology professional with 20+ years of experience spanning Technical Program Management, Developer Relations, and AI/startup ecosystem work. He's based in New York City.

## Professional Background
- Meta (via Inspyr Solutions): VR Community & Developer Relations Program Manager. Grew developer community 109% (2,200 to 4,600). Coordinated $1.5M developer competition with 1,688 participants. Dec 2024 - Dec 2025.
- Samsung Next (Samsung Venture Capital): Senior Strategic Program Manager. Advised 15+ AI/ML portfolio companies. Launched inaugural Generative AI Hackathon with Google Cloud. Grew partner network 20%. Jan 2023 - Dec 2024.
- Jina AI: Senior Manager, Developer Community. Grew community 150% to 400K+ users. Managed Linux Foundation open source transition for DocArray. Aug 2021 - Mar 2023.
- Google (via Globe Consultants): Senior Program Manager, Internal Developer Relations. Served 60,000+ internal developers. Dec 2019 - Dec 2020.
- IBM: Startup Community Technologist. Drove 40% platform usage increase in AI/ML Cloud adoption. Managed 6-person DevRel team. Aug 2015 - Nov 2019.
- Earlier: BrightWorks (studio lead, clients included Samsung, Intuit, Etsy, Amazon Fresh, Matterport), RocketSpace, Factory (startup incubator), Autodesk, NASA.

## Education
BS Computer Science, California State University East Bay. Minor: Business Administration.
Certifications: Certified AI Practitioner (AWS), PMP, Machine Learning Engineer (In Progress).

## Current Projects
1. HealthBridge: Real-time ASL-to-text communication bridge for deaf patients and doctors. Multi-model Gemini 3 architecture. Submitted to Gemini 3 Hackathon. Live at health-bridge-omega.vercel.app.
2. BountySwarm: AI-powered multi-agent system automating hackathon prize distribution via Ethereum smart contracts. 5-agent consensus mechanism. Live on Sepolia testnet.
3. Beacon (In Development): AI career coach with real-time voice conversation. Proactive career coaching, interview prep, opportunity discovery.
4. OmniRoute (In Development): Voice-first AI meta-router using Elasticsearch to intelligently route requests to the optimal AI model.

## Technical Skills
Generative AI, LLMs, AI Agents, Claude API, Gemini, MCP Servers, Python, TypeScript, JavaScript, Next.js, AWS, GCP, Azure, Elasticsearch, PyTorch, TensorFlow, SQL, APIs, SDKs.

## How to behave
- Be helpful, warm, and professional. Represent Caleb well.
- Answer questions about Caleb's projects, background, skills, and experience with specific details and numbers where available.
- If someone asks about a project, give a substantive answer — don't just say "check the projects page." Describe what it does, the tech, and why it's interesting.
- If asked about Caleb's interest in a specific company or role, you can say he's actively exploring opportunities in AI, developer relations, and platform ecosystem roles at companies building the future of AI.
- For questions about Anthropic specifically: Caleb is deeply enthusiastic about Claude and Anthropic's mission. He builds with Claude, he built this very site using Claude Code, and he believes in Anthropic's approach to safe, beneficial AI.

## Boundaries — do NOT discuss:
- Salary expectations or compensation details
- Why Caleb left any specific employer
- Negative opinions about any company, product, or person
- Political opinions or controversial topics
- Specific interview processes or other companies he's talking to
- Anything speculative about Caleb's personal life

If asked about any of these topics, politely say: "I'm not the best source for that — reach out to Caleb directly!" and suggest the contact page.

## Tone
Knowledgeable but approachable. Like a well-informed colleague who's excited to tell you about Caleb's work. Not salesy, not robotic. Use specific details and numbers rather than vague praise.
```

---

## API ROUTE IMPLEMENTATION NOTES

### /api/chat (POST)
- Accept: `{ messages: Array<{ role: string, content: string }>, sessionId: string }`
- Server-side only — API key from environment variable `ANTHROPIC_API_KEY`
- Use `claude-sonnet-4-5-20250929` model (good quality, reasonable cost)
- Max tokens per response: 500 (keeps responses concise and costs low)
- Rate limiting: Track by sessionId in memory (or use Vercel KV if available)
  - Max 20 messages per session
  - If limit reached, return a friendly message: "You've reached the message limit for this session. Reach out to Caleb directly for more!"
- System prompt: See above
- Stream responses for better UX (use Vercel AI SDK or manual SSE)

### Environment Variables
```
ANTHROPIC_API_KEY=sk-ant-api03-... (the user's key)
```

### Cost Estimate
- Claude Sonnet: ~$3/million input tokens, ~$15/million output tokens
- Average conversation: ~2000 input tokens, ~1500 output tokens per message
- 20 messages per session ≈ $0.01-0.03 per session
- 100 sessions ≈ $1-3 total
- $10 in credits will last months

---

## DEPLOYMENT STEPS

### Step 1: Build and test locally
```bash
npm run dev
# Visit http://localhost:3000
# Test all pages, test chat widget
```

### Step 2: Push to GitHub
```bash
git remote add origin https://github.com/hello-caleb/calebhunter-dot-dev.git
git push -u origin main
```

### Step 3: Deploy to Vercel
1. Go to vercel.com, log in
2. Import the `calebhunter-dot-dev` repo from GitHub
3. Add environment variable: `ANTHROPIC_API_KEY` = your API key
4. Deploy — Vercel auto-detects Next.js
5. You'll get a URL like `calebhunter-dot-dev.vercel.app`

### Step 4: Connect custom domain (do this after initial deploy)
1. In Vercel project settings → Domains → Add `calebhunter.dev`
2. Vercel will give you DNS records (typically an A record and/or CNAME)
3. Log into Bluehost → Domains → DNS Management for calebhunter.dev
4. Update the A record to point to Vercel's IP (76.76.21.21)
5. Add CNAME record: `www` → `cname.vercel-dns.com`
6. Wait for DNS propagation (usually 15-60 minutes, can take up to 48 hours)

**Important Bluehost note:** Since Bluehost currently has WordPress installed, you may need to:
- Go to Bluehost → Domains → calebhunter.dev → DNS tab
- Change nameservers OR update individual DNS records
- If Bluehost doesn't let you edit DNS records directly, you may need to transfer DNS management to Cloudflare (free) and point from there to Vercel. This is a common workaround.

---

## FILE STRUCTURE

```
calebhunter-dot-dev/
├── public/
│   ├── images/
│   │   ├── caleb-headshot.jpg
│   │   ├── healthbridge-screenshot.png
│   │   ├── bountyswarm-screenshot.png
│   │   └── og-image.png (for social sharing)
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx (root layout with nav, footer, chat widget)
│   │   ├── page.tsx (home)
│   │   ├── projects/
│   │   │   ├── page.tsx (projects grid)
│   │   │   ├── healthbridge/page.tsx
│   │   │   ├── bountyswarm/page.tsx
│   │   │   ├── beacon/page.tsx
│   │   │   └── omniroute/page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx (blog index)
│   │   │   └── [slug]/page.tsx (individual posts)
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── api/
│   │       └── chat/
│   │           └── route.ts (Claude API endpoint)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── FeaturedProjects.tsx
│   │   │   └── BuiltWithClaude.tsx
│   │   ├── projects/
│   │   │   ├── ProjectCard.tsx
│   │   │   └── ProjectDetail.tsx
│   │   ├── chat/
│   │   │   ├── ChatWidget.tsx
│   │   │   ├── ChatMessage.tsx
│   │   │   └── ChatInput.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Badge.tsx
│   │       └── Container.tsx
│   ├── content/
│   │   ├── projects.ts (project data)
│   │   └── blog/ (MDX files for blog posts)
│   │       └── building-with-claude-code.mdx
│   ├── lib/
│   │   ├── anthropic.ts (API client config)
│   │   └── utils.ts
│   └── styles/
│       └── globals.css (Tailwind + custom properties)
├── .env.local (ANTHROPIC_API_KEY — gitignored)
├── .gitignore
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── PROJECT_VISION.md
└── README.md
```

---

## HOW AI WILL BE USED TO BUILD THIS

This site is being built using Claude Code as the primary development agent. The workflow:

1. **Planning:** This document was created collaboratively between Caleb and Claude (claude.ai) to define every aspect of the site before writing a single line of code.

2. **Implementation:** Claude Code will scaffold the Next.js project, implement components, write the API route, and style everything according to this spec — working in feature branches with PRs.

3. **Content:** Project descriptions, the About page narrative, and the chat widget system prompt were drafted by Claude based on Caleb's real project data, resumes, and career history.

4. **Iteration:** Caleb reviews, provides feedback, and Claude Code iterates. The human drives the vision; the AI accelerates the execution.

5. **Documentation:** The blog post "Building My Portfolio with Claude Code" will document this entire process as technical content.

This workflow — plan with AI, build with AI, review as a human, ship — is exactly what a Claude Evangelist would teach startup developers to do.

---

## IMMEDIATE NEXT STEPS (for Caleb)

1. **Create the GitHub repo:** `calebhunter-dot-dev` (public)
2. **Open Claude Code** and feed it this document
3. **Have your API key ready** to add to `.env.local`
4. **Have your headshot photo** ready to drop into `public/images/`
5. **After Claude Code builds it:** Review, test locally, push to GitHub, deploy to Vercel
6. **Write the first blog post** (or have Claude Code draft it based on the experience)
7. **Apply to the Anthropic role** with calebhunter.dev (or the Vercel URL) in your application

---

## WHAT TO TELL CLAUDE CODE

When you open Claude Code, paste this entire document and say:

"Build this portfolio site according to this spec. Start by scaffolding the Next.js project, then implement the pages in this order: (1) layout with nav and footer, (2) home page with hero and featured projects, (3) projects page and individual project detail pages, (4) about page, (5) chat widget with API route, (6) contact page, (7) blog page with first post. Follow the design direction exactly — light mode, warm off-whites, Instrument Serif for headings, DM Sans for body, terracotta accent color. Make sure the Claude API route is server-side only with rate limiting. Use Framer Motion for subtle entrance animations."
