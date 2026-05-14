import { useState } from 'react'
import { TopNav } from '../components/layout/TopNav'
import { PageFrame } from '../components/layout/PageFrame'
import { PageFooter } from '../components/layout/PageFooter'
import type { ScreenId } from '../data/types'

interface Props {
  go: (id: ScreenId) => void
}

export function ContactScreen({ go }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('A modest proposal')
  const [msg, setMsg] = useState('')
  const [sent, setSent] = useState(false)

  function send(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4500)
  }

  return (
    <PageFrame bg="var(--mauve)" ink="var(--teal-deep)">
      <TopNav current="contact" go={go} ink="var(--teal-deep)" />

      <div style={{ flex: 1, overflow: 'auto', padding: '32px 64px 36px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'end',
            borderBottom: '1px solid var(--teal-deep)',
            paddingBottom: 18,
            marginBottom: 28,
          }}
        >
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
              Volume V
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(46px, 7.5vw, 110px)',
                margin: 0,
              }}
            >
              POST
              <br />
              OFFICE
            </h1>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontStyle: 'italic',
              fontSize: 17,
              lineHeight: 1.5,
              opacity: 0.9,
              textAlign: 'right',
            }}
          >
            Letters welcomed.
            <br />
            Telegrams encouraged.
            <br />
            Postcards adored.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 44 }}>
          {/* Letter form */}
          <form
            onSubmit={send}
            style={{
              background: 'var(--c-cream)',
              padding: '30px 32px 28px',
              boxShadow: '0 12px 30px rgba(0,0,0,.18)',
              position: 'relative',
            }}
          >
            {/* Postmark */}
            <div
              style={{
                position: 'absolute',
                top: 18,
                right: 24,
                width: 84,
                height: 84,
                borderRadius: 999,
                border: '2px solid var(--wine)',
                color: 'var(--wine)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transform: 'rotate(-9deg)',
                opacity: 0.85,
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8 }}>AIR MAIL</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 18 }}>MMXXVI</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8 }}>★ ZUBROWKA ★</div>
            </div>

            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, marginBottom: 14, opacity: 0.65 }}>
              Compose a Letter
            </div>
            <Field label="From" value={name} onChange={setName} placeholder="Your good name" />
            <Field
              label="Return address"
              value={email}
              onChange={setEmail}
              type="email"
              placeholder="you@somewhere.com"
            />
            <Field label="Concerning" value={subject} onChange={setSubject} />
            <Field
              label="Dispatch"
              value={msg}
              onChange={setMsg}
              multiline
              placeholder={`Dear Sir/Madam,\n\nI write to you concerning…`}
            />

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 22,
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, opacity: 0.6 }}>
                {sent ? '✓ Letter posted. Reply within 48 hours.' : 'Posted via certified courier.'}
              </div>
              <button
                type="submit"
                style={{
                  padding: '10px 22px',
                  border: '1.5px solid var(--teal-deep)',
                  background: sent ? 'var(--teal-deep)' : 'transparent',
                  color: sent ? 'var(--c-cream)' : 'var(--teal-deep)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '.18em',
                  textTransform: 'uppercase',
                  transition: 'background .25s, color .25s',
                }}
              >
                {sent ? 'Sent ✓' : 'Post Letter →'}
              </button>
            </div>
          </form>

          {/* Side info */}
          <div>
            <InfoBlock title="Directly" lines={['hello@yourportfolio.dev']} />
            <InfoBlock
              title="Hours of Reply"
              lines={['Mon – Thu · 09:00 – 17:00 PT', 'Friday · letters only', 'Weekends · in the garden']}
            />
            <InfoBlock
              title="Find Me Elsewhere"
              lines={['GitHub · @VictorJThomas', 'LinkedIn · /in/victorjthomas']}
            />

            <div
              style={{
                marginTop: 24,
                padding: '20px 22px',
                background: 'var(--c-cream)',
                boxShadow: '0 6px 20px rgba(0,0,0,.12)',
              }}
            >
              <svg viewBox="0 0 240 140" style={{ width: '100%', display: 'block' }}>
                <rect x="6" y="20" width="228" height="116" fill="var(--c-cream-deep)" stroke="var(--teal-deep)" strokeWidth="2" />
                <path d="M6 20 L120 90 L234 20" fill="none" stroke="var(--teal-deep)" strokeWidth="2" />
                <rect x="186" y="32" width="38" height="44" fill="var(--blush)" stroke="var(--teal-deep)" strokeWidth="2" />
                <text x="205" y="58" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--teal-deep)">XXVI</text>
                <g stroke="var(--wine)" strokeWidth="2" opacity=".75">
                  <line x1="18" y1="98" x2="98" y2="98" />
                  <line x1="18" y1="108" x2="78" y2="108" />
                  <line x1="18" y1="118" x2="118" y2="118" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <PageFooter ink="var(--teal-deep)" />
    </PageFrame>
  )
}

function Field({
  label,
  value,
  onChange,
  multiline,
  type = 'text',
  placeholder,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  multiline?: boolean
  type?: string
  placeholder?: string
}) {
  const fieldStyle: React.CSSProperties = {
    width: '100%',
    borderBottom: '1px solid var(--teal-deep)',
    background: 'transparent',
    padding: '6px 0',
    fontFamily: 'var(--font-body)',
    fontStyle: 'italic',
    fontSize: 17,
    color: 'var(--teal-deep)',
    outline: 'none',
    resize: 'vertical',
  }

  return (
    <label style={{ display: 'block', marginBottom: 16 }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, opacity: 0.65, marginBottom: 5 }}>
        {label}
      </div>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={5}
          style={fieldStyle}
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type={type}
          placeholder={placeholder}
          style={fieldStyle}
        />
      )}
    </label>
  )
}

function InfoBlock({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div style={{ borderTop: '1px solid var(--teal-deep)', padding: '14px 0' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, marginBottom: 6, opacity: 0.8 }}>{title}</div>
      {lines.map((l, i) => (
        <div key={i} style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.45 }}>
          {l}
        </div>
      ))}
    </div>
  )
}
