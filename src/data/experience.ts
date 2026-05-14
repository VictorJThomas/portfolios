import type { ExperienceEntry } from './types'

export const experience: ExperienceEntry[] = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Acme Corp',
    period: '2022 — Present',
    bullets: [
      'Led architecture of micro-frontend platform serving 2M users.',
      'Introduced design-token pipeline, reducing CSS drift by 80%.',
      'Mentored 4 junior engineers through code review and pairing.',
    ],
  },
  {
    role: 'Frontend Engineer',
    company: 'Startup XYZ',
    period: '2020 — 2022',
    bullets: [
      'Built React + GraphQL dashboard from 0 to production in 6 months.',
      'Integrated CI/CD with GitHub Actions; cut deploy time by 60%.',
    ],
  },
  {
    role: 'Junior Developer',
    company: 'Agency ABC',
    period: '2018 — 2020',
    bullets: [
      'Delivered 12 client sites using HTML, CSS, and vanilla JS.',
      'Pioneered internal component library adopted across all projects.',
    ],
  },
]
