import { useState, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/* Drag-to-reveal Before / After slider */
export default function BeforeAfterSlider({ before, after }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min((clientX - rect.left) / rect.width, 1)) * 100;
    setPos(pct);
  }, []);

  return (
    <div
      className="relative h-[300px] w-full shrink-0 touch-none select-none overflow-hidden rounded-t-[14px] sm:h-[380px]"
      style={{ cursor: 'ew-resize' }}
      ref={containerRef}
      onMouseDown={(e) => { dragging.current = true; updatePos(e.clientX); }}
      onMouseMove={(e) => { if (dragging.current) updatePos(e.clientX); }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onTouchStart={(e) => { dragging.current = true; updatePos(e.touches[0].clientX); }}
      onTouchMove={(e) => { if (dragging.current) { updatePos(e.touches[0].clientX); } }}
      onTouchEnd={() => { dragging.current = false; }}
    >
      <img src={before} alt="Vorher" className="pointer-events-none absolute inset-0 h-full w-full object-cover" draggable="false" />
      <img
        src={after}
        alt="Nachher"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        draggable="false"
      />
      <div
        className="pointer-events-none absolute bottom-0 top-0 z-[5] flex w-0.5 -translate-x-1/2 items-center justify-center bg-white/90"
        style={{ left: `${pos}%` }}
      >
        <div className="pointer-events-auto flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-white text-navy-800 shadow-[0_2px_14px_rgba(0,0,0,0.28)]" style={{ cursor: 'ew-resize' }}>
          <ChevronLeft className="h-3.5 w-3.5 -mr-1" strokeWidth={2.8} />
          <ChevronRight className="h-3.5 w-3.5 -ml-1" strokeWidth={2.8} />
        </div>
      </div>
      <span className="pointer-events-none absolute left-2.5 top-2.5 z-[4] rounded bg-black/50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
        Vorher
      </span>
      <span className="pointer-events-none absolute right-2.5 top-2.5 z-[4] rounded bg-black/50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
        Nachher
      </span>
    </div>
  );
}
