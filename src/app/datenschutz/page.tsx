import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { LegalContent } from "@/components/legal/LegalContent";
import { DraftNotice } from "@/components/ui/DraftNotice";
import { siteConfig } from "@/config/site";
import { pages } from "@/data/pages";

export const metadata: Metadata = {
  title: pages.privacy.title,
  description: pages.privacy.description,
};

/*
 * DRAFT – not legal advice.
 * Describes how THIS website actually works (Vercel hosting, contact form
 * via Resend, rate limiting via Upstash, self-hosted fonts, no cookies,
 * no tracking). Replace everything in [square brackets] and have the text
 * checked before going live. Then delete the <DraftNotice> block.
 */
export default function PrivacyPage() {
  return (
    <>
      <PageHeader label="Rechtliches" title={pages.privacy.title} />

      <Container className="py-16 md:py-20">
        <DraftNotice>
          <strong>Entwurf:</strong> Diese Datenschutzerklärung beschreibt die Technik dieser
          Website, ist aber keine Rechtsberatung. Bitte alle Angaben in [eckigen Klammern] ergänzen
          und den Text vor der Veröffentlichung mit einem Datenschutz-Generator oder anwaltlich
          prüfen lassen.
        </DraftNotice>

        <LegalContent>
          <h2>1. Verantwortlicher</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            {siteConfig.name}, [Straße und Hausnummer], [PLZ] [Ort]
            <br />
            E-Mail: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
          <p>
            Weitere Angaben findest du im <Link href="/impressum">Impressum</Link>.
          </p>

          <h2>2. Hosting</h2>
          <p>
            Diese Website wird bei Vercel gehostet ([Anbieterangaben laut
            Vercel-Datenschutzhinweisen ergänzen]). Beim Aufruf der Website verarbeitet der Hoster
            technisch notwendige Daten, insbesondere IP-Adresse, Datum und Uhrzeit des Abrufs,
            aufgerufene Seite, Browser und Betriebssystem (Server-Logfiles).
          </p>
          <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes Interesse liegt in
            einer sicheren und zuverlässigen Bereitstellung der Website. [Grundlage für die
            Übermittlung in die USA ergänzen, z. B. EU-US Data Privacy Framework oder
            Standardvertragsklauseln.]
          </p>

          <h2>3. Kontaktformular und E-Mail</h2>
          <p>
            Wenn du mir über das Kontaktformular oder per E-Mail schreibst, verarbeite ich deine
            Angaben (Name, E-Mail-Adresse, Betreff und Nachricht), um deine Anfrage zu beantworten.
            Nach dem Absenden erhältst du eine automatische Eingangsbestätigung an die angegebene
            E-Mail-Adresse.
          </p>
          <p>
            Der E-Mail-Versand erfolgt über den Dienst Resend ([Anbieterangaben ergänzen]). Die
            Formulardaten werden nicht in einer Datenbank dieser Website gespeichert, sondern nur
            per E-Mail an mich übermittelt.
          </p>
          <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern deine Anfrage auf einen Vertrag
            abzielt, ansonsten Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
            Beantwortung von Anfragen). Ich lösche deine Anfrage, sobald sie abschließend bearbeitet
            ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            [Übermittlungsgrundlage USA ergänzen.]
          </p>

          <h2>4. Schutz vor Missbrauch</h2>
          <p>
            Um das Kontaktformular vor Spam und automatisierten Angriffen zu schützen, wird die
            Anzahl der Anfragen pro Absender begrenzt. Dazu wird ein nicht umkehrbarer Hashwert
            deiner IP-Adresse für kurze Zeit (ca. eine Stunde) beim Dienst Upstash ([Anbieterangaben
            und Serverstandort ergänzen]) gespeichert und danach automatisch gelöscht.
          </p>
          <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes Interesse liegt im
            Schutz der Website und meines Postfachs vor Missbrauch.
          </p>

          <h2>5. Schriftarten</h2>
          <p>
            Die auf dieser Website verwendeten Schriftarten sind lokal eingebunden. Beim Aufruf der
            Website wird keine Verbindung zu Servern von Google oder anderen Schriftanbietern
            hergestellt.
          </p>

          <h2>6. Cookies und Tracking</h2>
          <p>
            Diese Website setzt keine Cookies und verwendet keine Analyse- oder Tracking-Dienste.
          </p>

          <h2>7. Deine Rechte</h2>
          <p>Du hast im Rahmen der gesetzlichen Bestimmungen das Recht auf:</p>
          <ul>
            <li>Auskunft über deine gespeicherten Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Löschung (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
          </ul>
          <p>
            Außerdem hast du das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren
            (Art. 77 DSGVO), zum Beispiel bei der Behörde deines Bundeslandes.
          </p>

          <h2>8. Stand</h2>
          <p>Diese Datenschutzerklärung hat den Stand [Monat Jahr].</p>
        </LegalContent>
      </Container>
    </>
  );
}
