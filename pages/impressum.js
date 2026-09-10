import Head from 'next/head';
import LegalPage from '../components/LegalPage';

export default function Impressum() {
  return (
    <>
      <Head>
        <title>Impressum | GlanzFaktor</title>
        <meta name="robots" content="noindex" />
      </Head>

      <LegalPage
        title="Impressum"
        note="Diese Seite enthält Platzhalter, die vor Veröffentlichung durch die tatsächlichen Unternehmensangaben ersetzt werden müssen (§ 5 TMG)."
      >
        <div>
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            [Firma eintragen], vertreten durch [Vertretungsberechtigte Person]<br />
            [Straße und Hausnummer]<br />
            [PLZ Konstanz]
          </p>
        </div>

        <div>
          <h2>Kontakt</h2>
          <p>
            Telefon: <a href="tel:+491766167596">+49 176 616 77596</a><br />
            E-Mail: <a href="mailto:info@glanzfaktor-bodensee.de">info@glanzfaktor-bodensee.de</a>
          </p>
        </div>

        <div>
          <h2>Registereintrag</h2>
          <p>
            [Eintragung im Handelsregister, falls zutreffend]<br />
            Registergericht: [Registergericht]<br />
            Registernummer: [Registernummer]
          </p>
        </div>

        <div>
          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
            [USt-IdNr.]
          </p>
        </div>

        <div>
          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>[Name und Anschrift der verantwortlichen Person]</p>
        </div>
      </LegalPage>
    </>
  );
}
