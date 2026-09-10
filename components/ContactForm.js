import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { MessageCircleHeart, CircleCheckBig, Phone } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

emailjs.init({ publicKey: 'JxvaKXQZMNtQpjs7R' });

export default function ContactForm() {
  const form = useRef();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  // Listen for global open event fired by any CTA button on the page
  useEffect(() => {
    const handler = () => { setOpen(true); setStatus(null); };
    document.addEventListener('gf:openContact', handler);
    return () => document.removeEventListener('gf:openContact', handler);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm('service_cizdhdn', 'template_qw4dbkc', form.current)
      .then(() => { setStatus('success'); form.current.reset(); })
      .catch((err) => { console.error(err); setStatus('error'); })
      .finally(() => setSending(false));
  };

  return (
    <>
      {/* Hidden anchor — preserves scroll-to from CTA buttons */}
      <div id="contact-form" className="pointer-events-none invisible absolute h-0" />

      {/* Floating action button (desktop only — mobile uses the sticky bottom bar) */}
      <div className="pointer-events-none fixed bottom-7 right-6 z-[8999] hidden sm:block">
        <span className="absolute inset-0 -m-2 animate-ping rounded-full bg-teal/25 motion-reduce:hidden" />
        <Button
          onClick={() => setOpen(true)}
          className="pointer-events-auto relative h-auto rounded-full bg-gradient-to-br from-teal to-teal-dark px-5 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-teal/40 hover:-translate-y-0.5 hover:shadow-xl"
        >
          <MessageCircleHeart className="h-5 w-5" />
          Anfragen
        </Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[88vh] max-w-[560px] overflow-y-auto rounded-3xl border-none bg-gradient-to-br from-navy-800 to-navy-900 p-8 text-white sm:p-11 [&>button]:text-white/70 [&>button]:hover:text-white">
          {status === 'success' ? (
            <div className="py-6 text-center">
              <DialogTitle className="sr-only">Anfrage gesendet</DialogTitle>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal/15 text-teal">
                <CircleCheckBig className="h-8 w-8" />
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold">Anfrage gesendet!</h3>
              <p className="text-sm text-white/55">Wir melden uns so schnell wie möglich bei Ihnen. Danke!</p>
              <Button
                variant="outline"
                onClick={() => setOpen(false)}
                className="mt-6 rounded-full border-white/20 bg-transparent px-8 text-white hover:bg-white/10 hover:text-white"
              >
                Schließen
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-2.5 flex items-center gap-2 font-label text-[11px] font-bold uppercase tracking-[0.12em] text-teal-light">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-light" />
                KOSTENLOS & UNVERBINDLICH
              </div>
              <DialogTitle className="mb-6 font-display text-[1.6rem] font-semibold leading-tight text-white">
                Holen Sie sich JETZT Ihr kostenloses Angebot!
              </DialogTitle>

              <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-3">
                <Input
                  type="text"
                  name="name"
                  placeholder="Ihr Name"
                  maxLength={256}
                  required
                  className="h-auto rounded-2xl border-white/15 bg-white/[0.07] px-4.5 py-3.5 text-white placeholder:text-white/40 focus-visible:border-teal focus-visible:bg-teal/10 focus-visible:ring-teal/30"
                />
                <Input
                  type="tel"
                  name="telefon"
                  placeholder="Telefonnummer"
                  maxLength={256}
                  required
                  className="h-auto rounded-2xl border-white/15 bg-white/[0.07] px-4.5 py-3.5 text-white placeholder:text-white/40 focus-visible:border-teal focus-visible:bg-teal/10 focus-visible:ring-teal/30"
                />
                <Textarea
                  name="message"
                  placeholder="Schreiben Sie Ihre Nachricht hier..."
                  maxLength={5000}
                  required
                  className="min-h-[110px] rounded-2xl border-white/15 bg-white/[0.07] px-4.5 py-3.5 text-white placeholder:text-white/40 focus-visible:border-teal focus-visible:bg-teal/10 focus-visible:ring-teal/30"
                />
                <Button
                  type="submit"
                  disabled={sending}
                  className="mt-1 h-auto rounded-full bg-gradient-to-br from-teal to-teal-dark py-4 text-base font-bold text-white shadow-lg shadow-teal/30 hover:-translate-y-0.5"
                >
                  {sending ? 'Wird gesendet…' : 'KOSTENLOSE Anfrage absenden →'}
                </Button>
                {status === 'error' && (
                  <p className="text-center text-sm text-red-400">Fehler beim Senden. Bitte versuchen Sie es erneut.</p>
                )}
              </form>

              <div className="my-5 flex items-center gap-3 text-xs text-white/30">
                <span className="h-px flex-1 bg-white/10" />
                oder direkt anrufen
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <a
                href="tel:+491766167596"
                className="flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/[0.13]"
              >
                <Phone className="h-4 w-4" />
                (0176) 616 77596
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
