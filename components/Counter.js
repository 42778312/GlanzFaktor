import { useEffect, useRef } from 'react';
import useScrollReveal from './useScrollReveal';

function AnimatedCount({ end, suffix = '' }) {
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const startTime = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(ease * end) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const STATS = [
  { end: 50,  suffix: '+',  label: 'Zufriedene Kunden in der Bodenseeregion' },
  { end: 98,  suffix: '%',  label: 'Weiterempfehlungsrate – Qualität, die überzeugt' },
  { end: 5,   suffix: '+',  label: 'Jahre Erfahrung in professioneller Gebäudereinigung' },
];

// Realistic Baden-Württemberg outline path (clockwise from NW)
const BW_PATH = `
  M 100,44
  L 236,27
  L 279,104
  L 279,143
  L 268,208
  L 232,299
  L 188,336
  L 167,325
  L 154,322
  L 91,342
  L 29,352
  L 28,263
  L 51,182
  L 110,117
  Z
`;

const CITIES = [
  { name: 'Stuttgart',  cx: 188, cy: 171, textAnchor: 'start',  dx: 11, dy: 4 },
  { name: 'Heidelberg', cx: 139, cy: 79,  textAnchor: 'start',  dx: 11, dy: 4 },
  { name: 'Freiburg',   cx: 55,  cy: 287, textAnchor: 'start',  dx: 11, dy: 4 },
  { name: 'Singen',     cx: 154, cy: 322, textAnchor: 'end',    dx: -11, dy: -8 },
  { name: 'Konstanz',   cx: 188, cy: 336, textAnchor: 'start',  dx: 11, dy: 4 },
];

const PARTNERS = [
  {
    logo: '/Assest/67ed0cb918a16dfcec7cea30/sparkasse.png',
    label: 'Sparkasse',
    desc: 'Deutschlands meistvertrauenswürdige Bank – wir sorgen für ein sauberes & einladendes Filialnetz in der gesamten Region.',
  },
  {
    logo: '/Assest/67ed0cb918a16dfcec7cea30/zara.png',
    label: 'Zara',
    desc: 'Europas führende Modekette vertraut auf unsere hohen Reinigungsstandards in ihren deutschen Filialen.',
  },
  {
    logo: '/Assest/67ed0cb918a16dfcec7cea30/H&M-Logo.svg.png',
    label: 'H&M',
    desc: 'H&M Deutschland setzt auf GlanzFaktor für die professionelle Pflege und tägliche Reinigung ihrer Verkaufsflächen.',
  },
];

export default function Counter() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  return (
    <section className="gf-counter-section" ref={sectionRef}>
      <div className="w-layout-blockcontainer container w-container">

        {/* ── Stats row ── */}
        <div className="gf-counter-grid reveal">
          {STATS.map((s, i) => (
            <div key={i} className="gf-counter-item">
              <span className="gf-counter-num">
                <AnimatedCount end={s.end} suffix={s.suffix} />
              </span>
              <p className="gf-counter-label">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── Two-column split ── */}
        <div className="gf-counter-split">

          {/* LEFT — Partner logos + descriptions */}
          <div className="gf-split-col reveal reveal-left" style={{ '--d': '0.1s' }}>
            <p className="gf-logos-title">Vertrauenspartner</p>
            <p className="gf-split-sub">
              Führende Unternehmen vertrauen auf unsere Reinigungsexpertise – täglich, zuverlässig, professionell.
            </p>
            <div className="gf-partner-list">
              {PARTNERS.map((p) => (
                <div key={p.label} className="gf-partner-row">
                  <div className="gf-partner-logo-box">
                    <img src={p.logo} alt={p.label} loading="lazy" />
                  </div>
                  <div className="gf-partner-info">
                    <h4 className="gf-partner-name">{p.label}</h4>
                    <p className="gf-partner-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Baden-Württemberg SVG map */}
          <div className="gf-split-col reveal reveal-right" style={{ '--d': '0.25s' }}>
            <p className="gf-logos-title">Unsere Standorte</p>
            <p className="gf-split-sub">
              Professionelle Gebäudereinigung in Stuttgart, Freiburg, Heidelberg, Singen &amp; Konstanz.
            </p>
            <div className="gf-map-wrap">
              <svg
                viewBox="0 0 320 390"
                xmlns="http://www.w3.org/2000/svg"
                className="gf-bw-map"
                aria-label="Karte von Baden-Württemberg mit Filialstandorten"
              >
                <defs>
                  <linearGradient id="bwFill" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e3a5f"/>
                    <stop offset="100%" stopColor="#0f2644"/>
                  </linearGradient>
                  <filter id="dotGlow" x="-80%" y="-80%" width="260%" height="260%">
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                  <filter id="mapGlow" x="-10%" y="-10%" width="120%" height="120%">
                    <feGaussianBlur stdDeviation="6" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                </defs>

                {/* Glow shadow behind state */}
                <path d={BW_PATH} fill="rgba(59,130,246,0.18)" filter="url(#mapGlow)" transform="translate(4,4)"/>

                {/* State fill */}
                <path d={BW_PATH} fill="url(#bwFill)" stroke="#3b82f6" strokeWidth="1.8"/>

                {/* Grid lines overlay */}
                <path d={BW_PATH} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="12" strokeDasharray="1 18"/>

                {/* Cities */}
                {CITIES.map((city, i) => (
                  <g key={city.name}>
                    {/* Outer pulse */}
                    <circle cx={city.cx} cy={city.cy} r="10" fill="#3b82f6" opacity="0">
                      <animate attributeName="r" values="5;16;5" dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="0.35;0;0.35" dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite"/>
                    </circle>
                    {/* Dot */}
                    <circle cx={city.cx} cy={city.cy} r="5.5" fill="#60a5fa" stroke="white" strokeWidth="1.8" filter="url(#dotGlow)"/>
                    {/* Label background */}
                    <text
                      x={city.cx + city.dx}
                      y={city.cy + city.dy}
                      fontFamily="Arial, sans-serif"
                      fontSize="11"
                      fontWeight="700"
                      fill="rgba(0,0,0,0.6)"
                      textAnchor={city.textAnchor}
                      stroke="rgba(0,0,0,0.4)"
                      strokeWidth="3"
                      paintOrder="stroke"
                    >
                      {city.name}
                    </text>
                    {/* Label */}
                    <text
                      x={city.cx + city.dx}
                      y={city.cy + city.dy}
                      fontFamily="Arial, sans-serif"
                      fontSize="11"
                      fontWeight="700"
                      fill="white"
                      textAnchor={city.textAnchor}
                    >
                      {city.name}
                    </text>
                  </g>
                ))}

                {/* Lake Constance hint */}
                <ellipse cx="200" cy="348" rx="40" ry="12" fill="rgba(59,130,246,0.22)" stroke="rgba(96,165,250,0.5)" strokeWidth="1"/>
                <text x="200" y="352" fontFamily="Arial, sans-serif" fontSize="8" fill="rgba(255,255,255,0.45)" textAnchor="middle">Bodensee</text>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


