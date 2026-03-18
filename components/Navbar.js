import { useState, useEffect } from 'react';

const NAV_LINKS = [
  ['#how-it-works', 'So geht\'s'],
  ['#services',     'Leistungen'],
  ['#why-us',       'Warum GlanzFaktor'],
  ['#faq',          'FAQ'],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <div
        role="banner"
        className={`navbar w-nav${scrolled ? ' nav-scrolled' : ''}`}
      >
        <div className="nav-container w-container">
          <div className="nav-area">
            <a href="/" className="nav-logo-wrap w-nav-brand">
              <img
                style={{ maxHeight: '130px', width: 'auto', objectFit: 'contain' }}
                src="/Assest/log.png"
                loading="lazy"
                alt="GlanzFaktor Logo"
              />
            </a>

            {/* Desktop nav */}
            <nav role="navigation" className="nav-menu w-nav-menu">
              <div>
                {NAV_LINKS.map(([id, label]) => (
                  <a key={id} href={id} onClick={(e) => scrollTo(e, id)} className="nav-link w-nav-link">
                    {label}
                  </a>
                ))}
              </div>
              <div className="nav-button-wrap">
                <a href="tel:+491766167596" className="nav-contact-link w-inline-block">
                  <div className="nav-contact-icon">
                    <img
                      src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/67e50e8e67a49a6ede574849_phone-icon.svg"
                      loading="lazy" alt="phone"
                    />
                  </div>
                  <div>(0176) 616 77596</div>
                </a>
                <div className="nav-button-line" />
                <a
                  href="#contact-form"
                  onClick={(e) => { e.preventDefault(); document.dispatchEvent(new CustomEvent('gf:openContact')); }}
                  className="secondary-button w-inline-block"
                >
                  <div>KOSTENLOS anfragen</div>
                  <div className="button-icon">
                    <img
                      src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/67e50f402a56ac86b3ff7be6_arrow.svg"
                      loading="lazy" alt="arrow"
                    />
                  </div>
                </a>
              </div>
            </nav>

            {/* Animated hamburger */}
            <button
              className={`gf-hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menü öffnen"
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-down menu — outside sticky navbar flow */}
      <div className={`gf-mobile-nav${menuOpen ? ' open' : ''}`}>
        <div className="gf-mobile-nav-inner">
          {NAV_LINKS.map(([id, label]) => (
            <a key={id} href={id} onClick={(e) => { scrollTo(e, id); setMenuOpen(false); }} className="gf-mobile-link">
              {label}
            </a>
          ))}
          <a href="tel:+491766167596" className="gf-mobile-link" style={{ fontWeight: 600 }}>
            📞 (0176) 616 77596
          </a>
          <a
            href="#contact-form"
            onClick={(e) => { e.preventDefault(); setMenuOpen(false); document.dispatchEvent(new CustomEvent('gf:openContact')); }}
            style={{ display: 'block', background: '#2d3142', color: '#fff', borderRadius: '8px', textAlign: 'center', padding: '14px 16px', fontWeight: 700, marginTop: '8px', textDecoration: 'none' }}
          >
            KOSTENLOS anfragen
          </a>
        </div>
      </div>
    </>
  );
}
