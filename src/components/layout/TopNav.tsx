import type { ScreenId } from '../../data/types'

const NAV: { id: ScreenId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Stack' },
  { id: 'manual', label: 'Manual' },
  { id: 'contact', label: 'Contact' },
]

interface Props {
  current: ScreenId
  go: (id: ScreenId) => void
  ink?: string
}

export function TopNav({ current, go, ink = 'var(--c-cream)' }: Props) {
  return (
    <header
      className="topnav"
      style={{
        borderBottom: `1px solid ${ink}33`,
        color: ink,
      }}
    >
      <button
        className="topnav__brand"
        onClick={() => go('home')}
        style={{
          border: `1px solid ${ink}88`,
          borderRadius: 999,
          padding: '6px 18px',
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          letterSpacing: '.22em',
          textTransform: 'uppercase',
          transition: 'background .25s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = `${ink}18`
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent'
        }}
      >
        Est. 2014
      </button>

      <nav className="topnav__nav">
        {NAV.map((n) => (
          <button
            key={n.id}
            onClick={() => go(n.id)}
            style={{
              fontFamily: 'var(--font-body)',
              fontStyle: 'italic',
              fontSize: 'clamp(14px, 1.6vw, 17px)',
              color: ink,
              opacity: current === n.id ? 1 : 0.78,
              borderBottom:
                current === n.id ? `1px solid ${ink}` : '1px solid transparent',
              paddingBottom: 2,
              transition: 'opacity .25s, border-color .25s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = current === n.id ? '1' : '0.78'
            }}
          >
            {n.label}
          </button>
        ))}
      </nav>

      <div className="topnav__spacer" />
    </header>
  )
}
