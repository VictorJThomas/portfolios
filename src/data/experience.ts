import type { ExperienceEntry } from './types'

export const experience: ExperienceEntry[] = [
  {
    role: 'Software Developer',
    company: 'Solvex Dominicana, SR',
    period: 'Feb 2023 — Feb 2026 · Remote',
    bullets: [
      'Architected and co-developed core modules of a mission-critical Angular + TypeScript enterprise platform serving hundreds of thousands of users across a national government institution.',
      'Designed modular component architecture and data-flow patterns for multi-step forms, digital approval workflows, and reporting dashboards adopted as team-wide standards.',
      'Optimized API integration and state management — 40% improvement in response times via strategic caching and efficient data synchronization.',
      'Led frontend delivery for assigned modules, coordinating with backend and QA teams to consistently ship ahead of schedule.',
      'Established Jest + React Testing Library protocols integrated into CI/CD — reduced production defects by 60%.',
    ],
  },
  {
    role: 'Lead Software Engineer',
    company: 'Mognito LTDA',
    period: 'Apr 2024 — Dec 2025 · Remote',
    bullets: [
      'Architected and shipped a production React Native (Expo) mobile application greenfield → App Store release in under 4 months — hundreds of concurrent users at 99.9% uptime.',
      'Designed the full PostgreSQL schema and business logic from scratch, modeling complex domain relationships with optimized queries.',
      'Led frontend development with React Native + TypeScript using memoization, lazy loading, and FlashList for smooth iOS/Android UX.',
      'Directed a cross-functional team through agile sprints — set technical standards, ran code reviews, mentored juniors.',
      'Built CI/CD with GitHub Actions for zero-downtime releases, accelerating cycles by 35%.',
    ],
  },
  {
    role: 'Freelance Developer',
    company: 'Independent Contractor',
    period: 'Feb 2021 — Present · Remote',
    bullets: [
      'Built a full-stack MERN e-commerce platform (React, Node, Express, MongoDB) processing 2,000+ monthly transactions with Stripe + Redux.',
      'Developed scalable React / Next.js CMS solutions for 15+ small business clients — automated workflows cut manual updates by 85%.',
      'Integrated RESTful APIs with third-party logistics providers via Node/Express — 60% faster order fulfillment.',
    ],
  },
]
