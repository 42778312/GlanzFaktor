import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact-form');
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section className="footer-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="content-wrap">
          {/* Newsletter CTA */}
          <div className="footer-cta-wrap">
            <div className="footer-cta-title-wrap">
              <h2 className="section-title white">
                Exklusive Reinigungstipps &amp; Sonderangebote direkt in Ihr Postfach!
              </h2>
            </div>
            <div className="footer-form-wrap w-form">
              {subscribed ? (
                <div className="success-message w-form-done" style={{ display: 'block' }}>
                  <div>Danke! Ihre Einsendung wurde erhalten!</div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="footer-form">
                  <input
                    className="footer-input-field w-input"
                    maxLength="256"
                    name="Email"
                    placeholder="Geben Sie Ihre E-Mail ein..."
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="submit"
                    className="footer-submit-button w-button"
                    value="Jetzt abonnieren"
                  />
                </form>
              )}
            </div>
          </div>

          <div className="footer-divider-line"></div>

          {/* Footer content */}
          <div className="footer-area">
            <div className="footer-logo-area">
              <a href="/" className="footer-logo-wrap w-inline-block">
                <img
                  src="/Assest/67e50a358346fffe93936f4d_4d0f90ae8a351a80fa3f20bb5cb6b749_nav-logo.png"
                  loading="lazy"
                  alt="GlanzFaktor Logo"
                />
              </a>
              <p className="footer-text">
                GlanzFaktor Ihr Partner für professionelle Gebäudereinigung am Bodensee.
                Nachhaltig, zuverlässig und mit Satisfaction-Garantie!
              </p>
              <div className="footer-logo-line"></div>
              <div>
                <h3 className="footer-widget-title">Arbeitszeiten</h3>
                <div className="working-hours-wrap">
                  <div className="working-hours-icon">
                    <img
                      src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68ef77f47551f8ae86e6dd49_clock-icon.svg"
                      loading="lazy"
                      alt="Clock"
                    />
                  </div>
                  <div>Montag bis Samstag: 9 – 19 Uhr, Sonntag geschlossen</div>
                </div>
              </div>
            </div>

            <div className="w-layout-grid footer-grid">
              <div>
                <h3 className="footer-widget-title">Seiten</h3>
                <div>
                  <a href="#" className="footer-link">Über uns</a>
                  <a href="#" className="footer-link">Leistungen</a>
                  <a href="#" className="footer-link">Preise</a>
                  <a href="#" className="footer-link">Blog</a>
                  <a href="#" className="footer-link">Portfolio</a>
                  <a href="#contact-form" onClick={scrollToContact} className="footer-link">Kontakt</a>
                </div>
              </div>
              <div>
                <h3 className="footer-widget-title">Dienstseiten</h3>
                <div>
                  <a href="#" className="footer-link">Styleguide</a>
                  <a href="#" className="footer-link">Lizenzen</a>
                  <a href="#" className="footer-link">Änderungsprotokoll</a>
                  <a href="#" className="footer-link">Geschützt</a>
                  <a href="#" className="footer-link">Nicht gefunden</a>
                </div>
              </div>
              <div>
                <h3 className="footer-widget-title">Kontaktlinks</h3>
                <div>
                  <div className="footer-contact-link-wrap">
                    <div>
                      <a href="tel:+491766167596" className="footer-contact-link">
                        (0176) 616 77596
                      </a>
                    </div>
                  </div>
                </div>
                <div className="footer-contact-link-wrap">
                  <div>
                    <a href="mailto:info@glanzfaktor-bodensee.de" className="footer-contact-link">
                      info@glanzfaktor-bodensee.de
                    </a>
                  </div>
                </div>
                <div className="footer-contact-link-wrap">
                  <div className="footer-contact-icon-wrap">
                    <img
                      src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68b52c9de236075465ecc070_location-icon.svg"
                      loading="lazy"
                      alt="location"
                    />
                  </div>
                  <div>
                    <div>Konstanz, Bodenseeregion, Deutschland</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright-wrap">
            <p className="copyright-text">Copyright © GlanzFaktor Bodensee 2026</p>
            <p className="copyright-text">
              Designed by{' '}
              <a href="https://www.victorflow.com/" target="_blank" rel="noreferrer" className="designer-link">
                Victorflow
              </a>{' '}
              | Powered by Next.js
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bg-wrap">
        <img
          src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68b528b228e284c40ae04d85_footer-bg-img-p-800.jpg"
          loading="lazy"
          alt="Cleaning background"
          className="footer-bg-image"
        />
      </div>
    </section>
  );
}
