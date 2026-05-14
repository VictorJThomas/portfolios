interface Props {
  palette?: {
    bg?: string
    bgDeep?: string
    skin?: string
    skinShade?: string
    hair?: string
    shirt?: string
    shirtDark?: string
    tie?: string
    tieDark?: string
    badge?: string
    badgeAccent?: string
    glasses?: string
  }
}

export function Portrait({ palette = {} }: Props) {
  const bg = palette.bg ?? '#7A8568'
  const bgDeep = palette.bgDeep ?? '#5E6B4F'
  const skin = palette.skin ?? '#E8C9A8'
  const skinShade = palette.skinShade ?? '#C9A584'
  const hair = palette.hair ?? '#3A2E22'
  const shirt = palette.shirt ?? '#9C8A5F'
  const shirtDark = palette.shirtDark ?? '#776847'
  const tie = palette.tie ?? '#1F3140'
  const tieDark = palette.tieDark ?? '#13212C'
  const badge = palette.badge ?? '#1F3140'
  const badgeAccent = palette.badgeAccent ?? '#D4B055'
  const glasses = palette.glasses ?? '#1B1B1B'

  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      style={{ display: 'block', width: '100%', height: '100%' }}
    >
      <rect width="400" height="500" fill={bg} />
      {Array.from({ length: 30 }).map((_, i) => (
        <rect key={i} x="0" y={i * 18} width="400" height="1" fill={bgDeep} opacity=".25" />
      ))}
      <path
        d="M30 500 L30 410 Q60 360 130 340 L270 340 Q340 360 370 410 L370 500 Z"
        fill={shirt}
        stroke={shirtDark}
        strokeWidth="2.5"
      />
      <rect x="80" y="385" width="62" height="50" rx="2" fill="none" stroke={shirtDark} strokeWidth="2" />
      <rect x="92" y="382" width="38" height="14" rx="2" fill={shirt} stroke={shirtDark} strokeWidth="2" />
      <rect x="250" y="385" width="62" height="50" rx="2" fill="none" stroke={shirtDark} strokeWidth="2" />
      <rect x="262" y="382" width="38" height="14" rx="2" fill={shirt} stroke={shirtDark} strokeWidth="2" />
      <path d="M150 340 L200 380 L250 340 Z" fill={shirt} stroke={shirtDark} strokeWidth="2.5" />
      <path d="M150 340 L200 380 L150 380 Z" fill={shirtDark} opacity=".25" />
      <path d="M186 340 L214 340 L222 380 L200 410 L178 380 Z" fill={tie} />
      <path d="M178 380 L200 410 L222 380 L218 430 L200 470 L182 430 Z" fill={tieDark} />
      <ellipse cx="200" cy="345" rx="14" ry="6" fill={tieDark} />
      <rect x="172" y="290" width="56" height="60" fill={skinShade} />
      <rect x="172" y="290" width="56" height="40" fill={skin} />
      <ellipse cx="200" cy="220" rx="92" ry="106" fill={skin} />
      <path d="M200 326 Q160 320 132 290 L132 230 Q140 326 200 326" fill={skinShade} opacity=".55" />
      <path
        d="M118 200 Q120 110 200 100 Q286 108 286 198 Q286 158 252 142 Q230 175 192 165 Q140 158 128 195 Z"
        fill={hair}
      />
      <path
        d="M170 110 Q198 130 220 116"
        fill="none"
        stroke="#000"
        strokeOpacity=".25"
        strokeWidth="2"
      />
      <ellipse cx="118" cy="232" rx="12" ry="20" fill={skinShade} />
      <ellipse cx="282" cy="232" rx="12" ry="20" fill={skinShade} />
      <g stroke={glasses} strokeWidth="3.5" fill="none">
        <rect x="138" y="208" width="56" height="40" rx="4" />
        <rect x="206" y="208" width="56" height="40" rx="4" />
        <line x1="194" y1="226" x2="206" y2="226" />
        <line x1="138" y1="220" x2="120" y2="222" />
        <line x1="262" y1="220" x2="280" y2="222" />
      </g>
      <ellipse cx="166" cy="230" rx="3.5" ry="4" fill={hair} />
      <ellipse cx="234" cy="230" rx="3.5" ry="4" fill={hair} />
      <path
        d="M148 200 Q166 195 184 200"
        stroke={hair}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M216 200 Q234 195 252 200"
        stroke={hair}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M200 240 L194 270 Q200 276 206 270 Z" fill={skinShade} opacity=".7" />
      <path
        d="M180 296 Q200 304 220 296"
        stroke={hair}
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
        opacity=".75"
      />
      <g transform="translate(296,390)">
        <circle r="28" fill={badge} />
        <circle r="22" fill="none" stroke={badgeAccent} strokeWidth="2" />
        <path d="M0 -12 L4 -3 L13 -3 L6 3 L9 12 L0 6 L-9 12 L-6 3 L-13 -3 L-4 -3 Z" fill={badgeAccent} />
      </g>
    </svg>
  )
}
