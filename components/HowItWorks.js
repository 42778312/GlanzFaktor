import { useEffect, useRef } from 'react';

const IconContact = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
);

const IconOffer = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

const IconSparkle = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74z" />
    <path d="M5 3l.5 1.5L7 5l-1.5.5L5 7l-.5-1.5L3 5l1.5-.5z" />
    <path d="M19 17l.5 1.5L21 19l-1.5.5L19 21l-.5-1.5L17 19l1.5-.5z" />
  </svg>
);

const STEPS = [
  {
    n: '01',
    Icon: IconContact,
    title: 'KOSTENLOS anfragen',
    text: 'Kontaktieren Sie uns telefonisch, per E-Mail, WhatsApp oder über unser Kontaktformular – schnell, unkompliziert und VÖLLIG KOSTENLOS. Wir sind bereit, sofort zu helfen!',
  },
  {
    n: '02',
    Icon: IconOffer,
    title: 'KOSTENLOSES Angebot',
    text: 'Wir erstellen Ihnen schnell und professionell ein maßgeschneidertes Angebot – OHNE KOSTEN, transparent und fair kalkuliert. Keine versteckten Gebühren!',
  },
  {
    n: '03',
    Icon: IconSparkle,
    title: 'Beste Leistung garantiert',
    text: 'Unser hochqualifiziertes Profi-Team arbeitet termingerecht, extrem gründlich und mit höchster Sorgfalt – wir garantieren, dass Sie begeistert sein werden!',
  },
];

export default function HowItWorks() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hiw-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    section.querySelectorAll('.hiw-animate').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    document.dispatchEvent(new CustomEvent('gf:openContact'));
  };

  return (
    <section id="how-it-works" className="hiw-section" ref={sectionRef}>
      <div className="w-layout-blockcontainer container w-container">

        {/* ── Title ── */}
        <div className="hiw-animate hiw-title-block" style={{ transitionDelay: '0s' }}>
          <div className="subtitle" style={{ justifyContent: 'center' }}>
            <div className="subtitle-icon">
              <img
                src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68ada4d8c8e2e861698ff365_subtitle-star.svg"
                loading="lazy"
                alt="star"
              />
            </div>
            <div>So einfach geht&apos;s</div>
          </div>
          <h2 className="section-title mg-0 hiw-heading">
            Ihr Weg zur perfekten Sauberkeit — KOSTENLOSE Beratung inklusive!<br />In nur 3 einfachen Schritten!
          </h2>
        </div>

        {/* ── Rail + Steps ── */}
        <div className="hiw-track">
          {/* Animated connector rail — sits between the step badges */}
          <div className="hiw-rail-wrap hiw-animate" style={{ transitionDelay: '0.18s' }}>
            <div className="hiw-rail" />
          </div>

          <div className="hiw-steps">
            {STEPS.map(({ n, Icon, title, text }, i) => (
              <div
                key={n}
                className="hiw-animate hiw-step-card"
                style={{ transitionDelay: `${0.22 + i * 0.16}s` }}
              >
                {/* Badge + icon — left column */}
                <div className="hiw-card-top">
                  <div className="hiw-badge">{n}</div>
                  <div className="hiw-icon-wrap">
                    <Icon />
                  </div>
                </div>

                {/* Title + text + accent — right column */}
                <div className="hiw-card-body">
                  <h3 className="hiw-step-title">{title}</h3>
                  <p className="hiw-step-text">{text}</p>
                  <div className="hiw-card-accent" />
                </div>
              </div>
            ))}

            {/* ── CTA card ── */}
            <div
              className="hiw-animate hiw-step-card hiw-cta-card"
              style={{ transitionDelay: '0.7s' }}
            >
              <div className="hiw-cta-star">
                <img
                  src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68f8c24fc7b56a76ac9689f3_star.svg"
                  loading="lazy"
                  alt="star"
                  width="38"
                />
              </div>
              <h3 className="hiw-step-title hiw-cta-title">
                Bereit für strahlende Sauberkeit?<br />KOSTENLOS anfragen — jetzt!
              </h3>
              <p className="hiw-step-text hiw-cta-text">
                KOSTENLOSES Angebot &amp; unverbindliche Beratung — in wenigen Minuten erledigt! Wir antworten schnell!
              </p>
              <a
                href="#contact-form"
                onClick={scrollToContact}
                className="primary-button w-inline-block hiw-cta-btn"
              >
                <div>Jetzt buchen</div>
                <div className="button-icon">
                  <img
                    src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/67e50f402a56ac86b3ff7be6_arrow.svg"
                    loading="lazy"
                    alt="arrow"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
