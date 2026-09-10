import { useRef } from 'react';
import { Building2, Dumbbell, BedDouble, ShoppingBag } from 'lucide-react';
import useScrollReveal from './useScrollReveal';
import BeforeAfterSlider from './BeforeAfterSlider';
import Eyebrow from './Eyebrow';
import { Card } from '@/components/ui/card';

const services = [
  {
    title: 'Büros & Verwaltungsgebäude',
    Icon: Building2,
    before: '/Assest/67ed0cb918a16dfcec7cea30/house-clean.png',
    after: '/Assest/67ed0cb918a16dfcec7cea30/house-dirty.png',
  },
  {
    title: 'Fitnessstudios',
    Icon: Dumbbell,
    before: '/Assest/67ed0cb918a16dfcec7cea30/gym-clean.png',
    after: '/Assest/67ed0cb918a16dfcec7cea30/gym_dirty.png',
  },
  {
    title: 'Hotels & Pensionen',
    Icon: BedDouble,
    before: '/Assest/67ed0cb918a16dfcec7cea30/hostel-clean.png',
    after: '/Assest/67ed0cb918a16dfcec7cea30/hostel-dirty.png',
  },
  {
    title: 'Einzelhandel & Einkaufszentren',
    Icon: ShoppingBag,
    before: 'https://images.unsplash.com/photo-1555529733-0e670560f7e1?auto=format&fit=crop&w=800&q=80',
    after: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  return (
    <section id="services" ref={sectionRef} className="bg-muted py-24">
      <div className="shell">
        <div className="reveal reveal-fade mb-16 text-center">
          <Eyebrow center>Branchen, die wir reinigen</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium text-navy-800 sm:text-4xl">
            Sehen Sie den Unterschied selbst — ziehen Sie den Regler
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          {services.map(({ title, Icon, before, after }, i) => (
            <Card
              key={title}
              className="reveal flex flex-col overflow-hidden rounded-[20px] border-none p-0 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
              style={{ '--d': `${0.15 + i * 0.12}s` }}
            >
              <BeforeAfterSlider before={before} after={after} />
              <div className="flex items-center justify-between gap-4 p-6">
                <h3 className="font-display text-2xl font-semibold text-navy-800">{title}</h3>
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-muted text-navy-800">
                  <Icon className="h-6 w-6" strokeWidth={1.7} />
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
