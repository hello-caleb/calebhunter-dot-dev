Here is the task list:

Task: Clarify success criteria for portfolio site (audience, outcomes, must‑have sections)
Dev Phase: Planning
Depends on: –
Notes: Use Anthropic Claude Evangelist role goals and JD bullets as the baseline.

Task: Write one-sentence value proposition for hero section
Dev Phase: Planning
Depends on: Clarify success criteria for portfolio site (audience, outcomes, must‑have sections)
Notes: Hiring manager should understand who I am and why I’m relevant in 10 seconds.

Task: Define core proof points the site must demonstrate (builder, ecosystem, content, community, founder mindset)
Dev Phase: Planning
Depends on: Clarify success criteria for portfolio site (audience, outcomes, must‑have sections)
Notes: Map directly to the five “What this site must prove” bullets in my portfolio spec.

Task: List 4 flagship AI projects to feature on the site
Dev Phase: Planning
Depends on: Define core proof points the site must demonstrate (builder, ecosystem, content, community, founder mindset)
Notes: Use HealthBridge, BountySwarm, Beacon, and OmniRoute as the initial four projects.

Task: Draft short blurbs for each flagship project (tagline, one-line description, status)
Dev Phase: Planning
Depends on: List 4 flagship AI projects to feature on the site
Notes: These blurbs will appear in the Home page featured projects section and Projects cards.

Task: Decide initial blog post lineup for launch
Dev Phase: Planning
Depends on: Clarify success criteria for portfolio site (audience, outcomes, must‑have sections)
Notes: Include “Building My Portfolio with Claude Code” and optionally “What I Learned Building 4 AI Projects in 3 Months”.

Task: Decide on tech stack for portfolio site
Dev Phase: Planning
Depends on: Clarify success criteria for portfolio site (audience, outcomes, must‑have sections)
Notes: Next.js 14 App Router, TypeScript, Tailwind, Vercel, Claude API via server-side route, Framer Motion.

Task: Define performance, accessibility, security, and code-quality acceptance criteria
Dev Phase: Planning
Depends on: Decide on tech stack for portfolio site
Notes: Turn the Non‑Negotiable Constraints section into a concise checklist.

Task: Create GitHub repo calebhunter-dot-dev
Dev Phase: Build
Depends on: Decide on tech stack for portfolio site
Notes: Public repo as described in the portfolio build plan.

Task: Scaffold Next.js 14 App Router project with TypeScript and Tailwind
Dev Phase: Build
Depends on: Create GitHub repo calebhunter-dot-dev
Notes: Set up base Next.js app with Tailwind and TypeScript.

Task: Set up base file structure (app routes, components, content, styles, api)
Dev Phase: Build
Depends on: Scaffold Next.js 14 App Router project with TypeScript and Tailwind
Notes: Match the folder structure described in my portfolio spec.

Task: Implement global layout with navigation, footer, and chat widget shell
Dev Phase: Build
Depends on: Set up base file structure (app routes, components, content, styles, api)
Notes: Layout.tsx plus Header, Footer, and Navigation components.

Task: Implement Home page hero section with value proposition and CTAs
Dev Phase: Build
Depends on: Implement global layout with navigation, footer, and chat widget shell
Notes: Asymmetric hero, headshot, “View Projects” and “About Me” calls to action.

Task: Implement Home page featured projects section with 4 project cards
Dev Phase: Build
Depends on: Implement Home page hero section with value proposition and CTAs
Notes: Each card shows name, one-line description, tech tags, status badge, and link.

Task: Implement Home page “Built with Claude” callout section
Dev Phase: Build
Depends on: Implement Home page hero section with value proposition and CTAs
Notes: Brief section explaining that the site and chat widget are built with Claude.

Task: Implement Projects index page with grid of all projects
Dev Phase: Build
Depends on: Set up base file structure (app routes, components, content, styles, api)
Notes: Card/grid layout listing HealthBridge, BountySwarm, Beacon, and OmniRoute.

Task: Implement HealthBridge project detail page
Dev Phase: Build
Depends on: Implement Projects index page with grid of all projects
Notes: Include description, key technical decisions, tech stack, and links.

Task: Implement BountySwarm project detail page
Dev Phase: Build
Depends on: Implement Projects index page with grid of all projects
Notes: Include description, key technical decisions, tech stack, and links.

Task: Implement Beacon project detail page
Dev Phase: Build
Depends on: Implement Projects index page with grid of all projects
Notes: Highlight voice-first architecture and career coaching focus.

Task: Implement OmniRoute project detail page
Dev Phase: Build
Depends on: Implement Projects index page with grid of all projects
Notes: Highlight meta-router, Elasticsearch registry, and multi-model chaining.

Task: Implement About page content structure and layout
Dev Phase: Build
Depends on: Clarify success criteria for portfolio site (audience, outcomes, must‑have sections)
Notes: Include opening narrative, “What I actually do,” “What I’m focused on now,” and career highlights.

Task: Implement Blog index page
Dev Phase: Build
Depends on: Decide initial blog post lineup for launch
Notes: Simple list of posts with title, date, and excerpt.

Task: Implement blog post template route for individual posts
Dev Phase: Build
Depends on: Implement Blog index page
Notes: MDX-based or static content as described in the portfolio plan.

Task: Implement Contact page with email and social links
Dev Phase: Build
Depends on: Implement global layout with navigation, footer, and chat widget shell
Notes: Include email, LinkedIn, GitHub, X/Twitter, and optional simple form.

Task: Implement Claude chat API route (/api/chat) with system prompt
Dev Phase: Build
Depends on: Decide on tech stack for portfolio site
Notes: Server-side only, uses Anthropic API, system prompt from the portfolio spec, with rate limiting.

Task: Implement chat widget UI (button, panel, messages, input, streaming)
Dev Phase: Build
Depends on: Implement Claude chat API route (/api/chat) with system prompt
Notes: Bottom-right floating button, dark slide-up panel, message counter, “Powered by Claude” badge.

Task: Wire chat widget into global layout so it appears on all pages
Dev Phase: Build
Depends on: Implement chat widget UI (button, panel, messages, input, streaming)
Notes: Ensure the widget is available on Home, Projects, About, Blog, and Contact.

Task: Add Framer Motion animations for hero, project cards, and section entrances
Dev Phase: Build
Depends on: Implement Home page hero section with value proposition and CTAs
Notes: Subtle fade and stagger animations, no heavy effects.

Task: Implement global styles and design tokens (colors, typography, spacing)
Dev Phase: Build
Depends on: Scaffold Next.js 14 App Router project with TypeScript and Tailwind
Notes: Use the color palette and font choices from the design direction.

Task: Add semantic HTML structure and ARIA labels across components
Dev Phase: Testing
Depends on: Implement global layout with navigation, footer, and chat widget shell
Notes: Ensure headings, landmarks, and ARIA labels support accessibility goals.

Task: Test keyboard navigation including chat widget
Dev Phase: Testing
Depends on: Implement chat widget UI (button, panel, messages, input, streaming)
Notes: Verify tab order, focus handling, and escape-to-close behavior.

Task: Optimize images and confirm use of Next.js Image component
Dev Phase: Testing
Depends on: Implement Home page featured projects section with 4 project cards
Notes: Optimize headshot and project screenshots for performance.

Task: Run Lighthouse audits and meet performance and accessibility targets
Dev Phase: Testing
Depends on: Add semantic HTML structure and ARIA labels across components
Notes: Aim for performance score ≥ 90, FCP < 1.5s, and good accessibility scores.

Task: Verify API route security and rate limiting behavior
Dev Phase: Testing
Depends on: Implement Claude chat API route (/api/chat) with system prompt
Notes: Ensure no API key exposure and that friendly limit messages are returned.

Task: Configure environment variables locally and on Vercel
Dev Phase: Deployment
Depends on: Verify API route security and rate limiting behavior
Notes: Set ANTHROPIC_API_KEY and any other required env vars.

Task: Push project to GitHub and confirm CI build
Dev Phase: Deployment
Depends on: Scaffold Next.js 14 App Router project with TypeScript and Tailwind
Notes: Follow git commands from the portfolio build plan.

Task: Deploy portfolio site to Vercel
Dev Phase: Deployment
Depends on: Push project to GitHub and confirm CI build
Notes: Initial deploy to the Vercel URL.

Task: Connect calebhunter.dev domain to Vercel
Dev Phase: Deployment
Depends on: Deploy portfolio site to Vercel
Notes: Update DNS records from Bluehost to point to Vercel.

Task: Smoke test production site (all pages, chat widget, links)
Dev Phase: Deployment
Depends on: Connect calebhunter.dev domain to Vercel
Notes: Manual click-through on live domain to verify everything works.

Task: Write blog post “Building My Portfolio with Claude Code”
Dev Phase: Build
Depends on: Implement Blog index page
Notes: Document the AI-assisted development workflow used to build this site.

Task: Write blog post “What I Learned Building 4 AI Projects in 3 Months” (optional)
Dev Phase: Build
Depends on: Write blog post “Building My Portfolio with Claude Code”
Notes: Reflect on HealthBridge, BountySwarm, Beacon, and OmniRoute.

Task: Set up simple analytics and error tracking for the site
Dev Phase: Monitoring
Depends on: Deploy portfolio site to Vercel
Notes: Use Vercel Analytics or another lightweight option.

Task: Create recurring monthly task to review site, projects, and metrics
Dev Phase: Iteration
Depends on: Set up simple analytics and error tracking for the site
Notes: Use data to update content, projects, and positioning over time.
