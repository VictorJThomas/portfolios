import { TopNav } from '../components/layout/TopNav'
import { PageFrame } from '../components/layout/PageFrame'
import { Tape } from '../components/illustrations/Tape'
import pictureUrl from '../assets/picture.png'
import type { ScreenId } from '../data/types'

interface Props {
  go: (id: ScreenId) => void
}

export function FieldManualScreen({ go }: Props) {
  return (
    <PageFrame bg="var(--mustard)" ink="var(--teal-deep)">
      <TopNav current="manual" go={go} ink="var(--teal-deep)" />

      <div style={{ flex: 1, padding: 'clamp(16px, 3vw, 28px)', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
        <div
          style={{
            background: 'var(--c-cream)',
            border: '1px solid var(--teal-deep)',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minHeight: 0,
            overflow: 'hidden',
            boxShadow: '0 18px 40px rgba(20,15,5,.22)',
          }}
        >
          {/* Header */}
          <div
            className="fm-header"
            style={{
              borderBottom: '1px solid var(--teal-deep)',
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--teal-deep)', lineHeight: 1.7 }}>
              <div>Ref No. 892-A</div>
              <div>Dept. of Frontend Engineering</div>
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(22px, 6vw, 64px)',
                margin: 0,
                color: 'var(--teal-deep)',
                letterSpacing: '.02em',
                whiteSpace: 'nowrap',
              }}
            >
              FIELD MANUAL
            </h1>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--teal-deep)',
                lineHeight: 1.7,
                textAlign: 'right',
              }}
            >
              <div>Status: Active</div>
              <div>Clearance: Level 5</div>
            </div>
          </div>

          {/* Body */}
          <div className="fm-body">
            {/* Polaroid portrait */}
            <div style={{ position: 'relative', paddingTop: 18, paddingBottom: 18 }}>
              <Tape angle={-12} color="#D89B95" style={{ top: 0, left: -8 }} />
              <Tape angle={18} color="#D89B95" style={{ bottom: 0, right: -8 }} />
              <div
                style={{
                  background: 'var(--c-cream-deep)',
                  padding: 10,
                  boxShadow: '0 8px 28px rgba(0,0,0,.18)',
                  transform: 'rotate(-1.5deg)',
                }}
              >
                <div
                  style={{
                    border: '1.5px solid var(--teal-deep)',
                    position: 'relative',
                    aspectRatio: '4 / 5',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={pictureUrl}
                    alt="Portrait of Victor J. Thomas"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 8,
                      left: 8,
                      padding: '3px 8px',
                      background: 'var(--c-cream)',
                      color: 'var(--teal-deep)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: 9,
                    }}
                  >
                    Fig 1.1 : The Subject
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 8,
                      right: 8,
                      width: 26,
                      height: 26,
                      borderRadius: 999,
                      background: 'var(--wine)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--c-cream)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: 9,
                    }}
                  >
                    ★
                  </div>
                </div>
              </div>
            </div>

            {/* Dossier */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid var(--teal-deep)',
                  paddingBottom: 6,
                  marginBottom: 18,
                  gap: 12,
                }}
              >
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(18px, 2.2vw, 26px)',
                    margin: 0,
                    color: 'var(--teal-deep)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  DOSSIER INFORMATION
                </h2>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, opacity: 0.7 }}>FILE: 2024-DEV</div>
              </div>

              <DossierRow label="Subject">
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24 }}>
                 VICTOR J. THOMAS
                </span>
              </DossierRow>
              <DossierRow label="Years Active">
                <span style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: 19 }}>
                  5 Years in Field
                </span>
              </DossierRow>
              <DossierRow label="Rank">
                <span style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: 19 }}>
                  Senior Software Engineer
                </span>
              </DossierRow>
              <DossierRow label="Specialties">
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {['Architecture', 'Scale', 'Refinement'].map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 10,
                        padding: '5px 9px',
                        border: '1px solid var(--teal-deep)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </DossierRow>
              <DossierRow label="Observations" noBorder>
                <div
                  style={{
                    borderLeft: '2px solid var(--teal-deep)',
                    paddingLeft: 14,
                    fontFamily: 'var(--font-body)',
                    fontStyle: 'italic',
                    fontSize: 16,
                    lineHeight: 1.45,
                  }}
                >
                  "The subject displays an unusual affinity for clean code and pixel-perfect
                  implementation. Often found organizing component libraries by color and function."
                </div>
              </DossierRow>

              <div
                style={{
                  border: '1px solid var(--teal-deep)',
                  padding: '22px 18px 16px',
                  marginTop: 22,
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: -10,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--c-cream)',
                    padding: '0 12px',
                    color: 'var(--teal-deep)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                  }}
                >
                  Equipment &amp; Tools
                </div>
                <div className="grid-5">
                  {TOOLS.map((t) => (
                    <div key={t.name} style={{ textAlign: 'center' }}>
                      <div
                        style={{
                          width: 46,
                          height: 46,
                          borderRadius: 999,
                          border: '1.5px solid var(--teal-deep)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 8px',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700,
                          fontSize: 16,
                          color: 'var(--teal-deep)',
                        }}
                      >
                        {t.icon}
                      </div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10 }}>{t.name}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: 12, opacity: 0.7 }}>
                        {t.sub}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer band */}
          <div className="fm-footer" style={{ borderTop: '1px solid var(--teal-deep)' }}>
            <div style={{ display: 'flex', gap: 22 }}>
              <button
                onClick={() => go('home')}
                style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--teal-deep)' }}
              >
                Return Home
              </button>
              <button
                onClick={() => go('contact')}
                style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--teal-deep)' }}
              >
                Contact HQ
              </button>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, opacity: 0.6 }}>
              Approved by the High Council of Code
            </div>
          </div>
        </div>
      </div>
    </PageFrame>
  )
}

function DossierRow({
  label,
  children,
  noBorder,
}: {
  label: string
  children: React.ReactNode
  noBorder?: boolean
}) {
  return (
    <div
      className="fm-dossier-row"
      style={{
        borderBottom: noBorder ? 'none' : '1px solid var(--teal-deep)55',
      }}
    >
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--teal-deep)', opacity: 0.85 }}>
        {label}
      </div>
      <div style={{ color: 'var(--teal-deep)' }}>{children}</div>
    </div>
  )
}

const TOOLS = [
  { name: 'React', sub: 'v18 + RN', icon: '⚛' },
  { name: 'TypeScript', sub: 'ES6+', icon: 'TS' },
  { name: 'Node.js', sub: 'Express', icon: '>_' },
  { name: 'PostgreSQL', sub: 'Database', icon: '▤' },
  { name: 'Next.js', sub: 'App Router', icon: '◆' },
]
