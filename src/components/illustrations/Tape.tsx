import type { CSSProperties } from 'react'

interface Props {
  angle?: number
  color?: string
  style?: CSSProperties
}

export function Tape({ angle = 0, color = '#D89B95', style }: Props) {
  return (
    <div
      style={{
        position: 'absolute',
        width: 70,
        height: 22,
        background: `linear-gradient(180deg, ${color}aa 0%, ${color}cc 50%, ${color}aa 100%)`,
        transform: `rotate(${angle}deg)`,
        boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
        mixBlendMode: 'multiply',
        ...style,
      }}
    />
  )
}
