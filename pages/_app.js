import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';

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
    <>
      <Loader />
      <Component {...pageProps} />
    </>
  );
}
