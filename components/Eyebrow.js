import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Eyebrow({ children, className, center = false }) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 font-label text-[13px] font-bold uppercase tracking-[0.14em] text-teal-dark',
        center && 'justify-center',
        className
      )}
    >
      <Sparkles className="h-4 w-4 text-teal" />
      {children}
    </div>
  );
}
