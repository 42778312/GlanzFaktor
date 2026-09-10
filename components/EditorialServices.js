import { useRef } from 'react';
import useScrollReveal from './useScrollReveal';
import Eyebrow from './Eyebrow';
import { cn } from '@/lib/utils';

export default function EditorialServices({ eyebrow, heading, items }) {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  return (
    <section ref={sectionRef} className="bg-background py-24">
      <div className="shell">
        <div className="reveal reveal-fade mb-16 text-center">
          <Eyebrow center>{eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium text-navy-800 sm:text-4xl">{heading}</h2>
        </div>

        <div className="flex flex-col gap-16 lg:gap-20">
          {items.map((item, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={item.title}
                className={cn(
                  'reveal group grid items-center gap-6 lg:grid-cols-2 lg:gap-12',
                )}
                style={{ '--d': `${0.08 + i * 0.06}s` }}
              >
                <div className={cn('aspect-[5/4] overflow-hidden rounded-[22px] bg-muted', reversed && 'lg:order-2')}>
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.045]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-700 to-navy-900 font-display text-[120px] font-semibold text-white/15">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  )}
                </div>
                <div className={reversed ? 'lg:order-1' : undefined}>
                  <span className="mb-3.5 block font-display text-[15px] font-bold tracking-[0.1em] text-teal-dark">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mb-3.5 font-display text-2xl font-semibold leading-tight text-navy-800 sm:text-[26px]">
                    {item.title}
                  </h3>
                  <p className="max-w-[440px] text-[15.5px] leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
