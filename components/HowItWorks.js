import { useEffect, useRef } from 'react';
import { MessageCircleMore, FileCheck2, Sparkles, ArrowRight } from 'lucide-react';
import Eyebrow from './Eyebrow';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const DEFAULT_STEPS = [
  {
    n: '01',
    Icon: MessageCircleMore,
    title: 'KOSTENLOS anfragen',
    text: 'Kontaktieren Sie uns telefonisch, per E-Mail, WhatsApp oder über unser Kontaktformular – schnell, unkompliziert und VÖLLIG KOSTENLOS. Wir sind bereit, sofort zu helfen!',
  },
  {
    n: '02',
    Icon: FileCheck2,
    title: 'KOSTENLOSES Angebot',
    text: 'Wir erstellen Ihnen schnell und professionell ein maßgeschneidertes Angebot – OHNE KOSTEN, transparent und fair kalkuliert. Keine versteckten Gebühren!',
  },
  {
    n: '03',
    Icon: Sparkles,
    title: 'Beste Leistung garantiert',
    text: 'Unser hochqualifiziertes Profi-Team arbeitet termingerecht, extrem gründlich und mit höchster Sorgfalt – wir garantieren, dass Sie begeistert sein werden!',
  },
];

export default function HowItWorks({
  id = 'how-it-works',
  eyebrow = "So einfach geht's",
  heading = <>Ihr Weg zur perfekten Sauberkeit — KOSTENLOSE Beratung inklusive!<br />In nur 3 einfachen Schritten!</>,
  steps = DEFAULT_STEPS,
  ctaTitle = <>Bereit für strahlende Sauberkeit?<br />KOSTENLOS anfragen — jetzt!</>,
  ctaText = 'KOSTENLOSES Angebot & unverbindliche Beratung — in wenigen Minuten erledigt! Wir antworten schnell!',
}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hiw-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    section.querySelectorAll('.hiw-animate').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    document.dispatchEvent(new CustomEvent('gf:openContact'));
  };

  return (
    <section id={id} ref={sectionRef} className="bg-muted py-24">
      <div className="shell">
        <div className="hiw-animate mb-16 text-center opacity-0 -translate-y-5 transition-all duration-500">
          <Eyebrow center>{eyebrow}</Eyebrow>
          <h2 className="mt-3.5 font-display text-3xl font-medium text-navy-800 sm:text-4xl">{heading}</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ n, Icon, title, text }, i) => (
            <Card
              key={n}
              className="hiw-animate flex flex-col gap-4 rounded-[22px] border-none p-7 opacity-0 translate-y-9 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              style={{ transitionDelay: `${0.22 + i * 0.16}s` }}
            >
              <div className="flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-800 font-label text-[17px] font-bold text-white shadow-md shadow-navy-800/25">
                  {n}
                </span>
                <span className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-muted text-navy-800 transition-colors group-hover:bg-navy-800">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
              </div>
              <div className="flex flex-1 flex-col">
                <h3 className="mb-2 font-display text-lg font-semibold text-navy-900">{title}</h3>
                <p className="flex-1 text-[14.5px] leading-relaxed text-muted-foreground">{text}</p>
                <div className="mt-6 h-[3px] w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-navy-800 to-navy-600 transition-transform duration-500" />
              </div>
            </Card>
          ))}

          {/* CTA card */}
          <Card
            className="hiw-animate flex flex-col justify-start gap-4 rounded-[22px] border-none bg-gradient-to-br from-navy-700 to-navy-900 p-7 text-white opacity-0 translate-y-9 shadow-lg transition-all duration-500 hover:-translate-y-2"
            style={{ transitionDelay: '0.7s' }}
          >
            <Sparkles className="h-8 w-8 text-teal-light" />
            <h3 className="font-display text-lg font-semibold leading-snug">{ctaTitle}</h3>
            <p className="text-[14.5px] leading-relaxed text-white/60">{ctaText}</p>
            <Button
              onClick={scrollToContact}
              className="mt-auto w-fit rounded-full bg-teal px-5 text-white hover:bg-teal-dark"
            >
              Jetzt buchen
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Card>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hiw-visible { opacity: 1 !important; transform: none !important; }
        .hiw-visible .hiw-title-block, .hiw-visible.text-center { transform: none !important; }
      ` }} />
    </section>
  );
}
