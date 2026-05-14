import { TopNav } from '../components/layout/TopNav'
import { PageFooter } from '../components/layout/PageFooter'
import { PageFrame } from '../components/layout/PageFrame'
import { Workspace } from '../components/illustrations/Workspace'
import type { ScreenId } from '../data/types'

interface Props {
  go: (id: ScreenId) => void
}

const INK = '#F2E8D0'

export function HomeScreen({ go }: Props) {
  return (
    <PageFrame bg="var(--teal)" ink={INK}>
      <TopNav current="home" go={go} ink={INK} />

      <div style={{ padding: '22px 28px 0', textAlign: 'center', flexShrink: 0 }}>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(58px, 11vw, 150px)',
            color: 'var(--c-cream)',
            lineHeight: '.88',
          }}
        >
          THE
          <br />
          DEVELOPER
        </div>
      </div>

      {/* Hero workspace strip */}
      <div
        style={{
          position: 'relative',
          margin: '22px 28px 0',
          padding: 14,
          background: 'var(--blush)',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            position: 'relative',
            aspectRatio: '16 / 6',
            background: '#314B40',
            overflow: 'hidden',
          }}
        >
          <Workspace />

          <div
            style={{
              position: 'absolute',
              top: 18,
              right: 22,
              textAlign: 'right',
              color: '#F2E8D0',
              maxWidth: 240,
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                opacity: 0.85,
                marginBottom: 4,
              }}
            >
              FIG. 1 — Workspace
            </div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontStyle: 'italic',
                fontSize: 16,
                lineHeight: 1.3,
              }}
            >
              Where logic meets whimsy. A curated environment for crafting digital narratives.
            </div>
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              background: 'var(--teal-deep)',
              color: '#F2E8D0',
              padding: '20px 24px',
              maxWidth: 320,
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--mustard)',
                fontSize: 11,
                marginBottom: 8,
              }}
            >
              Curated Code
            </div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 15.5,
                lineHeight: 1.45,
                marginBottom: 14,
              }}
            >
              Architecting scalable solutions with the precision of a watchmaker. Specializing in
              frontend artistry and backend robustness.
            </div>
            <button
              onClick={() => go('projects')}
              style={{
                fontFamily: 'var(--font-mono)',
                color: '#F2E8D0',
                fontSize: 10,
                borderBottom: '1px solid #F2E8D0',
                paddingBottom: 4,
              }}
            >
              View Case Studies &nbsp;→
            </button>
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: 12,
              right: 16,
              fontFamily: 'var(--font-mono)',
              color: '#F2E8D0',
              fontSize: 10,
              opacity: 0.8,
            }}
          >
            01 / 05
          </div>
        </div>
      </div>

      {/* Category cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 18,
          padding: '22px 28px 12px',
          flexShrink: 0,
        }}
      >
        {CARDS.map((c) => (
          <button
            key={c.target}
            onClick={() => go(c.target)}
            style={{
              border: `1px solid ${INK}33`,
              padding: '28px 16px',
              color: INK,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 14,
              transition: 'background .25s, transform .25s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${INK}11`
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.transform = 'none'
            }}
          >
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: 999,
                background: c.color,
                color: 'var(--teal)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {c.icon}
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22 }}>{c.title}</div>
            <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: 14, opacity: 0.82 }}>
              {c.sub}
            </div>
          </button>
        ))}
      </div>

      <PageFooter ink={INK} />
    </PageFrame>
  )
}

const CARDS: {
  target: ScreenId
  color: string
  title: string
  sub: string
  icon: React.ReactNode
}[] = [
  {
    target: 'stack',
    color: 'var(--mustard)',
    title: 'Engineering',
    sub: 'Full-Stack Implementation',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    target: 'projects',
    color: 'var(--wine)',
    title: 'Aesthetics',
    sub: 'UI / UX Design Systems',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
  {
    target: 'experience',
    color: 'var(--c-cream)',
    title: 'Mentorship',
    sub: 'Team Leadership & Growth',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
]
