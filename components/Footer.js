export default function Footer() {
  return (
    <section className="footer-section" style={{ padding: '0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0.6rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.75rem', color: '#aaa' }}>
        <span>© GlanzFaktor Bodensee 2026</span>
        <span style={{ opacity: 0.4 }}>|</span>
        <a href="mailto:info@glanzfaktor-bodensee.de" className="footer-contact-link" style={{ fontSize: '0.75rem' }}>info@glanzfaktor-bodensee.de</a>
        <span style={{ opacity: 0.4 }}>|</span>
        <a href="tel:+491766167596" className="footer-contact-link" style={{ fontSize: '0.75rem' }}>+49 176 616 77596</a>
        <span style={{ opacity: 0.4 }}>|</span>
        <span>Konstanz, Bodenseeregion, Deutschland</span>
      </div>
    </section>
  );
}
