import { useRef, useEffect } from 'react';
import { Star, MapPin } from 'lucide-react';
import useScrollReveal from './useScrollReveal';

const PARTNERS = [
  { logo: '/Assest/67ed0cb918a16dfcec7cea30/sparkasse.png', label: 'Sparkasse' },
  { logo: '/Assest/67ed0cb918a16dfcec7cea30/zara.png', label: 'Zara' },
  { logo: '/Assest/67ed0cb918a16dfcec7cea30/H&M-Logo.svg.png', label: 'H&M' },
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg', label: "McDonald's" },
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Burger_King_2020.svg', label: 'Burger King' },
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Deutsche_Bahn_AG-Logo.svg', label: 'Deutsche Bahn' },
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/KFC_logo.svg', label: 'KFC' },
  { logo: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg', label: 'Starbucks' },
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/7/70/SBB_CFF_FFS_logo.svg', label: 'SBB' },
];

const FILIALEN = [
  { name: 'Konstanz', lat: 47.6629, lng: 9.1759 },
  { name: 'Stuttgart', lat: 48.7758, lng: 9.1829 },
  { name: 'Freiburg', lat: 48.0021, lng: 7.8421 },
  { name: 'Heidelberg', lat: 49.3988, lng: 8.6724 },
  { name: 'Singen', lat: 47.7597, lng: 8.6866 },
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

      /* Standard OpenStreetMap tiles — no API key required.
         (CartoDB's free "dark_all" basemap now requires an account-linked
         key and shows a watermark without one, so it can't be used here.) */
      L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        { maxZoom: 19, subdomains: 'abc' }
      ).addTo(map);

      /* Zoom control bottom-right */
      L.control.zoom({ position: 'bottomright' }).addTo(map);

      /* Attribution bottom-left */
      L.control.attribution({ position: 'bottomleft', prefix: false })
        .addAttribution('&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors')
        .addTo(map);

      const icon = createIcon(L);

      FILIALEN.forEach((city) => {
        L.marker([city.lat, city.lng], { icon })
          .addTo(map)
          .bindPopup(
            `<div style="font-family:inherit;text-align:center;padding:4px 2px;">` +
            `<strong style="font-size:14px;color:#1e3a5f;">${city.name}</strong><br/>` +
            `<span style="font-size:11px;color:#555;">GlanzFaktor Filiale</span><br/>` +
            `<span style="font-size:11px;color:#0fb8ac;">Kostenlose Beratung</span>` +
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

  return <div ref={mapRef} className="h-full w-full" />;
}

export default function Counter() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  return (
    <section ref={sectionRef} className="bg-background px-4 py-8 sm:px-6">
      <div className="shell max-w-none !px-0">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-navy-800 via-navy-700 to-navy-800 p-8 sm:p-12 lg:p-14">
          <div className="pointer-events-none absolute -right-24 -top-36 h-[500px] w-[500px] rounded-full bg-teal/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-[380px] w-[380px] rounded-full bg-teal-light/5 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="reveal reveal-left" style={{ '--d': '0.1s' }}>
              <div className="mb-10">
                <h2 className="mb-2 flex items-center gap-2 font-label text-[15px] font-bold uppercase tracking-[0.15em] text-teal-light">
                  <Star className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                  Von starken Marken vertraut
                </h2>
                <p className="mb-5 text-[15px] leading-relaxed text-white/55">
                  Diese vertrauenswürdigen Unternehmen setzen auf unsere professionellen Dienstleistungen.
                </p>
                <div className="gf-logo-marquee">
                  <div className="gf-logo-marquee-track">
                    {[...PARTNERS, ...PARTNERS].map((p, idx) => (
                      <div key={idx} className="gf-partner-logo-animated">
                        <img src={p.logo} alt={p.label} loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mb-2 flex items-center gap-2 font-label text-[15px] font-bold uppercase tracking-[0.15em] text-teal-light">
                  <MapPin className="h-4 w-4" />
                  Wo Sie uns finden
                </h2>
                <p className="text-[15px] leading-relaxed text-white/55">
                  Wir sind immer in Ihrer Nähe. 5 Standorte für professionelle Gebäudereinigung in ganz Baden-Württemberg.
                </p>
              </div>
            </div>

            <div
              className="gf-map-container reveal reveal-right relative h-[480px] overflow-hidden rounded-[20px] border border-teal-light/30 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
              style={{ '--d': '0.2s' }}
            >
              <LeafletMap />
              <div className="pointer-events-none absolute inset-0 shadow-[0_0_60px_rgba(15,184,172,0.18)_inset]" />
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 991px) { .gf-map-container { height: 400px !important; } }
        @media (max-width: 767px) { .gf-map-container { height: 340px !important; } }
        @media (max-width: 479px) { .gf-map-container { height: 280px !important; } }

        .gf-logo-marquee {
          overflow: hidden;
          position: relative;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
                  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
        }
        .gf-logo-marquee-track {
          display: flex;
          gap: 1rem;
          width: max-content;
          animation: gf-logo-scroll 32s linear infinite;
        }
        .gf-logo-marquee:hover .gf-logo-marquee-track { animation-play-state: paused; }
        @keyframes gf-logo-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .gf-partner-logo-animated {
          flex-shrink: 0;
          height: 64px;
          width: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.04);
          border-radius: 12px;
          padding: 0.6rem 1rem;
          border: 1px solid rgba(255,255,255,0.08);
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
        }
        .gf-partner-logo-animated img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          filter: grayscale(1) brightness(1.8);
          opacity: 0.75;
          transition: filter 0.3s ease, opacity 0.3s ease;
        }
        .gf-partner-logo-animated:hover {
          background: rgba(15,184,172,0.12) !important;
          border-color: rgba(15,184,172,0.35) !important;
          transform: translateY(-3px);
        }
        .gf-partner-logo-animated:hover img { filter: none; opacity: 1; }
        @media (max-width: 767px) {
          .gf-partner-logo-animated { width: 110px; height: 54px; }
        }

        /* Recolor the free OSM tiles to a dark theme via CSS filter,
           since a real dark tile style now requires a paid API key */
        .gf-map-container .leaflet-tile-pane {
          filter: grayscale(1) invert(1) brightness(0.85) contrast(1.15);
        }

        .gf-leaflet-pin { background: none !important; border: none !important; position: relative; }
        .gf-pin-dot {
          width: 12px; height: 12px;
          background: #0fb8ac;
          border: 2px solid #fff;
          border-radius: 50%;
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 8px rgba(15,184,172,0.6);
          z-index: 2;
        }
        .gf-pin-pulse {
          width: 20px; height: 20px;
          background: rgba(15,184,172,0.25);
          border-radius: 50%;
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          animation: gf-pulse 2s ease-out infinite;
          z-index: 1;
        }
        @keyframes gf-pulse {
          0%   { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
        }

        .leaflet-popup-content-wrapper {
          background: #1a1f36 !important;
          border: 1px solid rgba(15,184,172,0.3) !important;
          border-radius: 10px !important;
          box-shadow: 0 4px 20px rgba(0,0,0,0.5) !important;
        }
        .leaflet-popup-content-wrapper strong { color: #e2e8f0 !important; }
        .leaflet-popup-content-wrapper span { color: rgba(255,255,255,0.65) !important; }
        .leaflet-popup-tip { background: #1a1f36 !important; border: 1px solid rgba(15,184,172,0.3) !important; }
        .leaflet-control-zoom a {
          background: #1a1f36 !important;
          color: #94a3b8 !important;
          border-color: rgba(15,184,172,0.25) !important;
        }
        .leaflet-control-zoom a:hover { background: #253252 !important; color: #fff !important; }
        .leaflet-control-attribution {
          background: rgba(26,31,54,0.8) !important;
          color: rgba(148,163,184,0.6) !important;
          font-size: 10px !important;
        }
        .leaflet-control-attribution a { color: rgba(15,184,172,0.7) !important; }

        .gf-city-label {
          background: rgba(26,31,54,0.85) !important;
          border: 1px solid rgba(15,184,172,0.35) !important;
          border-radius: 6px !important;
          color: #e2e8f0 !important;
          font-size: 12px !important;
          font-weight: 600 !important;
          padding: 3px 8px !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.4) !important;
          letter-spacing: 0.03em !important;
        }
        .gf-city-label::before { border-right-color: rgba(15,184,172,0.35) !important; }
      ` }} />
    </section>
  );
}
