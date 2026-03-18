import { useRef, useEffect } from 'react';
import useScrollReveal from './useScrollReveal';

const PARTNERS = [
  { logo: '/Assest/67ed0cb918a16dfcec7cea30/sparkasse.png', label: 'Sparkasse' },
  { logo: '/Assest/67ed0cb918a16dfcec7cea30/zara.png',      label: 'Zara' },
  { logo: '/Assest/67ed0cb918a16dfcec7cea30/H&M-Logo.svg.png', label: 'H&M' },
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg', label: "McDonald's" },
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Burger_King_2020.svg', label: 'Burger King' },
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Deutsche_Bahn_AG-Logo.svg', label: 'Deutsche Bahn' },
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/KFC_logo.svg', label: 'KFC' },
  { logo: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg', label: 'Starbucks' },
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/7/70/SBB_CFF_FFS_logo.svg', label: 'SBB' },
];

const FILIALEN = [
  { name: 'Konstanz',   lat: 47.6629, lng: 9.1759  },
  { name: 'Stuttgart',  lat: 48.7758, lng: 9.1829  },
  { name: 'Freiburg',   lat: 48.0021, lng: 7.8421  },
  { name: 'Heidelberg', lat: 49.3988, lng: 8.6724  },
  { name: 'Singen',     lat: 47.7597, lng: 8.6866  },
];

/* Custom SVG marker icon as data-URI */
function createIcon(L) {
  return L.divIcon({
    className: 'gf-leaflet-pin',
    html: '<div class="gf-pin-dot"></div><div class="gf-pin-pulse"></div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
}

function LeafletMap() {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    let cancelled = false;

    (async () => {
      const L = (await import('leaflet')).default;
      if (cancelled) return;

      /* Fix default icon paths broken by bundlers */
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      /* Baden-Württemberg bounds */
      const bwBounds = L.latLngBounds(
        [47.53, 7.51],  // SW corner
        [49.79, 10.50]  // NE corner
      );

      const map = L.map(mapRef.current, {
        center: [48.66, 9.0],
        zoom: 7,
        minZoom: 7,
        maxZoom: 12,
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
        maxBounds: bwBounds.pad(0.05),
        maxBoundsViscosity: 1.0,
      });
      mapInstance.current = map;

      map.fitBounds(bwBounds, { padding: [30, 30] });

      /* Dark-themed tile layer (CartoDB Dark Matter) */
      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
        { maxZoom: 19 }
      ).addTo(map);

      /* Zoom control bottom-right */
      L.control.zoom({ position: 'bottomright' }).addTo(map);

      /* Attribution bottom-left */
      L.control.attribution({ position: 'bottomleft', prefix: false })
        .addAttribution('&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>')
        .addTo(map);

      const icon = createIcon(L);

      FILIALEN.forEach((city) => {
        L.marker([city.lat, city.lng], { icon })
          .addTo(map)
          .bindPopup(
            `<div style="font-family:inherit;text-align:center;padding:4px 2px;">` +
            `<strong style="font-size:14px;color:#1e3a5f;">${city.name}</strong><br/>` +
            `<span style="font-size:11px;color:#555;">GlanzFaktor Filiale</span><br/>` +
            `<span style="font-size:11px;color:#3b82f6;">Kostenlose Beratung</span>` +
            `</div>`
          )
          .bindTooltip(city.name, {
            permanent: true,
            direction: 'right',
            offset: [12, 0],
            className: 'gf-city-label',
          });
      });
    })();

    return () => {
      cancelled = true;
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />;
}

export default function Counter() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  return (
    <section 
      className="gf-counter-section" 
      ref={sectionRef}
      style={{
        background: '#ffffff',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
        borderRadius: '24px',
        padding: '3rem 2rem',
        margin: '2rem auto',
        width: '100%',
        maxWidth: 'none'
      }}
    >
      <div className="w-layout-blockcontainer container w-container" style={{ maxWidth: '100%' }}>

        {/* Header + partner logos row */}
        <div className="reveal reveal-left" style={{ '--d': '0.1s', marginBottom: '1.5rem' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontFamily: '"Inter", sans-serif', fontSize: '1.25rem', color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: '700', marginBottom: '0.5rem' }}>
                <span style={{ marginRight: '8px' }}>★</span> Von Starken Marken Vertraut
              </h2>
                <p style={{ color: '#475569', fontSize: '1.05rem', marginBottom: '1.2rem', lineHeight: '1.5' }}>
                Diese vertrauenswürdigen Unternehmen setzen auf unsere professionellen Dienstleistungen.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {PARTNERS.map((p, idx) => (
                  <div
                    key={p.label}
                    className="gf-partner-logo-animated hover-scale"
                    style={{
                      animation: `slideInFade 0.6s ease-out ${idx * 0.15}s both`,
                      height: '64px',
                      width: '140px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(0,0,0,0.03)',
                      borderRadius: '12px',
                      padding: '0.6rem 1rem',
                      border: '1px solid rgba(0,0,0,0.06)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      backdropFilter: 'blur(10px)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.borderColor = '#10b981';
                      e.currentTarget.style.background = 'rgba(16, 185, 129, 0.08)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(16, 185, 129, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)';
                      e.currentTarget.style.background = 'rgba(0,0,0,0.03)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <img src={p.logo} alt={p.label} loading="lazy" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', opacity: 1, transition: 'opacity 0.3s ease' }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h2 style={{ fontFamily: '"Inter", sans-serif', fontSize: '1.25rem', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: '700', marginBottom: '0.5rem' }}>
                <span style={{ marginRight: '8px' }}>📍</span> Wo Sie Uns Finden
              </h2>
                <p style={{ color: '#475569', fontSize: '1.05rem', marginBottom: '1rem', lineHeight: '1.5' }}>
                Wir sind immer in Ihrer Nähe. 5 Standorte für professionelle Gebäudereinigung in ganz Baden-Württemberg.
              </p>
            </div>
          </div>

          <div className="reveal reveal-right gf-map-container" style={{ '--d': '0.2s', borderRadius: '16px', overflow: 'hidden', border: '1.5px solid rgba(100,140,255,0.35)', boxShadow: '0 8px 32px rgba(30,40,120,0.4)', height: '480px', position: 'relative' }}>
          <LeafletMap />
        </div>

        {/* Custom overrides for dark theme */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes slideInFade {
            from { opacity: 0; transform: translateX(-15px); }
            to   { opacity: 1; transform: translateX(0); }
          }

          /* Responsive map height */
          @media (max-width: 991px) {
            .gf-map-container { height: 400px !important; border-radius: 14px !important; }
          }
          @media (max-width: 767px) {
            .gf-map-container { height: 340px !important; border-radius: 12px !important; }
          }
          @media (max-width: 479px) {
            .gf-map-container { height: 280px !important; border-radius: 10px !important; }
          }
          .gf-partner-logo-animated:hover {
            background: rgba(59,130,246,0.15) !important;
            border-color: rgba(59,130,246,0.4) !important;
            transform: translateY(-3px);
          }

          /* Custom pin marker */
          .gf-leaflet-pin {
            background: none !important;
            border: none !important;
            position: relative;
          }
          .gf-pin-dot {
            width: 12px;
            height: 12px;
            background: #3b82f6;
            border: 2px solid #fff;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-shadow: 0 0 8px rgba(59,130,246,0.6);
            z-index: 2;
          }
          .gf-pin-pulse {
            width: 20px;
            height: 20px;
            background: rgba(59,130,246,0.25);
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: gf-pulse 2s ease-out infinite;
            z-index: 1;
          }
          @keyframes gf-pulse {
            0%   { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
            100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
          }

          /* Dark-theme popup overrides */
          .leaflet-popup-content-wrapper {
            background: #1a1f36 !important;
            border: 1px solid rgba(59,130,246,0.3) !important;
            border-radius: 10px !important;
            box-shadow: 0 4px 20px rgba(0,0,0,0.5) !important;
          }
          .leaflet-popup-content-wrapper strong {
            color: #e2e8f0 !important;
          }
          .leaflet-popup-content-wrapper span {
            color: rgba(255,255,255,0.65) !important;
          }
          .leaflet-popup-tip {
            background: #1a1f36 !important;
            border: 1px solid rgba(59,130,246,0.3) !important;
          }
          .leaflet-control-zoom a {
            background: #1a1f36 !important;
            color: #94a3b8 !important;
            border-color: rgba(59,130,246,0.25) !important;
          }
          .leaflet-control-zoom a:hover {
            background: #253252 !important;
            color: #fff !important;
          }
          .leaflet-control-attribution {
            background: rgba(26,31,54,0.8) !important;
            color: rgba(148,163,184,0.6) !important;
            font-size: 10px !important;
          }
          .leaflet-control-attribution a {
            color: rgba(59,130,246,0.7) !important;
          }

          /* Permanent city name labels */
          .gf-city-label {
            background: rgba(26,31,54,0.85) !important;
            border: 1px solid rgba(59,130,246,0.35) !important;
            border-radius: 6px !important;
            color: #e2e8f0 !important;
            font-size: 12px !important;
            font-weight: 600 !important;
            padding: 3px 8px !important;
            box-shadow: 0 2px 8px rgba(0,0,0,0.4) !important;
            letter-spacing: 0.03em !important;
          }
          .gf-city-label::before {
            border-right-color: rgba(59,130,246,0.35) !important;
          }
        ` }} />
      </div>
    </section>
  );
}
