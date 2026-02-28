import { useEffect, useRef } from 'react';

// Each card's initial transform at scroll progress = 0 (stacked/fanned state)
// and animates to identity (flat grid) at progress = 1
const CARD_INITIAL = [
  { rotate: -18, tx: 30,  ty: 40,  scale: 0.82 }, // card 1
  { rotate: -8,  tx: 15,  ty: 20,  scale: 0.88 }, // card 2
  { rotate:  4,  tx: -10, ty: 10,  scale: 0.93 }, // card 3
  { rotate: -12, tx: -30, ty: -15, scale: 1.00 }, // card 4 (dark, on top)
];

function lerp(a, b, t) { return a + (b - a) * t; }

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const cardRefs  = useRef([]);
  const titleRef  = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    function onScroll() {
      const rect    = section.getBoundingClientRect();
      const total   = section.offsetHeight - window.innerHeight;
      // progress 0 → 1 as we scroll through the sticky section
      const scrolled = -rect.top;
      const p = Math.min(1, Math.max(0, scrolled / total));

      // Fade in title early (first 20 % of scroll)
      if (titleRef.current) {
        const tp = Math.min(1, p / 0.2);
        titleRef.current.style.opacity   = tp;
        titleRef.current.style.transform = `translateY(${lerp(30, 0, tp)}px)`;
      }

      // Cards fan into position between progress 0.15 → 1
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const init  = CARD_INITIAL[i];
        // stagger: each card starts animating slightly later
        const start = 0.1 + i * 0.06;
        const cp    = Math.min(1, Math.max(0, (p - start) / (1 - start)));

        const rotate = lerp(init.rotate, 0, cp);
        const tx     = lerp(init.tx, 0, cp);
        const ty     = lerp(init.ty, 0, cp);
        const scale  = lerp(init.scale, 1, cp);
        const opacity = lerp(0.3, 1, cp);

        card.style.transform = `translate(${tx}px, ${ty}px) rotate(${rotate}deg) scale(${scale})`;
        card.style.opacity   = opacity;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact-form');
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <div className="home-card-section" ref={sectionRef}>
      <div className="home-card-stickey">
        <div>
          <div className="w-layout-blockcontainer container w-container">
            <div
              className="section-title-wrap"
              ref={titleRef}
              style={{ opacity: 0, transform: 'translateY(30px)', transition: 'none' }}
            >
              <div className="align-center">
                <div className="subtitle">
                  <div className="subtitle-icon">
                    <img
                      src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68ada4d8c8e2e861698ff365_subtitle-star.svg"
                      loading="lazy"
                      alt="star"
                    />
                  </div>
                  <div>So einfach geht&apos;s</div>
                </div>
                <div className="inner-container-500">
                  <h2 className="section-title mg-0">
                    Ihr Weg zur perfekten Sauberkeit in nur 3 Schritten!
                  </h2>
                </div>
              </div>
            </div>
            <div className="mg-top-80">
              <div className="how-it-works-area" style={{ perspective: '1200px' }}>
                <div
                  className="how-it-works-card _1"
                  ref={(el) => (cardRefs.current[0] = el)}
                  style={{ opacity: 0.3, transform: `translate(30px, 40px) rotate(-18deg) scale(0.82)`, transition: 'none', transformOrigin: 'bottom center' }}
                >
                  <div className="how-it-works-icon-wrap">
                    <div>01</div>
                  </div>
                  <div>
                    <h3 className="how-it-works-title">Anfrage stellen</h3>
                    <div className="mg-top-10">
                      <p className="mg-0">
                        Kontaktieren Sie uns telefonisch, per E-Mail oder über unser
                        Kontaktformular – schnell, unkompliziert und kostenlos.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="how-it-works-card _2"
                  ref={(el) => (cardRefs.current[1] = el)}
                  style={{ opacity: 0.3, transform: `translate(15px, 20px) rotate(-8deg) scale(0.88)`, transition: 'none', transformOrigin: 'bottom center' }}
                >
                  <div className="how-it-works-icon-wrap">
                    <div>02</div>
                  </div>
                  <div>
                    <h3 className="how-it-works-title">Individuelles Angebot</h3>
                    <div className="mg-top-10">
                      <p className="mg-0">
                        Wir erstellen Ihnen ein maßgeschneidertes Angebot basierend auf Ihren
                        Bedürfnissen – transparent und fair kalkuliert.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="how-it-works-card _3"
                  ref={(el) => (cardRefs.current[2] = el)}
                  style={{ opacity: 0.3, transform: `translate(-10px, 10px) rotate(4deg) scale(0.93)`, transition: 'none', transformOrigin: 'bottom center' }}
                >
                  <div className="how-it-works-icon-wrap">
                    <div>03</div>
                  </div>
                  <div>
                    <h3 className="how-it-works-title">Perfekte Ausführung</h3>
                    <div className="mg-top-10">
                      <p className="mg-0">
                        Unser Profi-Team reinigt termingerecht, gründlich und mit höchster
                        Sorgfalt – Sie werden begeistert sein!
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="how-it-works-card _4"
                  ref={(el) => (cardRefs.current[3] = el)}
                  style={{ opacity: 0.3, transform: `translate(-30px, -15px) rotate(-12deg) scale(1)`, transition: 'none', transformOrigin: 'bottom center' }}
                >
                  <div className="how-it-works-icon-wrap">
                    <img
                      src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68f8c24fc7b56a76ac9689f3_star.svg"
                      loading="lazy"
                      alt="star"
                    />
                  </div>
                  <div>
                    <h3 className="how-it-works-title white">
                      Bereit für strahlende Sauberkeit? Kontaktieren Sie uns jetzt!
                    </h3>
                    <div className="mg-top-10">
                      <div>
                        <a
                          href="#contact-form"
                          onClick={scrollToContact}
                          className="primary-button w-inline-block"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
