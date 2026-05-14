interface Props {
  palette?: {
    desk?: string
    deskDark?: string
    keyboard?: string
    keyboardDark?: string
    key?: string
    keyDark?: string
    plantPot?: string
    plant?: string
    plantDark?: string
    accent?: string
  }
}

export function Workspace({ palette = {} }: Props) {
  const desk = palette.desk ?? '#4A6B5C'
  const deskDark = palette.deskDark ?? '#3A574A'
  const keyboard = palette.keyboard ?? '#F0EAD8'
  const keyboardDark = palette.keyboardDark ?? '#D6CCB0'
  const key = palette.key ?? '#FFFAEB'
  const keyDark = palette.keyDark ?? '#B5A57F'
  const plantPot = palette.plantPot ?? '#EFE3C4'
  const plant = palette.plant ?? '#7BA579'
  const plantDark = palette.plantDark ?? '#557F5A'
  const accent = palette.accent ?? '#D4B055'

  return (
    <svg
      viewBox="0 0 800 480"
      preserveAspectRatio="xMidYMid slice"
      style={{ display: 'block', width: '100%', height: '100%' }}
    >
      <rect width="800" height="480" fill={desk} />
      {Array.from({ length: 14 }).map((_, i) => (
        <rect
          key={i}
          x="0"
          y={i * 36 + (i % 2 ? 8 : 0)}
          width="800"
          height="2"
          fill={deskDark}
          opacity=".35"
        />
      ))}
      <g transform="translate(560,40)">
        <ellipse cx="80" cy="120" rx="78" ry="22" fill={plantDark} opacity=".4" />
        <path
          d="M14 70 Q80 64 146 70 L138 130 Q80 138 22 130 Z"
          fill={plantPot}
          stroke={plantDark}
          strokeWidth="2"
        />
        <ellipse cx="80" cy="70" rx="66" ry="14" fill="#3a4a3e" />
        <g>
          <ellipse cx="80" cy="56" rx="14" ry="34" fill={plant} />
          <ellipse cx="80" cy="56" rx="14" ry="34" fill={plantDark} opacity=".15" />
          <ellipse cx="55" cy="60" rx="12" ry="28" transform="rotate(-25 55 60)" fill={plant} />
          <ellipse cx="105" cy="60" rx="12" ry="28" transform="rotate(25 105 60)" fill={plant} />
          <ellipse cx="40" cy="68" rx="9" ry="20" transform="rotate(-50 40 68)" fill={plantDark} />
          <ellipse cx="120" cy="68" rx="9" ry="20" transform="rotate(50 120 68)" fill={plantDark} />
          <ellipse
            cx="68"
            cy="48"
            rx="6"
            ry="14"
            transform="rotate(-15 68 48)"
            fill={plantDark}
            opacity=".7"
          />
          <ellipse
            cx="92"
            cy="48"
            rx="6"
            ry="14"
            transform="rotate(15 92 48)"
            fill={plantDark}
            opacity=".7"
          />
        </g>
      </g>
      <g transform="translate(60,210)">
        <rect x="6" y="14" width="700" height="220" rx="14" fill="#000" opacity=".25" />
        <rect x="0" y="0" width="700" height="220" rx="14" fill={keyboard} stroke={keyboardDark} strokeWidth="2" />
        {Array.from({ length: 14 }).map((_, i) => (
          <rect key={`f-${i}`} x={20 + i * 47} y={18} width="34" height="20" rx="3" fill={key} stroke={keyDark} strokeWidth="1.2" />
        ))}
        {Array.from({ length: 13 }).map((_, i) => (
          <rect key={`n-${i}`} x={20 + i * 47} y={46} width="36" height="28" rx="4" fill={key} stroke={keyDark} strokeWidth="1.2" />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <rect key={`q-${i}`} x={32 + i * 47} y={80} width="36" height="28" rx="4" fill={key} stroke={keyDark} strokeWidth="1.2" />
        ))}
        {Array.from({ length: 11 }).map((_, i) => (
          <rect key={`a-${i}`} x={42 + i * 47} y={114} width="36" height="28" rx="4" fill={key} stroke={keyDark} strokeWidth="1.2" />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <rect key={`z-${i}`} x={56 + i * 47} y={148} width="36" height="28" rx="4" fill={key} stroke={keyDark} strokeWidth="1.2" />
        ))}
        <rect x="20" y="182" width="56" height="26" rx="4" fill={key} stroke={keyDark} strokeWidth="1.2" />
        <rect x="82" y="182" width="56" height="26" rx="4" fill={key} stroke={keyDark} strokeWidth="1.2" />
        <rect x="144" y="182" width="240" height="26" rx="4" fill={key} stroke={keyDark} strokeWidth="1.2" />
        <rect x="390" y="182" width="56" height="26" rx="4" fill={key} stroke={keyDark} strokeWidth="1.2" />
        <rect x="452" y="182" width="56" height="26" rx="4" fill={key} stroke={keyDark} strokeWidth="1.2" />
        <rect x="514" y="182" width="56" height="26" rx="4" fill={key} stroke={keyDark} strokeWidth="1.2" />
        <rect x="42" y="114" width="36" height="28" rx="4" fill={accent} stroke={keyDark} strokeWidth="1.2" />
      </g>
    </svg>
  )
}
