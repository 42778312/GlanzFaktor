import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="de" className="w-mod-js">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="GlanzFaktor: Ihr Experte für professionelle Gebäudereinigung in Konstanz und der Bodenseeregion. Nachhaltig, zuverlässig und mit Zufriedenheitsgarantie! ✓ Wohn- & Gewerbereinigung ✓ Ökologische Produkte ✓ Zertifiziertes Team"
        />
        <meta property="og:title" content="GlanzFaktor | Professionelle Gebäudereinigung Bodensee" />
        <meta
          property="og:description"
          content="Ihr Partner für erstklassige Gebäudereinigung in Konstanz und am Bodensee. Nachhaltig, professionell und mit 98% Weiterempfehlungsrate!"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />

        {/* Webflow CSS */}
        <link
          href="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/css/cleanupflow-template.webflow.shared.87b3a847d.css"
          rel="stylesheet"
          type="text/css"
        />

        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Instrument+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link
          href="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68e0a0581d5a9819d9947474_CleanupFlow-Favicon.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link
          href="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68e0a0630b7b84e9f4b24dae_CleanupFlow-Webclip.png"
          rel="apple-touch-icon"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
