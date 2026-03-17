import { useState, useRef } from 'react';
import useScrollReveal from './useScrollReveal';

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

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <line x1="8" y1="2" x2="8" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="gf-faq-section section-regular" ref={sectionRef}>
      <div className="w-layout-blockcontainer container w-container">

        {/* Header */}
        <div className="section-title-wrap">
          <div className="align-center reveal reveal-fade">
            <div className="subtitle">
              <div className="subtitle-icon">
                <img
                  src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68ada4d8c8e2e861698ff365_subtitle-star.svg"
                  loading="lazy" alt="star"
                />
              </div>
              <div>FAQ</div>
            </div>
            <div className="inner-container-500">
              <h2 className="section-title mg-0">Haben Sie Fragen? Wir haben die Antworten!</h2>
            </div>
          </div>
        </div>

        {/* Accordion */}
        <div className="gf-faq-area">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="gf-faq-item reveal"
              style={{ '--d': `${i * 0.1}s` }}
            >
              <div
                className={`gf-faq-q${openIndex === i ? ' open' : ''}`}
                onClick={() => toggle(i)}
                role="button"
                aria-expanded={openIndex === i}
              >
                <span>{faq.question}</span>
                <span className="gf-faq-icon">
                  <PlusIcon />
                </span>
              </div>
              <div className={`gf-faq-body${openIndex === i ? ' open' : ''}`}>
                <p className="gf-faq-answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
