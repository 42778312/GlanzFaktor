import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function PageHero({ eyebrow, title, text, image, imageAlt, media, variant = 'light' }) {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.dispatchEvent(new CustomEvent('gf:openContact'));
  };

  const dark = variant === 'dark';

  return (
    <section className={cn('overflow-hidden pb-16 pt-36 lg:pb-20 lg:pt-44', dark ? 'bg-gradient-to-br from-navy-700 to-navy-900' : 'bg-muted')}>
      <div className="shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <div className={cn('mb-4.5 font-label text-[13px] font-bold uppercase tracking-[0.14em]', dark ? 'text-teal-light' : 'text-teal-dark')}>
            {eyebrow}
          </div>
          <h1 className={cn('mb-5.5 font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-[3.4rem]', dark ? 'text-white' : 'text-navy-800')}>
            {title}
          </h1>
          <p className={cn('mb-8 max-w-[480px] text-lg leading-relaxed', dark ? 'text-white/68' : 'text-muted-foreground')}>
            {text}
          </p>
          <div className="flex flex-wrap items-center gap-6">
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
              className={cn(
                'border-b pb-1 text-[15px] font-bold',
                dark ? 'border-white/30 text-white' : 'border-border text-navy-800'
              )}
            >
              (0176) 616 77596
            </a>
          </div>
        </div>
        <div className="order-first aspect-[16/10] overflow-hidden rounded-[26px] lg:order-none lg:aspect-[4/3.1]">
          {media ? media : image ? (
            <img src={image} alt={imageAlt || ''} loading="eager" className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-navy-700 to-navy-900" />
          )}
        </div>
      </div>
    </section>
  );
}
