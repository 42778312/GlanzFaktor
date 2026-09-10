import Head from 'next/head';
import LegalPage from '../components/LegalPage';

export default function Datenschutz() {
  return (
    <>
      <Head>
        <title>Datenschutz | GlanzFaktor</title>
        <meta name="robots" content="noindex" />
      </Head>

      <LegalPage
        title="Datenschutzerklärung"
        note="Diese Seite ist ein Platzhalter-Gerüst. Vor Veröffentlichung sollte ein Datenschutztext erstellt werden, der die tatsächlich eingesetzten Dienste (z. B. Kontaktformular per E-Mail über EmailJS, eingebettete Karte) und die verantwortliche Stelle korrekt benennt — idealerweise mit anwaltlicher Prüfung."
      >
        <div>
          <h2>1. Verantwortliche Stelle</h2>
          <p>
            [Firma eintragen]<br />
            [Straße, PLZ Konstanz]<br />
            E-Mail: <a href="mailto:info@glanzfaktor-bodensee.de">info@glanzfaktor-bodensee.de</a>
          </p>
        </div>

        <div>
          <h2>2. Kontaktformular</h2>
          <p>
            Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen,
            werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen
            dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
            den Fall von Anschlussfragen bei uns gespeichert.
          </p>
        </div>

        <div>
          <h2>3. Eingebettete Kartendarstellung</h2>
          <p>
            Diese Website bindet eine interaktive Karte ein. Beim Laden der
            Karte können Verbindungsdaten an den Kartenanbieter übertragen
            werden. [Details zum konkret eingesetzten Kartendienst ergänzen.]
          </p>
        </div>

        <div>
          <h2>4. Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung
            und Einschränkung der Verarbeitung Ihrer bei uns gespeicherten
            personenbezogenen Daten.
          </p>
        </div>
      </LegalPage>
    </>
  );
}
