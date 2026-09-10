import '../styles/tailwind.css';
import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Loader from '../components/Loader';
import Layout from '../components/Layout';
import { fontVariables } from '../lib/fonts';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Navbar glass shrink on scroll
    const onScroll = () =>
      document.documentElement.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [router.asPath]);

  return (
    <div className={`${fontVariables} font-sans`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </Head>
      <Loader />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
