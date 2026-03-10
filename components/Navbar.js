import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <div
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      role="banner"
      className="navbar w-nav"
    >
      <div className="nav-container w-container">
        <div className="nav-area">
          <a href="/" className="nav-logo-wrap w-nav-brand">
            <img
              style={{ maxHeight: '90px', width: 'auto', objectFit: 'contain' }}
              src="/Assest/log.png"
              loading="lazy"
              alt="GlanzFaktor Logo"
            />
          </a>

          <nav
            role="navigation"
            className={`nav-menu w-nav-menu${menuOpen ? ' open' : ''}`}
          >
            <div>
              <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="nav-link w-nav-link">
                Startseite
              </a>
              <a href="#portfolio" onClick={(e) => scrollTo(e, '#portfolio')} className="nav-link w-nav-link">
                Portfolio
              </a>
              <a href="#why-us" onClick={(e) => scrollTo(e, '#why-us')} className="nav-link w-nav-link">
                Warum GlanzFaktor
              </a>
              <a href="#contact-form" onClick={(e) => scrollTo(e, '#contact-form')} className="nav-link w-nav-link">
                Kontakt
              </a>
            </div>
            <div className="nav-button-wrap">
              <a href="tel:+491766167596" className="nav-contact-link w-inline-block">
                <div className="nav-contact-icon">
                  <img
                    src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/67e50e8e67a49a6ede574849_phone-icon.svg"
                    loading="lazy"
                    alt="phone"
                  />
                </div>
                <div>(0176) 616 77596</div>
              </a>
              <div className="nav-button-line"></div>
              <a
                href="#contact-form"
                onClick={(e) => scrollTo(e, '#contact-form')}
                className="secondary-button w-inline-block"
              >
                <div>Termin</div>
                <div className="button-icon">
                  <img
                    src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/67e50f402a56ac86b3ff7be6_arrow.svg"
                    loading="lazy"
                    alt="arrow"
                  />
                </div>
              </a>
            </div>
          </nav>

          <div
            className="menu-button w-nav-button"
            onClick={() => setMenuOpen(!menuOpen)}
            role="button"
            aria-label="Toggle menu"
          >
            <div className="w-icon-nav-menu"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
