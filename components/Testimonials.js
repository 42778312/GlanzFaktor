import { useState, useEffect, useRef } from 'react';
import useScrollReveal from './useScrollReveal';

const slides = [
  {
    image: 'https://cdn.prod.website-files.com/67e50220a4446ac664873e26/683d4e48a4ca8cd615e9f3b0_6b6317df7e28cfb29e19862ab8d102e4_testimonial-image-4.jpg',
    alt: 'Sarah Johnson',
    text: '"Der Reinigungsservice war fantastisch! Sie haben mein Zuhause in einen makellosen Zustand gebracht. Vom Moment ihrer Ankunft an war das Team professionell."',
    name: 'Sarah Johnson',
    role: 'Hausbesitzer',
  },
  {
    image: 'https://cdn.prod.website-files.com/67e50220a4446ac664873e26/682597fb40a6776a7f76182a_1c68dd6dc669f0c56d0fe91f59fddbba_testimonial-image-2.jpg',
    alt: 'John Matthews',
    text: '"Ihre Liebe zum Detail und ihre Professionalität stellen sicher, dass jeder Raum makellos und einladend ist – was einen großartigen Eindruck bei potenziellen Käufern hinterlässt."',
    name: 'John Matthews',
    role: 'Immobilienmakler',
  },
  {
    image: 'https://cdn.prod.website-files.com/67e50220a4446ac664873e26/6822fb99bd9e553518d85efc_9f16ab2c9995fda549e7780c11fb7045_testimonial-image-1.jpg',
    alt: 'Julia Schneider',
    text: '"Unser Büro in Radolfzell wurde von GlanzFaktor komplett gereinigt – vom Teppich bis zu den Fenstern. Unfassbar gründlich und mit umweltfreundlichen Produkten. Wir buchen regelmäßig!"',
    name: 'Julia Schneider',
    role: 'Geschäftsführerin IT-Firma',
  },
  {
    image: 'https://cdn.prod.website-files.com/67e50220a4446ac664873e26/682598055b28648b7f78b159_43c7eebc9fbad1361e04da4d0261f639_testimonial-image-3.jpg',
    alt: 'Markus Bauer',
    text: '"Nach unserem Umzug hat GlanzFaktor eine Grundreinigung durchgeführt. Die Wohnung sah aus wie neu! Schnell, effizient und zum fairen Preis. Danke an das tolle Team!"',
    name: 'Markus Bauer',
    role: 'Neukunde, Kreuzlingen',
  },
];

const STARS = ['★', '★', '★', '★', '★'];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  // Auto-advance every 5 s, pause on hover
  const paused = useRef(false);
  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section
      className="gf-testi-section"
      ref={sectionRef}
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
    >
      <div className="w-layout-blockcontainer container w-container">

        {/* Header */}
        <div className="gf-testi-header reveal reveal-fade">
          <div className="subtitle" style={{ justifyContent: 'center' }}>
            <div className="subtitle-icon">
              <img
                src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68ada4d8c8e2e861698ff365_subtitle-star.svg"
                loading="lazy" alt="star"
              />
            </div>
            <div>Kundenstimmen</div>
          </div>
          <h2 className="section-title mg-0" style={{ textAlign: 'center', marginTop: '12px' }}>
            Was unsere Kunden sagen
          </h2>
        </div>

        {/* Slider */}
        <div className="reveal reveal-scale" style={{ '--d': '0.15s' }}>
          {slides.map((slide, i) => (
            <div key={i} className={`gf-testi-slide${i === current ? ' active' : ''}`}>
              <div className="gf-testi-card">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  loading="lazy"
                  className="gf-testi-img"
                />
                <div>
                  <div className="gf-testi-stars">
                    {STARS.map((s, j) => <span key={j} className="gf-testi-star">{s}</span>)}
                  </div>
                  <p className="gf-testi-text">{slide.text}</p>
                  <p className="gf-testi-name">{slide.name}</p>
                  <p className="gf-testi-role">{slide.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="gf-testi-controls">
          <button className="gf-testi-btn" onClick={prev} aria-label="Zurück">
            <img
              src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68b520e88780b7f7244fc3e7_left-arrow.svg"
              loading="lazy" alt="left"
            />
          </button>

          <div className="gf-testi-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`gf-testi-dot${i === current ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Bewertung ${i + 1}`}
              />
            ))}
          </div>

          <button className="gf-testi-btn" onClick={next} aria-label="Weiter">
            <img
              src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68b52132ab9922a82c95684f_right-arrow.svg"
              loading="lazy" alt="right"
            />
          </button>
        </div>

      </div>
    </section>
  );
}
