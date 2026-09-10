import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="GlanzFaktor: Reinigung & Entrümpelung aus einer Hand in Konstanz und der Bodenseeregion. Gebäudereinigung, Büroreinigung, Grundreinigung sowie Wohnungsentrümpelung, Haushaltsauflösungen und Kellerentrümpelung – zuverlässig, transparent und mit kostenlosem Angebot."
        />
        <meta property="og:title" content="GlanzFaktor | Reinigung & Entrümpelung Bodensee" />
        <meta
          property="og:description"
          content="Ihr Partner für professionelle Reinigung und Entrümpelung in Konstanz und am Bodensee. Ein Anruf, zwei Leistungen, ein zuverlässiges Team."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Leaflet CSS — still used by the service-area map */}
        <link
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          rel="stylesheet"
          crossOrigin=""
        />

        {/* Google Fonts (Fraunces / Open Sans / Instrument Sans) are
            loaded via next/font/google in lib/fonts.js — self-hosted,
            no render-blocking request needed here. */}

        {/* Favicon — the GlanzFaktor mark itself */}
        <link href="/Assest/log.png" rel="icon" type="image/png" />
        <link href="/Assest/log.png" rel="apple-touch-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
