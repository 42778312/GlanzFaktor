import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import useScrollReveal from './useScrollReveal';
import Eyebrow from './Eyebrow';
import { Card } from '@/components/ui/card';

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
  {
    text: '"Die Haushaltsauflösung meiner Eltern war emotional nicht einfach – das Team von GlanzFaktor ist sehr einfühlsam und trotzdem effizient vorgegangen. Die Wohnung wurde besenrein übergeben."',
    name: 'Petra Hoffmann',
    role: 'Kundin, Haushaltsauflösung',
  },
  {
    text: '"Unser Keller stand seit Jahren voll – nach einem Anruf bei GlanzFaktor war er innerhalb eines Tages komplett entrümpelt und fachgerecht entsorgt. Fairer Festpreis, keine Überraschungen."',
    name: 'Thomas Wagner',
    role: 'Kunde, Kellerentrümpelung',
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  return (
    <section id="testimonials" ref={sectionRef} className="overflow-hidden pb-20 pt-10">
      <div className="shell">
        <div className="reveal reveal-fade text-center">
          <Eyebrow center>Kundenstimmen</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium text-navy-800 sm:text-4xl">
            Was unsere Kunden sagen – und warum sie 100% zufrieden sind
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
            <strong>Kontaktieren Sie uns jetzt KOSTENLOS und erfahren Sie, warum über 50 Kunden GlanzFaktor vertrauen!</strong>
          </p>
        </div>
      </div>

      {/* Infinite scrolling marquee — intentionally full-bleed */}
      <div
        className="reveal reveal-scale group relative mt-8 w-screen overflow-hidden py-5 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
        style={{ '--d': '0.15s' }}
      >
        <div className="flex w-max animate-[testi-scroll_45s_linear_infinite] gap-7 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[...slides, ...slides, ...slides].map((slide, i) => (
            <Card
              key={i}
              className="relative flex w-[290px] shrink-0 flex-col justify-center overflow-hidden rounded-[20px] border-black/5 p-6 text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] sm:w-[360px] sm:p-8 lg:w-[480px] lg:p-10"
            >
              <Quote className="absolute right-6 top-4 h-24 w-24 text-muted/80" fill="currentColor" strokeWidth={0} />
              <div className="relative mb-5 flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 text-gold" fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="relative mb-7 text-[15px] font-medium italic leading-relaxed text-muted-foreground sm:text-base">
                {slide.text}
              </p>
              <p className="relative font-display text-lg font-bold text-navy-900">{slide.name}</p>
              <p className="relative text-xs font-semibold uppercase tracking-wide text-muted-foreground">{slide.role}</p>
            </Card>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes testi-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-33.3333% - 10px)); }
        }
      ` }} />
    </section>
  );
}
