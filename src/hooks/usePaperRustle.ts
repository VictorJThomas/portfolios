import { useRef } from 'react'

type AudioCtxRef = AudioContext | null

function fillPinkNoise(data: Float32Array) {
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0
  for (let i = 0; i < data.length; i++) {
    const w = Math.random() * 2 - 1
    b0 = 0.99886 * b0 + w * 0.0555179
    b1 = 0.99332 * b1 + w * 0.0750759
    b2 = 0.96900 * b2 + w * 0.1538520
    b3 = 0.86650 * b3 + w * 0.3104856
    b4 = 0.55000 * b4 + w * 0.5329522
    b5 = -0.7616 * b5 - w * 0.0168980
    data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362) * 0.11
    b6 = w * 0.115926
  }
}

export function usePaperRustle() {
  const ctxRef = useRef<AudioCtxRef>(null)

  function play(volume = 0.35) {
    if (!ctxRef.current) {
      try {
        ctxRef.current = new AudioContext()
      } catch {
        return
      }
    }
    const ac = ctxRef.current
    if (ac.state === 'suspended') ac.resume()

    const now = ac.currentTime
    const sr = ac.sampleRate
    const totalDur = 0.85

    // Two pink-noise bursts
    ;[0, 0.18].forEach((offset) => {
      const dur = 0.28
      const buf = ac.createBuffer(1, Math.ceil(dur * sr), sr)
      fillPinkNoise(buf.getChannelData(0))

      const src = ac.createBufferSource()
      src.buffer = buf

      const bpf = ac.createBiquadFilter()
      bpf.type = 'bandpass'
      bpf.frequency.value = 2800
      bpf.Q.value = 0.6

      const gain = ac.createGain()
      gain.gain.setValueAtTime(0, now + offset)
      gain.gain.linearRampToValueAtTime(volume, now + offset + 0.04)
      gain.gain.linearRampToValueAtTime(0, now + offset + dur)

      src.connect(bpf)
      bpf.connect(gain)
      gain.connect(ac.destination)
      src.start(now + offset)
      src.stop(now + offset + totalDur)
    })
  }

  return play
}
