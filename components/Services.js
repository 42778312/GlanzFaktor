import { useState, useRef, useCallback } from 'react';
import useScrollReveal from './useScrollReveal';

/* ── Drag-to-reveal Before / After slider ─────────────── */
function BeforeAfterSlider({ before, after }) {
  const [pos, setPos]     = useState(50);
  const containerRef      = useRef(null);
  const dragging          = useRef(false);

  const updatePos = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct  = Math.max(0, Math.min((clientX - rect.left) / rect.width, 1)) * 100;
    setPos(pct);
  }, []);

  return (
    <div
      className="ba-slider"
      ref={containerRef}
      onMouseDown={(e) => { dragging.current = true;  updatePos(e.clientX); }}
      onMouseMove={(e) => { if (dragging.current) updatePos(e.clientX); }}
      onMouseUp={()    => { dragging.current = false; }}
      onMouseLeave={()  => { dragging.current = false; }}
      onTouchStart={(e) => { dragging.current = true;  updatePos(e.touches[0].clientX); }}
      onTouchMove={(e)  => { if (dragging.current) { updatePos(e.touches[0].clientX); } }}
      onTouchEnd={()    => { dragging.current = false; }}
    >
      {/* Before — full frame, always visible */}
      <img src={before} alt="Vorher"  className="ba-img"          draggable="false" />
      {/* After  — clipped from the right via clip-path */}
      <img src={after}  alt="Nachher" className="ba-img ba-after"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        draggable="false"
      />
      {/* Divider + handle */}
      <div className="ba-divider" style={{ left: `${pos}%` }}>
        <div className="ba-handle-btn">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </div>
      </div>
      <span className="ba-label ba-label-l">Vorher</span>
      <span className="ba-label ba-label-r">Nachher</span>
    </div>
  );
}

const services = [
  {
    title: 'Büros & Verwaltungsgebäude',
    icon: 'https://cdn.prod.website-files.com/67ed0cb918a16dfcec7cea30/68021335c8a6bf6da155edb9_service-icon-1.svg',
    text: 'Professionelle Büroreinigung für produktive Arbeitsumgebungen. Von Schreibtischen über Besprechungsräume bis zu Sanitäranlagen – wir sorgen für ein hygienisches und repräsentatives Arbeitsklima am Bodensee.',
    before: '/Assest/67ed0cb918a16dfcec7cea30/house-clean.png', 
    after:  '/Assest/67ed0cb918a16dfcec7cea30/house-dirty.png', 
  },
  {
    title: 'Fitnessstudios',
    icon: 'https://cdn.prod.website-files.com/67ed0cb918a16dfcec7cea30/6822fe61a7f89b35ad6d177b_service-icon-2.svg',
    text: 'Spezialisierte Reinigung für Fitnessstudios und Sportstätten. Hygienische Gerätereinigung, Umkleiden und Duschbereiche – für eine saubere und motivierende Trainingsatmosphäre Ihre Mitglieder begeistern wird.',
    before: '/Assest/67ed0cb918a16dfcec7cea30/gym-clean.png',
    after:  '/Assest/67ed0cb918a16dfcec7cea30/gym_dirty.png',
  },
  {
    title: 'Hotels & Pensionen',
    icon: 'https://cdn.prod.website-files.com/67ed0cb918a16dfcec7cea30/6822fe6b7fd69f641f5fadb7_service-icon-3.svg',
    text: 'Perfekte Sauberkeit für Ihre Gäste! Zimmerreinigung, Bettwäsche-Service und Gemeinschaftsbereiche – wir sorgen dafür, dass Ihre Gäste am Bodensee einen makellosen Aufenthalt genießen und gerne wiederkommen.',
    before: '/Assest/67ed0cb918a16dfcec7cea30/hostel-clean.png',
    after:  '/Assest/67ed0cb918a16dfcec7cea30/hostel-dirty.png',
  },
  {
    title: 'Einzelhandel & Einkaufszentren',
    icon: 'https://cdn.prod.website-files.com/67ed0cb918a16dfcec7cea30/6822fe7443bb44e2cd82aef8_service-icon-4.svg',
    text: 'Einladende Verkaufsflächen durch professionelle Reinigung. Schaufenster, Verkaufsräume, Lager und Kundentoiletten – schaffen Sie ein angenehmes Einkaufserlebnis, das Ihre Kunden zum Verweilen einlädt.',
    before: 'https://images.unsplash.com/photo-1555529733-0e670560f7e1?auto=format&fit=crop&w=800&q=80',
    after:  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  return (
    <div id="services" className="grey-bg" ref={sectionRef}>
      <section className="section-regular">
        <div className="w-layout-blockcontainer container w-container">
          <div className="section-title-wrap">
            <div className="align-center reveal reveal-fade">
              <div className="subtitle">
                <div className="subtitle-icon">
                  <img
                    src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68ada4d8c8e2e861698ff365_subtitle-star.svg"
                    loading="lazy"
                    alt="star"
                  />
                </div>
                <div>Unsere Leistungen</div>
              </div>
              <div className="inner-container-600">
                <h2 className="section-title mg-0">
                  Verwandeln Sie Ihre Räume mit professioneller Reinigung — KOSTENLOSE Besichtigung!
                </h2>
              </div>
            </div>
          </div>
          <div className="transform-area">
            <div className="w-layout-grid home-service-grid ba-grid-override">
              {services.map((s, i) => (
                <div key={i} className="reveal" style={{ '--d': `${0.15 + i * 0.12}s` }}>
                  <div className="home-service-card svc-ba-card">
                    {/* Before / After drag slider */}
                    <BeforeAfterSlider before={s.before} after={s.after} />
                    {/* Card content */}
                    <div className="svc-ba-body">
                      <div className="w-layout-vflex home-service-top-wrap" style={{ marginBottom: 0 }}>
                        <div className="card-title" style={{ fontSize: '1.5rem', margin: 0 }}>{s.title}</div>
                        <div className="home-service-icon-wrap">
                          <img
                            src={s.icon}
                            loading="lazy"
                            alt="Service Icon"
                            className="home-service-icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
