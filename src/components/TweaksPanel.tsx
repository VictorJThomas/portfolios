import { useState, useRef, useCallback, useEffect, type ReactNode } from 'react'

/* ── Styles ── */
const STYLE = `
.twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
  max-height:calc(100vh - 32px);display:flex;flex-direction:column;
  background:rgba(250,249,247,.86);color:#29261b;
  -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
  border:.5px solid rgba(255,255,255,.6);border-radius:14px;
  box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
  font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
.twk-hd{display:flex;align-items:center;justify-content:space-between;
  padding:10px 8px 10px 14px;cursor:move;user-select:none}
.twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
.twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
  width:22px;height:22px;border-radius:6px;cursor:pointer;font-size:13px;line-height:1}
.twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
.twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
  overflow-y:auto;overflow-x:hidden;min-height:0;
  scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
.twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
  color:rgba(41,38,27,.45);padding:10px 0 0}
.twk-sect:first-child{padding-top:0}
.twk-row{display:flex;flex-direction:column;gap:5px}
.twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
.twk-lbl{display:flex;justify-content:space-between;align-items:baseline;color:rgba(41,38,27,.72)}
.twk-lbl>span:first-child{font-weight:500}
.twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}
.twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
  border-radius:999px;background:rgba(0,0,0,.12);outline:none}
.twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
  width:14px;height:14px;border-radius:50%;background:#fff;
  border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
.twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
  background:rgba(0,0,0,.06);user-select:none}
.twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
  background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
  transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
.twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
  background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
  border-radius:6px;cursor:pointer;padding:4px 6px;line-height:1.2}
.twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
  background:rgba(0,0,0,.15);transition:background .15s;cursor:pointer;padding:0}
.twk-toggle[data-on="1"]{background:#34c759}
.twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
  background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s;
  display:block;pointer-events:none}
.twk-toggle[data-on="1"] i{transform:translateX(14px)}
.twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
  background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:pointer}
.twk-btn:hover{background:rgba(0,0,0,.88)}
.twk-btn.sec{background:rgba(0,0,0,.06);color:inherit}
.twk-btn.sec:hover{background:rgba(0,0,0,.1)}
.twk-gear{position:fixed;right:16px;bottom:16px;z-index:2147483645;
  width:36px;height:36px;border-radius:999px;border:0;
  background:rgba(20,20,20,.72);color:#f5e9c8;
  -webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);
  display:flex;align-items:center;justify-content:center;
  cursor:pointer;box-shadow:0 2px 12px rgba(0,0,0,.3)}
.twk-gear:hover{background:rgba(20,20,20,.9)}
`

/* ── Sub-components ── */

function Section({ label, children }: { label: string; children?: ReactNode }) {
  return (
    <>
      <div className="twk-sect">{label}</div>
      {children}
    </>
  )
}

function Row({ label, value, inline, children }: { label: string; value?: string | number; inline?: boolean; children: ReactNode }) {
  return (
    <div className={inline ? 'twk-row twk-row-h' : 'twk-row'}>
      <div className="twk-lbl">
        <span>{label}</span>
        {value != null && <span className="twk-val">{value}</span>}
      </div>
      {children}
    </div>
  )
}

function Slider({ label, value, min, max, step = 1, suffix = '', onChange }: {
  label: string; value: number; min: number; max: number; step?: number; suffix?: string; onChange: (v: number) => void
}) {
  return (
    <Row label={label} value={`${value}${suffix}`}>
      <input type="range" className="twk-slider" min={min} max={max} step={step}
        value={value} onChange={(e) => onChange(Number(e.target.value))} />
    </Row>
  )
}

function Toggle({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="twk-row twk-row-h">
      <div className="twk-lbl"><span>{label}</span></div>
      <button type="button" className="twk-toggle" data-on={value ? '1' : '0'}
        role="switch" aria-checked={value} onClick={() => onChange(!value)}>
        <i />
      </button>
    </div>
  )
}

function Radio({ label, value, options, onChange }: {
  label: string; value: string; options: { value: string; label: string }[]; onChange: (v: string) => void
}) {
  const idx = options.findIndex((o) => o.value === value)
  const n = options.length
  return (
    <Row label={label}>
      <div className="twk-seg" role="radiogroup">
        <div className="twk-seg-thumb"
          style={{ left: `calc(2px + ${idx} * (100% - 4px) / ${n})`, width: `calc((100% - 4px) / ${n})` }} />
        {options.map((o) => (
          <button key={o.value} type="button" role="radio" aria-checked={o.value === value}
            onClick={() => onChange(o.value)}>
            {o.label}
          </button>
        ))}
      </div>
    </Row>
  )
}

function Btn({ label, onClick, secondary }: { label: string; onClick: () => void; secondary?: boolean }) {
  return (
    <button type="button" className={secondary ? 'twk-btn sec' : 'twk-btn'} onClick={onClick}>{label}</button>
  )
}

/* ── Main panel ── */
export interface TweakValues {
  turnMs: number
  turnStyle: 'book' | 'wipe'
  sound: boolean
  soundVolume: number
  showCornerMarks: boolean
}

interface Props {
  tweaks: TweakValues
  patch: (p: Partial<TweakValues>) => void
  go: (screen: string) => void
}

export function TweaksPanel({ tweaks, patch, go }: Props) {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef({ x: 16, y: 16 })
  const PAD = 16

  const clamp = useCallback(() => {
    const el = panelRef.current
    if (!el) return
    const w = el.offsetWidth, h = el.offsetHeight
    offsetRef.current = {
      x: Math.min(Math.max(PAD, offsetRef.current.x), window.innerWidth - w - PAD),
      y: Math.min(Math.max(PAD, offsetRef.current.y), window.innerHeight - h - PAD),
    }
    el.style.right = offsetRef.current.x + 'px'
    el.style.bottom = offsetRef.current.y + 'px'
  }, [])

  useEffect(() => {
    if (!open) return
    clamp()
    window.addEventListener('resize', clamp)
    return () => window.removeEventListener('resize', clamp)
  }, [open, clamp])

  const onDragStart = (e: React.MouseEvent) => {
    const el = panelRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const sx = e.clientX, sy = e.clientY
    const startRight = window.innerWidth - r.right
    const startBottom = window.innerHeight - r.bottom
    const move = (ev: MouseEvent) => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy),
      }
      clamp()
    }
    const up = () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseup', up)
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseup', up)
  }

  const SCREENS: [string, string][] = [
    ['home', 'Home'], ['projects', 'Projects'], ['project-detail', 'Case Study'],
    ['experience', 'Experience'], ['stack', 'Stack'], ['manual', 'Manual'], ['contact', 'Contact'],
  ]

  return (
    <>
      <style>{STYLE}</style>

      {!open && (
        <button className="twk-gear" aria-label="Open tweaks" onClick={() => setOpen(true)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </button>
      )}

      {open && (
        <div ref={panelRef} className="twk-panel"
          style={{ right: offsetRef.current.x, bottom: offsetRef.current.y }}>
          <div className="twk-hd" onMouseDown={onDragStart}>
            <b>Tweaks</b>
            <button className="twk-x" aria-label="Close" onMouseDown={(e) => e.stopPropagation()}
              onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="twk-body">
            <Section label="Page Turn">
              <Radio label="Style" value={tweaks.turnStyle}
                options={[{ value: 'book', label: 'Book Fold' }, { value: 'wipe', label: 'Wipe' }]}
                onChange={(v) => patch({ turnStyle: v as 'book' | 'wipe' })} />
              <Slider label="Duration" value={tweaks.turnMs} min={400} max={1800} step={50} suffix="ms"
                onChange={(v) => patch({ turnMs: v })} />
            </Section>
            <Section label="Sound">
              <Toggle label="Paper rustle" value={tweaks.sound} onChange={(v) => patch({ sound: v })} />
              <Slider label="Volume" value={tweaks.soundVolume} min={0} max={1} step={0.05}
                onChange={(v) => patch({ soundVolume: v })} />
            </Section>
            <Section label="Marks">
              <Toggle label="Corner ticks" value={tweaks.showCornerMarks}
                onChange={(v) => patch({ showCornerMarks: v })} />
            </Section>
            <Section label="Quick Travel">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                {SCREENS.map(([id, label]) => (
                  <Btn key={id} label={label} secondary onClick={() => { go(id); setOpen(false) }} />
                ))}
              </div>
            </Section>
          </div>
        </div>
      )}
    </>
  )
}
