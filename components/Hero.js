import { useEffect, useRef } from 'react';
import { ArrowRight, Phone, ShieldCheck, Handshake, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const TITLE_WORDS = 'Reinigung & Entrümpelung aus einer Hand'.split(' ');

function GoogleMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}

function StarRow({ colorClass }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={cn('h-3.5 w-3.5', colorClass)} fill="currentColor" strokeWidth={0} />
      ))}
      <span className="ml-1.5 text-sm font-extrabold text-white">5,0</span>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);

  const scrollToContact = (e) => {
    e.preventDefault();
    document.dispatchEvent(new CustomEvent('gf:openContact'));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!sectionRef.current) return;
      sectionRef.current.querySelectorAll('.hero-word, .hero-sub-reveal').forEach((el) => el.classList.add('wrev'));
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" ref={sectionRef} className="relative overflow-hidden bg-navy-800">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src="/Assest/67ed0cb918a16dfcec7cea30/bodensee.jpeg"
          loading="eager"
          alt="GlanzFaktor Team am Bodensee"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/85 via-navy-900/55 to-navy-900/20" />
      </div>

      {/* Content */}
      <div className="shell relative grid gap-14 pb-16 pt-36 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pb-24 lg:pt-44">
        {/* Left: copy */}
        <div>
          <h1 className="font-display text-4xl font-medium leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            {TITLE_WORDS.map((word, i) => (
              <span key={i}>
                <span
                  className="hero-word inline-block opacity-0 translate-y-6 transition-all duration-500 ease-out"
                  style={{ transitionDelay: `${i * 0.09}s` }}
                >
                  {word}
                </span>
                {i < TITLE_WORDS.length - 1 ? ' ' : ''}
              </span>
            ))}
          </h1>

          <p
            className="hero-sub-reveal mt-6 max-w-lg text-lg leading-relaxed text-white/85 opacity-0 translate-y-3 transition-all duration-500"
            style={{ transitionDelay: '0.5s' }}
          >
            Ihr Partner für professionelle <strong className="text-white">Reinigung</strong> und
            fachgerechte <strong className="text-white">Entrümpelung</strong> in Konstanz und der
            Bodenseeregion – für Privathaushalte und Unternehmen, zuverlässig und mit
            kostenlosem Angebot.
          </p>

          <div
            className="hero-sub-reveal mt-8 flex flex-wrap items-center gap-6 opacity-0 translate-y-3 transition-all duration-500"
            style={{ transitionDelay: '0.65s' }}
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="h-auto rounded-full bg-teal px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal/30 hover:bg-teal-dark"
            >
              Kostenloses Angebot anfragen
              <ArrowRight className="h-4 w-4" />
            </Button>
            <a
              href="tel:+491766167596"
              className="group flex items-center gap-2.5 border-b border-white/35 pb-1 text-[15px] font-semibold text-white transition-colors hover:border-white/90"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                <Phone className="h-4 w-4" />
              </span>
              Jetzt anrufen
            </a>
          </div>

          {/* Rating badges */}
          <div
            className="hero-sub-reveal mt-9 flex flex-wrap gap-3 opacity-0 translate-y-3 transition-all duration-500"
            style={{ transitionDelay: '0.8s' }}
          >
            <div className="flex items-center gap-4 rounded-2xl border border-white/25 bg-white/10 px-4 py-3 backdrop-blur-md">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white p-2">
                <GoogleMark className="h-full w-full" />
              </span>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wide text-white/75">Google Bewertungen</div>
                <StarRow colorClass="text-[#FBBC05]" />
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-white/25 bg-white/10 px-4 py-3 backdrop-blur-md">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#97C13C] font-label text-sm font-black text-white">
                ku
              </span>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wide text-white/75">Kununu Bewertungen</div>
                <StarRow colorClass="text-[#97C13C]" />
              </div>
            </div>
          </div>
        </div>

        {/* Right: floating stat cards + tags */}
        <div className="hidden flex-col items-end gap-5 lg:flex">
          <div className="flex w-full max-w-xs flex-col gap-4">
            <div className="animate-[float_4.5s_ease-in-out_infinite] rounded-3xl border border-white/25 bg-white/10 p-6 shadow-xl backdrop-blur-md">
              <div className="mb-4 flex -space-x-3">
                {[
                  '6822fb99bd9e553518d85efc_9f16ab2c9995fda549e7780c11fb7045_testimonial-image-1.jpg',
                  '682598055b28648b7f78b159_43c7eebc9fbad1361e04da4d0261f639_testimonial-image-3.jpg',
                  '683d4e48a4ca8cd615e9f3b0_6b6317df7e28cfb29e19862ab8d102e4_testimonial-image-4.jpg',
                ].map((f) => (
                  <img
                    key={f}
                    src={`https://cdn.prod.website-files.com/67e50220a4446ac664873e26/${f}`}
                    alt="Kunde"
                    loading="lazy"
                    className="h-11 w-11 rounded-full border-2 border-navy-800 object-cover"
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-white">
                <strong>500+</strong> Zufriedene Kunden in der Bodenseeregion – Ihre
                Zufriedenheit ist unser Antrieb!
              </p>
            </div>
            <div
              className="animate-[float_4.5s_ease-in-out_infinite] rounded-3xl border border-white/25 bg-white/10 p-6 shadow-xl backdrop-blur-md"
              style={{ animationDelay: '0.4s' }}
            >
              <h2 className="font-display text-4xl font-semibold text-white">96%</h2>
              <p className="mt-2 text-sm leading-relaxed text-white">
                98% Weiterempfehlungsrate – Perfektion in jeder Ecke!
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
              <ShieldCheck className="h-4 w-4 text-teal-light" />
              Zertifiziert
            </span>
            <span className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
              <Handshake className="h-4 w-4 text-teal-light" />
              Kompetent
            </span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hero-word.wrev, .hero-sub-reveal.wrev { opacity: 1 !important; transform: none !important; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @media (prefers-reduced-motion: reduce) {
          .hero-word, .hero-sub-reveal { opacity: 1 !important; transform: none !important; }
        }
      ` }} />
    </section>
  );
}
