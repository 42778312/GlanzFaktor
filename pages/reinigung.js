import Head from 'next/head';
import { ClipboardCheck } from 'lucide-react';
import PageHero from '../components/PageHero';
import EditorialServices from '../components/EditorialServices';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

const REINIGUNG_SERVICES = [
  {
    title: 'Gebäudereinigung',
    text: 'Regelmäßige Reinigung für Wohn- und Geschäftsgebäude in Konstanz und der Bodenseeregion – von Eingangsbereichen über Flure bis zu Sanitäranlagen, zuverlässig nach festem Turnus.',
    image: '/Assest/67e50220a4446ac664873e26/68ada085b622bee55388d8f5_70547755e663bbf10f0961945eb88829_home-banner-img.jpg',
  },
  {
    title: 'Büroreinigung',
    text: 'Saubere Arbeitsplätze für produktive Teams: Schreibtische, Besprechungsräume, Küchen und Empfangsbereiche – flexibel getaktet, damit Ihr Betrieb ungestört weiterläuft.',
  },
  {
    title: 'Fensterreinigung',
    text: 'Streifenfreie Fenster und Glasflächen, innen wie außen – für mehr Licht und einen makellosen ersten Eindruck bei Kunden und Besuchern.',
  },
  {
    title: 'Grundreinigung',
    text: 'Intensive Tiefenreinigung für Umzüge, Renovierungen oder den Jahreswechsel – wenn eine gründliche Auffrischung ansteht statt der regulären Unterhaltsreinigung.',
  },
  {
    title: 'Treppenhausreinigung',
    text: 'Gepflegte Gemeinschaftsflächen in Mehrfamilienhäusern: Treppen, Geländer, Briefkastenanlagen und Eingangsbereiche – nach vereinbartem Reinigungsplan.',
  },
  {
    title: 'Unterhaltsreinigung',
    text: 'Die laufende Pflege Ihrer Räume im vereinbarten Rhythmus – täglich, wöchentlich oder nach Bedarf, damit Sauberkeit dauerhaft zum Standard wird.',
  },
];

const REINIGUNG_STEPS = [
  {
    n: '01',
    title: 'Kostenlose Besichtigung',
    text: 'Wir schauen uns Ihre Räume vor Ort an und besprechen Umfang, Rhythmus und besondere Anforderungen – unverbindlich und kostenlos.',
  },
  {
    n: '02',
    title: 'Festpreisangebot',
    text: 'Sie erhalten ein transparentes, schriftliches Angebot – klar kalkuliert, ohne versteckte Kosten oder Überraschungen.',
  },
  {
    n: '03',
    title: 'Zuverlässige Umsetzung',
    text: 'Unser Team reinigt termingerecht und gründlich – bei Bedarf mit fester Ansprechperson für einen wiederkehrenden Turnus.',
  },
];

export default function Reinigung() {
  return (
    <>
      <Head>
        <title>Reinigung Konstanz & Bodensee | GlanzFaktor</title>
        <meta
          name="description"
          content="Professionelle Gebäude-, Büro- und Unterhaltsreinigung in Konstanz und der Bodenseeregion. Fensterreinigung, Grundreinigung, Treppenhausreinigung – kostenloses Angebot anfordern."
        />
      </Head>

      <PageHero
        eyebrow="Reinigung"
        title="Reinigung, die überzeugt — für Zuhause und Betrieb"
        text="Von der regelmäßigen Büroreinigung bis zur einmaligen Grundreinigung: Wir sorgen für saubere, gepflegte Räume in Konstanz und der Bodenseeregion – zuverlässig und mit kostenlosem Angebot."
        image="/Assest/67e50220a4446ac664873e26/689040cf71aca02a7b15f250_d9a41b2378a267313f7d293a2d48ce46_transform-image-1.jpg"
        imageAlt="Professionelle Fensterreinigung"
      />

      <EditorialServices
        eyebrow="Unsere Reinigungsleistungen"
        heading="Sauberkeit, die zu Ihrem Objekt passt"
        items={REINIGUNG_SERVICES}
      />

      <Services />

      <HowItWorks
        id="reinigung-ablauf"
        eyebrow="So läuft's ab"
        heading={<>In 3 Schritten zur sauberen Immobilie</>}
        steps={REINIGUNG_STEPS.map((s) => ({ ...s, Icon: ClipboardCheck }))}
        ctaTitle={<>Termin für eine kostenlose<br />Besichtigung sichern</>}
        ctaText="Wir melden uns kurzfristig zurück und finden gemeinsam den passenden Termin."
      />

      <WhyUs />
      <Testimonials />
      <FAQ topics={['general', 'reinigung']} />
      <FinalCTA
        title="Bereit für spürbar saubere Räume?"
        text="Kostenlose Besichtigung, transparentes Festpreisangebot, zuverlässige Umsetzung — ein Anruf genügt."
      />
    </>
  );
}
