export interface Project {
  id: string
  slug: string
  title: string
  tagline: string
  description: string
  status: 'Live' | 'In Development' | 'Hackathon Submission'
  techStack: string[]
  aiInvolvement: string
  technicalDecisions: string[]
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
    aiInvolvement:
      "Gemini 3 Flash is the core engine of HealthBridge. It processes live video frames from the WebRTC stream, recognizing ASL gestures in real time and translating them to text for the doctor. The same model handles the reverse — converting the doctor's speech responses into structured text output for the patient. We deliberately chose Gemini 3 Flash over larger models because latency was the primary constraint: a communication tool in a clinical context needs sub-second response times, not the deepest reasoning. The AI isn't a feature — it's the entire bridge.",
    technicalDecisions: [
      'Gemini 3 Flash over larger models — speed was the primary constraint for real-time ASL recognition',
      'LiveKit for WebRTC infrastructure — managed media server handles the low-latency video pipeline',
      'Bidirectional translation architecture — ASL→text for patient input, speech→text for doctor responses',
      'Stateless session design — no persistent storage of health conversations, privacy by default',
      'Built in 48 hours — scoped to a working demo rather than production hardening',
    ],
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
    aiInvolvement:
      "BountySwarm is built entirely around a multi-agent AI architecture. Five specialized agents — Scout, Analyst, Auditor, Compliance, and Executor — each evaluate hackathon submissions from a distinct perspective. Scout discovers and categorizes submissions. Analyst evaluates technical depth. Auditor checks for rule violations. Compliance verifies eligibility. Only when all agents reach consensus does Executor trigger the smart contract to release prize funds. This mirrors how human judging panels work and reduces the risk of any single model's blind spots affecting the outcome. No agent can unilaterally pay out or withhold a prize.",
    technicalDecisions: [
      'Multi-agent consensus architecture — no single agent can unilaterally release or block funds',
      'Specialized agent roles — each agent is prompted for one evaluation lens, reducing hallucination risk',
      'MNEE stablecoin on Ethereum — programmable, trustless prize distribution via smart contracts',
      'Smart contract as escrow — funds held until agent consensus is cryptographically confirmed on-chain',
      'Sub-60 second end-to-end target — performance budget set at hackathon kickoff and met',
    ],
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
    aiInvolvement:
      "The entire value proposition of Beacon is AI. Rather than a keyword-matching job board, Beacon uses an LLM to build a persistent model of the user's career trajectory — understanding not just titles and skills, but patterns of growth, the kinds of problems they gravitate toward, and what the right next role actually means for them specifically. A voice interface makes the coaching interaction feel natural and low-friction. The model proactively surfaces opportunities framed in the context of the user's trajectory, and conducts real-time interview coaching with contextual feedback — not generic prep tips.",
    technicalDecisions: [
      'Voice-first interface — reduces the friction and anxiety that text-heavy job tools create',
      'Career trajectory modeling — persistent user model vs. stateless keyword matching',
      'Proactive opportunity surfacing — push model rather than forcing users to search',
      'Real-time interview coaching — in-session feedback loop, not just pre-interview prep materials',
      'LLM as the core logic layer — business rules encoded in prompts, not hard-coded filters',
    ],
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
    aiInvolvement:
      "OmniRoute is a meta-AI system: it uses AI to decide which AI to use. An orchestrator model receives the user's voice request, then queries an Elasticsearch capability registry — a living document of each model's known strengths, weaknesses, cost profile, and recent performance — to determine the optimal routing decision. For complex tasks, the orchestrator constructs multi-model chains: one model for reasoning, another for code generation, a third for synthesis. The user sees only one voice interface and one coherent response. The model complexity is entirely abstracted away — the right AI for the job, automatically.",
    technicalDecisions: [
      'Elasticsearch as capability registry — enables semantic search over model capabilities, not just keyword lookup',
      'Living registry design — updated continuously as models release new versions or shift in performance',
      'Orchestrator model as router — routing logic encoded in an LLM, not brittle static rules',
      'Multi-model chaining support — architecture designed for tasks that benefit from specialized model combinations',
      'Single voice interface — all routing complexity hidden from the user by design',
    ],
    links: {},
  },
]
