import { useState } from 'react'
import type { TweakConfig } from '../data/types'

const DEFAULTS: TweakConfig = {
  turnMs: 900,
  turnStyle: 'book',
  sound: true,
  soundVolume: 0.35,
  showCornerMarks: true,
}

export function useTweaks() {
  const [tweaks, setTweaks] = useState<TweakConfig>(DEFAULTS)

  function patch(partial: Partial<TweakConfig>) {
    setTweaks((prev) => ({ ...prev, ...partial }))
  }

  return { tweaks, patch }
}
