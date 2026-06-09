interface Props {
  palette?: {
    background?: string
    backgroundGlow?: string
    skin?: string
    skinShade?: string
    hair?: string
    beard?: string
    shirt?: string
    shirtShadow?: string
    outline?: string
  }
}

export function Picture({ palette = {} }: Props) {
  const background = palette.background ?? '#B7C6AE'
  const backgroundGlow = palette.backgroundGlow ?? '#A8BA9E'
  const skin = palette.skin ?? '#C9805A'
  const skinShade = palette.skinShade ?? '#A86442'
  const hair = palette.hair ?? '#2E1B14'
  const beard = palette.beard ?? '#23140F'
  const shirt = palette.shirt ?? '#56728B'
  const shirtShadow = palette.shirtShadow ?? '#435C73'
  const outline = palette.outline ?? '#2A2A2A'

  return (
    <svg
      viewBox="0 0 832 1216"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: '100%', height: '100%', display: 'block' }}
    >
      {/* Background */}
      <rect width="832" height="1216" fill={background} />

      <radialGradient id="bgGlow" cx="50%" cy="45%" r="60%">
        <stop offset="0%" stopColor={backgroundGlow} stopOpacity="0.8" />
        <stop offset="100%" stopColor={background} stopOpacity="1" />
      </radialGradient>

      <rect width="832" height="1216" fill="url(#bgGlow)" />

      {/* Shirt */}
      <path
        d="M145 1130 L145 820
           Q165 700 310 650
           L520 650
           Q670 700 690 820
           L690 1130 Z"
        fill={shirt}
        stroke={outline}
        strokeWidth="5"
      />

      {/* Shirt center line */}
      <line
        x1="416"
        y1="650"
        x2="420"
        y2="1130"
        stroke={shirtShadow}
        strokeWidth="4"
      />

      {/* Collar */}
      <path
        d="M330 650 L416 760 L500 650"
        fill={shirt}
        stroke={outline}
        strokeWidth="5"
      />

      <path
        d="M370 660 L416 730 L462 660"
        fill="#ffffff"
      />

      {/* Neck */}
      <rect
        x="360"
        y="560"
        width="110"
        height="120"
        rx="20"
        fill={skin}
      />

      {/* Face */}
      <ellipse
        cx="416"
        cy="410"
        rx="130"
        ry="170"
        fill={skin}
        stroke={outline}
        strokeWidth="5"
      />

      {/* Ears */}
      <ellipse
        cx="286"
        cy="455"
        rx="22"
        ry="48"
        fill={skin}
        stroke={outline}
        strokeWidth="4"
      />

      <ellipse
        cx="546"
        cy="455"
        rx="22"
        ry="48"
        fill={skin}
        stroke={outline}
        strokeWidth="4"
      />

      {/* Hair */}
      <path
        d="
          M290 350
          Q295 220 420 210
          Q535 220 545 340
          Q520 290 475 285
          Q450 240 390 255
          Q330 270 305 320
          Z
        "
        fill={hair}
        stroke={outline}
        strokeWidth="5"
      />

      {/* Hair curls */}
      <ellipse cx="355" cy="250" rx="55" ry="48" fill={hair} />
      <ellipse cx="435" cy="235" rx="48" ry="42" fill={hair} />
      <ellipse cx="500" cy="260" rx="50" ry="46" fill={hair} />

      {/* Eyebrows */}
      <path
        d="M338 390 Q372 372 404 385"
        stroke={hair}
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />

      <path
        d="M428 385 Q462 372 495 388"
        stroke={hair}
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />

      {/* Eyes */}
      <path
        d="M348 435 Q375 425 398 435"
        stroke={outline}
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />

      <path
        d="M435 435 Q460 425 486 435"
        stroke={outline}
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Pupils */}
      <ellipse cx="376" cy="438" rx="5" ry="5" fill={outline} />
      <ellipse cx="460" cy="438" rx="5" ry="5" fill={outline} />

      {/* Nose */}
      <path
        d="
          M418 450
          L405 515
          Q416 528 430 515
        "
        fill="none"
        stroke={skinShade}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Nose bottom */}
      <path
        d="M396 520 Q416 535 436 520"
        stroke={skinShade}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />

      {/* Smile */}
      <path
        d="M360 575 Q416 605 472 575"
        stroke={beard}
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Lower lip */}
      <path
        d="M380 590 Q416 602 452 590"
        stroke={skinShade}
        strokeWidth="3"
        fill="none"
        opacity="0.6"
      />

      {/* Smile lines */}
      <path
        d="M345 555 Q352 575 365 582"
        stroke={skinShade}
        strokeWidth="4"
        fill="none"
        opacity="0.7"
      />

      <path
        d="M486 555 Q480 575 468 582"
        stroke={skinShade}
        strokeWidth="4"
        fill="none"
        opacity="0.7"
      />

      {/* Beard / goatee */}
      <path
        d="
          M360 620
          Q416 650 472 620
          L458 650
          Q416 675 374 650
          Z
        "
        fill={beard}
      />

      {/* Jaw shading */}
      <path
        d="
          M300 490
          Q320 620 416 620
          Q340 610 300 540
          Z
        "
        fill={skinShade}
        opacity="0.18"
      />
    </svg>
  )
}