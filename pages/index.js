import Head from 'next/head';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Pillars from '../components/Pillars';
import WhyUs from '../components/WhyUs';
import MarqueeSection from '../components/MarqueeSection';
import Counter from '../components/Counter';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <>
      <Head>
        <title>GlanzFaktor – Reinigung & Entrümpelung in Konstanz am Bodensee</title>
      </Head>

      <Hero />
      <Pillars />
      <HowItWorks />
      <WhyUs />
      <MarqueeSection />
      <Counter />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
