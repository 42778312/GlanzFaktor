/* Illustrative line-art panel — used instead of stock photography
   for Entrümpelung until real project photos are available */
export default function ClearanceGraphic({ className = 'pillar-graphic-svg' }) {
  return (
    <svg viewBox="0 0 400 320" fill="none" className={className} aria-hidden="true">
      <rect x="0" y="0" width="400" height="320" rx="0" fill="url(#gfClearGrad)" />
      <g opacity="0.9" stroke="rgba(255,255,255,0.85)" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round">
        {/* stacked boxes */}
        <rect x="70" y="150" width="86" height="72" rx="4" />
        <line x1="70" y1="176" x2="156" y2="176" />
        <line x1="113" y1="150" x2="113" y2="176" />
        <rect x="150" y="120" width="72" height="102" rx="4" />
        <line x1="150" y1="150" x2="222" y2="150" />
        <line x1="186" y1="120" x2="186" y2="150" />
        {/* house outline */}
        <path d="M240 200 L240 130 L282 100 L324 130 L324 200 Z" />
        <line x1="270" y1="200" x2="270" y2="165" />
        <line x1="270" y1="165" x2="294" y2="165" />
        <line x1="294" y1="165" x2="294" y2="200" />
        {/* checkmark badge */}
        <circle cx="322" cy="96" r="22" fill="rgba(255,255,255,0.12)" />
        <path d="M312 96 L319 103 L333 88" />
      </g>
      <defs>
        <linearGradient id="gfClearGrad" x1="0" y1="0" x2="400" y2="320" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2d3142" />
          <stop offset="1" stopColor="#10131c" />
        </linearGradient>
      </defs>
    </svg>
  );
}
