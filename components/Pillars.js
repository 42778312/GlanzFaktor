import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import useScrollReveal from './useScrollReveal';
import ClearanceGraphic from './ClearanceGraphic';
import Eyebrow from './Eyebrow';
import { Card } from '@/components/ui/card';

const REINIGUNG_ITEMS = [
  'Gebäude- & Büroreinigung',
  'Unterhaltsreinigung',
  'Fenster- & Grundreinigung',
  'Treppenhausreinigung',
];

const ENTRUEMPELUNG_ITEMS = [
  'Wohnungsentrümpelung',
  'Haushaltsauflösung',
  'Keller- & Dachbodenentrümpelung',
  'Gewerbeentrümpelung & Sperrmüll',
];

function PillarCard({ index, eyebrow, title, text, items, href, linkLabel, media }) {
  return (
    <Card className="reveal group flex flex-col overflow-hidden rounded-3xl border-border bg-muted/60 py-0 shadow-none transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-900/10">
      <div className="relative h-64 overflow-hidden">
        {media}
        <span className="absolute bottom-4 left-5 font-display text-5xl font-semibold leading-none text-white/85 [text-shadow:0_2px_16px_rgba(0,0,0,0.35)]">
          {index}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-9">
        <div className="mb-2.5 text-xs font-bold uppercase tracking-[0.14em] text-teal-dark">{eyebrow}</div>
        <h3 className="mb-3.5 font-display text-2xl font-semibold leading-tight text-navy-800">{title}</h3>
        <p className="mb-5 text-[15px] leading-relaxed text-muted-foreground">{text}</p>
        <ul className="mb-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="relative pl-4 text-[13.5px] font-semibold text-navy-800 before:absolute before:left-0 before:top-[7px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-teal">
              {item}
            </li>
          ))}
        </ul>
        <Link href={href} className="mt-auto inline-flex items-center gap-2 text-[15px] font-bold text-navy-800">
          {linkLabel}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </Link>
      </div>
    </Card>
  );
}

export default function Pillars() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  return (
    <section id="leistungen" ref={sectionRef} className="bg-background pb-10 pt-24">
      <div className="shell">
        <div className="reveal reveal-fade mb-14 text-center">
          <Eyebrow center>Zwei Leistungen, ein Ansprechpartner</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium text-navy-800 sm:text-4xl">
            Reinigung und Entrümpelung — aus einer Hand
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="reveal reveal-left" style={{ '--d': '0.05s' }}>
            <PillarCard
              index="01"
              eyebrow="Reinigung"
              title="Für Räume, die überzeugen"
              text="Regelmäßige und einmalige Reinigung für Privathaushalte, Büros und Gewerbeflächen am Bodensee — gründlich, zuverlässig und mit ökologischen Produkten."
              items={REINIGUNG_ITEMS}
              href="/reinigung"
              linkLabel="Reinigung entdecken"
              media={
                <img
                  src="/Assest/67e50220a4446ac664873e26/689040cf71aca02a7b15f250_d9a41b2378a267313f7d293a2d48ce46_transform-image-1.jpg"
                  alt="Professionelle Fensterreinigung durch GlanzFaktor"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              }
            />
          </div>

          <div className="reveal reveal-right" style={{ '--d': '0.16s' }}>
            <PillarCard
              index="02"
              eyebrow="Entrümpelung"
              title="Für einen klaren Neuanfang"
              text="Wohnungen, Keller, Dachböden und Gewerbeflächen fachgerecht geräumt — von der kostenlosen Besichtigung bis zur besenreinen Übergabe."
              items={ENTRUEMPELUNG_ITEMS}
              href="/entruempelung"
              linkLabel="Entrümpelung entdecken"
              media={<ClearanceGraphic className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
