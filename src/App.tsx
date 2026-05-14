import { useState, useCallback, useEffect, type CSSProperties } from 'react'
import { HomeScreen } from './screens/HomeScreen'
import { ProjectsScreen } from './screens/ProjectsScreen'
import { ProjectDetailScreen } from './screens/ProjectDetailScreen'
import { FieldManualScreen } from './screens/FieldManualScreen'
import { ExperienceScreen } from './screens/ExperienceScreen'
import { StackScreen } from './screens/StackScreen'
import { ContactScreen } from './screens/ContactScreen'
import { TweaksPanel, type TweakValues } from './components/TweaksPanel'
import { usePaperRustle } from './hooks/usePaperRustle'
import type { ScreenId } from './data/types'

const NAV_ORDER: ScreenId[] = ['home', 'projects', 'experience', 'stack', 'manual', 'contact']

const DEFAULT_TWEAKS: TweakValues = {
  turnMs: 900,
  turnStyle: 'book',
  sound: true,
  soundVolume: 0.35,
  showCornerMarks: true,
}

interface Route { id: ScreenId; projectId?: string }

/* ── Screen renderer ── */
function renderScreen(route: Route, go: (id: ScreenId, pid?: string) => void) {
  switch (route.id) {
    case 'home': return <HomeScreen go={go} />
    case 'projects': return <ProjectsScreen go={go} />
    case 'project-detail': return <ProjectDetailScreen go={go} projectId={route.projectId} />
    case 'manual': return <FieldManualScreen go={go} />
    case 'experience': return <ExperienceScreen go={go} />
    case 'stack': return <StackScreen go={go} />
    case 'contact': return <ContactScreen go={go} />
  }
}

/* ── Audio hint ── */
function AudioHint() {
  const [show, setShow] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 4500)
    return () => clearTimeout(t)
  }, [])
  return <div className={`audio-hint ${show ? 'show' : ''}`}>Click anywhere to enable paper rustle</div>
}

/* ── Page turn ── */
interface PageTurnProps {
  current: Route
  prev: Route | null
  turning: boolean
  tweaks: TweakValues
  go: (id: ScreenId, pid?: string) => void
}

function PageTurn({ current, prev, turning, tweaks, go }: PageTurnProps) {
  return (
    <div
      className="stage"
      style={{ '--turn-ms': `${tweaks.turnMs}ms` } as CSSProperties}
    >
      <div className={`page-stack ${turning ? 'turning' : ''}`}>
        {/* Incoming — underneath */}
        <div className="page-layer incoming" style={{ zIndex: 1 }}>
          {renderScreen(current, go)}
        </div>

        {prev && (
          <>
            {tweaks.turnStyle === 'wipe' ? (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 2,
                  animation: turning
                    ? `wipeClip ${tweaks.turnMs}ms ease-in-out forwards`
                    : undefined,
                }}
              >
                {renderScreen(prev, go)}
              </div>
            ) : (
              <>
                <div className="page-layer outgoing-page" style={{ zIndex: 2 }}>
                  {renderScreen(prev, go)}
                </div>
                <div className="page-layer fold-flap" style={{ zIndex: 3 }} />
              </>
            )}
          </>
        )}
      </div>

      {!tweaks.showCornerMarks && (
        <style>{`.page::before, .page::after, .page > div[style*="border-top"], .page > div[style*="border-bottom"] { display: none }`}</style>
      )}
    </div>
  )
}

/* ── App ── */
export function App() {
  const [tweaks, setTweaks] = useState<TweakValues>(DEFAULT_TWEAKS)
  const [current, setCurrent] = useState<Route>({ id: 'home' })
  const [prev, setPrev] = useState<Route | null>(null)
  const [turning, setTurning] = useState(false)
  const playRustle = usePaperRustle()

  const patch = useCallback((p: Partial<TweakValues>) => {
    setTweaks((t) => ({ ...t, ...p }))
  }, [])

  const go = useCallback(
    (id: ScreenId | string, pid?: string) => {
      const screenId = id as ScreenId
      setCurrent((cur) => {
        const next: Route = { id: screenId, projectId: pid ?? cur.projectId }
        if (next.id === cur.id && next.projectId === cur.projectId) return cur
        setPrev(cur)
        setTurning(true)
        return next
      })
    },
    [],
  )

  // Fire rustle and schedule turning-end whenever turning starts
  useEffect(() => {
    if (!turning) return
    if (tweaks.sound) playRustle(tweaks.soundVolume)
    const t = setTimeout(() => {
      setTurning(false)
      setPrev(null)
    }, tweaks.turnMs + 40)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [turning, current])

  // Keyboard navigation
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') go('home')
      if (e.key === 'ArrowRight') {
        const i = NAV_ORDER.indexOf(current.id)
        if (i >= 0) go(NAV_ORDER[(i + 1) % NAV_ORDER.length])
      }
      if (e.key === 'ArrowLeft') {
        const i = NAV_ORDER.indexOf(current.id)
        if (i >= 0) go(NAV_ORDER[(i - 1 + NAV_ORDER.length) % NAV_ORDER.length])
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [current.id, go])

  return (
    <>
      <PageTurn current={current} prev={prev} turning={turning} tweaks={tweaks} go={go} />
      <TweaksPanel tweaks={tweaks} patch={patch} go={go} />
      <AudioHint />
    </>
  )
}
