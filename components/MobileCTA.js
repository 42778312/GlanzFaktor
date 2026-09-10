import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[8500] flex gap-2.5 border-t border-border bg-background/95 p-2.5 backdrop-blur-md sm:hidden"
      style={{ paddingBottom: 'calc(0.625rem + env(safe-area-inset-bottom))' }}
    >
      <Button asChild variant="outline" size="icon" className="h-[46px] w-[46px] shrink-0 rounded-xl border-border">
        <a href="tel:+491766167596" aria-label="Anrufen">
          <Phone className="h-[18px] w-[18px]" />
        </a>
      </Button>
      <Button
        onClick={() => document.dispatchEvent(new CustomEvent('gf:openContact'))}
        className="h-[46px] flex-1 rounded-xl bg-gradient-to-br from-teal to-teal-dark text-[14px] font-bold text-white shadow-md shadow-teal/30"
      >
        Angebot anfragen
      </Button>
    </div>
  );
}
