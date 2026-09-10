import { Sparkle } from 'lucide-react';

const marqueeItems = [
  'KOSTENLOS kontaktieren',
  'Professionelle Reinigung',
  'KOSTENLOS kontaktieren',
  'Fachgerechte Entrümpelung',
  'KOSTENLOS kontaktieren',
  'Best Service Garantie',
  'KOSTENLOS kontaktieren',
  'Besenreine Übergabe',
  'KOSTENLOS kontaktieren',
  'Unverbindliches Angebot',
];

export default function MarqueeSection() {
  return (
    <section className="overflow-hidden bg-background py-16">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {[...marqueeItems, ...marqueeItems].map((word, i) => (
          <span key={i} className="mr-8 inline-flex items-center gap-8">
            <span className="whitespace-nowrap font-display text-[clamp(2.2rem,5vw,4.5rem)] font-normal leading-none text-border">
              {word}
            </span>
            <Sparkle className="h-8 w-8 shrink-0 text-border" fill="currentColor" strokeWidth={0} />
          </span>
        ))}
      </div>
    </section>
  );
}
