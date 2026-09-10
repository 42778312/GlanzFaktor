import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const REINIGUNG_LINKS = [
  'Gebäudereinigung',
  'Büroreinigung',
  'Unterhaltsreinigung',
  'Fensterreinigung',
  'Grundreinigung',
  'Treppenhausreinigung',
];

const ENTRUEMPELUNG_LINKS = [
  'Wohnungsentrümpelung',
  'Haushaltsauflösung',
  'Kellerentrümpelung',
  'Dachbodenentrümpelung',
  'Gewerbeentrümpelung',
  'Sperrmüllentsorgung',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-navy-800 to-navy-900 pt-20">
      <div className="shell">
        <div className="grid gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <img src="/Assest/log.png" alt="GlanzFaktor" className="mb-4 h-11 w-auto object-contain brightness-0 invert" />
            <p className="mb-5 max-w-xs text-sm leading-relaxed text-white/55">
              Reinigung &amp; Entrümpelung aus einer Hand – zuverlässig, transparent und mit
              kostenlosem Angebot für Konstanz und die Bodenseeregion.
            </p>
            <a
              href="#contact-form"
              onClick={(e) => { e.preventDefault(); document.dispatchEvent(new CustomEvent('gf:openContact')); }}
              className="inline-flex items-center border-b border-teal-light/35 pb-0.5 text-sm font-bold text-teal-light transition-colors hover:border-white/60 hover:text-white"
            >
              Kostenloses Angebot anfragen →
            </a>
          </div>

          <div>
            <h3 className="mb-5 font-label text-xs font-bold uppercase tracking-[0.08em] text-white">Reinigung</h3>
            <ul className="flex flex-col gap-3">
              {REINIGUNG_LINKS.map((label) => (
                <li key={label}>
                  <Link href="/reinigung" className="text-sm text-white/58 transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-label text-xs font-bold uppercase tracking-[0.08em] text-white">Entrümpelung</h3>
            <ul className="flex flex-col gap-3">
              {ENTRUEMPELUNG_LINKS.map((label) => (
                <li key={label}>
                  <Link href="/entruempelung" className="text-sm text-white/58 transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-label text-xs font-bold uppercase tracking-[0.08em] text-white">Kontakt</h3>
            <ul className="flex flex-col gap-3 text-sm text-white/58">
              <li>
                <a href="tel:+491766167596" className="flex items-center gap-2 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 shrink-0" /> +49 176 616 77596
                </a>
              </li>
              <li>
                <a href="mailto:info@glanzfaktor-bodensee.de" className="flex items-center gap-2 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 shrink-0" /> info@glanzfaktor-bodensee.de
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" /> Konstanz &amp; Bodenseeregion
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0" /> Mo–Sa, kurzfristige Termine möglich
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10" />

        <div className="flex flex-col items-start justify-between gap-3 py-7 pb-24 text-xs text-white/40 sm:flex-row sm:items-center sm:pb-7">
          <span>© {year} GlanzFaktor — Ihr Partner für strahlende Sauberkeit</span>
          <nav className="flex gap-5">
            <Link href="/impressum" className="transition-colors hover:text-white">Impressum</Link>
            <Link href="/datenschutz" className="transition-colors hover:text-white">Datenschutz</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
