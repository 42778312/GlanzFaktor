const starSrc =
  'https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68b2db94db293a604e17d753_d1875dc52c96cb2db95ae96f2db83f05_marquee-star.svg';

const marqueeItems = ['KOSTENLOS kontaktieren', 'Professionelle Reinigung', 'KOSTENLOS kontaktieren', 'Best Service Garantie', 'KOSTENLOS kontaktieren', 'Polieren', 'KOSTENLOS kontaktieren', 'Unverbindliches Angebot'];

export default function MarqueeSection() {
  return (
    <section className="marquee-section">
      <div className="marquee-track">
        <div className="marquee-inner">
          {[...marqueeItems, ...marqueeItems].map((word, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '20px', marginRight: '20px' }}>
              <span className="marquee-text" style={{ display: 'inline-block', margin: 0 }}>{word}</span>
              <span className="marquee-star-wrap" style={{ display: 'inline-block' }}>
                <img src={starSrc} loading="lazy" alt="Dark star" />
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
