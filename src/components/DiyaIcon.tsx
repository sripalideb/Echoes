export function DiyaIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Flame */}
      <g transform="translate(60, 25)">
        <path
          d="M0,-20 C-5,-15 -8,-8 -8,0 C-8,8 -4,14 0,18 C4,14 8,8 8,0 C8,-8 5,-15 0,-20 Z"
          fill="url(#flameGradient)"
          opacity="0.9"
        />
        <path
          d="M0,-15 C-3,-12 -5,-7 -5,0 C-5,5 -2,9 0,12 C2,9 5,5 5,0 C5,-7 3,-12 0,-15 Z"
          fill="url(#flameInner)"
          opacity="0.8"
        />
      </g>

      {/* Wick holder - small raised part */}
      <ellipse
        cx="60"
        cy="48"
        rx="6"
        ry="4"
        fill="rgba(255, 212, 163, 0.5)"
        stroke="rgba(255, 212, 163, 0.6)"
        strokeWidth="1"
      />

      {/* Main diya bowl - upper rim */}
      <ellipse
        cx="60"
        cy="52"
        rx="35"
        ry="8"
        fill="url(#diyaTopGradient)"
        stroke="rgba(255, 212, 163, 0.5)"
        strokeWidth="1.5"
      />

      {/* Main diya body */}
      <path
        d="M25,52 Q25,75 35,85 L85,85 Q95,75 95,52 Z"
        fill="url(#diyaBodyGradient)"
        stroke="rgba(255, 212, 163, 0.4)"
        strokeWidth="1.5"
      />

      {/* Diya base/bottom */}
      <ellipse
        cx="60"
        cy="85"
        rx="25"
        ry="6"
        fill="rgba(255, 154, 122, 0.3)"
        stroke="rgba(255, 212, 163, 0.4)"
        strokeWidth="1"
      />

      {/* Spout - the pointed part for wick */}
      <path
        d="M95,55 Q105,58 108,62 Q105,66 95,68 Z"
        fill="url(#spoutGradient)"
        stroke="rgba(255, 212, 163, 0.4)"
        strokeWidth="1.5"
      />

      {/* Inner glow/oil reflection */}
      <ellipse
        cx="60"
        cy="58"
        rx="20"
        ry="8"
        fill="url(#innerGlowGradient)"
        opacity="0.4"
      />

      {/* Decorative dots on diya */}
      <circle cx="45" cy="68" r="2" fill="rgba(255, 212, 163, 0.6)" />
      <circle cx="60" cy="70" r="2" fill="rgba(255, 212, 163, 0.6)" />
      <circle cx="75" cy="68" r="2" fill="rgba(255, 212, 163, 0.6)" />

      {/* Gradients */}
      <defs>
        {/* Flame gradients */}
        <linearGradient id="flameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF9A7A" stopOpacity="1" />
          <stop offset="50%" stopColor="#FFD4A3" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FFC300" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="flameInner" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF4E6" stopOpacity="1" />
          <stop offset="100%" stopColor="#FFD4A3" stopOpacity="0.8" />
        </linearGradient>

        {/* Diya gradients */}
        <linearGradient id="diyaTopGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255, 212, 163, 0.4)" />
          <stop offset="100%" stopColor="rgba(255, 154, 122, 0.3)" />
        </linearGradient>
        <linearGradient id="diyaBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255, 212, 163, 0.35)" />
          <stop offset="50%" stopColor="rgba(255, 154, 122, 0.25)" />
          <stop offset="100%" stopColor="rgba(255, 154, 122, 0.2)" />
        </linearGradient>
        <linearGradient id="spoutGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255, 212, 163, 0.35)" />
          <stop offset="100%" stopColor="rgba(255, 154, 122, 0.25)" />
        </linearGradient>
        <radialGradient id="innerGlowGradient">
          <stop offset="0%" stopColor="rgba(255, 212, 163, 0.8)" />
          <stop offset="100%" stopColor="rgba(255, 212, 163, 0)" />
        </radialGradient>
      </defs>
    </svg>
  );
}
