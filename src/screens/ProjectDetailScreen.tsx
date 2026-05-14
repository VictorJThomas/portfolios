import { TopNav } from '../components/layout/TopNav'
import { PageFrame } from '../components/layout/PageFrame'
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

      <div style={{ flex: 1, overflow: 'auto', padding: '30px 64px 36px' }}>
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

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'end',
            gap: 30,
            borderBottom: '1px solid currentColor',
            paddingBottom: 18,
          }}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, marginBottom: 8 }}>
              Chapter {project.no} — {project.year}
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(46px, 6.4vw, 92px)',
                margin: 0,
              }}
            >
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
            <div>Role .......... Lead Engineer</div>
            <div>Duration ...... 11 months</div>
            <div>Team .......... 4 souls</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: 38, marginTop: 28 }}>
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
            />
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
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontStyle: 'italic',
                fontSize: 17,
                lineHeight: 1.55,
                color: 'var(--wine)',
              }}
            >
              "We approached the codebase as one might restore a Hapsburg ballroom — with reverence,
              restraint, and the occasional dramatic flourish."
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, marginTop: 22 }}>
              <Stat label="Bundle size" value="− 62%" />
              <Stat label="Time to interactive" value="0.8s" />
              <Stat label="Lighthouse" value="100 / 100" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: 38, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 38 }}>
          <Section
            title="The Challenge"
            body="The previous incarnation had grown — like all ambitious projects — into something that no single mortal could comprehend. We were asked to unify it."
          />
          <Section
            title="The Approach"
            body="A single application, a single design system, a single source of truth. Every component re-drawn from first principles."
          />
          <Section
            title="The Outcome"
            body="A smaller bundle, doubled engagement, and a small standing ovation from the platform team. The client wept; politely."
          />
          <Section
            title="Reflections"
            body="Constraint is the great editor. We removed several frameworks and gained, in their place, a quiet confidence about the system as a whole."
          />
        </div>
      </div>
    </PageFrame>
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
