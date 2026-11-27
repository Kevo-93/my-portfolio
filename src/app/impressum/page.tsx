import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { LegalContent } from "@/components/legal/LegalContent";
import { DraftNotice } from "@/components/ui/DraftNotice";
import { siteConfig } from "@/config/site";
import { pages } from "@/data/pages";

export const metadata: Metadata = {
  title: pages.imprint.title,
  description: pages.imprint.description,
};

/*
 * TEMPLATE – not legal advice.
 * Replace everything in [square brackets] and have the final text checked
 * (legal-text generator such as eRecht24 / Dr. Schwenke, or a lawyer).
 * Then delete the <DraftNotice> block.
 */
export default function ImprintPage() {
  return (
    <>
      <PageHeader label="Rechtliches" title={pages.imprint.title} />

      <Container className="py-16 md:py-20">
        <DraftNotice>
          <strong>Entwurf:</strong> Dieser Text ist eine Vorlage und keine Rechtsberatung. Bitte
          alle Angaben in [eckigen Klammern] ersetzen und den Text vor der Veröffentlichung mit
          einem Rechtstext-Generator oder anwaltlich prüfen lassen.
        </DraftNotice>

        <LegalContent>
          <h2>Angaben gemäß § 5 DDG</h2>
          <p>
            {siteConfig.name}
            <br />
            [Straße und Hausnummer]
            <br />
            [PLZ] [Ort]
            <br />
            Deutschland
          </p>

          <h2>Kontakt</h2>
          <p>
            E-Mail: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <br />
            Telefon: [Telefonnummer]
          </p>

          <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            {siteConfig.name}
            <br />
            [Anschrift wie oben]
          </p>

          <h2>Verbraucherstreitbeilegung</h2>
          <p>
            Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </LegalContent>
      </Container>
    </>
  );
}
