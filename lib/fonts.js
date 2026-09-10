import { Fraunces, Open_Sans, Instrument_Sans } from 'next/font/google';

/* Editorial serif for headlines — the distinctive, non-generic display face */
export const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

/* Clean, highly-legible body copy */
export const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '600', '700', '800'],
  display: 'swap',
});

/* Nav links, eyebrows, labels — a touch more geometric than the body face */
export const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-label',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const fontVariables = `${fraunces.variable} ${openSans.variable} ${instrumentSans.variable}`;
