export default function Hero() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact-form');
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section id="home" className="home-banner-section">
      <div className="w-layout-blockcontainer container-large w-container">
        <div className="home-banner-area">
          <div className="home-banner-content-area">
            <div>
              <h1 className="banner-title mg-0">
                GlanzFaktor Professionelle Gebäudereinigung am Bodensee
              </h1>
              <div className="home-banner-text-wrap">
                <p>
                  Erleben Sie kristallklare Sauberkeit mit den Gebäudereinigungsprofis aus Konstanz!
                  Von privaten Wohnräumen bis zu gewerblichen Immobilien wir bringen Ihren Raum
                  zum Strahlen. Nachhaltig, zuverlässig und mit höchstem Qualitätsanspruch.
                </p>
              </div>
              <div className="home-banner-button-wrap">
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

            <div>
              <div className="home-banner-logo-area">
                <div className="home-banner-rating-area">
                  <div>
                    <p className="mg-0">BEWERTET AUF</p>
                    <div>
                      <img
                        src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68ff0608c35533528c16a2eb_rating-logo-1.svg"
                        loading="lazy"
                        alt="Client Brand"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="home-banner-rating-wrap">
                      {[1,2,3,4].map((i) => (
                        <div key={i}>
                          <img
                            src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68ff0659a8d1bf39daa815a4_orange-star.svg"
                            loading="lazy"
                            alt="star"
                          />
                        </div>
                      ))}
                      <div>
                        <img
                          src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68fb43cc5af6303e657c9722_grey-star.svg"
                          loading="lazy"
                          alt="grey-star"
                        />
                      </div>
                    </div>
                    <p className="mg-0">4.5 BEWERTUNG</p>
                  </div>
                </div>
                <div className="home-banner-logo-divider"></div>
                <div className="home-banner-rating-area">
                  <div>
                    <div>
                      <img
                        src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68ff09e19818a63543929c4e_rating-logo-2.svg"
                        loading="lazy"
                        alt="Client Brand"
                      />
                    </div>
                    <div className="home-banner-rating">
                      <p className="mg-0">5.0 BEWERTUNG</p>
                      <div>
                        <img
                          src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68ff0a1442b1a80c3fae3045_rating.svg"
                          loading="lazy"
                          alt="Star"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="home-banner-image-wrap">
            <img
              src="/Assest/67ed0cb918a16dfcec7cea30/bodensee.jpeg"
              loading="eager"
              alt="GlanzFaktor Professional Cleaning Team at Lake Constance"
              className="home-banner-image"
              style={{ objectFit: 'cover' }}
            />
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
