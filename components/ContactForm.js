import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    Phone: '',
    Service: '',
    'Date-select': '',
    'Total-area-sqft': '',
    Message: '',
  });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Build a mailto link or send via a serverless endpoint
      // For now, open a mailto link with the form data
      const subject = encodeURIComponent('Reinigungsanfrage – GlanzFaktor');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nTelefon: ${formData.Phone}\nLeistung: ${formData.Service}\nDatum: ${formData['Date-select']}\nFläche: ${formData['Total-area-sqft']} qm\nNachricht: ${formData.Message}`
      );
      window.location.href = `mailto:info@glanzfaktor-bodensee.de?subject=${subject}&body=${body}`;
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div id="contact-form" className="portfolio-spacer">
      <section className="section-regular bottom-space">
        <div className="w-layout-blockcontainer container-large w-container">
          <div className="w-layout-grid quote-grid">
            <div className="quote-image-wrap">
              <img
                src="/Assest/67ed0cb918a16dfcec7cea30/contact-us.jpeg"
                loading="lazy"
                alt="GlanzFaktor Contact - Professional Cleaning Services at Bodensee"
                className="quote-image"
                style={{ objectFit: 'cover' }}
              />
              <div className="quote-image-overlay"></div>
            </div>

            <div className="quote-form-wrap w-form">
              {status === 'success' ? (
                <div className="success-message w-form-done" style={{ display: 'block' }}>
                  <div>Danke! Ihre Einsendung wurde erhalten!</div>
                </div>
              ) : (
                <form id="Quote-Form" onSubmit={handleSubmit} className="quote-form">
                  <div className="w-layout-vflex quote-form-title-wrap">
                    <div className="subtitle white">
                      <div className="subtitle-icon">
                        <img
                          src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68ada4d8c8e2e861698ff365_subtitle-star.svg"
                          loading="lazy"
                          alt="star"
                        />
                      </div>
                      <div>Einen Termin buchen</div>
                    </div>
                    <h2 className="section-title white-mg-0">Jetzt unverbindlich anfragen!</h2>
                  </div>

                  <div className="quote-form-area">
                    <div className="quote-input-area">
                      <div className="quote-input-wrap">
                        <input
                          className="quote-input-field w-input"
                          maxLength="256"
                          name="name"
                          placeholder="Ihr Name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="quote-input-wrap">
                        <input
                          className="quote-input-field w-input"
                          maxLength="256"
                          name="Phone"
                          placeholder="Telefonnummer"
                          type="tel"
                          required
                          value={formData.Phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="quote-input-area">
                      <div className="quote-input-wrap">
                        <select
                          name="Service"
                          className="quote-input-field w-select"
                          value={formData.Service}
                          onChange={handleChange}
                        >
                          <option value="">Wählen Sie eine Leistung</option>
                          <option value="Home Cleaning">Hausreinigung</option>
                          <option value="Kitchen Cleaning">Küchenreinigung</option>
                          <option value="Toilet Sanitization">Toilettendesinfektion</option>
                        </select>
                      </div>
                      <div className="quote-input-wrap">
                        <select
                          name="Date-select"
                          className="quote-input-field w-select"
                          value={formData['Date-select']}
                          onChange={handleChange}
                        >
                          <option value="">Wählen Sie ein Datum</option>
                          <option value="1 Week Later">1 Woche später</option>
                          <option value="1-2 Week Later">1-2 Wochen später</option>
                          <option value="2 Week Later">2 Wochen später</option>
                        </select>
                      </div>
                    </div>

                    <div className="quote-input-area">
                      <div className="quote-input-wrap">
                        <input
                          className="quote-input-field w-input"
                          maxLength="256"
                          name="Total-area-sqft"
                          placeholder="Gesamtfläche (qm)"
                          type="text"
                          required
                          value={formData['Total-area-sqft']}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="quote-input-area">
                      <div className="quote-input-wrap">
                        <textarea
                          placeholder="Schreiben Sie Ihre Nachricht hier..."
                          maxLength="5000"
                          name="Message"
                          className="quote-input-field message w-input"
                          value={formData.Message}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <input
                    type="submit"
                    className="primary-button w-button"
                    value="Jetzt kontaktieren"
                  />

                  {status === 'error' && (
                    <div className="error-message w-form-fail" style={{ display: 'block' }}>
                      <div>Hoppla! Beim Senden des Formulars ist ein Fehler aufgetreten.</div>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
