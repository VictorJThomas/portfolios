import type { CSSProperties, ReactNode } from 'react'

interface Props {
  bg: string
  ink?: string
  children: ReactNode
  style?: CSSProperties
}

export function PageFrame({ bg, ink = 'var(--c-cream)', children, style }: Props) {
  return (
    <div
      className="page"
      style={
        {
          background: bg,
          '--page-ink': ink,
          ...style,
        } as CSSProperties
      }
    >
      <div className="grain" />

      {/* extra corner ticks (::before/::after cover top-left + bottom-right) */}
      <div
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          width: 18,
          height: 18,
          borderTop: `1px solid ${ink}`,
          borderRight: `1px solid ${ink}`,
          opacity: 0.35,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 10,
          left: 10,
          width: 18,
          height: 18,
          borderBottom: `1px solid ${ink}`,
          borderLeft: `1px solid ${ink}`,
          opacity: 0.35,
          pointerEvents: 'none',
        }}
      />

      <div className="page-inner" style={{ borderColor: `color-mix(in oklab, ${ink} 50%, transparent)` }}>
        {children}
      </div>
    </div>
  )
}
