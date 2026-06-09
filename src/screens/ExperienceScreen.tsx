import { TopNav } from '../components/layout/TopNav'
import { PageFrame } from '../components/layout/PageFrame'
import { PageFooter } from '../components/layout/PageFooter'
import { experience } from '../data/experience'
import type { ScreenId } from '../data/types'

interface Props {
  go: (id: ScreenId) => void
}

export function ExperienceScreen({ go }: Props) {
  return (
    <PageFrame bg="var(--forest)" ink="var(--c-cream)">
      <TopNav current="experience" go={go} ink="var(--c-cream)" />

      <div className="screen-scroll screen-pad">
        <div className="page-header-row" style={{ borderBottomColor: 'var(--c-cream)' }}>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                marginBottom: 10,
                paddingBottom: 6,
                borderBottom: '1px solid currentColor',
                display: 'inline-block',
              }}
            >
              Volume III
            </div>
            <h1 className="hero-title" style={{ color: 'var(--c-cream)' }}>
              CHRONICLE
              <br />
              OF SERVICE
            </h1>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontStyle: 'italic',
              fontSize: 17,
              lineHeight: 1.5,
              paddingLeft: 36,
              color: 'var(--c-cream)',
            }}
          >
            A truthful account of one engineer's professional employments, in chronological order,
            with appropriate flourishes.
          </div>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          <div className="exp-rail-line" style={{ opacity: 0.6 }} />
          {experience.map((entry, i) => (
            <div key={i} className="exp-row">
              <div
                className="exp-period"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: 'var(--c-cream)',
                }}
              >
                {entry.period}
              </div>
              <div className="exp-dot-cell" style={{ position: 'relative', height: '100%' }}>
                <div
                  style={{
                    position: 'absolute',
                    left: 16,
                    top: 12,
                    width: 14,
                    height: 14,
                    borderRadius: 999,
                    background: 'var(--mustard)',
                    border: '2px solid var(--c-cream)',
                  }}
                />
              </div>
              <div style={{ paddingLeft: 4, color: 'var(--c-cream)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, margin: 0, color: 'var(--c-cream)' }}>
                    {entry.role}
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontStyle: 'italic',
                      fontSize: 17,
                      color: 'var(--c-cream)',
                    }}
                  >
                    at {entry.company}
                  </span>
                </div>
                <ul style={{ paddingLeft: 18, margin: '10px 0 0', color: 'var(--c-cream)' }}>
                  {entry.bullets.map((b, j) => (
                    <li
                      key={j}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 17,
                        lineHeight: 1.5,
                        marginBottom: 4,
                        maxWidth: 640,
                        color: 'var(--c-cream)',
                      }}
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PageFooter ink="var(--c-cream)" />
    </PageFrame>
  )
}
