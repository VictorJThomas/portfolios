import type { ReactNode } from 'react'
import { TopNav } from '../components/layout/TopNav'
import { PageFrame } from '../components/layout/PageFrame'
import { projects } from '../data/projects'
import type { ScreenId } from '../data/types'

interface Props {
  go: (id: ScreenId, projectId?: string) => void
}

export function ProjectsScreen({ go }: Props) {
  return (
    <PageFrame bg="var(--blush)" ink="var(--teal-deep)">
      <TopNav current="projects" go={(id) => go(id)} ink="var(--teal-deep)" />

      <div className="screen-scroll screen-pad">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(22px, 3vw, 38px)' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              marginBottom: 12,
              paddingBottom: 6,
              borderBottom: '1px solid currentColor',
              display: 'inline-block',
            }}
          >
            Volume II
          </div>
          <h1 className="hero-title hero-title--md" style={{ color: 'var(--teal-deep)' }}>
            CATALOGUE OF DIGITAL ARTIFACTS
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontStyle: 'italic',
              fontSize: 17,
              marginTop: 14,
              opacity: 0.8,
            }}
          >
            Selected works &amp; curiosities from the archives.
          </p>
        </div>

        <div className="grid-3">
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              no={p.no}
              title={p.title}
              year={String(p.year)}
              tech={p.tech.join(' / ')}
              color={`var(${p.palette})`}
              icon={<PosterIcon kind={p.icon} />}
              onOpen={() => go('project-detail', p.id)}
            />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <button
            onClick={() => go('home')}
            title="Home"
            style={{
              width: 44,
              height: 44,
              borderRadius: 999,
              border: '1px solid var(--teal-deep)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--teal-deep)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12l9-9 9 9" />
              <path d="M5 10v10h14V10" />
            </svg>
          </button>
        </div>
      </div>
    </PageFrame>
  )
}

interface CardProps {
  no: string
  title: string
  year: string
  tech: string
  color: string
  icon: ReactNode
  onOpen: () => void
}

function ProjectCard({ no, title, year, tech, color, icon, onOpen }: CardProps) {
  return (
    <button
      onClick={onOpen}
      style={{ display: 'block', width: '100%', textAlign: 'left', transition: 'transform .25s' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none'
      }}
    >
      <div style={{ background: '#F2E8D0', padding: 12, boxShadow: '0 4px 18px rgba(0,0,0,.15)' }}>
        <div
          style={{
            background: color,
            aspectRatio: '3 / 4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            outline: '1px solid rgba(255,255,255,.6)',
            outlineOffset: -8,
          }}
        >
          {icon}
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          gap: 16,
          marginTop: 14,
          alignItems: 'baseline',
        }}
      >
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, opacity: 0.55 }}>{no}</div>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--teal-deep)' }}>
            {title}
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, marginTop: 4, opacity: 0.65 }}>{tech}</div>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, opacity: 0.55 }}>{year}</div>
      </div>
    </button>
  )
}

export function PosterIcon({ kind }: { kind: string }) {
  const style: React.CSSProperties = { width: '38%', height: '38%', color: 'var(--c-cream)' }
  if (kind === 'brain')
    return (
      <svg viewBox="0 0 100 100" style={style} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M50 22 V82" />
        <path d="M50 30 C50 22 42 16 34 18 C26 20 24 28 28 32 C20 34 20 44 27 46 C20 50 24 60 32 60 C30 68 38 74 46 70 C48 76 50 78 50 78" />
        <path d="M50 30 C50 22 58 16 66 18 C74 20 76 28 72 32 C80 34 80 44 73 46 C80 50 76 60 68 60 C70 68 62 74 54 70 C52 76 50 78 50 78" />
      </svg>
    )
  if (kind === 'compass')
    return (
      <svg viewBox="0 0 100 100" style={style} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="34" cy="30" r="10" />
        <circle cx="66" cy="30" r="10" />
        <line x1="34" y1="40" x2="40" y2="84" />
        <line x1="66" y1="40" x2="60" y2="84" />
        <line x1="40" y1="84" x2="60" y2="84" />
        <line x1="44" y1="92" x2="56" y2="92" strokeWidth="6" />
      </svg>
    )
  if (kind === 'rocket')
    return (
      <svg viewBox="0 0 100 100" style={style} fill="currentColor">
        <path d="M50 10 L66 50 L60 70 L66 80 L50 75 L34 80 L40 70 L34 50 Z" />
        <path d="M40 70 L30 88 L46 80 Z" />
        <path d="M60 70 L70 88 L54 80 Z" />
      </svg>
    )
  if (kind === 'palette')
    return (
      <svg viewBox="0 0 100 100" style={style} fill="currentColor">
        <path d="M50 10 C20 10 8 32 8 52 C8 70 22 78 36 72 C46 68 40 56 50 56 C70 56 88 48 88 32 C88 18 74 10 50 10 Z" fill="#1B4A52" />
      </svg>
    )
  if (kind === 'terminal')
    return (
      <svg viewBox="0 0 100 100" style={style} fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round">
        <rect x="14" y="22" width="72" height="56" rx="3" />
        <polyline points="28 42 42 50 28 58" />
        <line x1="48" y1="60" x2="64" y2="60" />
      </svg>
    )
  if (kind === 'store')
    return (
      <svg viewBox="0 0 100 100" style={style} fill="currentColor">
        <path d="M16 38 L26 22 L74 22 L84 38 L84 78 L16 78 Z" />
        <path d="M20 22 L80 22 L84 38 L16 38 Z" fill="#a14a3b" />
        <rect x="36" y="50" width="28" height="28" fill="#D26A55" />
      </svg>
    )
  if (kind === 'grid')
    return (
      <svg viewBox="0 0 100 100" style={style} fill="#D9B856" stroke="#D9B856" strokeWidth="3">
        <rect x="30" y="30" width="40" height="40" />
        <line x1="50" y1="30" x2="50" y2="70" stroke="#1A1A1A" />
        <line x1="30" y1="50" x2="70" y2="50" stroke="#1A1A1A" />
      </svg>
    )
  return null
}
