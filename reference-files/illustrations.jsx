// SVG illustrations — flat vector, Wes Anderson stock-style.

const Illus = {};

// ===== Hero "workspace" — keyboard + plant + desk, flat vector =====
Illus.Workspace = function Workspace({ palette = {} }) {
  const desk = palette.desk || "#4A6B5C";       // muted teal-green desk
  const deskDark = palette.deskDark || "#3A574A";
  const keyboard = palette.keyboard || "#F0EAD8";
  const keyboardDark = palette.keyboardDark || "#D6CCB0";
  const key = palette.key || "#FFFAEB";
  const keyDark = palette.keyDark || "#B5A57F";
  const plantPot = palette.plantPot || "#EFE3C4";
  const plant = palette.plant || "#7BA579";
  const plantDark = palette.plantDark || "#557F5A";
  const accent = palette.accent || "#D4B055";
  return (
    <svg viewBox="0 0 800 480" preserveAspectRatio="xMidYMid slice" style={{ display: "block", width: "100%", height: "100%" }}>
      {/* desk surface */}
      <rect width="800" height="480" fill={desk} />
      {/* grain stripes */}
      {Array.from({ length: 14 }).map((_, i) => (
        <rect key={i} x="0" y={i * 36 + (i % 2 ? 8 : 0)} width="800" height="2" fill={deskDark} opacity=".35" />
      ))}
      {/* plant pot upper right */}
      <g transform="translate(560,40)">
        <ellipse cx="80" cy="120" rx="78" ry="22" fill={plantDark} opacity=".4" />
        <path d="M14 70 Q80 64 146 70 L138 130 Q80 138 22 130 Z" fill={plantPot} stroke={plantDark} strokeWidth="2" />
        <ellipse cx="80" cy="70" rx="66" ry="14" fill="#3a4a3e" />
        {/* succulent leaves */}
        <g>
          <ellipse cx="80" cy="56" rx="14" ry="34" fill={plant} />
          <ellipse cx="80" cy="56" rx="14" ry="34" fill={plantDark} opacity=".15" />
          <ellipse cx="55" cy="60" rx="12" ry="28" transform="rotate(-25 55 60)" fill={plant} />
          <ellipse cx="105" cy="60" rx="12" ry="28" transform="rotate(25 105 60)" fill={plant} />
          <ellipse cx="40" cy="68" rx="9" ry="20" transform="rotate(-50 40 68)" fill={plantDark} />
          <ellipse cx="120" cy="68" rx="9" ry="20" transform="rotate(50 120 68)" fill={plantDark} />
          <ellipse cx="68" cy="48" rx="6" ry="14" transform="rotate(-15 68 48)" fill={plantDark} opacity=".7" />
          <ellipse cx="92" cy="48" rx="6" ry="14" transform="rotate(15 92 48)" fill={plantDark} opacity=".7" />
        </g>
      </g>

      {/* keyboard */}
      <g transform="translate(60,210)">
        {/* shadow */}
        <rect x="6" y="14" width="700" height="220" rx="14" fill="#000" opacity=".25" />
        {/* body */}
        <rect x="0" y="0" width="700" height="220" rx="14" fill={keyboard} stroke={keyboardDark} strokeWidth="2" />
        {/* function row */}
        {Array.from({ length: 14 }).map((_, i) => (
          <rect key={`f-${i}`} x={20 + i * 47} y={18} width="34" height="20" rx="3" fill={key} stroke={keyDark} strokeWidth="1.2" />
        ))}
        {/* number row */}
        {Array.from({ length: 13 }).map((_, i) => (
          <rect key={`n-${i}`} x={20 + i * 47} y={46} width="36" height="28" rx="4" fill={key} stroke={keyDark} strokeWidth="1.2" />
        ))}
        {/* qwerty row */}
        {Array.from({ length: 12 }).map((_, i) => (
          <rect key={`q-${i}`} x={32 + i * 47} y={80} width="36" height="28" rx="4" fill={key} stroke={keyDark} strokeWidth="1.2" />
        ))}
        {/* asdf row */}
        {Array.from({ length: 11 }).map((_, i) => (
          <rect key={`a-${i}`} x={42 + i * 47} y={114} width="36" height="28" rx="4" fill={key} stroke={keyDark} strokeWidth="1.2" />
        ))}
        {/* zxcv row */}
        {Array.from({ length: 10 }).map((_, i) => (
          <rect key={`z-${i}`} x={56 + i * 47} y={148} width="36" height="28" rx="4" fill={key} stroke={keyDark} strokeWidth="1.2" />
        ))}
        {/* spacebar row */}
        <rect x="20" y="182" width="56" height="26" rx="4" fill={key} stroke={keyDark} strokeWidth="1.2" />
        <rect x="82" y="182" width="56" height="26" rx="4" fill={key} stroke={keyDark} strokeWidth="1.2" />
        <rect x="144" y="182" width="240" height="26" rx="4" fill={key} stroke={keyDark} strokeWidth="1.2" />
        <rect x="390" y="182" width="56" height="26" rx="4" fill={key} stroke={keyDark} strokeWidth="1.2" />
        <rect x="452" y="182" width="56" height="26" rx="4" fill={key} stroke={keyDark} strokeWidth="1.2" />
        <rect x="514" y="182" width="56" height="26" rx="4" fill={key} stroke={keyDark} strokeWidth="1.2" />
        {/* an accent key */}
        <rect x="42" y="114" width="36" height="28" rx="4" fill={accent} stroke={keyDark} strokeWidth="1.2" />
      </g>
    </svg>
  );
};

// ===== Portrait — flat vector "Boy Scout / Bottle Rocket" style headshot =====
Illus.Portrait = function Portrait({ palette = {} }) {
  const bg = palette.bg || "#7A8568";
  const bgDeep = palette.bgDeep || "#5E6B4F";
  const skin = palette.skin || "#E8C9A8";
  const skinShade = palette.skinShade || "#C9A584";
  const hair = palette.hair || "#3A2E22";
  const shirt = palette.shirt || "#9C8A5F";
  const shirtDark = palette.shirtDark || "#776847";
  const tie = palette.tie || "#1F3140";
  const tieDark = palette.tieDark || "#13212C";
  const badge = palette.badge || "#1F3140";
  const badgeAccent = palette.badgeAccent || "#D4B055";
  const glasses = palette.glasses || "#1B1B1B";
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" style={{ display: "block", width: "100%", height: "100%" }}>
      <rect width="400" height="500" fill={bg} />
      {/* texture stripes */}
      {Array.from({ length: 30 }).map((_, i) => (
        <rect key={i} x="0" y={i * 18} width="400" height="1" fill={bgDeep} opacity=".25" />
      ))}
      {/* shoulders */}
      <path d="M30 500 L30 410 Q60 360 130 340 L270 340 Q340 360 370 410 L370 500 Z" fill={shirt} stroke={shirtDark} strokeWidth="2.5" />
      {/* shirt pocket */}
      <rect x="80" y="385" width="62" height="50" rx="2" fill="none" stroke={shirtDark} strokeWidth="2" />
      <rect x="92" y="382" width="38" height="14" rx="2" fill={shirt} stroke={shirtDark} strokeWidth="2" />
      <rect x="250" y="385" width="62" height="50" rx="2" fill="none" stroke={shirtDark} strokeWidth="2" />
      <rect x="262" y="382" width="38" height="14" rx="2" fill={shirt} stroke={shirtDark} strokeWidth="2" />
      {/* collar */}
      <path d="M150 340 L200 380 L250 340 Z" fill={shirt} stroke={shirtDark} strokeWidth="2.5" />
      <path d="M150 340 L200 380 L150 380 Z" fill={shirtDark} opacity=".25" />
      {/* tie */}
      <path d="M186 340 L214 340 L222 380 L200 410 L178 380 Z" fill={tie} />
      <path d="M178 380 L200 410 L222 380 L218 430 L200 470 L182 430 Z" fill={tieDark} />
      <ellipse cx="200" cy="345" rx="14" ry="6" fill={tieDark} />
      {/* neck */}
      <rect x="172" y="290" width="56" height="60" fill={skinShade} />
      <rect x="172" y="290" width="56" height="40" fill={skin} />
      {/* head */}
      <ellipse cx="200" cy="220" rx="92" ry="106" fill={skin} />
      <path d="M200 326 Q160 320 132 290 L132 230 Q140 326 200 326" fill={skinShade} opacity=".55" />
      {/* hair */}
      <path d="M118 200 Q120 110 200 100 Q286 108 286 198 Q286 158 252 142 Q230 175 192 165 Q140 158 128 195 Z" fill={hair} />
      {/* hair part shine */}
      <path d="M170 110 Q198 130 220 116" fill="none" stroke="#000" strokeOpacity=".25" strokeWidth="2" />
      {/* ears */}
      <ellipse cx="118" cy="232" rx="12" ry="20" fill={skinShade} />
      <ellipse cx="282" cy="232" rx="12" ry="20" fill={skinShade} />
      {/* glasses */}
      <g stroke={glasses} strokeWidth="3.5" fill="none">
        <rect x="138" y="208" width="56" height="40" rx="4" />
        <rect x="206" y="208" width="56" height="40" rx="4" />
        <line x1="194" y1="226" x2="206" y2="226" />
        <line x1="138" y1="220" x2="120" y2="222" />
        <line x1="262" y1="220" x2="280" y2="222" />
      </g>
      {/* eyes */}
      <ellipse cx="166" cy="230" rx="3.5" ry="4" fill={hair} />
      <ellipse cx="234" cy="230" rx="3.5" ry="4" fill={hair} />
      {/* eyebrows */}
      <path d="M148 200 Q166 195 184 200" stroke={hair} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M216 200 Q234 195 252 200" stroke={hair} strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* nose */}
      <path d="M200 240 L194 270 Q200 276 206 270 Z" fill={skinShade} opacity=".7" />
      {/* mouth */}
      <path d="M180 296 Q200 304 220 296" stroke={hair} strokeWidth="2.4" fill="none" strokeLinecap="round" opacity=".75" />

      {/* lapel badge */}
      <g transform="translate(296,390)">
        <circle r="28" fill={badge} />
        <circle r="22" fill="none" stroke={badgeAccent} strokeWidth="2" />
        <path d="M0 -12 L4 -3 L13 -3 L6 3 L9 12 L0 6 L-9 12 L-6 3 L-13 -3 L-4 -3 Z" fill={badgeAccent} />
      </g>
    </svg>
  );
};

// ===== Small decorative compass / star =====
Illus.Compass = function Compass({ size = 40, color = "currentColor" }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size}>
      <circle cx="20" cy="20" r="18" fill="none" stroke={color} strokeWidth="1" />
      <circle cx="20" cy="20" r="13" fill="none" stroke={color} strokeWidth="1" />
      <path d="M20 4 L22 18 L20 36 L18 18 Z" fill={color} opacity=".8" />
      <path d="M4 20 L18 18 L36 20 L18 22 Z" fill={color} opacity=".5" />
      <circle cx="20" cy="20" r="2" fill={color} />
    </svg>
  );
};

// ===== Tape strip =====
Illus.Tape = function Tape({ angle = 0, color = "#D89B95", style = {} }) {
  return (
    <div style={{
      position: "absolute", width: 70, height: 22,
      background: `linear-gradient(180deg, ${color}aa 0%, ${color}cc 50%, ${color}aa 100%)`,
      transform: `rotate(${angle}deg)`,
      boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
      mixBlendMode: "multiply",
      ...style
    }} />
  );
};

window.Illus = Illus;
