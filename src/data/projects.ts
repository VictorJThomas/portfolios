import type { Project } from './types'

export const projects: Project[] = [
  {
    id: 'cortex',
    no: 'NO. 001',
    title: 'Cortex',
    year: 2026,
    tech: ['Next.js', 'Hono', 'Postgres / pgvector', 'Claude', 'TypeScript'],
    palette: '--mauve',
    icon: 'brain',
    url: 'https://cortex-kappa-orcin.vercel.app',
    repo: 'https://github.com/VictorJThomas/cortex',
    description:
      'Ask any GitHub repository a question and get answers with citations. Paste a repo URL, let Cortex index it, then converse with the codebase — every answer linked back to the exact files it came from.',
    role: 'Founder & Lead Developer',
    duration: '2026 — Present',
    team: 'Solo',
    pullQuote:
      '"A multi-step agent that reads code the way an engineer does — search, read, cross-reference, then answer with receipts."',
    stats: [
      { label: 'Recall', value: '92%' },
      { label: 'Retrieval', value: 'Hybrid + rerank' },
      { label: 'Model', value: 'Claude Sonnet 4.6' },
    ],
    sections: [
      {
        title: 'The Premise',
        body: 'Understanding an unfamiliar codebase is slow. Cortex turns any repository into a conversational knowledge base — questions in, grounded answers out, each one citing the precise file and location it was drawn from.',
      },
      {
        title: 'The Retrieval',
        body: 'Hybrid retrieval pairs vector similarity (Voyage code embeddings + pgvector) with full-text search and a reranking pass. AST-aware chunking splits TypeScript, JavaScript, and Python along real code boundaries instead of arbitrary line windows.',
      },
      {
        title: 'The Agent',
        body: 'A multi-step Claude Sonnet 4.6 agent with tools to search code, read files, and query GitHub issues — with prompt caching for speed and per-response cost and latency transparency on every answer.',
      },
      {
        title: 'The Infrastructure',
        body: 'Next.js frontend on Vercel, Hono API on Railway, Postgres + pgvector on Neon, Redis (Upstash) and BullMQ for background indexing. Proven on large codebases — 13K+ chunks indexed on FastAPI.',
      },
    ],
  },
  {
    id: 'reachly',
    no: 'NO. 002',
    title: 'Reachly',
    year: 2025,
    tech: ['Next.js', 'Supabase', 'OpenAI', 'TypeScript', 'Tailwind'],
    palette: '--teal-deep',
    icon: 'rocket',
    url: 'https://reachly-monolith.vercel.app/',
    description:
      'AI-powered content repurposing SaaS for creators and social media managers. Long-form input → platform-adapted posts (Instagram, LinkedIn, Twitter) with tone and format control.',
    role: 'Founder & Lead Developer',
    duration: '2025 — Present',
    team: 'Solo',
    pullQuote:
      '"Built end-to-end — from auth to LLM pipeline — using Cursor and Claude Code daily for accelerated development."',
    stats: [
      { label: 'Stack', value: 'Next.js + Supabase' },
      { label: 'LLM', value: 'Gemini API' },
      { label: 'Status', value: 'In Production' },
    ],
    sections: [
      {
        title: 'The Premise',
        body: 'Creators waste hours reformatting long-form content for each platform. Reachly transforms a single input into native-feeling posts across Instagram, LinkedIn, and Twitter — tone-controlled, length-controlled, on-brand.',
      },
      {
        title: 'The Architecture',
        body: 'Next.js App Router with Server Components, Supabase (PostgreSQL + realtime) for data and auth, Gemini APIs with custom prompt engineering for platform-adapted generation.',
      },
      {
        title: 'Real-Time Surface',
        body: 'User dashboards and analytics built on Supabase realtime subscriptions — generations stream in live, no polling, no spinners.',
      },
      {
        title: 'Process',
        body: 'AI-assisted development daily — Cursor for component scaffolding, Claude Code for debugging and architecture. Faster iteration without sacrificing code quality.',
      },
    ],
  },
  {
    id: 'mognito-mobile',
    no: 'NO. 003',
    title: 'Mognito Mobile',
    year: 2024,
    tech: ['React Native', 'Expo', 'PostgreSQL', 'TypeScript'],
    palette: '--wine',
    icon: 'compass',
    description:
      'Production React Native (Expo) mobile application shipped from greenfield to App Store in under 4 months. Hundreds of concurrent users · 99.9% uptime.',
    role: 'Lead Software Engineer',
    duration: 'Apr 2024 — Dec 2025',
    team: 'Cross-functional · multiple engineers',
    pullQuote:
      '"From architecture decisions to App Store release — every layer designed for scale and smooth UX."',
    stats: [
      { label: 'Time to release', value: '< 4 mo' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Cycle speed', value: '+35%' },
    ],
    sections: [
      {
        title: 'The Challenge',
        body: 'Greenfield mobile product needing both speed-to-market and a foundation that would not crumble at scale. iOS + Android, single codebase, real users from day one.',
      },
      {
        title: 'The Approach',
        body: 'React Native with Expo for fast iteration. Designed the entire PostgreSQL schema and business logic from scratch, modeling complex domain relationships with optimized queries.',
      },
      {
        title: 'Performance',
        body: 'Memoization, lazy loading, and FlashList-based rendering — smooth scrolling across both platforms even with heavy lists.',
      },
      {
        title: 'Team',
        body: 'Directed cross-functional engineers through agile sprints, established technical standards, ran code reviews, mentored junior engineers — high velocity without quality drift.',
      },
    ],
  },
  {
    id: 'solvex-platform',
    no: 'NO. 004',
    title: 'Government Enterprise Platform',
    year: 2023,
    tech: ['Angular', 'TypeScript', 'Node', 'RxJS', 'Jest', 'CI/CD'],
    palette: '--c-ink',
    icon: 'grid',
    description:
      'Mission-critical Angular + TypeScript platform handling administrative, operational, and management workflows for a national government institution — hundreds of thousands of users across multiple agencies, under strict security and accessibility mandates.',
    role: 'Software Developer (Frontend Lead per module)',
    duration: 'Feb 2023 — Feb 2026',
    team: 'Frontend, backend, QA · multi-squad',
    pullQuote:
      '"Building the load-bearing modules of a national institution\'s digital backbone — where downtime is measured in headlines, not error logs."',
    stats: [
      { label: 'Active users', value: '100s of K' },
      { label: 'Response time', value: '− 40%' },
      { label: 'Prod defects', value: '− 60%' },
    ],
    sections: [
      {
        title: 'The Mandate',
        body: 'Architect and co-develop core modules of a mission-critical enterprise system — administrative management, document workflows, and role-based organizational processes — supporting hundreds of thousands of active users across government agencies. Every release shipped under formal change-control, audit, and compliance requirements.',
      },
      {
        title: 'The Architecture',
        body: 'Modular Angular architecture with lazy-loaded feature modules, RxJS-driven state, and reusable data-flow patterns for complex multi-step forms, digital approval workflows, and reporting dashboards. These patterns were promoted to team-wide build standards and reused across squads to keep the platform coherent as it grew.',
      },
      {
        title: 'Security & Access Control',
        body: 'Implemented granular role-based access control and permission-gated UI so each agency and job function saw only its authorized workflows. Hardened forms and data handling against the threat model expected of public-sector software.',
      },
      {
        title: 'Performance',
        body: 'Optimized API integration and state management across the frontend — a 40% improvement in response times via strategic caching, request deduplication, and efficient data synchronization. Heavy reporting views were tuned with virtualization and on-demand loading to stay responsive at institutional data volumes.',
      },
      {
        title: 'Accessibility & Standards',
        body: 'Held modules to public-sector accessibility requirements — semantic markup, keyboard navigation, and screen-reader support — so the platform remained usable across the full range of citizens and civil-service staff who depend on it.',
      },
      {
        title: 'Quality',
        body: 'Established and enforced Jest + Angular testing protocols integrated into CI/CD, with code review and build gates on every merge — reducing production defects by 60% and raising release confidence across the whole team.',
      },
      {
        title: 'Leadership',
        body: 'Acted as frontend lead on assigned modules: set technical direction, ran code reviews, mentored engineers, and translated dense regulatory requirements into shippable, maintainable features.',
      },
    ],
  },
]
