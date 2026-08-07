/**
 * Product jar illustrations — three visually distinct SVGs so each
 * card in the Gallery reads as its own product rather than a repeated
 * graphic. Each keeps the brand's gold/glass/label system but varies
 * silhouette, proportions, and label copy to match its size.
 */

/* ---------- 250ml — The Starter Jar: short, single-cap tumbler ---------- */
export function GheeJarSmall({ className = '', id = 'jar-sm' }) {
  const gradId = `smGold-${id}`
  const glassId = `smGlass-${id}`

  return (
    <svg
      className={className}
      viewBox="0 0 360 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A2 Gold Ghee 250ml starter jar"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f6dd94" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#a5822a" />
        </linearGradient>
        <linearGradient id={glassId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fffdf6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#fdf3df" stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id={`glow-${id}`} cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#ffe9a8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ffe9a8" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="180" cy="200" rx="130" ry="130" fill={`url(#glow-${id})`} />

      {/* short wide-mouth tumbler body */}
      <rect x="88" y="130" width="184" height="230" rx="26" fill={`url(#${glassId})`} stroke="#e8d8b6" strokeWidth="1.5" />

      {/* ghee fill (fills most of the small jar) */}
      <path d="M96 190c0-6 5-10 11-10h146c6 0 11 4 11 10v128c0 22-18 40-40 40h-88c-22 0-40-18-40-40V190Z" fill={`url(#${gradId})`} />
      <ellipse cx="180" cy="182" rx="72" ry="9" fill="#f6dd94" opacity="0.9" />

      {/* flat screw-top lid, single band */}
      <rect x="108" y="96" width="144" height="30" rx="8" fill="#232323" />
      <rect x="108" y="96" width="144" height="9" rx="4" fill="#3a3a3a" />

      {/* label */}
      <rect x="126" y="212" width="108" height="76" rx="8" fill="#fff9f2" opacity="0.94" />
      <text x="180" y="242" textAnchor="middle" fontFamily="Playfair Display, serif" fontSize="17" fontWeight="700" fill="#2b2b2b">A2</text>
      <text x="180" y="260" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="7.5" letterSpacing="1.6" fill="#8b6b4a">GOLD GHEE</text>
      <line x1="144" y1="268" x2="216" y2="268" stroke="#d4af37" strokeWidth="1" />
      <text x="180" y="279" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="6.5" letterSpacing="1.2" fill="#8b6b4a">250 ML</text>

      <path d="M104 200c0-8 5-14 12-16" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

/* ---------- 500ml — The Kitchen Staple: classic tall jar with ring neck ---------- */
export function GheeJarMedium({ className = '', id = 'jar-md' }) {
  const gradId = `mdGold-${id}`
  const glassId = `mdGlass-${id}`
  const lidId = `mdLid-${id}`

  return (
    <svg
      className={className}
      viewBox="0 0 360 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A2 Gold Ghee 500ml jar"
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

      <ellipse cx="180" cy="180" rx="150" ry="150" fill={`url(#glow-${id})`} />

      {/* classic jar body */}
      <path
        d="M96 168c0-14 8-24 22-27l6-2v-20c0-9 7-16 16-16h80c9 0 16 7 16 16v20l6 2c14 3 22 13 22 27v230c0 26-21 47-47 47H143c-26 0-47-21-47-47V168Z"
        fill={`url(#${glassId})`}
        stroke="#e8d8b6"
        strokeWidth="1.5"
      />

      <path
        d="M100 230c0-6 4-11 10-11h140c6 0 10 5 10 11v166c0 24-19 43-43 43h-74c-24 0-43-19-43-43V230Z"
        fill={`url(#${gradId})`}
      />
      <ellipse cx="180" cy="222" rx="80" ry="10" fill="#f6dd94" opacity="0.9" />

      {/* neck ring */}
      <rect x="140" y="99" width="80" height="14" rx="4" fill="#efe0bd" stroke="#e0cf9f" strokeWidth="1" />

      {/* domed lid */}
      <rect x="128" y="70" width="104" height="34" rx="10" fill={`url(#${lidId})`} />
      <rect x="128" y="70" width="104" height="10" rx="5" fill="#2b2b2b" opacity="0.6" />

      {/* label */}
      <rect x="118" y="252" width="124" height="92" rx="10" fill="#fff9f2" opacity="0.92" />
      <text x="180" y="290" textAnchor="middle" fontFamily="Playfair Display, serif" fontSize="22" fontWeight="700" fill="#2b2b2b">A2</text>
      <text x="180" y="312" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="9" letterSpacing="2" fill="#8b6b4a">GOLD GHEE</text>
      <line x1="140" y1="322" x2="220" y2="322" stroke="#d4af37" strokeWidth="1" />
      <text x="180" y="334" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="7" letterSpacing="1.5" fill="#8b6b4a">500 ML</text>

      <path d="M112 175c0-10 6-17 15-19" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

/* ---------- 1L — The Family Reserve: tall wide jar with double-band lid + wax seal ---------- */
export function GheeJarLarge({ className = '', id = 'jar-lg' }) {
  const gradId = `lgGold-${id}`
  const glassId = `lgGlass-${id}`
  const lidId = `lgLid-${id}`

  return (
    <svg
      className={className}
      viewBox="0 0 360 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A2 Gold Ghee 1 litre family reserve jar"
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
        <radialGradient id={`glow-${id}`} cx="50%" cy="32%" r="62%">
          <stop offset="0%" stopColor="#ffe9a8" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ffe9a8" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="180" cy="190" rx="160" ry="160" fill={`url(#glow-${id})`} />

      {/* wide, tall reserve jar body */}
      <path
        d="M80 190c0-16 9-27 25-31l8-2v-22c0-10 8-18 18-18h98c10 0 18 8 18 18v22l8 2c16 4 25 15 25 31v270c0 30-24 54-54 54H134c-30 0-54-24-54-54V190Z"
        fill={`url(#${glassId})`}
        stroke="#e8d8b6"
        strokeWidth="1.5"
      />

      <path
        d="M86 258c0-7 5-12 12-12h164c7 0 12 5 12 12v192c0 27-22 49-49 49h-90c-27 0-49-22-49-49V258Z"
        fill={`url(#${gradId})`}
      />
      <ellipse cx="180" cy="250" rx="94" ry="11" fill="#f6dd94" opacity="0.9" />

      {/* wide neck ring */}
      <rect x="130" y="113" width="100" height="16" rx="5" fill="#efe0bd" stroke="#e0cf9f" strokeWidth="1" />

      {/* double-band lid with wax-seal accent */}
      <rect x="116" y="78" width="128" height="38" rx="11" fill={`url(#${lidId})`} />
      <rect x="116" y="78" width="128" height="11" rx="5" fill="#2b2b2b" opacity="0.6" />
      <circle cx="180" cy="97" r="9" fill={`url(#${gradId})`} stroke="#a5822a" strokeWidth="1" />

      {/* label */}
      <rect x="106" y="288" width="148" height="104" rx="12" fill="#fff9f2" opacity="0.92" />
      <text x="180" y="330" textAnchor="middle" fontFamily="Playfair Display, serif" fontSize="25" fontWeight="700" fill="#2b2b2b">A2</text>
      <text x="180" y="354" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="10" letterSpacing="2.2" fill="#8b6b4a">GOLD GHEE</text>
      <line x1="128" y1="366" x2="232" y2="366" stroke="#d4af37" strokeWidth="1" />
      <text x="180" y="380" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="7.5" letterSpacing="1.6" fill="#8b6b4a">1 LITRE &middot; FAMILY RESERVE</text>

      <path d="M96 198c0-11 7-19 17-21" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}