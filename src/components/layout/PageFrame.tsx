import type { CSSProperties, ReactNode } from 'react'

interface Props {
  bg: string
  ink?: string
  showCornerMarks?: boolean
  children: ReactNode
  style?: CSSProperties
}

export function PageFrame({
  bg,
  ink = 'var(--c-cream)',
  showCornerMarks = true,
  children,
  style,
}: Props) {
  const cornerStyle: CSSProperties = {
    content: "''",
    position: 'absolute',
    width: 18,
    height: 18,
    borderColor: ink,
    borderStyle: 'solid',
    pointerEvents: 'none',
    opacity: 0.35,
  }

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: bg,
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* Grain overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'200\' height=\'200\' filter=\'url(%23n)\' opacity=\'0.04\'/%3E%3C/svg%3E")',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Corner marks */}
      {showCornerMarks && (
        <>
          <div
            style={{
              ...cornerStyle,
              top: 8,
              left: 8,
              borderWidth: '1px 0 0 1px',
            }}
          />
          <div
            style={{
              ...cornerStyle,
              top: 8,
              right: 8,
              borderWidth: '1px 1px 0 0',
            }}
          />
          <div
            style={{
              ...cornerStyle,
              bottom: 8,
              left: 8,
              borderWidth: '0 0 1px 1px',
            }}
          />
          <div
            style={{
              ...cornerStyle,
              bottom: 8,
              right: 8,
              borderWidth: '0 1px 1px 0',
            }}
          />
        </>
      )}

      {/* Inner border inset */}
      <div
        style={{
          position: 'absolute',
          inset: 28,
          border: `1px solid ${ink}80`,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          zIndex: 2,
        }}
      >
        {children}
      </div>
    </div>
  )
}
