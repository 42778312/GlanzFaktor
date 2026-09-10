import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import useScrollReveal from './useScrollReveal';
import { Button } from '@/components/ui/button';

export default function FinalCTA({
  title = 'Bereit für strahlende Sauberkeit — oder einen klaren Neuanfang?',
  text = 'Kostenlose Besichtigung, transparentes Festpreisangebot, zuverlässige Umsetzung. Ein Anruf genügt.',
}) {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  const scrollToContact = (e) => {
    e.preventDefault();
    document.dispatchEvent(new CustomEvent('gf:openContact'));
  };

  return (
    <section ref={sectionRef} className="px-4 pb-24 pt-5 sm:px-6">
      <div className="shell">
        <div className="reveal reveal-scale relative overflow-hidden rounded-[28px] bg-gradient-to-br from-navy-700 to-navy-900 px-6 py-16 text-center sm:px-10 sm:py-20">
          <div className="pointer-events-none absolute -right-24 -top-28 h-[420px] w-[420px] rounded-full bg-teal/20 blur-3xl" />
          <h2 className="relative mx-auto max-w-2xl font-display text-2xl font-medium text-white sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-base text-white/60">{text}</p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-6">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="h-auto rounded-full bg-teal px-7 py-3.5 text-base font-semibold text-white hover:bg-teal-dark"
            >
              Kostenloses Angebot anfragen
              <ArrowRight className="h-4 w-4" />
            </Button>
            <a
              href="tel:+491766167596"
              className="border-b border-white/30 pb-1 text-base font-bold text-white transition-colors hover:border-white/80"
            >
              (0176) 616 77596
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
