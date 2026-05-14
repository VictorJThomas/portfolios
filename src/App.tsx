import { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HomeScreen } from './screens/HomeScreen'
import { ProjectsScreen } from './screens/ProjectsScreen'
import { ProjectDetailScreen } from './screens/ProjectDetailScreen'
import { FieldManualScreen } from './screens/FieldManualScreen'
import { ExperienceScreen } from './screens/ExperienceScreen'
import { StackScreen } from './screens/StackScreen'
import { ContactScreen } from './screens/ContactScreen'
import { usePaperRustle } from './hooks/usePaperRustle'
import { useTweaks } from './hooks/useTweaks'
import type { ScreenId } from './data/types'

const TURN_VARIANTS = {
  initial: { rotateY: -90, opacity: 0, transformOrigin: 'left center' },
  animate: { rotateY: 0, opacity: 1, transformOrigin: 'left center' },
  exit: { rotateY: 90, opacity: 0, transformOrigin: 'right center' },
}

export function App() {
  const [screen, setScreen] = useState<ScreenId>('home')
  const [projectId, setProjectId] = useState<string | undefined>()
  const playRustle = usePaperRustle()
  const { tweaks } = useTweaks()

  const go = useCallback(
    (id: ScreenId, pid?: string) => {
      if (tweaks.sound) playRustle(tweaks.soundVolume)
      setProjectId(pid)
      setScreen(id)
    },
    [tweaks.sound, tweaks.soundVolume, playRustle],
  )

  const durationSec = tweaks.turnMs / 1000

  return (
    <div style={{ position: 'absolute', inset: 0, perspective: 2400 }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          variants={tweaks.turnStyle === 'book' ? TURN_VARIANTS : undefined}
          initial={tweaks.turnStyle === 'book' ? 'initial' : { opacity: 0 }}
          animate={tweaks.turnStyle === 'book' ? 'animate' : { opacity: 1 }}
          exit={tweaks.turnStyle === 'book' ? 'exit' : { opacity: 0 }}
          transition={{ duration: durationSec, ease: [0.4, 0, 0.2, 1] }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <Screen id={screen} projectId={projectId} go={go} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function Screen({
  id,
  projectId,
  go,
}: {
  id: ScreenId
  projectId?: string
  go: (id: ScreenId, pid?: string) => void
}) {
  switch (id) {
    case 'home':
      return <HomeScreen go={go} />
    case 'projects':
      return <ProjectsScreen go={go} />
    case 'project-detail':
      return <ProjectDetailScreen go={go} projectId={projectId} />
    case 'manual':
      return <FieldManualScreen go={go} />
    case 'experience':
      return <ExperienceScreen go={go} />
    case 'stack':
      return <StackScreen go={go} />
    case 'contact':
      return <ContactScreen go={go} />
  }
}
