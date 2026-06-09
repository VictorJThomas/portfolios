import { TopNav } from '../components/layout/TopNav'
import { PageFrame } from '../components/layout/PageFrame'
import { PageFooter } from '../components/layout/PageFooter'
import type { ScreenId } from '../data/types'

interface Props {
  go: (id: ScreenId) => void
}

const CATEGORIES = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', note: 'v18 — daily driver', level: 5 },
      { name: 'Next.js', note: 'App Router + RSC', level: 5 },
      { name: 'Angular', note: 'Enterprise platforms', level: 5 },
      { name: 'TypeScript', note: 'ES6+ everywhere', level: 5 },
    ],
  },
  {
    title: 'Mobile',
    items: [
      { name: 'React Native', note: 'Expo · App Store shipped', level: 5 },
      { name: 'Tamagui', note: 'Cross-platform UI', level: 4 },
      { name: 'FlashList', note: 'High-perf lists', level: 4 },
      { name: 'iOS / Android', note: 'Both targets', level: 4 },
    ],
  },
  {
    title: 'Backend & Data',
    items: [
      { name: 'Node.js', note: 'Express · REST', level: 5 },
      { name: 'PostgreSQL', note: 'Schema · queries', level: 5 },
      { name: 'Supabase', note: 'Auth · realtime', level: 4 },
      { name: 'MongoDB', note: 'MERN stack', level: 4 },
    ],
  },
  {
    title: 'DevOps & Cloud',
    items: [
      { name: 'GitHub Actions', note: 'CI/CD pipelines', level: 5 },
      { name: 'Docker', note: 'Containers', level: 4 },
      { name: 'AWS Amplify', note: 'Deployments', level: 4 },
      { name: 'Azure', note: 'Enterprise infra', level: 3 },
    ],
  },
]

export function StackScreen({ go }: Props) {
  return (
    <PageFrame bg="var(--wine)" ink="var(--c-cream)">
      <TopNav current="stack" go={go} ink="var(--c-cream)" />

      <div className="screen-scroll screen-pad">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(20px, 3vw, 30px)' }}>
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
            Volume IV
          </div>
          <h1 className="hero-title" style={{ color: 'var(--c-cream)' }}>
            INVENTORY OF INSTRUMENTS
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontStyle: 'italic',
              fontSize: 17,
              marginTop: 12,
              color: 'var(--c-cream)',
              maxWidth: 640,
              marginInline: 'auto',
            }}
          >
            A complete itemisation of tools, languages, &amp; assorted curiosities — kept on the
            workbench at all times.
          </p>
        </div>

        <div className="grid-2">
          {CATEGORIES.map((cat, i) => (
            <div
              key={cat.title}
              style={{
                border: '1px solid var(--c-cream)88',
                padding: '18px 22px 20px',
                position: 'relative',
                background: 'rgba(255,255,255,.03)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: -10,
                  left: 18,
                  background: 'var(--wine)',
                  padding: '0 10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: 'var(--c-cream)',
                }}
              >
                Cabinet {String.fromCharCode(65 + i)} — {cat.title}
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 10 }}>
                <tbody>
                  {cat.items.map((item, j) => (
                    <tr
                      key={item.name}
                      style={{
                        borderBottom:
                          j < cat.items.length - 1
                            ? '1px dashed rgba(245,233,200,.35)'
                            : 'none',
                      }}
                    >
                      <td
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 10,
                          color: 'var(--c-cream)',
                          padding: '10px 0',
                          width: 30,
                        }}
                      >
                        {String(j + 1).padStart(2, '0')}
                      </td>
                      <td style={{ padding: '10px 0', color: 'var(--c-cream)' }}>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, color: 'var(--c-cream)' }}>
                          {item.name}
                        </div>
                        <div
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontStyle: 'italic',
                            fontSize: 13,
                            color: 'var(--c-cream)',
                          }}
                        >
                          {item.note}
                        </div>
                      </td>
                      <td style={{ padding: '10px 0', textAlign: 'right' }}>
                        <Pips n={item.level} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 28,
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: 'var(--c-cream)',
            textAlign: 'center',
          }}
        >
          ● ● ● ● ● Mastery &nbsp;·&nbsp; ● ● ● ○ ○ Working knowledge &nbsp;·&nbsp; ● ● ○ ○ ○ Read about it once
        </div>
      </div>

      <PageFooter ink="var(--c-cream)" />
    </PageFrame>
  )
}

function Pips({ n }: { n: number }) {
  return (
    <div style={{ display: 'inline-flex', gap: 5 }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          style={{
            width: 9,
            height: 9,
            borderRadius: 999,
            background: i < n ? 'var(--mustard)' : 'transparent',
            border: '1.5px solid var(--mustard)',
          }}
        />
      ))}
    </div>
  )
}
