import { useRef } from 'react';
import { SprayCan, Leaf, Zap, HandCoins, ArrowRight, Star } from 'lucide-react';
import useScrollReveal from './useScrollReveal';
import Eyebrow from './Eyebrow';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const expertCards = [
  {
    Icon: SprayCan,
    title: 'Premium-Ergebnis mit Best-Garantie',
    text: 'Mit modernster Ausrüstung und jahrelanger Expertise liefern wir bei Reinigung wie Entrümpelung ein Ergebnis, das überzeugt. KOSTENLOSE Nachbearbeitung, wenn Sie nicht 100% zufrieden sind!',
    starred: true,
  },
  {
    Icon: Leaf,
    title: 'Ökologisch & Fachgerecht',
    text: 'Wir setzen auf umweltzertifizierte Reinigungsmittel und entsorgen entrümpelte Gegenstände fachgerecht – für maximale Sicherheit von Mensch, Tier und Natur in der Bodenseeregion.',
  },
  {
    Icon: Zap,
    title: 'Blitzschnell & Präzise',
    text: 'Unser hochqualifiziertes Team arbeitet effizient und gründlich – Sie erhalten perfekte Ergebnisse in kürzester Zeit, ohne Kompromisse bei der Qualität.',
  },
  {
    Icon: HandCoins,
    title: 'Faire, transparente Preise — KOSTENLOS Angebot',
    text: 'Premium-Qualität zu fairen Konditionen – KEINE versteckten Kosten! Erhalten Sie jetzt ein KOSTENLOSES, unverbindliches Angebot. Nur erstklassiger Service, der sich für Sie auszahlt!',
    starred: true,
  },
];

export default function WhyUs() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  const scrollToContact = (e) => {
    e.preventDefault();
    document.dispatchEvent(new CustomEvent('gf:openContact'));
  };

  return (
    <section id="why-us" ref={sectionRef} className="bg-background py-24">
      <div className="shell grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        {/* Left column */}
        <div className="reveal reveal-left">
          <Eyebrow>Darum GlanzFaktor</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-medium leading-tight text-navy-800 sm:text-4xl">
            Warum über 50 Kunden am Bodensee uns vertrauen — und warum SIE es auch sollten
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Bei GlanzFaktor erhalten Sie mehr als nur Reinigung oder Entrümpelung – Sie
            bekommen einen zuverlässigen Partner, der Ihre Immobilie mit Leidenschaft und
            höchster Professionalität behandelt. <strong className="text-navy-800">KOSTENLOSE Erstberatung, kostenlose Besichtigung</strong> —
            maßgeschneiderte Lösungen, modernste Ausrüstung und ein hochqualifiziertes Team
            aus der Region garantieren Ihnen ein Ergebnis, das begeistert!
          </p>
          <Button
            onClick={scrollToContact}
            variant="outline"
            className="mt-8 h-auto rounded-full border-navy-800 px-6 py-3 text-[15px] font-semibold text-navy-800 hover:bg-navy-800 hover:text-white"
          >
            KOSTENLOS kontaktieren!
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Right: cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {expertCards.map(({ Icon, title, text, starred }, i) => (
            <Card
              key={title}
              className="reveal reveal-right group rounded-2xl border-border p-7 shadow-none transition-all duration-300 hover:-translate-y-2 hover:border-transparent hover:shadow-xl"
              style={{ '--d': `${i * 0.13}s` }}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-navy-800 transition-colors duration-300 group-hover:bg-navy-800 group-hover:text-white">
                <Icon className="h-6 w-6" strokeWidth={1.7} />
              </div>
              <h3 className="mb-2.5 flex items-start gap-1.5 font-display text-[17px] font-semibold leading-snug text-navy-900">
                {starred && <Star className="mt-0.5 h-4 w-4 shrink-0 text-gold" fill="currentColor" strokeWidth={0} />}
                {title}
              </h3>
              <p className="text-[14.5px] leading-relaxed text-muted-foreground">{text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
