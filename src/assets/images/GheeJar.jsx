/**
 * GheeJar
 * A hand-crafted SVG illustration representing the A2 Gold Ghee jar.
 * Built as a component (rather than a raster photo) so the brand mark
 * stays crisp at every viewport and can be tinted / animated with CSS.
 */
function GheeJar({ className = '', id = 'jar' }) {
  const gradId = `jarGold-${id}`
  const glassId = `jarGlass-${id}`
  const lidId = `jarLid-${id}`

  return (
    <svg
      className={className}
      viewBox="0 0 360 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A2 Gold Ghee glass jar"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f6dd94" />
          <stop offset="45%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#a5822a" />
        </linearGradient>
        <linearGradient id={glassId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fffdf6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#fdf3df" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id={lidId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1c1c1c" />
        </linearGradient>
        <radialGradient id={`glow-${id}`} cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#ffe9a8" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ffe9a8" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ambient glow */}
      <ellipse cx="180" cy="180" rx="150" ry="150" fill={`url(#glow-${id})`} />

      {/* jar body (glass) */}
      <path
        d="M96 168c0-14 8-24 22-27l6-2v-20c0-9 7-16 16-16h80c9 0 16 7 16 16v20l6 2c14 3 22 13 22 27v230c0 26-21 47-47 47H143c-26 0-47-21-47-47V168Z"
        fill={`url(#${glassId})`}
        stroke="#e8d8b6"
        strokeWidth="1.5"
      />

      {/* ghee fill */}
      <path
        d="M100 230c0-6 4-11 10-11h140c6 0 10 5 10 11v166c0 24-19 43-43 43h-74c-24 0-43-19-43-43V230Z"
        fill={`url(#${gradId})`}
      />

      {/* fill surface highlight */}
      <ellipse cx="180" cy="222" rx="80" ry="10" fill="#f6dd94" opacity="0.9" />

      {/* jar neck ring */}
      <rect x="140" y="99" width="80" height="14" rx="4" fill="#efe0bd" stroke="#e0cf9f" strokeWidth="1" />

      {/* lid */}
      <rect x="128" y="70" width="104" height="34" rx="10" fill={`url(#${lidId})`} />
      <rect x="128" y="70" width="104" height="10" rx="5" fill="#2b2b2b" opacity="0.6" />

      {/* label */}
      <rect x="118" y="252" width="124" height="92" rx="10" fill="#fff9f2" opacity="0.92" />
      <text
        x="180"
        y="290"
        textAnchor="middle"
        fontFamily="Playfair Display, serif"
        fontSize="22"
        fontWeight="700"
        fill="#2b2b2b"
      >
        A2
      </text>
      <text
        x="180"
        y="312"
        textAnchor="middle"
        fontFamily="Poppins, sans-serif"
        fontSize="9"
        letterSpacing="2"
        fill="#8b6b4a"
      >
        GOLD GHEE
      </text>
      <line x1="140" y1="322" x2="220" y2="322" stroke="#d4af37" strokeWidth="1" />
      <text
        x="180"
        y="334"
        textAnchor="middle"
        fontFamily="Poppins, sans-serif"
        fontSize="7"
        letterSpacing="1.5"
        fill="#8b6b4a"
      >
        BILONA METHOD
      </text>

      {/* glass reflection */}
      <path d="M112 175c0-10 6-17 15-19" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

export default GheeJar
