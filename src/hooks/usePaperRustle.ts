import { useRef } from 'react'

function fillPinkNoise(d: Float32Array) {
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0
  for (let i = 0; i < d.length; i++) {
    const white = Math.random() * 2 - 1
    b0 = 0.99886 * b0 + white * 0.0555179
    b1 = 0.99332 * b1 + white * 0.0750759
    b2 = 0.96900 * b2 + white * 0.1538520
    b3 = 0.86650 * b3 + white * 0.3104856
    b4 = 0.55000 * b4 + white * 0.5329522
    b5 = -0.7616 * b5 - white * 0.0168980
    d[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11
    b6 = white * 0.115926
  }
}

let sharedCtx: AudioContext | null = null

function ensureCtx(): AudioContext | null {
  if (!sharedCtx) {
    try {
      sharedCtx = new AudioContext()
    } catch {
      return null
    }
  }
  return sharedCtx
}

function playRustle(volume: number) {
  const ac = ensureCtx()
  if (!ac) return
  if (ac.state === 'suspended') ac.resume()

  const now = ac.currentTime
  const sr = ac.sampleRate
  const totalDur = 0.85

  const buf = ac.createBuffer(1, Math.floor(sr * totalDur), sr)
  const d = buf.getChannelData(0)
  fillPinkNoise(d)

  // Two-gaussian-peak envelope
  for (let i = 0; i < d.length; i++) {
    const t = i / sr
    const g1 = Math.exp(-((t - 0.18) ** 2) / (2 * 0.1 ** 2))
    const g2 = 0.55 * Math.exp(-((t - 0.46) ** 2) / (2 * 0.16 ** 2))
    d[i] *= Math.min(1, g1 + g2)
  }

  const src = ac.createBufferSource()
  src.buffer = buf

  const bp = ac.createBiquadFilter()
  bp.type = 'bandpass'
  bp.frequency.value = 3200
  bp.Q.value = 0.85

  const lp = ac.createBiquadFilter()
  lp.type = 'lowpass'
  lp.frequency.value = 7800

  const g = ac.createGain()
  g.gain.setValueAtTime(0.0001, now)
  g.gain.exponentialRampToValueAtTime(volume * 0.9, now + 0.04)
  g.gain.exponentialRampToValueAtTime(0.0001, now + totalDur)

  src.connect(bp)
  bp.connect(lp)
  lp.connect(g)
  g.connect(ac.destination)
  src.start(now)
  src.stop(now + totalDur + 0.05)
}

export function usePaperRustle() {
  const playedRef = useRef(false)

  function play(volume = 0.35) {
    playedRef.current = true
    playRustle(volume)
  }

  return play
}
