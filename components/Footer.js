export default function Footer() {
  return (
    <section className="footer-section" style={{ padding: '0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1.5rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.8rem' }}>
          <strong>🌟 KOSTENLOS kontaktieren für professionelle Gebäudereinigung am Bodensee! Wir sind bereit zu helfen!</strong>
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.75rem', color: '#aaa' }}>
          <span>© GlanzFaktor Bodensee 2026</span>
          <span style={{ opacity: 0.4 }}>|</span>
          <a href="mailto:info@glanzfaktor-bodensee.de" className="footer-contact-link" style={{ fontSize: '0.75rem' }}>info@glanzfaktor-bodensee.de</a>
          <span style={{ opacity: 0.4 }}>|</span>
          <a href="tel:+491766167596" className="footer-contact-link" style={{ fontSize: '0.75rem' }}>+49 176 616 77596 (Kostenlos anrufen)</a>
          <span style={{ opacity: 0.4 }}>|</span>
          <span>Konstanz, Bodenseeregion, Deutschland</span>
        </div>
      </div>
    </section>
  );
}
