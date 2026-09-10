import { useRef } from 'react';
import useScrollReveal from './useScrollReveal';
import Eyebrow from './Eyebrow';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    topic: 'general',
    question: 'Was macht GlanzFaktor zur ersten Wahl am Bodensee? (KOSTENLOSE Beratung!)',
    answer:
      'Wir kombinieren jahrelange Erfahrung mit modernster Ausrüstung bei Reinigung und Entrümpelung. Unser hochqualifiziertes Team garantiert beste Qualität bei jedem Auftrag – von der Privatwohnung bis zum Gewerbeobjekt in Konstanz und Umgebung. KOSTENLOSE Erstberatung für alle Neukunden! Kontaktieren Sie uns jetzt.',
  },
  {
    topic: 'reinigung',
    question: 'Warum sind Ihre Reinigungsprodukte besonders?',
    answer:
      'Wir verwenden ausschließlich umweltzertifizierte und biologisch abbaubare Reinigungsmittel – perfekt für die sensible Bodenseeregion. Sie sind zu 100% sicher für Kinder, Haustiere und Allergiker und dennoch hochwirksam gegen hartnäckige Verschmutzungen.',
  },
  {
    topic: 'general',
    question: 'Wie schnell kann ich einen KOSTENLOSEN Termin bekommen?',
    answer:
      'Schneller als Sie denken! In der Regel können wir Ihnen innerhalb von 24-48 Stunden einen KOSTENLOSEN Besichtigungstermin anbieten! Kontaktieren Sie uns telefonisch, per WhatsApp oder über unser KOSTENLOSES Kontaktformular – wir finden gemeinsam den perfekten Zeitpunkt für Ihr kostenloses Angebot.',
  },
  {
    topic: 'general',
    question: 'Bieten Sie eine Best-Zufriedenheitsgarantie?',
    answer:
      'Ja, zu 100%! Wir stehen zu 100% hinter unserer Arbeit und Ihrem Glück. Sollten Sie mit einem Ergebnis nicht vollständig zufrieden sein, kommen wir KOSTENLOS zurück und bessern nach – bis Sie begeistert sind! Das ist unser verbindliches GlanzFaktor-Best-Service-Versprechen!',
  },
  {
    topic: 'entruempelung',
    question: 'Was kostet eine Entrümpelung?',
    answer:
      'Das hängt von Fläche, Menge und Zugänglichkeit ab. Deshalb besichtigen wir Ihr Objekt KOSTENLOS und erstellen anschließend ein transparentes Festpreisangebot – ohne versteckte Kosten und ohne böse Überraschungen am Ende.',
  },
  {
    topic: 'entruempelung',
    question: 'Was passiert mit den entrümpelten Gegenständen?',
    answer:
      'Wir trennen fachgerecht: Verwertbares wird nach Möglichkeit weitergegeben oder recycelt, der Rest wird ordnungsgemäß entsorgt. Wertanrechnungen besprechen wir transparent bereits bei der Besichtigung.',
  },
];

export default function FAQ({ topics = ['general', 'reinigung', 'entruempelung'] }) {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  const items = faqs.filter((f) => topics.includes(f.topic));

  return (
    <section id="faq" ref={sectionRef} className="bg-background py-24">
      <div className="shell">
        <div className="reveal reveal-fade mx-auto max-w-xl text-center">
          <Eyebrow center>FAQ</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium text-navy-800 sm:text-4xl">
            Haben Sie Fragen? Wir haben die Antworten!
          </h2>
        </div>

        <Accordion type="single" collapsible className="reveal mx-auto mt-14 max-w-3xl">
          {items.map((faq, i) => (
            <AccordionItem key={faq.question} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="py-5 text-left font-display text-[17px] font-semibold text-navy-800 hover:no-underline data-[state=open]:text-teal-dark">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-[15.5px] leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
