import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

emailjs.init({ publicKey: 'JxvaKXQZMNtQpjs7R' });

export default function ContactForm() {
  const form = useRef();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Listen for global open event fired by any CTA button on the page
  useEffect(() => {
    const handler = () => { setOpen(true); setStatus(null); };
    document.addEventListener('gf:openContact', handler);
    return () => document.removeEventListener('gf:openContact', handler);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm('service_cizdhdn', 'template_qw4dbkc', form.current)
      .then(() => { setStatus('success'); form.current.reset(); })
      .catch((err) => { console.error(err); setStatus('error'); })
      .finally(() => setSending(false));
  };

  const closeModal = () => { setOpen(false); setStatus(null); };

  return (
    <>
      {/* Hidden anchor — preserves scroll-to from CTA buttons */}
      <div id="contact-form" style={{ position: 'absolute', visibility: 'hidden', pointerEvents: 'none', height: 0 }} />

      <style dangerouslySetInnerHTML={{ __html: `
        /* ── Floating Action Button ── */
        .gf-fab {
          position: fixed;
          bottom: 28px;
          right: 24px;
          z-index: 9000;
          display: flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: #fff;
          border: none;
          border-radius: 50px;
          padding: 14px 22px 14px 16px;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.02em;
          cursor: pointer;
          box-shadow: 0 6px 28px rgba(16,185,129,0.45), 0 2px 8px rgba(0,0,0,0.18);
          transition: transform 0.22s cubic-bezier(0.16,1,0.3,1), box-shadow 0.22s ease;
          outline: none;
          -webkit-tap-highlight-color: transparent;
        }
        .gf-fab:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 12px 40px rgba(16,185,129,0.55), 0 4px 12px rgba(0,0,0,0.2);
        }
        .gf-fab:active { transform: scale(0.97); }

        /* Pulse ring behind FAB */
        .gf-fab-ring {
          position: fixed;
          bottom: 20px;
          right: 16px;
          z-index: 8999;
          width: 76px;
          height: 76px;
          border-radius: 50%;
          background: rgba(16,185,129,0.22);
          animation: gf-fab-pulse 2.2s ease-out infinite;
          pointer-events: none;
        }
        @keyframes gf-fab-pulse {
          0%   { transform: scale(1);   opacity: 0.7; }
          70%  { transform: scale(1.9); opacity: 0; }
          100% { transform: scale(1.9); opacity: 0; }
        }

        /* ── Modal backdrop ── */
        .gf-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9100;
          background: rgba(8,14,26,0.72);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          animation: gf-backdrop-in 0.2s ease;
        }
        @keyframes gf-backdrop-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* ── Modal panel ── */
        .gf-modal-panel {
          width: 100%;
          max-width: 560px;
          max-height: 92svh;
          max-height: 92vh;
          overflow-y: auto;
          background: linear-gradient(160deg, #1a1f36 0%, #2d3142 100%);
          border-radius: 28px 28px 0 0;
          padding: 20px 24px 40px;
          position: relative;
          animation: gf-panel-up 0.35s cubic-bezier(0.16,1,0.3,1);
          box-shadow: 0 -8px 60px rgba(0,0,0,0.55);
          -webkit-overflow-scrolling: touch;
        }
        @keyframes gf-panel-up {
          from { transform: translateY(100%); opacity: 0.5; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @media (min-width: 640px) {
          .gf-modal-backdrop { align-items: center; padding: 24px; }
          .gf-modal-panel {
            border-radius: 24px;
            max-height: 88vh;
            padding: 36px 44px 44px;
          }
        }

        /* ── Drag handle ── */
        .gf-modal-handle {
          width: 40px; height: 4px;
          background: rgba(255,255,255,0.18);
          border-radius: 4px;
          margin: 0 auto 22px;
        }

        /* ── Close ── */
        .gf-modal-close {
          position: absolute;
          top: 20px; right: 20px;
          width: 36px; height: 36px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.75);
          font-size: 17px;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.18s;
          -webkit-tap-highlight-color: transparent;
        }
        .gf-modal-close:hover { background: rgba(255,255,255,0.2); }

        /* ── Title block ── */
        .gf-modal-subtitle {
          display: flex; align-items: center; gap: 8px;
          color: #10b981;
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          margin-bottom: 10px;
        }
        .gf-modal-dot { width: 6px; height: 6px; background: #10b981; border-radius: 50%; }
        .gf-modal-title {
          font-size: clamp(1.3rem, 5vw, 1.7rem);
          font-weight: 800; color: #fff;
          line-height: 1.2; margin: 0 0 24px;
        }

        /* ── Fields ── */
        .gf-modal-field {
          display: block;
          width: 100%; box-sizing: border-box;
          background: rgba(255,255,255,0.07);
          border: 1.5px solid rgba(255,255,255,0.14);
          border-radius: 16px;
          color: #fff;
          font-size: 16px;
          padding: 15px 18px;
          margin-bottom: 12px;
          outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          -webkit-appearance: none;
          font-family: inherit;
        }
        .gf-modal-field::placeholder { color: rgba(255,255,255,0.38); }
        .gf-modal-field:focus {
          border-color: #10b981;
          background: rgba(16,185,129,0.09);
          box-shadow: 0 0 0 3px rgba(16,185,129,0.18);
        }
        .gf-modal-field.textarea {
          min-height: 110px; resize: vertical; padding-top: 15px;
        }

        /* ── Submit ── */
        .gf-modal-submit {
          display: block; width: 100%; box-sizing: border-box;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: #fff; border: none; border-radius: 50px;
          font-size: 16px; font-weight: 700; letter-spacing: 0.03em;
          padding: 16px 20px; cursor: pointer; margin-top: 6px;
          box-shadow: 0 4px 20px rgba(16,185,129,0.35);
          transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
          -webkit-tap-highlight-color: transparent;
          font-family: inherit;
        }
        .gf-modal-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(16,185,129,0.5);
        }
        .gf-modal-submit:disabled { opacity: 0.6; cursor: not-allowed; }

        /* ── Or divider + call link ── */
        .gf-modal-or {
          display: flex; align-items: center; gap: 12px;
          margin: 20px 0;
          color: rgba(255,255,255,0.3); font-size: 13px;
        }
        .gf-modal-or::before, .gf-modal-or::after {
          content: ''; flex: 1; height: 1px; background: rgba(255,255,255,0.1);
        }
        .gf-modal-call {
          display: flex; align-items: center; justify-content: center; gap: 10px;
          width: 100%; box-sizing: border-box;
          background: rgba(255,255,255,0.07);
          border: 1.5px solid rgba(255,255,255,0.14);
          border-radius: 50px;
          color: #fff; font-size: 15px; font-weight: 600;
          padding: 13px 20px; text-decoration: none;
          transition: background 0.18s, border-color 0.18s;
          -webkit-tap-highlight-color: transparent;
        }
        .gf-modal-call:hover { background: rgba(255,255,255,0.13); border-color: rgba(255,255,255,0.28); }

        /* ── Success state ── */
        .gf-modal-success { text-align: center; padding: 24px 0 8px; }
        .gf-modal-success-icon {
          width: 64px; height: 64px;
          background: rgba(16,185,129,0.15);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 16px;
          font-size: 28px; color: #10b981;
        }
        .gf-modal-success h3 { color: #fff; font-size: 1.3rem; margin: 0 0 8px; }
        .gf-modal-success p { color: rgba(255,255,255,0.55); font-size: 14px; margin: 0; }
        .gf-modal-error { color: #f87171; font-size: 13px; margin-top: 10px; text-align: center; }
      ` }} />

      {/* Pulse ring */}
      <span className="gf-fab-ring" aria-hidden="true" />

      {/* FAB */}
      <button
        className="gf-fab"
        onClick={() => setOpen(true)}
        aria-label="Kostenlose Anfrage stellen"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2Z" fill="white"/>
        </svg>
        Anfragen
      </button>

      {/* Modal */}
      {open && (
        <div
          className="gf-modal-backdrop"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="gf-modal-panel" role="dialog" aria-modal="true" aria-label="Kontaktformular">
            <div className="gf-modal-handle" />
            <button className="gf-modal-close" onClick={closeModal} aria-label="Schließen">✕</button>

            {status === 'success' ? (
              <div className="gf-modal-success">
                <div className="gf-modal-success-icon">✓</div>
                <h3>Anfrage gesendet!</h3>
                <p>Wir melden uns so schnell wie möglich bei Ihnen. Danke!</p>
                <button
                  onClick={closeModal}
                  style={{ marginTop: '24px', background: 'transparent', border: '1.5px solid rgba(255,255,255,0.2)', borderRadius: '50px', color: '#fff', padding: '12px 32px', cursor: 'pointer', fontSize: '14px', fontFamily: 'inherit' }}
                >
                  Schließen
                </button>
              </div>
            ) : (
              <>
                <div className="gf-modal-subtitle">
                  <span className="gf-modal-dot" />
                  KOSTENLOS & UNVERBINDLICH
                </div>
                <h2 className="gf-modal-title">Holen Sie sich JETZT Ihr kostenloses Angebot!</h2>

                <form ref={form} onSubmit={handleSubmit}>
                  <input className="gf-modal-field" type="text" name="name" placeholder="Ihr Name" maxLength="256" required />
                  <input className="gf-modal-field" type="tel" name="telefon" placeholder="Telefonnummer" maxLength="256" required />
                  <textarea className="gf-modal-field textarea" name="message" placeholder="Schreiben Sie Ihre Nachricht hier..." maxLength="5000" required />
                  <input
                    type="submit"
                    className="gf-modal-submit"
                    value={sending ? 'Wird gesendet…' : 'KOSTENLOSE Anfrage absenden →'}
                    disabled={sending}
                  />
                  {status === 'error' && (
                    <p className="gf-modal-error">Fehler beim Senden. Bitte versuchen Sie es erneut.</p>
                  )}
                </form>

                <div className="gf-modal-or">oder direkt anrufen</div>
                <a href="tel:+491766167596" className="gf-modal-call">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2Z" fill="currentColor"/>
                  </svg>
                  (0176) 616 77596
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
