import { useEffect, useRef } from 'react';

const TITLE_WORDS = 'GlanzFaktor Professionelle Gebäudereinigung am Bodensee'.split(' ');

export default function Hero() {
  const sectionRef = useRef(null);

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact-form');
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  // Trigger entrance animations after first paint
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!sectionRef.current) return;
      sectionRef.current
        .querySelectorAll('.hero-word, .hero-sub-reveal, .hero-img-reveal')
        .forEach((el) => el.classList.add('wrev'));
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="home-banner-section" ref={sectionRef}>

      {/* ── Full-bleed background image ── */}
      <div className="home-banner-image-wrap hero-img-reveal">
        <img
          src="/Assest/67ed0cb918a16dfcec7cea30/bodensee.jpeg"
          loading="eager"
          alt="GlanzFaktor Professional Cleaning Team at Lake Constance"
          className="home-banner-image"
        />
        <div className="hero-bg-overlay" />
      </div>

      {/* ── Content layer ── */}
      <div className="w-layout-blockcontainer container-large w-container">
        <div className="home-banner-area">

          {/* Left: text content */}
          <div className="home-banner-content-area">
            <div>
              {/* Word-by-word heading */}
              <h1 className="banner-title mg-0">
                {TITLE_WORDS.map((word, i) => (
                  <span
                    key={i}
                    className="hero-word"
                    style={{ '--d': `${i * 0.09}s` }}
                  >
                    {word}{' '}
                  </span>
                ))}
              </h1>

              <div className="home-banner-text-wrap hero-sub-reveal" style={{ '--d': '0.55s' }}>
                <p>
                  Erleben Sie kristallklare Sauberkeit mit den Gebäudereinigungsprofis aus Konstanz!
                  Von privaten Wohnräumen bis zu gewerblichen Immobilien – wir bringen Ihren Raum
                  zum Strahlen. Nachhaltig, zuverlässig und mit höchstem Qualitätsanspruch.
                </p>
              </div>

              <div className="home-banner-button-wrap hero-sub-reveal" style={{ '--d': '0.72s' }}>
                <a
                  href="#contact-form"
                  onClick={scrollToContact}
                  className="primary-button w-inline-block"
                >
                  <div>Kontakt aufnehmen</div>
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

            {/* Rating badges row */}
            <div className="hero-badges-row hero-sub-reveal" style={{ '--d': '0.88s' }}>

              {/* Google */}
              <div className="hero-badge-pill">
                <svg className="hero-badge-icon" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
                <div className="hero-badge-info">
                  <div className="hero-badge-label">Google Bewertungen</div>
                  <div className="hero-badge-stars">
                    {[1,2,3,4,5].map((i) => (
                      <svg key={i} viewBox="0 0 20 20" fill="#FBBC05" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78z"/>
                      </svg>
                    ))}
                    <span className="hero-badge-score">5,0</span>
                  </div>
                </div>
              </div>

              {/* Kununu */}
              <div className="hero-badge-pill">
                <div className="hero-badge-icon hero-kununu-icon">ku</div>
                <div className="hero-badge-info">
                  <div className="hero-badge-label">Kununu Bewertungen</div>
                  <div className="hero-badge-stars">
                    {[1,2,3,4,5].map((i) => (
                      <svg key={i} viewBox="0 0 20 20" fill="#97C13C" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78z"/>
                      </svg>
                    ))}
                    <span className="hero-badge-score">5,0</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: floating cards + tags */}
          <div className="hero-cards-col">
            <div className="home-banner-card-area">
              <div className="home-banner-card">
                <div className="home-banner-card-image-area">
                  <div className="home-banner-card-image first">
                    <img
                      src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/6822fb99bd9e553518d85efc_9f16ab2c9995fda549e7780c11fb7045_testimonial-image-1.jpg"
                      loading="lazy"
                      alt="Customer 1"
                    />
                  </div>
                  <div className="home-banner-card-image">
                    <img
                      src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/682598055b28648b7f78b159_43c7eebc9fbad1361e04da4d0261f639_testimonial-image-3.jpg"
                      loading="lazy"
                      alt="Customer 2"
                    />
                  </div>
                  <div className="home-banner-card-image">
                    <img
                      src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/683d4e48a4ca8cd615e9f3b0_6b6317df7e28cfb29e19862ab8d102e4_testimonial-image-4.jpg"
                      loading="lazy"
                      alt="Customer 3"
                    />
                  </div>
                </div>
                <p className="banner-card-text">
                  <span className="text-dark"><strong>500+</strong></span> Zufriedene Kunden in der
                  Bodenseeregion – Ihre Zufriedenheit ist unser Antrieb!
                </p>
              </div>
              <div className="home-banner-card">
                <div className="home-banner-card-image-area">
                  <h2 className="home-banner-card-number">96%</h2>
                </div>
                <p className="banner-card-text">98% Weiterempfehlungsrate – Perfektion in jeder Ecke!</p>
              </div>
            </div>
            <div className="home-banner-tag-wrap">
              <div className="home-banner-tag">
                <div>
                  <img
                    src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68f9d2e1e07947d3474495b6_banner-tag-icon-1.svg"
                    loading="lazy"
                    alt="Professional badge"
                  />
                </div>
                <div>Zertifiziert</div>
              </div>
              <div className="home-banner-tag">
                <div>
                  <img
                    src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68f9d27ff5b00d0244c9c5da_banner-tag-icon-2.svg"
                    loading="lazy"
                    alt="friend badge"
                  />
                </div>
                <div>Kompetent</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
