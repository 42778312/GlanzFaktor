import Head from 'next/head';
import { useRef } from 'react';
import { Home as HomeIcon, CircleCheck } from 'lucide-react';
import PageHero from '../components/PageHero';
import EditorialServices from '../components/EditorialServices';
import HowItWorks from '../components/HowItWorks';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import ClearanceGraphic from '../components/ClearanceGraphic';
import Eyebrow from '../components/Eyebrow';
import useScrollReveal from '../components/useScrollReveal';
import { Card } from '@/components/ui/card';

const ENTRUEMPELUNG_SERVICES = [
  {
    title: 'Wohnungsentrümpelung',
    text: 'Vollständige Räumung von Wohnungen – etwa vor einem Umzug, Verkauf oder Mieterwechsel. Besenreine Übergabe zum vereinbarten Termin.',
  },
  {
    title: 'Haushaltsauflösung',
    text: 'Einfühlsame und zügige Auflösung eines kompletten Haushalts, zum Beispiel nach einem Trauerfall oder Umzug ins Betreute Wohnen.',
  },
  {
    title: 'Kellerentrümpelung',
    text: 'Vollgestellte Keller werden geräumt, sortiert und fachgerecht entsorgt – Platz für das, was Sie wirklich brauchen.',
  },
  {
    title: 'Dachbodenentrümpelung',
    text: 'Auch schwer zugängliche Dachböden räumen wir sorgfältig und rückenschonend für Sie – inklusive Abtransport.',
  },
  {
    title: 'Gewerbeentrümpelung',
    text: 'Büro-, Lager- oder Ladenauflösungen inklusive Möbel, Technik und Aktenvernichtung nach Ihren Vorgaben.',
  },
  {
    title: 'Sperrmüllentsorgung',
    text: 'Einzelne Sperrmüllabholung oder als Teil einer größeren Räumung – schnell organisiert und korrekt entsorgt.',
  },
];

const ENTRUEMPELUNG_STEPS = [
  {
    n: '01',
    title: 'Kostenlose Besichtigung',
    text: 'Wir sehen uns die Räumlichkeiten vor Ort an und besprechen Umfang, Zugänglichkeit und Wünsche – unverbindlich.',
  },
  {
    n: '02',
    title: 'Festpreisangebot',
    text: 'Sie erhalten ein transparentes Angebot zum Festpreis – ohne versteckte Kosten, egal wie lange die Räumung dauert.',
  },
  {
    n: '03',
    title: 'Räumung & besenreine Übergabe',
    text: 'Wir räumen zum vereinbarten Termin, trennen fachgerecht und übergeben die Räume besenrein.',
  },
];

const PROBLEMS = [
  { title: 'Geerbte Immobilie', text: 'Eine geerbte Wohnung oder ein Haus muss geräumt werden, bevor Verkauf oder Vermietung möglich sind.' },
  { title: 'Haushaltsauflösung', text: 'Nach einem Trauerfall oder Umzug ins Pflegeheim steht die Auflösung eines ganzen Haushalts an.' },
  { title: 'Vollgestellter Keller oder Dachboden', text: 'Über Jahre Angesammeltes nimmt Platz weg, der eigentlich gebraucht wird.' },
  { title: 'Zeitdruck vor der Übergabe', text: 'Der Übergabetermin steht fest, aber die Räume sind noch voll – schnelle, verlässliche Hilfe ist gefragt.' },
  { title: 'Firmen- oder Büroauflösung', text: 'Ein Gewerbe wird aufgegeben oder verkleinert und Mobiliar, Technik und Unterlagen müssen fachgerecht weg.' },
  { title: 'Sperrmüll in Mengen', text: 'Zu viel für die reguläre Abholung, aber zu wenig für eine komplette Entrümpelung.' },
];

const INCLUDED = [
  'Kostenlose Besichtigung & Festpreisangebot',
  'Fachgerechte Trennung von Wertstoffen und Müll',
  'Demontage von Möbeln nach Bedarf',
  'Abtransport mit eigenem Fahrzeug',
  'Besenreine Übergabe der Räume',
  'Transparente Entsorgungsnachweise auf Wunsch',
];

function ProblemsSolved() {
  const ref = useRef(null);
  useScrollReveal(ref);
  return (
    <section ref={ref} className="bg-muted py-24">
      <div className="shell">
        <div className="reveal reveal-fade mb-13 text-center">
          <Eyebrow center>Typische Situationen</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium text-navy-800 sm:text-4xl">Probleme, die wir lösen</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <Card
              key={p.title}
              className="reveal rounded-[18px] border-border p-7 shadow-none transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              style={{ '--d': `${i * 0.07}s` }}
            >
              <h3 className="mb-2.5 font-display text-lg font-semibold text-navy-800">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function IncludedChecklist() {
  const ref = useRef(null);
  useScrollReveal(ref);
  return (
    <section ref={ref} className="bg-background py-24">
      <div className="shell grid items-center gap-14 lg:grid-cols-2">
        <div className="reveal reveal-left">
          <Eyebrow>Was wir übernehmen</Eyebrow>
          <h2 className="mt-3.5 font-display text-3xl font-medium text-navy-800 sm:text-4xl">
            Von der Besichtigung bis zur besenreinen Übergabe
          </h2>
          <p className="mt-4.5 max-w-[460px] text-[15.5px] leading-relaxed text-muted-foreground">
            Ein Ansprechpartner, ein Festpreis, keine bösen Überraschungen — das
            übernehmen wir für Sie bei jeder Entrümpelung.
          </p>
        </div>
        <ul className="reveal reveal-right flex flex-col gap-4" style={{ '--d': '0.1s' }}>
          {INCLUDED.map((item) => (
            <li key={item} className="flex items-center gap-3.5 rounded-xl bg-muted px-5 py-4 text-[15.5px] font-semibold text-navy-800">
              <CircleCheck className="h-[18px] w-[18px] shrink-0 text-teal" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function Entruempelung() {
  return (
    <>
      <Head>
        <title>Entrümpelung Konstanz & Bodensee | GlanzFaktor</title>
        <meta
          name="description"
          content="Wohnungsentrümpelung, Haushaltsauflösung, Keller- und Dachbodenentrümpelung sowie Gewerbeentrümpelung in Konstanz und am Bodensee. Kostenlose Besichtigung, Festpreisangebot, besenreine Übergabe."
        />
      </Head>

      <PageHero
        variant="dark"
        eyebrow="Entrümpelung"
        title="Entrümpelung für einen klaren Neuanfang"
        text="Wohnung, Keller, Dachboden oder Gewerbefläche — wir räumen fachgerecht, zuverlässig und zum transparenten Festpreis, von der Besichtigung bis zur besenreinen Übergabe."
        media={<ClearanceGraphic className="h-full w-full object-cover" />}
      />

      <EditorialServices
        eyebrow="Unsere Entrümpelungsleistungen"
        heading="Räumung, auf die Sie sich verlassen können"
        items={ENTRUEMPELUNG_SERVICES}
      />

      <ProblemsSolved />

      <HowItWorks
        id="entruempelung-ablauf"
        eyebrow="So läuft's ab"
        heading={<>In 3 Schritten zur geräumten Immobilie</>}
        steps={ENTRUEMPELUNG_STEPS.map((s) => ({ ...s, Icon: HomeIcon }))}
        ctaTitle={<>Kostenlose Besichtigung<br />jetzt anfragen</>}
        ctaText="Wir melden uns kurzfristig zurück — auch bei engem Zeitrahmen."
      />

      <IncludedChecklist />

      <FAQ topics={['general', 'entruempelung']} />

      <FinalCTA
        title="Bereit für den klaren Neuanfang?"
        text="Kostenlose Besichtigung, transparentes Festpreisangebot, besenreine Übergabe — ein Anruf genügt."
      />
    </>
  );
}
