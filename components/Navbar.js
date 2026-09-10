import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Phone, Menu, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  ['/reinigung', 'Reinigung'],
  ['/entruempelung', 'Entrümpelung'],
  ['/#why-us', 'Warum wir'],
  ['/#faq', 'FAQ'],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openContact = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    document.dispatchEvent(new CustomEvent('gf:openContact'));
  };

  const handleNavClick = (e, href) => {
    setMenuOpen(false);
    if (href.startsWith('/#') && router.pathname === '/') {
      e.preventDefault();
      const el = document.querySelector(href.slice(1));
      if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  const isActive = (href) => !href.startsWith('/#') && router.pathname === href;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-[900] bg-background/80 backdrop-blur-md transition-shadow duration-300',
        scrolled && 'shadow-sm bg-background/92'
      )}
    >
      <div className="shell flex h-20 items-center justify-between">
        <Link href="/" className="flex shrink-0 items-center">
          <img src="/Assest/log.png" alt="GlanzFaktor Logo" className="h-12 w-auto object-contain sm:h-14" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className={cn(
                'relative font-label text-[15px] font-medium text-navy-800 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-teal after:transition-all after:duration-300 hover:after:w-full',
                isActive(href) && 'font-bold after:w-full'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+491766167596"
            className="flex items-center gap-2 font-label text-sm font-semibold text-navy-800 transition-colors hover:text-teal"
          >
            <Phone className="h-4 w-4" />
            (0176) 616 77596
          </a>
          <Button onClick={openContact} className="rounded-full bg-navy-800 px-5 text-white hover:bg-navy-700">
            KOSTENLOS anfragen
          </Button>
        </div>

        {/* Mobile nav */}
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Menü öffnen">
              <Menu className="h-6 w-6 text-navy-800" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-background sm:w-[340px]">
            <div className="mt-10 flex flex-col gap-1">
              {NAV_LINKS.map(([href, label]) => (
                <SheetClose asChild key={href}>
                  <Link
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={cn(
                      'border-b border-border py-4 font-label text-base font-medium text-navy-800',
                      isActive(href) && 'font-bold text-teal-dark'
                    )}
                  >
                    {label}
                  </Link>
                </SheetClose>
              ))}
              <a
                href="tel:+491766167596"
                className="flex items-center gap-2 border-b border-border py-4 font-label text-base font-semibold text-navy-800"
              >
                <Phone className="h-4 w-4" />
                (0176) 616 77596
              </a>
              <Button
                onClick={openContact}
                className="mt-5 w-full rounded-full bg-teal py-6 text-base text-white hover:bg-teal-dark"
              >
                <Sparkles className="h-4 w-4" />
                KOSTENLOS anfragen
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
