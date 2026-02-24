export interface Project {
  id: string
  slug: string
  title: string
  tagline: string
  description: string
  status: 'Live' | 'In Development' | 'Hackathon Submission'
  techStack: string[]
  links: {
    demo?: string
    github?: string
    devpost?: string
  }
}

export const projects: Project[] = [
  {
    id: 'healthbridge',
    slug: 'healthbridge',
    title: 'HealthBridge',
    tagline: 'Real-time ASL-to-text communication bridge for deaf patients and doctors',
    description:
      '466 million people worldwide have disabling hearing loss. HealthBridge is a real-time communication bridge using Gemini 3 Flash for ASL recognition and bidirectional translation — built in 48 hours at a hackathon.',
    status: 'Hackathon Submission',
    techStack: ['Next.js', 'TypeScript', 'Gemini 3 Flash', 'LiveKit', 'WebRTC', 'Vercel'],
    links: {
      demo: 'https://health-bridge-omega.vercel.app/',
      github: 'https://github.com/hello-caleb/healthbridge',
      devpost: 'https://devpost.com/software/healthbridge-hketdo',
    },
  },
  {
    id: 'bountyswarm',
    slug: 'bountyswarm',
    title: 'BountySwarm',
    tagline: 'AI-powered multi-agent system that automates hackathon prize distribution',
    description:
      'Five AI agents (Scout, Analyst, Auditor, Compliance, Executor) form a consensus mechanism that evaluates hackathon submissions and releases MNEE stablecoin to winners via Ethereum smart contracts in under 60 seconds.',
    status: 'Hackathon Submission',
    techStack: ['TypeScript', 'AI Agents', 'Ethereum', 'Solidity', 'Smart Contracts', 'MNEE'],
    links: {
      github: 'https://github.com/hello-caleb/bountyswarm',
    },
  },
  {
    id: 'beacon',
    slug: 'beacon',
    title: 'Beacon',
    tagline: 'AI career coach that talks to you — not another job board',
    description:
      'Voice-first AI career coach that proactively surfaces opportunities, coaches through interviews in real-time, and understands your full career trajectory rather than just keyword-matching a resume.',
    status: 'In Development',
    techStack: ['TypeScript', 'LLM APIs', 'Voice AI', 'Career Data Pipeline'],
    links: {},
  },
  {
    id: 'omniroute',
    slug: 'omniroute',
    title: 'OmniRoute',
    tagline: 'Talk to one AI. Get the best AI.',
    description:
      'Voice-first AI meta-router that uses Elasticsearch as a living capability registry to intelligently route requests to the optimal model — or chain multiple models together for complex tasks.',
    status: 'In Development',
    techStack: ['TypeScript', 'Elasticsearch', 'Multiple LLM APIs', 'Voice AI', 'Semantic Search'],
    links: {},
  },
]
