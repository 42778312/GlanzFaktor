import { useState, useEffect, useRef } from 'react';
import useScrollReveal from './useScrollReveal';

const slides = [
  {
    text: '"Der Reinigungsservice war fantastisch! Sie haben mein Zuhause in einen makellosen Zustand gebracht. Vom Moment ihrer Ankunft an war das Team professionell."',
    name: 'Sarah Johnson',
    role: 'Hausbesitzer',
  },
  {
    text: '"Ihre Liebe zum Detail und ihre Professionalität stellen sicher, dass jeder Raum makellos und einladend ist – was einen großartigen Eindruck bei potenziellen Käufern hinterlässt."',
    name: 'John Matthews',
    role: 'Immobilienmakler',
  },
  {
    text: '"Unser Büro in Radolfzell wurde von GlanzFaktor komplett gereinigt – vom Teppich bis zu den Fenstern. Unfassbar gründlich und mit umweltfreundlichen Produkten. Wir buchen regelmäßig!"',
    name: 'Julia Schneider',
    role: 'Geschäftsführerin IT-Firma',
  },
  {
    text: '"Nach unserem Umzug hat GlanzFaktor eine Grundreinigung durchgeführt. Die Wohnung sah aus wie neu! Schnell, effizient und zum fairen Preis. Danke an das tolle Team!"',
    name: 'Markus Bauer',
    role: 'Neukunde, Kreuzlingen',
  },
  {
    text: '"Als Arztpraxis haben wir höchste Hygieneansprüche. Das Team von GlanzFaktor arbeitet äußerst akribisch und diskret, selbst außerhalb unserer Sprechzeiten. Absolut empfehlenswert!"',
    name: 'Dr. Michael Weber',
    role: 'Praxisinhaber',
  },
  {
    text: '"Wir haben GlanzFaktor für die Bauendreinigung unseres neuen Firmengebäudes engagiert. Alles wurde termingerecht und blitzsauber übergeben. Ein sehr zuverlässiger Partner!"',
    name: 'Elena Müller',
    role: 'Projektleiterin Bauunternehmen',
  },
];

const STARS = ['★', '★', '★', '★', '★'];

export default function Testimonials() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  return (
    <section
      id="testimonials"
      className="gf-testi-section"
      ref={sectionRef}
      style={{ overflow: 'hidden', paddingBottom: '80px', paddingTop: '40px' }}
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
            Was unsere Kunden sagen – und warum sie 100% zufrieden sind
          </h2>
          <p style={{ textAlign: 'center', marginTop: '12px', fontSize: '16px', color: '#666' }}>
            <strong>Kontaktieren Sie uns jetzt KOSTENLOS und erfahren Sie, warum über 50 Kunden GlanzFaktor vertrauen!</strong>
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Track */}
      <div className="reveal reveal-scale gf-testi-marquee-wrapper" style={{ '--d': '0.15s' }}>
        <div className="gf-testi-marquee-track">
          {[...slides, ...slides, ...slides].map((slide, i) => (
            <div key={i} className="gf-testi-marquee-item">
              <div className="gf-testi-card-override">
                <div style={{ padding: '20px' }}>
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
      </div>

      <style>{`
        .gf-testi-marquee-wrapper {
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          overflow: hidden;
          padding: 20px 0 60px 0;
        }

        /* Fading Edges on Left and Right */
        .gf-testi-marquee-wrapper::before,
        .gf-testi-marquee-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          width: 15%;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }
        .gf-testi-marquee-wrapper::before {
          left: 0;
          background: linear-gradient(to right, #f8f9fa, transparent);
        }
        .gf-testi-marquee-wrapper::after {
          right: 0;
          background: linear-gradient(to left, #f8f9fa, transparent);
        }

        .gf-testi-marquee-track {
          display: flex;
          gap: 30px;
          width: max-content;
          /* Animation speed: slower numbers = slower animation */
          animation: scroll-left 45s linear infinite; 
        }
        
        /* Pause on Hover! */
        .gf-testi-marquee-wrapper:hover .gf-testi-marquee-track {
          animation-play-state: paused;
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.333333% - 10px)); } 
        }

        .gf-testi-marquee-item {
          width: 480px;
          flex-shrink: 0;
          display: flex;
          height: 100%;
          align-items: stretch;
        }

        /* Beautiful new Card adjustments specifically for the Marquee */
        .gf-testi-card-override {
          background: #fff;
          border-radius: 20px;
          padding: 40px;
          margin: 0;
          width: 100%;
          text-align: center;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-shadow: 0 8px 30px rgba(0,0,0,0.04);
          border: 1px solid rgba(0,0,0,0.03);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .gf-testi-card-override:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.08);
        }

        /* We restore the large quote icon styling specifically for these cards */
        .gf-testi-card-override::before {
          content: '\\201C';
          position: absolute;
          top: 10px; right: 30px;
          font-size: 140px;
          line-height: 1;
          color: #f0f1f8;
          font-family: Georgia, serif;
          pointer-events: none;
          user-select: none;
        }

        @media (max-width: 991px) {
          .gf-testi-marquee-item {
            width: 380px;
          }
        }
        @media (max-width: 767px) {
          .gf-testi-marquee-item {
            width: 320px;
          }
          .gf-testi-card-override {
             padding: 24px;
          }
          .gf-testi-card-override::before {
            font-size: 90px;
            top: 5px; right: 15px;
          }
        }
      `}</style>
    </section>
  );
}
