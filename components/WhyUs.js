import { useRef } from 'react';
import useScrollReveal from './useScrollReveal';

const expertCards = [
  {
    icon: 'https://cdn.prod.website-files.com/67e50220a4446ac664873e26/6821c1522083736abab99630_9a2fc1f369b599ca6024417779f8cb0d_expert-icon-1.svg',
    alt: 'Spray Bottle',
    title: '★ Premium Tiefenreinigung mit Best-Garantie',
    text: 'Mit modernster Reinigungstechnologie und jahrelanger Expertise entfernen wir selbst hartnäckigste Verschmutzungen – für ein gesundes und hygienisches Raumklima. KOSTENLOSE Nachbearbeitung, wenn Sie nicht 100% zufrieden sind!',
  },
  {
    icon: 'https://cdn.prod.website-files.com/67e50220a4446ac664873e26/6821c44b9a7889acc6ab43f8_2542529454b91f55bedb49f2fb760f8a_expert-icon-2.svg',
    alt: 'Flower',
    title: 'Ökologisch & Sicher',
    text: 'Wir setzen ausschließlich auf umweltzertifizierte Reinigungsmittel – für maximale Sicherheit von Mensch, Tier und Natur in der Bodenseeregion.',
  },
  {
    icon: 'https://cdn.prod.website-files.com/67e50220a4446ac664873e26/6821c4549178f92896224fcf_608355c0afe697f2f94c547f81660f4f_expert-icon-3.svg',
    alt: 'Clock',
    title: 'Blitzschnell & Präzise',
    text: 'Unser hochqualifiziertes Team arbeitet effizient und gründlich – Sie erhalten perfekte Ergebnisse in kürzester Zeit, ohne Kompromisse bei der Qualität.',
  },
  {
    icon: 'https://cdn.prod.website-files.com/67e50220a4446ac664873e26/6821c45db572661a0c79f76a_ad2a8554a1de10fcd249dee6f7d174f1_expert-icon-4.svg',
    alt: 'Offering',
    title: '★ Faire, transparente Preise — KOSTENLOS Angebot',
    text: 'Premium-Qualität zu fairen Konditionen – KEINE versteckten Kosten! Erhalten Sie jetzt ein KOSTENLOSES, unverbindliches Angebot. Nur erstklassiger Service, der sich für Sie auszahlt!',
  },
];

export default function WhyUs() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact-form');
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section id="why-us" className="section-regular" ref={sectionRef}>
      <div className="w-layout-blockcontainer container w-container">
        <div className="w-layout-grid expert-grid">

          {/* Left column — slides in from left */}
          <div className="w-layout-vflex reveal reveal-left">
            <div className="section-title-wrap">
              <div className="subtitle align-left">
                <div className="subtitle-icon">
                  <img
                    src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68ada4d8c8e2e861698ff365_subtitle-star.svg"
                    loading="lazy" alt="star"
                  />
                </div>
                <div>DARUM GLANZFAKTOR</div>
              </div>
              <div className="max-width-800">
                <h2 className="section-title mg-0">
                  Warum über 50 Kunden am Bodensee uns vertrauen — und warum SIE es auch sollten
                </h2>
                <p style={{ marginTop: '20px', fontSize: '18px', lineHeight: '1.7', color: '#555' }}>
                  Bei GlanzFaktor erhalten Sie mehr als nur eine Reinigung – Sie bekommen einen
                  zuverlässigen Partner, der Ihre Immobilie mit Leidenschaft und höchster
                  Professionalität behandelt. <strong>KOSTENLOSE Erstberatung, kostenlose Besichtigung</strong> — maßgeschneiderte Lösungen, modernste
                  Ausrüstung und ein hochqualifiziertes Team aus der Region garantieren Ihnen kristallklare
                  Sauberkeit, die begeistert!
                </p>
              </div>
              <div className="w-layout-vflex mg-top-30">
                <a
                  href="#contact-form"
                  onClick={scrollToContact}
                  className="secondary-button w-inline-block"
                >
                  <div>KOSTENLOS kontaktieren!</div>
                  <div className="button-icon">
                    <img
                      src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/67e50f402a56ac86b3ff7be6_arrow.svg"
                      loading="lazy" alt="arrow"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right: cards stagger from right */}
          <div className="expert-card-wrap">
            {expertCards.map((card, i) => (
              <div key={i} className="expert-card reveal reveal-right" style={{ '--d': `${i * 0.13}s` }}>
                <div className="expert-card-icon-wrap">
                  <img src={card.icon} loading="lazy" alt={card.alt} className="expert-icon" />
                </div>
                <h3 className="expert-card-title">{card.title}</h3>
                <p className="expert-card-text">{card.text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
