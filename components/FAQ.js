import { useState } from 'react';

const faqs = [
  {
    question: 'Was macht GlanzFaktor zur ersten Wahl am Bodensee?',
    answer:
      'Wir kombinieren jahrelange Erfahrung mit modernster Reinigungstechnologie und ökologischen Produkten. Unser zertifiziertes Team garantiert höchste Qualität bei jedem Auftrag – von der Privatwohnung bis zum Gewerbeobjekt in Konstanz und Umgebung.',
  },
  {
    question: 'Warum sind Ihre Reinigungsprodukte besonders?',
    answer:
      'Wir verwenden ausschließlich umweltzertifizierte und biologisch abbaubare Reinigungsmittel – perfekt für die sensible Bodenseeregion. Sie sind zu 100% sicher für Kinder, Haustiere und Allergiker und dennoch hochwirksam gegen hartnäckige Verschmutzungen.',
  },
  {
    question: 'Wie schnell kann ich einen Termin bekommen?',
    answer:
      'In der Regel können wir Ihnen innerhalb von 24-48 Stunden einen Termin anbieten! Kontaktieren Sie uns telefonisch, per WhatsApp oder über unser Kontaktformular – wir finden gemeinsam den perfekten Zeitpunkt für Ihre Reinigung.',
  },
  {
    question: 'Bieten Sie eine Zufriedenheitsgarantie?',
    answer:
      'Absolut! Wir stehen zu 100% hinter unserer Arbeit. Sollten Sie mit einem Ergebnis nicht vollständig zufrieden sein, kommen wir kostenlos zurück und bessern nach – bis Sie begeistert sind. Das ist unser GlanzFaktor-Versprechen!',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="section-regular">
      <div className="w-layout-blockcontainer container w-container">
        <div>
          <div className="section-title-wrap">
            <div className="align-center">
              <div className="subtitle">
                <div className="subtitle-icon">
                  <img
                    src="/Assest/67e50220a4446ac664873e26/68ada4d8c8e2e861698ff365_subtitle-star.svg"
                    loading="lazy"
                    alt="star"
                  />
                </div>
                <div>FAQ</div>
              </div>
              <div className="inner-container-500">
                <h2 className="section-title mg-0">Haben Sie Fragen? Wir haben die Antworten!</h2>
              </div>
            </div>
          </div>

          <div className="faq-area">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-wrap w-dropdown${openIndex === i ? ' open' : ''}`}
              >
                <div
                  className="faq-question-wrap w-dropdown-toggle"
                  onClick={() => toggle(i)}
                  role="button"
                  aria-expanded={openIndex === i}
                >
                  <div>{faq.question}</div>
                  <div className="faq-icon">
                    <div className="faq-vertical-line"></div>
                    <div className="faq-horizontal-line"></div>
                  </div>
                </div>
                <nav className={`faq-answer-wrap w-dropdown-list${openIndex === i ? ' open' : ''}`}>
                  <div className="faq-answer-area">
                    <p className="faq-answer">{faq.answer}</p>
                  </div>
                </nav>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
