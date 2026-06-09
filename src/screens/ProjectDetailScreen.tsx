import { TopNav } from '../components/layout/TopNav'
import { PageFrame } from '../components/layout/PageFrame'
import { PosterIcon } from './ProjectsScreen'
import { projects } from '../data/projects'
import type { ScreenId } from '../data/types'

interface Props {
  go: (id: ScreenId) => void
  projectId?: string
}

export function ProjectDetailScreen({ go, projectId }: Props) {
  const project = projects.find((p) => p.id === projectId) ?? projects[0]

  return (
    <PageFrame bg="var(--parchment)" ink="var(--teal-deep)">
      <TopNav current="projects" go={go} ink="var(--teal-deep)" />

      <div className="screen-scroll screen-pad-tight">
        <div style={{ marginBottom: 18, display: 'flex', gap: 14, alignItems: 'center' }}>
          <button
            onClick={() => go('projects')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '7px 16px',
              border: '1px solid var(--teal-deep)',
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              color: 'var(--teal-deep)',
              transition: 'background .25s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(31,57,70,.08)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
            }}
          >
            ← Back to Catalogue
          </button>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, opacity: 0.5 }}>
            Case Study {project.no}
          </span>
        </div>

        <div className="pd-head">
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, marginBottom: 8 }}>
              Chapter {project.no} — {project.year}
            </div>
            <h1 className="hero-title hero-title--md">
              {project.title}
            </h1>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              textAlign: 'right',
              lineHeight: 1.7,
            }}
          >
            <div>Stack ......... {project.tech.join(' / ')}</div>
            <div>Role .......... {project.role ?? 'Lead Engineer'}</div>
            <div>Duration ...... {project.duration ?? '—'}</div>
            <div>Team .......... {project.team ?? 'Solo'}</div>
          </div>
        </div>

        <div className="pd-main">
          <div style={{ background: '#F2E8D0', padding: 12 }}>
            <div
              style={{
                background: `var(${project.palette})`,
                aspectRatio: '3/4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                outline: '1px solid rgba(255,255,255,.6)',
                outlineOffset: -8,
              }}
            >
              <PosterIcon kind={project.icon} />
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                gap: 10,
                marginTop: 12,
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, opacity: 0.55 }}>{project.no}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 15 }}>{project.title}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, opacity: 0.55 }}>{project.year}</div>
            </div>

            {(project.url || project.repo) && (
              <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                {project.url && <LinkButton href={project.url} label="View Demo ↗" />}
                {project.repo && <LinkButton href={project.repo} label="Source ↗" />}
              </div>
            )}
          </div>

          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                marginBottom: 10,
                borderBottom: '1px solid currentColor',
                paddingBottom: 6,
              }}
            >
              Overview
            </div>
            <p style={{ fontSize: 19, lineHeight: 1.5, fontFamily: 'var(--font-body)', marginTop: 0 }}>
              {project.description}
            </p>
            {project.pullQuote && (
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontStyle: 'italic',
                  fontSize: 17,
                  lineHeight: 1.55,
                  color: 'var(--wine)',
                }}
              >
                {project.pullQuote}
              </p>
            )}

            <div className="grid-3" style={{ marginTop: 22 }}>
              {(project.stats ?? [
                { label: 'Bundle size', value: '— 62%' },
                { label: 'Time to interactive', value: '0.8s' },
                { label: 'Lighthouse', value: '100 / 100' },
              ]).map((s) => (
                <Stat key={s.label} label={s.label} value={s.value} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid-2" style={{ marginTop: 38 }}>
          {(project.sections ?? [
            {
              title: 'The Challenge',
              body: 'The previous incarnation had grown — like all ambitious projects — into something that no single mortal could comprehend. We were asked to unify it.',
            },
            {
              title: 'The Approach',
              body: 'A single application, a single design system, a single source of truth. Every component re-drawn from first principles.',
            },
            {
              title: 'The Outcome',
              body: 'A smaller bundle, doubled engagement, and a small standing ovation from the platform team. The client wept; politely.',
            },
            {
              title: 'Reflections',
              body: 'Constraint is the great editor. We removed several frameworks and gained, in their place, a quiet confidence about the system as a whole.',
            },
          ]).map((s) => (
            <Section key={s.title} title={s.title} body={s.body} />
          ))}
        </div>
      </div>
    </PageFrame>
  )
}

function LinkButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        flex: 1,
        textAlign: 'center',
        padding: '7px 12px',
        border: '1px solid var(--teal-deep)',
        fontFamily: 'var(--font-mono)',
        fontSize: 9,
        letterSpacing: '.18em',
        textTransform: 'uppercase',
        color: 'var(--teal-deep)',
        transition: 'background .25s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(31,57,70,.08)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent'
      }}
    >
      {label}
    </a>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ borderTop: '1px solid currentColor', paddingTop: 10 }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, opacity: 0.6, marginBottom: 6 }}>{label}</div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 28 }}>{value}</div>
    </div>
  )
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          marginBottom: 10,
          borderBottom: '1px solid currentColor',
          paddingBottom: 6,
        }}
      >
        {title}
      </div>
      <p style={{ fontSize: 17, fontFamily: 'var(--font-body)', lineHeight: 1.5, margin: 0 }}>{body}</p>
    </div>
  )
}
