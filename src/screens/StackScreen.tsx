import { TopNav } from '../components/layout/TopNav'
import { PageFrame } from '../components/layout/PageFrame'
import { PageFooter } from '../components/layout/PageFooter'
import type { ScreenId } from '../data/types'

interface Props {
  go: (id: ScreenId) => void
}

const CATEGORIES = [
  {
    title: 'Languages',
    items: [
      { name: 'TypeScript', note: 'Daily driver', level: 5 },
      { name: 'Rust', note: 'Systems & CLIs', level: 4 },
      { name: 'Python', note: 'Data & glue', level: 4 },
      { name: 'Go', note: 'Services', level: 3 },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', note: 'v18, RSC-curious', level: 5 },
      { name: 'Next.js', note: 'App Router', level: 5 },
      { name: 'Svelte', note: 'Personal projects', level: 4 },
      { name: 'Vue 3', note: 'Composition API', level: 3 },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', note: 'Fastify / tRPC', level: 5 },
      { name: 'Postgres', note: 'Relational of choice', level: 5 },
      { name: 'Redis', note: 'Caches & queues', level: 4 },
      { name: 'GraphQL', note: 'Federation', level: 4 },
    ],
  },
  {
    title: 'Operations',
    items: [
      { name: 'AWS', note: 'Reluctantly fluent', level: 4 },
      { name: 'Terraform', note: 'Infra-as-code', level: 4 },
      { name: 'Docker', note: 'Containers', level: 5 },
      { name: 'Linux', note: 'Daily', level: 5 },
    ],
  },
]

export function StackScreen({ go }: Props) {
  return (
    <PageFrame bg="var(--wine)" ink="var(--c-cream)">
      <TopNav current="stack" go={go} ink="var(--c-cream)" />

      <div style={{ flex: 1, overflow: 'auto', padding: '38px 64px 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
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
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(46px, 8vw, 110px)',
              margin: 0,
              color: 'var(--c-cream)',
            }}
          >
            INVENTORY OF INSTRUMENTS
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontStyle: 'italic',
              fontSize: 17,
              marginTop: 12,
              opacity: 0.85,
              maxWidth: 640,
              marginInline: 'auto',
            }}
          >
            A complete itemisation of tools, languages, &amp; assorted curiosities — kept on the
            workbench at all times.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 30 }}>
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
                          opacity: 0.55,
                          padding: '10px 0',
                          width: 30,
                        }}
                      >
                        {String(j + 1).padStart(2, '0')}
                      </td>
                      <td style={{ padding: '10px 0' }}>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19 }}>
                          {item.name}
                        </div>
                        <div
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontStyle: 'italic',
                            fontSize: 13,
                            opacity: 0.8,
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
            opacity: 0.65,
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
