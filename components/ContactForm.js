import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

emailjs.init({
  publicKey: 'JxvaKXQZMNtQpjs7R',
});

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm('service_cizdhdn', 'template_qw4dbkc', form.current)
      .then(
        () => {
          setStatus('success');
          form.current.reset();
        },
        (error) => {
          console.error('EmailJS error:', error.text);
          setStatus('error');
        }
      )
      .finally(() => setSending(false));
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
                <form id="Quote-Form" ref={form} onSubmit={handleSubmit} className="quote-form">
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
                          required
                        />
                      </div>
                    </div>

                    <div className="quote-input-area">
                      <div className="quote-input-wrap">
                        <input
                          className="quote-input-field w-input"
                          maxLength="256"
                          name="telefon"
                          placeholder="Telefonnummer"
                          type="tel"
                          required
                        />
                      </div>
                    </div>

                    <div className="quote-input-area">
                      <div className="quote-input-wrap">
                        <textarea
                          placeholder="Schreiben Sie Ihre Nachricht hier..."
                          maxLength="5000"
                          name="message"
                          required
                          className="quote-input-field message w-input"
                        />
                      </div>
                    </div>
                  </div>

                  <input
                    type="submit"
                    className="primary-button w-button"
                    value={sending ? 'Wird gesendet...' : 'Jetzt kontaktieren'}
                    disabled={sending}
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
