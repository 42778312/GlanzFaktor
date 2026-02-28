import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import MarqueeSection from '../components/MarqueeSection';
import Portfolio from '../components/Portfolio';
import ContactForm from '../components/ContactForm';
import Counter from '../components/Counter';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import EditMode from '../components/EditMode';

export default function Home() {
  return (
    <>
      <Head>
        <title>GlanzFaktor - Professionelle Gebäudereinigung am Bodensee | Konstanz</title>
      </Head>

      <div className="dark-bg">
        <div className="white-bg">
          <Navbar />
          <Hero />
          <HowItWorks />
        </div>
      </div>

      <Services />

      <WhyUs />

      <MarqueeSection />

      <Portfolio />

      <ContactForm />

      <Counter />

      <Testimonials />

      <FAQ />

      <Footer />

      {/* Edit mode overlay – activated via ?edit=true */}
      <EditMode />
    </>
  );
}
